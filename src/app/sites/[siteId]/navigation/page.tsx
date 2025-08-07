import React from 'react'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, GripVertical, Edit, Trash2, ExternalLink } from 'lucide-react'

// Mock data for demonstration
const mockNavigation = [
  {
    id: '1',
    label: 'Home',
    href: '/sites/1',
    type: 'page',
    order: 1,
    isActive: true
  },
  {
    id: '2',
    label: 'Policies',
    href: '/sites/1/policies',
    type: 'page',
    order: 2,
    isActive: false
  },
  {
    id: '3',
    label: 'Benefits',
    href: '/sites/1/benefits',
    type: 'page',
    order: 3,
    isActive: false
  },
  {
    id: '4',
    label: 'Forms',
    href: '/sites/1/forms',
    type: 'page',
    order: 4,
    isActive: false
  },
  {
    id: '5',
    label: 'External Link',
    href: 'https://example.com',
    type: 'external',
    order: 5,
    isActive: false
  }
]

export default function NavigationPage({ params }: { params: { siteId: string } }) {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary-text">Navigation Structure</h1>
            <p className="text-subtle-text mt-2">
              Manage the navigation menu for this site. Drag and drop to reorder items.
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Navigation Item
          </Button>
        </div>

        {/* Navigation Editor */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Navigation Structure */}
          <Card>
            <CardHeader>
              <CardTitle>Navigation Items</CardTitle>
              <CardDescription>
                Drag and drop to reorder navigation items. Changes are saved automatically.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {mockNavigation.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 border border-light-border rounded-lg bg-white hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <GripVertical className="h-4 w-4 text-subtle-text cursor-move" />
                      <div>
                        <div className="font-medium text-primary-text">{item.label}</div>
                        <div className="text-sm text-subtle-text flex items-center space-x-1">
                          <span>{item.href}</span>
                          {item.type === 'external' && <ExternalLink className="h-3 w-3" />}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Live Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Live Preview</CardTitle>
              <CardDescription>
                See how your navigation will appear on the site
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-white border border-light-border rounded-lg p-4">
                <nav className="flex items-center space-x-8">
                  {mockNavigation.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      className={`text-sm font-medium transition-colors hover:text-primary-blue ${
                        item.isActive 
                          ? 'text-primary-blue' 
                          : 'text-subtle-text'
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Navigation Settings</CardTitle>
            <CardDescription>
              Configure how your navigation appears and behaves
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-primary-text mb-2">
                  Navigation Style
                </label>
                <select className="w-full p-2 border border-light-border rounded-md bg-white">
                  <option>Horizontal</option>
                  <option>Vertical</option>
                  <option>Dropdown</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-text mb-2">
                  Show Icons
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input type="radio" name="icons" className="mr-2" defaultChecked />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="icons" className="mr-2" />
                    No
                  </label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-subtle-text">
            Navigation changes are automatically saved
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">Reset to Default</Button>
            <Button>Save Changes</Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 