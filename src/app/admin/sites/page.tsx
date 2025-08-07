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
    id: 1,
    name: 'Corporate Intranet',
    description: 'Main company intranet portal',
    status: 'active',
    userCount: 150,
    pageCount: 45,
    storageUsed: '2.4 GB',
    lastActivity: '2 hours ago'
  },
  {
    id: 2,
    name: 'HR Portal',
    description: 'Human resources and employee portal',
    status: 'active',
    userCount: 75,
    pageCount: 23,
    storageUsed: '1.8 GB',
    lastActivity: '1 day ago'
  },
  {
    id: 3,
    name: 'Marketing Site',
    description: 'Marketing team collaboration site',
    status: 'active',
    userCount: 25,
    pageCount: 12,
    storageUsed: '0.9 GB',
    lastActivity: '3 days ago'
  },
  {
    id: 4,
    name: 'Development Hub',
    description: 'Software development team workspace',
    status: 'inactive',
    userCount: 12,
    pageCount: 8,
    storageUsed: '0.5 GB',
    lastActivity: '1 week ago'
  }
]

export default function AdminSitesPage() {
  return (
    <AdminLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Site Management</h1>
            <p className="text-lg text-gray-600">
              Manage all sites across your organization
            </p>
          </div>
          <Button size="lg" className="px-8 py-4 text-base">
            <Plus className="mr-4 h-5 w-5" />
            Create New Site
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Total Sites</p>
                  <p className="text-3xl font-bold text-gray-900">{mockSites.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-100 rounded-xl">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Active Users</p>
                  <p className="text-3xl font-bold text-gray-900">262</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Total Pages</p>
                  <p className="text-3xl font-bold text-gray-900">88</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-orange-100 rounded-xl">
                  <HardDrive className="h-8 w-8 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Storage Used</p>
                  <p className="text-3xl font-bold text-gray-900">5.6 GB</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search sites..."
                  className="pl-12 pr-4 py-3 border border-gray-200 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full transition-all duration-200"
                />
              </div>
              <Button variant="outline" size="lg" className="px-6 py-3 text-sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Sites Table */}
        <Card className="shadow-sm">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl font-bold">All Sites</CardTitle>
            <CardDescription className="text-base">
              A comprehensive list of all sites in your organization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm">Site Name</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm">Status</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm">Users</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm">Pages</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm">Storage</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm">Last Activity</th>
                    <th className="text-right py-4 px-6 font-semibold text-gray-900 text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockSites.map((site) => (
                    <tr key={site.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150">
                      <td className="py-5 px-6">
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{site.name}</div>
                          <div className="text-xs text-gray-500 mt-1">{site.description}</div>
                        </div>
                      </td>
                      <td className="py-5 px-6">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          site.status === 'active' 
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {site.status}
                        </span>
                      </td>
                      <td className="py-5 px-6 text-sm text-gray-900">{site.userCount}</td>
                      <td className="py-5 px-6 text-sm text-gray-900">{site.pageCount}</td>
                      <td className="py-5 px-6 text-sm text-gray-900">{site.storageUsed}</td>
                      <td className="py-5 px-6 text-xs text-gray-500">{site.lastActivity}</td>
                      <td className="py-5 px-6">
                        <div className="flex items-center justify-end space-x-2">
                          <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-10 w-10 p-0 text-red-600 hover:text-red-700 hover:bg-red-50">
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