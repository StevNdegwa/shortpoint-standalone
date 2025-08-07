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
  price: '$99/month',
  status: 'active',
  startDate: '2024-01-01',
  endDate: '2024-12-31',
  daysRemaining: 145,
  autoRenew: true,
  currentSites: 8,
  maxSites: 10,
  currentUsers: 340,
  maxUsers: 500,
  currentStorage: '6.4 GB',
  maxStorage: '10 GB'
}

export default function AdminLicensingPage() {
  const isExpiringSoon = mockLicense.daysRemaining <= 30
  const isOverLimit = mockLicense.currentSites > mockLicense.maxSites || 
                     mockLicense.currentUsers > mockLicense.maxUsers

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">License Management</h1>
            <p className="text-base text-gray-600">
              Manage your ShortPoint license and subscription
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="lg" className="px-4 py-2 text-sm">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
            <Button size="lg" className="px-4 py-2 text-sm">
              <Settings className="mr-2 h-4 w-4" />
              Manage Subscription
            </Button>
          </div>
        </div>

        {/* License Status Alert */}
        {(isExpiringSoon || isOverLimit) && (
          <Card className="border-orange-200 bg-orange-50 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-orange-100 rounded-xl">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-900 mb-2">
                    {isExpiringSoon ? 'License Expiring Soon' : 'Usage Limits Exceeded'}
                  </h3>
                  <p className="text-sm text-orange-700">
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
        <Card className="shadow-sm">
          <CardHeader className="pb-6">
            <CardTitle className="flex items-center space-x-3 text-xl font-bold">
              <div className="p-2 bg-blue-100 rounded-lg">
                <CreditCard className="h-5 w-5 text-blue-600" />
              </div>
              <span>Current License</span>
            </CardTitle>
            <CardDescription className="text-sm">
              Your current ShortPoint license details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-500">Plan Type</div>
                <div className="text-2xl font-bold text-gray-900">{mockLicense.type}</div>
                <div className="text-sm text-gray-600">{mockLicense.price}</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-500">Status</div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-xl font-bold text-green-600 capitalize">{mockLicense.status}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-500">Expires</div>
                <div className="text-xl font-bold text-gray-900">
                  {new Date(mockLicense.endDate).toLocaleDateString()}
                </div>
                <div className="text-sm text-gray-600">
                  {mockLicense.daysRemaining} days remaining
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-500">Auto Renew</div>
                <div className="flex items-center space-x-3">
                  {mockLicense.autoRenew ? (
                    <div className="p-2 bg-green-100 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                  ) : (
                    <div className="p-2 bg-red-100 rounded-lg">
                      <XCircle className="h-5 w-5 text-red-600" />
                    </div>
                  )}
                  <span className="text-xl font-bold">
                    {mockLicense.autoRenew ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Limits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-sm">
            <CardHeader className="pb-6">
              <CardTitle className="text-lg font-bold">Usage Limits</CardTitle>
              <CardDescription className="text-sm">
                Current usage vs. plan limits
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Sites */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-gray-700">Sites</span>
                  <span className="text-sm text-gray-500">
                    {mockLicense.currentSites} / {mockLicense.maxSites}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${(mockLicense.currentSites / mockLicense.maxSites) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Users */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-gray-700">Users</span>
                  <span className="text-sm text-gray-500">
                    {mockLicense.currentUsers} / {mockLicense.maxUsers}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-green-600 h-3 rounded-full transition-all duration-300" 
                    style={{ width: `${(mockLicense.currentUsers / mockLicense.maxUsers) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Storage */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-gray-700">Storage</span>
                  <span className="text-sm text-gray-500">
                    {mockLicense.currentStorage} / {mockLicense.maxStorage}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-orange-600 h-3 rounded-full transition-all duration-300" 
                    style={{ width: `${(6.4 / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* License History */}
          <Card className="shadow-sm">
            <CardHeader className="pb-6">
              <CardTitle className="text-lg font-bold">License History</CardTitle>
              <CardDescription className="text-sm">
                Recent license changes and renewals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">License renewed</p>
                    <p className="text-xs text-gray-500">Premium plan - $99/month</p>
                    <p className="text-xs text-gray-400 mt-1">January 1, 2024</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Plan upgraded</p>
                    <p className="text-xs text-gray-500">Basic → Premium</p>
                    <p className="text-xs text-gray-400 mt-1">December 15, 2023</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 bg-purple-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Initial subscription</p>
                    <p className="text-xs text-gray-500">Basic plan - $49/month</p>
                    <p className="text-xs text-gray-400 mt-1">November 1, 2023</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <Card className="shadow-sm">
          <CardHeader className="pb-6">
            <CardTitle className="text-lg font-bold">License Actions</CardTitle>
            <CardDescription className="text-sm">
              Manage your license and subscription
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Button variant="outline" className="h-24 flex-col space-y-3">
                <Download className="h-6 w-6" />
                <span className="text-sm font-medium">Download Invoice</span>
              </Button>
              
              <Button variant="outline" className="h-24 flex-col space-y-3">
                <Calendar className="h-6 w-6" />
                <span className="text-sm font-medium">View Billing History</span>
              </Button>
              
              <Button className="h-24 flex-col space-y-3">
                <Settings className="h-6 w-6" />
                <span className="text-sm font-medium">Manage Subscription</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
} 