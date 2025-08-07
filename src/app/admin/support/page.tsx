import React from 'react'
import { AdminLayout } from '@/components/layout/admin-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  HelpCircle, 
  Plus, 
  Search, 
  Filter,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  User,
  Calendar
} from 'lucide-react'

// Mock support ticket data
const mockTickets = [
  {
    id: 'TICKET-001',
    title: 'Cannot access HR site',
    description: 'I\'m getting a 404 error when trying to access the HR site',
    status: 'open',
    priority: 'high',
    category: 'access',
    user: 'sarah.johnson@company.com',
    assignedTo: 'admin@company.com',
    createdAt: '2024-01-20T10:30:00Z',
    updatedAt: '2024-01-20T14:15:00Z',
    messages: 3
  },
  {
    id: 'TICKET-002',
    title: 'Page editor not working',
    description: 'The rich text editor is not loading properly in Chrome',
    status: 'in_progress',
    priority: 'medium',
    category: 'technical',
    user: 'mike.davis@company.com',
    assignedTo: 'admin@company.com',
    createdAt: '2024-01-19T15:45:00Z',
    updatedAt: '2024-01-20T09:20:00Z',
    messages: 5
  },
  {
    id: 'TICKET-003',
    title: 'Need help with user permissions',
    description: 'I need to set up different permission levels for my team',
    status: 'resolved',
    priority: 'low',
    category: 'permissions',
    user: 'emily.wilson@company.com',
    assignedTo: 'admin@company.com',
    createdAt: '2024-01-18T11:20:00Z',
    updatedAt: '2024-01-19T16:30:00Z',
    messages: 8
  },
  {
    id: 'TICKET-004',
    title: 'Upload feature broken',
    description: 'File upload is failing with large PDF files',
    status: 'open',
    priority: 'high',
    category: 'technical',
    user: 'david.brown@company.com',
    assignedTo: null,
    createdAt: '2024-01-20T08:15:00Z',
    updatedAt: '2024-01-20T08:15:00Z',
    messages: 1
  },
  {
    id: 'TICKET-005',
    title: 'Request for new site',
    description: 'We need a new site for the Legal department',
    status: 'pending',
    priority: 'medium',
    category: 'request',
    user: 'john.smith@company.com',
    assignedTo: 'admin@company.com',
    createdAt: '2024-01-17T14:30:00Z',
    updatedAt: '2024-01-18T10:45:00Z',
    messages: 4
  }
]

const statusColors = {
  open: 'bg-red-100 text-red-800',
  in_progress: 'bg-yellow-100 text-yellow-800',
  resolved: 'bg-green-100 text-green-800',
  pending: 'bg-gray-100 text-gray-800'
}

const priorityColors = {
  high: 'bg-red-100 text-red-800',
  medium: 'bg-yellow-100 text-yellow-800',
  low: 'bg-green-100 text-green-800'
}

const categoryColors = {
  access: 'bg-blue-100 text-blue-800',
  technical: 'bg-purple-100 text-purple-800',
  permissions: 'bg-orange-100 text-orange-800',
  request: 'bg-indigo-100 text-indigo-800'
}

export default function AdminSupportPage() {
  const openTickets = mockTickets.filter(ticket => ticket.status === 'open').length
  const inProgressTickets = mockTickets.filter(ticket => ticket.status === 'in_progress').length
  const resolvedTickets = mockTickets.filter(ticket => ticket.status === 'resolved').length

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Support Center</h1>
            <p className="text-gray-600 mt-2">
              Manage support tickets and help requests
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Ticket
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <HelpCircle className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-gray-600">Total Tickets</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 mt-2">{mockTickets.length}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <span className="text-sm text-gray-600">Open</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 mt-2">{openTickets}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-yellow-600" />
                <span className="text-sm text-gray-600">In Progress</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 mt-2">{inProgressTickets}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-600">Resolved</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 mt-2">{resolvedTickets}</p>
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
                  placeholder="Search tickets..."
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

        {/* Tickets Table */}
        <Card>
          <CardHeader>
            <CardTitle>Support Tickets</CardTitle>
            <CardDescription>
              All support tickets and help requests
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Ticket</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Priority</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Category</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">User</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Created</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Messages</th>
                    <th className="text-right py-3 px-4 font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockTickets.map((ticket) => (
                    <tr key={ticket.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div>
                          <div className="font-medium text-gray-900">{ticket.title}</div>
                          <div className="text-sm text-gray-500 max-w-xs truncate">
                            {ticket.description}
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[ticket.status as keyof typeof statusColors]}`}>
                          {ticket.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${priorityColors[ticket.priority as keyof typeof priorityColors]}`}>
                          {ticket.priority}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[ticket.category as keyof typeof categoryColors]}`}>
                          {ticket.category}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="text-sm text-gray-900">{ticket.user}</div>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">
                        {new Date(ticket.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-1">
                          <MessageSquare className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-900">{ticket.messages}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-end space-x-2">
                          <Button variant="ghost" size="sm">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <User className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <CheckCircle className="h-4 w-4" />
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

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common support tasks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-20 flex-col">
                <HelpCircle className="h-5 w-5 mb-2" />
                <span>View Knowledge Base</span>
              </Button>
              
              <Button variant="outline" className="h-20 flex-col">
                <MessageSquare className="h-5 w-5 mb-2" />
                <span>Contact Support</span>
              </Button>
              
              <Button variant="outline" className="h-20 flex-col">
                <Calendar className="h-5 w-5 mb-2" />
                <span>Schedule Call</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
} 