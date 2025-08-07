import React from 'react'
import { AdminLayout } from '@/components/layout/admin-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Building2, 
  Users, 
  FileText, 
  HardDrive,
  TrendingUp,
  AlertTriangle,
  Plus,
  Settings,
  BarChart3,
  Activity
} from 'lucide-react'

// Mock data for dashboard
const dashboardStats = {
  totalSites: 4,
  activeUsers: 262,
  totalPages: 88,
  storageUsed: '5.6 GB',
  storageLimit: '10 GB',
  recentActivity: [
    { id: 1, action: 'New site created', site: 'Marketing Portal', time: '2 hours ago' },
    { id: 2, action: 'User registered', user: 'john.doe@company.com', time: '4 hours ago' },
    { id: 3, action: 'Page updated', page: 'Company Policies', time: '1 day ago' },
    { id: 4, action: 'Storage limit warning', message: '80% of storage used', time: '2 days ago' }
  ],
  alerts: [
    { id: 1, type: 'warning', message: 'Storage usage is at 80%', action: 'Upgrade plan' },
    { id: 2, type: 'info', message: 'New feature available', action: 'Learn more' }
  ]
}

export default function AdminDashboardPage() {
  const storagePercentage = (parseFloat(dashboardStats.storageUsed) / parseFloat(dashboardStats.storageLimit.replace(' GB', ''))) * 100

  return (
    <AdminLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
            <p className="text-lg text-gray-600">
              Welcome back! Here's an overview of your ShortPoint organization.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="lg" className="px-6 py-3 text-sm">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button size="lg" className="px-6 py-3 text-sm">
              <Plus className="mr-2 h-4 w-4" />
              Create Site
            </Button>
          </div>
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
                  <p className="text-3xl font-bold text-gray-900">{dashboardStats.totalSites}</p>
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
                  <p className="text-3xl font-bold text-gray-900">{dashboardStats.activeUsers}</p>
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
                  <p className="text-3xl font-bold text-gray-900">{dashboardStats.totalPages}</p>
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
                  <p className="text-3xl font-bold text-gray-900">{dashboardStats.storageUsed}</p>
                  <p className="text-xs text-gray-500">{storagePercentage.toFixed(0)}% of limit</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Alerts */}
        {dashboardStats.alerts.length > 0 && (
          <Card className="shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
                <span>Alerts</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {dashboardStats.alerts.map((alert) => (
                  <div key={alert.id} className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="h-4 w-4 text-orange-500" />
                      <span className="text-sm text-orange-800">{alert.message}</span>
                    </div>
                    <Button variant="outline" size="sm" className="text-xs">
                      {alert.action}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Recent Activity and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <Card className="shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold flex items-center space-x-2">
                <Activity className="h-5 w-5 text-blue-500" />
                <span>Recent Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dashboardStats.recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-150">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.site || activity.user || activity.page || activity.message}</p>
                    </div>
                    <span className="text-xs text-gray-400">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-green-500" />
                <span>Quick Actions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3">
                <Button variant="outline" className="justify-start h-12 text-sm">
                  <Building2 className="mr-3 h-4 w-4" />
                  Manage Sites
                </Button>
                <Button variant="outline" className="justify-start h-12 text-sm">
                  <Users className="mr-3 h-4 w-4" />
                  User Management
                </Button>
                <Button variant="outline" className="justify-start h-12 text-sm">
                  <FileText className="mr-3 h-4 w-4" />
                  View Analytics
                </Button>
                <Button variant="outline" className="justify-start h-12 text-sm">
                  <Settings className="mr-3 h-4 w-4" />
                  System Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Storage Usage */}
        <Card className="shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold">Storage Usage</CardTitle>
            <CardDescription className="text-sm">
              Current storage usage across all sites
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Used: {dashboardStats.storageUsed}</span>
                <span className="text-sm text-gray-500">Limit: {dashboardStats.storageLimit}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full transition-all duration-300 ${
                    storagePercentage > 80 ? 'bg-red-500' : storagePercentage > 60 ? 'bg-orange-500' : 'bg-blue-500'
                  }`}
                  style={{ width: `${Math.min(storagePercentage, 100)}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500">
                {storagePercentage > 80 
                  ? 'Storage usage is high. Consider upgrading your plan.' 
                  : storagePercentage > 60 
                    ? 'Storage usage is moderate.' 
                    : 'Storage usage is healthy.'
                }
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
} 