import React from 'react'
import { AdminLayout } from '@/components/layout/admin-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  CreditCard, 
  Calendar,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Download,
  RefreshCw,
  Settings
} from 'lucide-react'

// Mock license data
const mockLicense = {
  type: 'Premium',
  status: 'active',
  startDate: '2024-01-01',
  endDate: '2024-12-31',
  daysRemaining: 45,
  maxSites: 20,
  maxUsers: 100,
  maxStorage: '10 GB',
  currentSites: 12,
  currentUsers: 56,
  currentStorage: '6.4 GB',
  autoRenew: true,
  price: '$99/month'
}

export default function AdminLicensingPage() {
  const isExpiringSoon = mockLicense.daysRemaining <= 30
  const isOverLimit = mockLicense.currentSites > mockLicense.maxSites || 
                     mockLicense.currentUsers > mockLicense.maxUsers

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">License Management</h1>
            <p className="text-gray-600 mt-2">
              Manage your ShortPoint license and subscription
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
            <Button>
              <Settings className="mr-2 h-4 w-4" />
              Manage Subscription
            </Button>
          </div>
        </div>

        {/* License Status Alert */}
        {(isExpiringSoon || isOverLimit) && (
          <Card className="border-orange-200 bg-orange-50">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                <div>
                  <h3 className="font-medium text-orange-900">
                    {isExpiringSoon ? 'License Expiring Soon' : 'Usage Limits Exceeded'}
                  </h3>
                  <p className="text-sm text-orange-700 mt-1">
                    {isExpiringSoon 
                      ? `Your license expires in ${mockLicense.daysRemaining} days. Consider renewing early.`
                      : 'You have exceeded your plan limits. Consider upgrading your plan.'
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Current License Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5" />
              <span>Current License</span>
            </CardTitle>
            <CardDescription>
              Your current ShortPoint license details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <div className="text-sm font-medium text-gray-500">Plan Type</div>
                <div className="text-2xl font-bold text-gray-900">{mockLicense.type}</div>
                <div className="text-sm text-gray-600">{mockLicense.price}</div>
              </div>
              
              <div>
                <div className="text-sm font-medium text-gray-500">Status</div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-lg font-semibold text-green-600 capitalize">{mockLicense.status}</span>
                </div>
              </div>
              
              <div>
                <div className="text-sm font-medium text-gray-500">Expires</div>
                <div className="text-lg font-semibold text-gray-900">
                  {new Date(mockLicense.endDate).toLocaleDateString()}
                </div>
                <div className="text-sm text-gray-600">
                  {mockLicense.daysRemaining} days remaining
                </div>
              </div>
              
              <div>
                <div className="text-sm font-medium text-gray-500">Auto Renew</div>
                <div className="flex items-center space-x-2">
                  {mockLicense.autoRenew ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                  <span className="text-lg font-semibold">
                    {mockLicense.autoRenew ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Limits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Usage Limits</CardTitle>
              <CardDescription>
                Current usage vs. plan limits
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Sites */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Sites</span>
                  <span className="text-sm text-gray-500">
                    {mockLicense.currentSites} / {mockLicense.maxSites}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${(mockLicense.currentSites / mockLicense.maxSites) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Users */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Users</span>
                  <span className="text-sm text-gray-500">
                    {mockLicense.currentUsers} / {mockLicense.maxUsers}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full" 
                    style={{ width: `${(mockLicense.currentUsers / mockLicense.maxUsers) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Storage */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Storage</span>
                  <span className="text-sm text-gray-500">
                    {mockLicense.currentStorage} / {mockLicense.maxStorage}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-orange-600 h-2 rounded-full" 
                    style={{ width: `${(6.4 / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* License History */}
          <Card>
            <CardHeader>
              <CardTitle>License History</CardTitle>
              <CardDescription>
                Recent license changes and renewals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">License renewed</p>
                    <p className="text-xs text-gray-500">Premium plan - $99/month</p>
                    <p className="text-xs text-gray-400">January 1, 2024</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Plan upgraded</p>
                    <p className="text-xs text-gray-500">Basic → Premium</p>
                    <p className="text-xs text-gray-400">December 15, 2023</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Initial subscription</p>
                    <p className="text-xs text-gray-500">Basic plan - $49/month</p>
                    <p className="text-xs text-gray-400">November 1, 2023</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <Card>
          <CardHeader>
            <CardTitle>License Actions</CardTitle>
            <CardDescription>
              Manage your license and subscription
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-20 flex-col">
                <Download className="h-5 w-5 mb-2" />
                <span>Download Invoice</span>
              </Button>
              
              <Button variant="outline" className="h-20 flex-col">
                <Calendar className="h-5 w-5 mb-2" />
                <span>View Billing History</span>
              </Button>
              
              <Button className="h-20 flex-col">
                <Settings className="h-5 w-5 mb-2" />
                <span>Manage Subscription</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
} 