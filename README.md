# ShortPoint Standalone

A modern SaaS intranet solution designed for small to medium businesses to organize departmental information and create custom sites for different teams.

## 🚀 Features

- **Multi-tenant SaaS architecture** with isolated data per organization
- **Departmental site management** (HR, Finance, IT, Development, Sales)
- **Role-based access control** (Admin and Normal users)
- **Rich content editor** with version history
- **Custom navigation builder** with drag-and-drop functionality
- **Theme customization** with live preview
- **Asset management** with file upload and organization
- **Real-time collaboration** features
- **Responsive design** for all devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Custom Design System
- **Authentication**: Clerk
- **Database**: PostgreSQL with Prisma ORM
- **File Storage**: Supabase Storage
- **State Management**: Zustand
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database
- Clerk account for authentication
- Supabase account (optional, for file storage)

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone <repository-url>
cd shortpoint-standalone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/shortpoint_standalone"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Supabase (optional)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### 4. Set up the database

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Seed the database with sample data
npx prisma db seed
```

### 5. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Dashboard pages
│   ├── sites/            # Site management pages
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   ├── layout/          # Layout components
│   └── site/            # Site-specific components
├── lib/                 # Utility functions and configurations
│   ├── db.ts           # Database client
│   ├── store.ts        # Zustand store
│   └── utils.ts        # Utility functions
└── middleware.ts        # Authentication middleware
```

## 🎨 Design System

The application uses a custom design system with the following color palette:

- **Primary Blue**: `#3161D1` - Main brand color
- **Secondary Blue**: `#5774A8` - Secondary elements
- **Light Blue**: `#E7F5FF` - Active states and highlights
- **Main Background**: `#f5f6fa` - Dashboard background
- **Card Background**: `#ffffff` - White for cards and panels

## 🔐 Authentication

The application uses Clerk for authentication with the following features:

- Email/password authentication
- Google and Facebook SSO
- Role-based access control
- Multi-tenant user isolation
- Automatic tenant assignment based on email domain

## 🗄️ Database Schema

The application uses a multi-tenant database schema with the following key tables:

- **companies** - Organization information
- **tenants** - Multi-tenant isolation
- **users** - User accounts and roles
- **sites** - Departmental sites
- **pages** - Site content with version history
- **navigation** - Custom navigation structures
- **assets** - File and media management
- **themes** - Site customization settings

## 🚀 Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set up environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production

Make sure to set up the following environment variables in your production environment:

- `DATABASE_URL` - Production PostgreSQL connection string
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk publishable key
- `CLERK_SECRET_KEY` - Clerk secret key
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- Create an issue in the GitHub repository
- Check the documentation in the `.documentation` folder
- Review the design specifications and requirements

## 🎯 Roadmap

- [ ] Rich text editor with advanced formatting
- [ ] Real-time collaboration features
- [ ] Advanced analytics and reporting
- [ ] Mobile app development
- [ ] Third-party integrations (Google Drive, Dropbox)
- [ ] Advanced user management and permissions
- [ ] API for external integrations 