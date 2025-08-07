import React from 'react'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { SiteNavigation } from '@/components/site/site-navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Edit, Eye, Plus } from 'lucide-react'

// Mock data for demonstration
const mockSite = {
  id: '1',
  name: 'Human Resources',
  slug: 'hr',
  description: 'HR policies, employee handbook, and benefits information',
  navigation: [
    { id: '1', label: 'Home', href: '/sites/1', isActive: true },
    { id: '2', label: 'Policies', href: '/sites/1/policies', isActive: false },
    { id: '3', label: 'Benefits', href: '/sites/1/benefits', isActive: false },
    { id: '4', label: 'Forms', href: '/sites/1/forms', isActive: false },
  ]
}

const mockPages = [
  {
    id: '1',
    title: 'Welcome to HR',
    slug: 'welcome',
    status: 'published',
    lastModified: '2024-01-15T10:30:00Z',
    createdBy: 'John Doe'
  },
  {
    id: '2',
    title: 'Employee Handbook',
    slug: 'handbook',
    status: 'published',
    lastModified: '2024-01-10T14:20:00Z',
    createdBy: 'Jane Smith'
  },
  {
    id: '3',
    title: 'Benefits Overview',
    slug: 'benefits',
    status: 'draft',
    lastModified: '2024-01-12T09:15:00Z',
    createdBy: 'Mike Johnson'
  }
]

export default function SitePage({ params }: { params: { siteId: string } }) {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Site Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary-text">{mockSite.name}</h1>
            <p className="text-subtle-text mt-2">{mockSite.description}</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Eye className="mr-2 h-4 w-4" />
              Preview
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Page
            </Button>
          </div>
        </div>

        {/* Site Navigation Bar */}
        <SiteNavigation navigation={mockSite.navigation} />

        {/* Main Content Area */}
        <div className="space-y-6">
          {/* Welcome Section */}
          <Card>
            <CardHeader>
              <CardTitle>Welcome to {mockSite.name}</CardTitle>
              <CardDescription>
                This is your site's main content area. Pages you create will be displayed here.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <p>
                  Welcome to the Human Resources site. Here you'll find all the information you need 
                  about company policies, benefits, and procedures.
                </p>
                <p>
                  Use the navigation above to explore different sections, or use the sidebar to manage 
                  your site's content, navigation, and settings.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Recent Pages */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Pages</CardTitle>
              <CardDescription>
                Recently created or modified pages in this site
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockPages.map((page) => (
                  <div key={page.id} className="flex items-center justify-between p-4 border border-light-border rounded-lg">
                    <div>
                      <h3 className="font-medium text-primary-text">{page.title}</h3>
                      <p className="text-sm text-subtle-text">
                        Last modified by {page.createdBy} on {new Date(page.lastModified).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        page.status === 'published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {page.status}
                      </span>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
} 