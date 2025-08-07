"use client"

import React from 'react'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { useAuthGuard } from '@/hooks/use-auth-guard'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Building2, Users, FileText } from 'lucide-react'
import Link from 'next/link'

// Mock data for demonstration
const mockSites = [
  {
    id: '1',
    name: 'Human Resources',
    slug: 'hr',
    description: 'HR policies, employee handbook, and benefits information',
    pageCount: 12,
    userCount: 8,
    status: 'active'
  },
  {
    id: '2',
    name: 'Finance',
    slug: 'finance',
    description: 'Financial reports, budgets, and expense policies',
    pageCount: 8,
    userCount: 5,
    status: 'active'
  },
  {
    id: '3',
    name: 'Information Technology',
    slug: 'it',
    description: 'IT policies, support documentation, and system access',
    pageCount: 15,
    userCount: 12,
    status: 'active'
  },
  {
    id: '4',
    name: 'Development',
    slug: 'development',
    description: 'Development guidelines, code standards, and project documentation',
    pageCount: 20,
    userCount: 15,
    status: 'active'
  },
  {
    id: '5',
    name: 'Sales',
    slug: 'sales',
    description: 'Sales processes, customer information, and performance metrics',
    pageCount: 10,
    userCount: 6,
    status: 'active'
  }
]

export default function DashboardPage() {
  const { isLoading } = useAuthGuard({ redirectTo: '/sign-in' })

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary-blue border-t-transparent" />
          <span>Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary-text">Site Collections</h1>
              <p className="text-subtle-text mt-2">
                Manage your departmental sites and organize company information
              </p>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create New Site
            </Button>
          </div>

          {/* Sites Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockSites.map((site) => (
              <Card key={site.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Building2 className="h-8 w-8 text-primary-blue" />
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                      {site.status}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{site.name}</CardTitle>
                  <CardDescription>{site.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-subtle-text mb-4">
                    <div className="flex items-center space-x-1">
                      <FileText className="h-4 w-4" />
                      <span>{site.pageCount} pages</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{site.userCount} users</span>
                    </div>
                  </div>
                  <Link href={`/sites/${site.id}`}>
                    <Button variant="outline" className="w-full">
                      Manage Site
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Building2 className="h-5 w-5 text-primary-blue" />
                  <span className="text-sm text-subtle-text">Total Sites</span>
                </div>
                <p className="text-2xl font-bold text-primary-text mt-2">{mockSites.length}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary-blue" />
                  <span className="text-sm text-subtle-text">Total Pages</span>
                </div>
                <p className="text-2xl font-bold text-primary-text mt-2">
                  {mockSites.reduce((sum, site) => sum + site.pageCount, 0)}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary-blue" />
                  <span className="text-sm text-subtle-text">Total Users</span>
                </div>
                <p className="text-2xl font-bold text-primary-text mt-2">
                  {mockSites.reduce((sum, site) => sum + site.userCount, 0)}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <div className="h-5 w-5 rounded-full bg-green-500" />
                  <span className="text-sm text-subtle-text">Active Sites</span>
                </div>
                <p className="text-2xl font-bold text-primary-text mt-2">
                  {mockSites.filter(site => site.status === 'active').length}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
    </DashboardLayout>
  )
} 