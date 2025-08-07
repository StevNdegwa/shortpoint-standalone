import React from 'react'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Edit, Trash2, Copy, Eye } from 'lucide-react'
import { formatDate } from '@/lib/utils'

// Mock data for demonstration
const mockPages = [
  {
    id: '1',
    title: 'Welcome to HR',
    slug: 'welcome',
    status: 'published',
    createdAt: '2024-01-10T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z',
    createdBy: 'John Doe'
  },
  {
    id: '2',
    title: 'Employee Handbook',
    slug: 'handbook',
    status: 'published',
    createdAt: '2024-01-08T14:20:00Z',
    updatedAt: '2024-01-10T14:20:00Z',
    createdBy: 'Jane Smith'
  },
  {
    id: '3',
    title: 'Benefits Overview',
    slug: 'benefits',
    status: 'draft',
    createdAt: '2024-01-12T09:15:00Z',
    updatedAt: '2024-01-12T09:15:00Z',
    createdBy: 'Mike Johnson'
  },
  {
    id: '4',
    title: 'Company Policies',
    slug: 'policies',
    status: 'published',
    createdAt: '2024-01-05T11:45:00Z',
    updatedAt: '2024-01-08T16:30:00Z',
    createdBy: 'Sarah Wilson'
  },
  {
    id: '5',
    title: 'Training Resources',
    slug: 'training',
    status: 'archived',
    createdAt: '2023-12-20T13:00:00Z',
    updatedAt: '2024-01-02T10:15:00Z',
    createdBy: 'David Brown'
  }
]

export default function PagesPage({ params }: { params: { siteId: string } }) {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary-text">Pages</h1>
            <p className="text-subtle-text mt-2">
              Manage all pages in this site
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create New Page
          </Button>
        </div>

        {/* Pages Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Pages</CardTitle>
            <CardDescription>
              A comprehensive list of all pages in this site with their current status and metadata
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-light-border">
                    <th className="text-left py-3 px-4 font-medium text-primary-text">Page Name</th>
                    <th className="text-left py-3 px-4 font-medium text-primary-text">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-primary-text">Created Date</th>
                    <th className="text-left py-3 px-4 font-medium text-primary-text">Modified Date</th>
                    <th className="text-left py-3 px-4 font-medium text-primary-text">Created By</th>
                    <th className="text-right py-3 px-4 font-medium text-primary-text">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockPages.map((page) => (
                    <tr key={page.id} className="border-b border-light-border hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div>
                          <div className="font-medium text-primary-text">{page.title}</div>
                          <div className="text-sm text-subtle-text">/{page.slug}</div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          page.status === 'published' 
                            ? 'bg-green-100 text-green-800'
                            : page.status === 'draft'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {page.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-subtle-text">
                        {formatDate(page.createdAt)}
                      </td>
                      <td className="py-3 px-4 text-sm text-subtle-text">
                        {formatDate(page.updatedAt)}
                      </td>
                      <td className="py-3 px-4 text-sm text-subtle-text">
                        {page.createdBy}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-end space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Copy className="h-4 w-4" />
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

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary-text">{mockPages.length}</div>
              <div className="text-sm text-subtle-text">Total Pages</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-green-600">
                {mockPages.filter(p => p.status === 'published').length}
              </div>
              <div className="text-sm text-subtle-text">Published</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-yellow-600">
                {mockPages.filter(p => p.status === 'draft').length}
              </div>
              <div className="text-sm text-subtle-text">Drafts</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-gray-600">
                {mockPages.filter(p => p.status === 'archived').length}
              </div>
              <div className="text-sm text-subtle-text">Archived</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
} 