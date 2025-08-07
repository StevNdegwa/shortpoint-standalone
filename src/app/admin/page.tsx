import React from 'react'
import { AdminLayout } from '@/components/layout/admin-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Building2, 
  Plus, 
  Search, 
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Users,
  FileText,
  HardDrive
} from 'lucide-react'

// Mock data for demonstration
const mockSites = [
  {
    id: '1',
    name: 'Human Resources',
    slug: 'hr',
    description: 'HR policies, employee handbook, and benefits information',
    status: 'active',
    userCount: 8,
    pageCount: 12,
    storageUsed: '1.2 GB',
    lastActivity: '2 hours ago',
    createdBy: 'admin@company.com',
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    name: 'Finance',
    slug: 'finance',
    description: 'Financial reports, budgets, and expense policies',
    status: 'active',
    userCount: 5,
    pageCount: 8,
    storageUsed: '856 MB',
    lastActivity: '1 day ago',
    createdBy: 'admin@company.com',
    createdAt: '2024-01-10'
  },
  {
    id: '3',
    name: 'Information Technology',
    slug: 'it',
    description: 'IT policies, support documentation, and system access',
    status: 'active',
    userCount: 12,
    pageCount: 15,
    storageUsed: '2.1 GB',
    lastActivity: '30 minutes ago',
    createdBy: 'admin@company.com',
    createdAt: '2024-01-08'
  },
  {
    id: '4',
    name: 'Marketing',
    slug: 'marketing',
    description: 'Marketing campaigns, brand guidelines, and creative assets',
    status: 'active',
    userCount: 6,
    pageCount: 10,
    storageUsed: '1.8 GB',
    lastActivity: '3 hours ago',
    createdBy: 'admin@company.com',
    createdAt: '2024-01-20'
  },
  {
    id: '5',
    name: 'Sales',
    slug: 'sales',
    description: 'Sales processes, customer information, and performance metrics',
    status: 'inactive',
    userCount: 4,
    pageCount: 6,
    storageUsed: '450 MB',
    lastActivity: '1 week ago',
    createdBy: 'admin@company.com',
    createdAt: '2024-01-05'
  }
]

export default function AdminSitesPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Site Management</h1>
            <p className="text-gray-600 mt-2">
              Manage all sites across your organization
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create New Site
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Building2 className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-gray-600">Total Sites</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 mt-2">{mockSites.length}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-600">Total Users</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                {mockSites.reduce((sum, site) => sum + site.userCount, 0)}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-purple-600" />
                <span className="text-sm text-gray-600">Total Pages</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                {mockSites.reduce((sum, site) => sum + site.pageCount, 0)}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <HardDrive className="h-5 w-5 text-orange-600" />
                <span className="text-sm text-gray-600">Storage Used</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 mt-2">6.4 GB</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search sites..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                />
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Sites Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Sites</CardTitle>
            <CardDescription>
              A comprehensive list of all sites in your organization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Site Name</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Users</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Pages</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Storage</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Last Activity</th>
                    <th className="text-right py-3 px-4 font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockSites.map((site) => (
                    <tr key={site.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div>
                          <div className="font-medium text-gray-900">{site.name}</div>
                          <div className="text-sm text-gray-500">{site.description}</div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          site.status === 'active' 
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {site.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-900">{site.userCount}</td>
                      <td className="py-3 px-4 text-sm text-gray-900">{site.pageCount}</td>
                      <td className="py-3 px-4 text-sm text-gray-900">{site.storageUsed}</td>
                      <td className="py-3 px-4 text-sm text-gray-500">{site.lastActivity}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-end space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
} 