'use client'

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
  HardDrive,
  ExternalLink
} from 'lucide-react'

// Mock data for demonstration
const mockSites = [
  {
    id: 1,
    name: 'Corporate Intranet',
    url: 'corporate.company.com',
    status: 'active',
    thumbnail: '/api/placeholder/300/200/3161D1/FFFFFF?text=Corporate'
  },
  {
    id: 2,
    name: 'HR Portal',
    url: 'hr.company.com',
    status: 'active',
    thumbnail: '/api/placeholder/300/200/5774A8/FFFFFF?text=HR+Portal'
  },
  {
    id: 3,
    name: 'Marketing Site',
    url: 'marketing.company.com',
    status: 'active',
    thumbnail: '/api/placeholder/300/200/E7F5FF/3161D1?text=Marketing'
  },
  {
    id: 4,
    name: 'Development Hub',
    url: 'dev.company.com',
    status: 'inactive',
    thumbnail: '/api/placeholder/300/200/607CAD/FFFFFF?text=Dev+Hub'
  }
]

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">My Sites</h1>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search sites..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64 transition-all duration-200"
            />
          </div>
        </div>

        {/* Sites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Create New Site Card - First Item */}
          <Card className="hover:shadow-lg transition-all duration-200 cursor-pointer border-2 border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50">
            <CardContent className="p-6 h-64 flex flex-col items-center justify-center text-center">
              <div className="p-3 bg-blue-100 rounded-full mb-3">
                <Plus className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Create New Site</h3>
              <p className="text-xs text-gray-600">
                Start building a new site for your organization
              </p>
            </CardContent>
          </Card>

          {/* Site Cards */}
          {mockSites.map((site) => (
            <Card key={site.id} className="hover:shadow-lg transition-all duration-200 cursor-pointer overflow-hidden">
              {/* Thumbnail Image */}
              <div className="relative h-32 bg-gray-100">
                <img 
                  src={site.thumbnail} 
                  alt={`${site.name} thumbnail`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a colored background if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.style.backgroundColor = '#3161D1';
                  }}
                />
                {/* Status Badge Overlay */}
                <div className="absolute top-2 right-2">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                    site.status === 'active' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {site.status}
                  </span>
                </div>
              </div>

              <CardContent className="p-4 h-32 flex flex-col">
                {/* Header with Menu */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 min-w-0 pr-2">
                    <h3 className="text-sm font-semibold text-gray-900 mb-1 truncate">{site.name}</h3>
                  </div>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0 flex-shrink-0">
                    <MoreHorizontal className="h-3 w-3" />
                  </Button>
                </div>

                {/* Site URL */}
                <div className="flex-1 flex items-center mb-3">
                  <div className="flex items-center space-x-2 text-xs text-gray-600 w-full">
                    <ExternalLink className="h-3 w-3 text-gray-400 flex-shrink-0" />
                    <span className="truncate">{site.url}</span>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-2 border-t border-gray-100">
                  <div className="flex items-center justify-end space-x-1">
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Eye className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-red-600 hover:text-red-700 hover:bg-red-50">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  )
} 