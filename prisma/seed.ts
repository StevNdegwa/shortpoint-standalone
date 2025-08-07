import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create sample company
  const company = await prisma.company.upsert({
    where: { slug: 'acme-corp' },
    update: {},
    create: {
      name: 'Acme Corporation',
      slug: 'acme-corp',
      industry: 'Technology',
      website: 'https://acme.com',
    },
  })

  // Create sample tenant
  const tenant = await prisma.tenant.upsert({
    where: { slug: 'acme-main' },
    update: {},
    create: {
      name: 'Acme Main',
      slug: 'acme-main',
      companyId: company.id,
    },
  })

  // Create sample users
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@acme.com' },
    update: {},
    create: {
      clerkId: 'clerk_admin_123',
      email: 'admin@acme.com',
      role: 'ADMIN',
      tenantId: tenant.id,
    },
  })

  const normalUser = await prisma.user.upsert({
    where: { email: 'user@acme.com' },
    update: {},
    create: {
      clerkId: 'clerk_user_123',
      email: 'user@acme.com',
      role: 'NORMAL',
      tenantId: tenant.id,
    },
  })

  // Create sample sites
  const sites = await Promise.all([
    prisma.site.upsert({
      where: { slug: 'hr' },
      update: {},
      create: {
        name: 'Human Resources',
        slug: 'hr',
        description: 'HR policies, employee handbook, and benefits information',
        tenantId: tenant.id,
        createdBy: adminUser.id,
      },
    }),
    prisma.site.upsert({
      where: { slug: 'finance' },
      update: {},
      create: {
        name: 'Finance',
        slug: 'finance',
        description: 'Financial reports, budgets, and expense policies',
        tenantId: tenant.id,
        createdBy: adminUser.id,
      },
    }),
    prisma.site.upsert({
      where: { slug: 'it' },
      update: {},
      create: {
        name: 'Information Technology',
        slug: 'it',
        description: 'IT policies, support documentation, and system access',
        tenantId: tenant.id,
        createdBy: adminUser.id,
      },
    }),
  ])

  // Create sample pages for HR site
  const hrSite = sites[0]
  const pages = await Promise.all([
    prisma.page.upsert({
      where: { slug: 'welcome' },
      update: {},
      create: {
        title: 'Welcome to HR',
        slug: 'welcome',
        content: {
          type: 'doc',
          content: [
            {
              type: 'heading',
              attrs: { level: 1 },
              content: [{ type: 'text', text: 'Welcome to Human Resources' }],
            },
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Welcome to the Human Resources site. Here you\'ll find all the information you need about company policies, benefits, and procedures.',
                },
              ],
            },
          ],
        },
        status: 'PUBLISHED',
        siteId: hrSite.id,
        tenantId: tenant.id,
        createdBy: adminUser.id,
      },
    }),
    prisma.page.upsert({
      where: { slug: 'handbook' },
      update: {},
      create: {
        title: 'Employee Handbook',
        slug: 'handbook',
        content: {
          type: 'doc',
          content: [
            {
              type: 'heading',
              attrs: { level: 1 },
              content: [{ type: 'text', text: 'Employee Handbook' }],
            },
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'This handbook contains all the policies and procedures that govern our workplace.',
                },
              ],
            },
          ],
        },
        status: 'PUBLISHED',
        siteId: hrSite.id,
        tenantId: tenant.id,
        createdBy: adminUser.id,
      },
    }),
  ])

  // Create sample navigation for HR site
  await prisma.navigation.upsert({
    where: { siteId: hrSite.id },
    update: {},
    create: {
      siteId: hrSite.id,
      tenantId: tenant.id,
      structure: [
        { id: '1', label: 'Home', href: '/sites/hr', isActive: true },
        { id: '2', label: 'Policies', href: '/sites/hr/policies', isActive: false },
        { id: '3', label: 'Benefits', href: '/sites/hr/benefits', isActive: false },
        { id: '4', label: 'Forms', href: '/sites/hr/forms', isActive: false },
      ],
    },
  })

  // Create sample theme for HR site
  await prisma.theme.upsert({
    where: { siteId: hrSite.id },
    update: {},
    create: {
      siteId: hrSite.id,
      tenantId: tenant.id,
      primaryColor: '#3161D1',
      secondaryColor: '#5774A8',
      customCss: '',
    },
  })

  // Create sample license
  await prisma.tenantLicense.upsert({
    where: { tenantId: tenant.id },
    update: {},
    create: {
      tenantId: tenant.id,
      licenseType: 'PREMIUM',
      maxSites: 10,
      maxUsers: 50,
      maxStorageGb: 10,
      startDate: new Date(),
      endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year from now
      isActive: true,
    },
  })

  console.log('✅ Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 