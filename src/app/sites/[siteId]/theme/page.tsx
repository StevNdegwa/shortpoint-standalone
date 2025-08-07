import React from 'react'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Palette, Eye, Save, RotateCcw } from 'lucide-react'

// Mock theme data
const mockTheme = {
  primaryColor: '#3161D1',
  secondaryColor: '#5774A8',
  customCss: '',
  fontFamily: 'Inter',
  borderRadius: '8px'
}

export default function ThemePage({ params }: { params: { siteId: string } }) {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary-text">Theme Customization</h1>
            <p className="text-subtle-text mt-2">
              Customize the visual appearance of your site with colors, fonts, and styling
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Eye className="mr-2 h-4 w-4" />
              Preview
            </Button>
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Save Theme
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Theme Controls */}
          <div className="space-y-6">
            {/* Color Palette */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Palette className="h-5 w-5" />
                  <span>Color Palette</span>
                </CardTitle>
                <CardDescription>
                  Choose your primary and secondary colors for the site
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-primary-text mb-2">
                    Primary Color
                  </label>
                  <div className="flex items-center space-x-3">
                    <input
                      type="color"
                      defaultValue={mockTheme.primaryColor}
                      className="w-12 h-10 border border-light-border rounded-md cursor-pointer"
                    />
                    <input
                      type="text"
                      defaultValue={mockTheme.primaryColor}
                      className="flex-1 p-2 border border-light-border rounded-md bg-white"
                      placeholder="#3161D1"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary-text mb-2">
                    Secondary Color
                  </label>
                  <div className="flex items-center space-x-3">
                    <input
                      type="color"
                      defaultValue={mockTheme.secondaryColor}
                      className="w-12 h-10 border border-light-border rounded-md cursor-pointer"
                    />
                    <input
                      type="text"
                      defaultValue={mockTheme.secondaryColor}
                      className="flex-1 p-2 border border-light-border rounded-md bg-white"
                      placeholder="#5774A8"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Typography */}
            <Card>
              <CardHeader>
                <CardTitle>Typography</CardTitle>
                <CardDescription>
                  Configure fonts and text styling for your site
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-primary-text mb-2">
                    Font Family
                  </label>
                  <select className="w-full p-2 border border-light-border rounded-md bg-white">
                    <option value="Inter">Inter</option>
                    <option value="Roboto">Roboto</option>
                    <option value="Open Sans">Open Sans</option>
                    <option value="Arial">Arial</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary-text mb-2">
                    Border Radius
                  </label>
                  <select className="w-full p-2 border border-light-border rounded-md bg-white">
                    <option value="0px">None</option>
                    <option value="4px">Small</option>
                    <option value="8px" selected>Medium</option>
                    <option value="12px">Large</option>
                    <option value="16px">Extra Large</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Custom CSS */}
            <Card>
              <CardHeader>
                <CardTitle>Custom CSS</CardTitle>
                <CardDescription>
                  Add custom CSS for advanced styling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <textarea
                  rows={6}
                  className="w-full p-3 border border-light-border rounded-md bg-white font-mono text-sm"
                  placeholder="/* Add your custom CSS here */"
                  defaultValue={mockTheme.customCss}
                />
              </CardContent>
            </Card>
          </div>

          {/* Live Preview */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Live Preview</CardTitle>
                <CardDescription>
                  See how your theme changes will look on the site
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border border-light-border rounded-lg overflow-hidden">
                  {/* Preview Header */}
                  <div className="bg-white p-4 border-b border-light-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary-blue rounded"></div>
                        <span className="font-semibold text-primary-text">Site Name</span>
                      </div>
                      <nav className="flex items-center space-x-4">
                        <a href="#" className="text-sm font-medium text-primary-blue">Home</a>
                        <a href="#" className="text-sm font-medium text-subtle-text hover:text-primary-blue">About</a>
                        <a href="#" className="text-sm font-medium text-subtle-text hover:text-primary-blue">Contact</a>
                      </nav>
                    </div>
                  </div>
                  
                  {/* Preview Content */}
                  <div className="bg-main-bg p-6">
                    <div className="max-w-2xl mx-auto space-y-4">
                      <h1 className="text-2xl font-bold text-primary-text">Welcome to Your Site</h1>
                      <p className="text-subtle-text">
                        This is a preview of how your content will look with the selected theme.
                      </p>
                      <div className="flex items-center space-x-2">
                        <Button size="sm">Primary Button</Button>
                        <Button variant="outline" size="sm">Secondary Button</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Theme Presets */}
            <Card>
              <CardHeader>
                <CardTitle>Theme Presets</CardTitle>
                <CardDescription>
                  Choose from pre-designed theme templates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-light-border rounded-lg p-3 cursor-pointer hover:border-primary-blue">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-4 h-4 bg-blue-500 rounded"></div>
                      <div className="w-4 h-4 bg-gray-500 rounded"></div>
                    </div>
                    <div className="text-sm font-medium text-primary-text">Default</div>
                  </div>
                  
                  <div className="border border-light-border rounded-lg p-3 cursor-pointer hover:border-primary-blue">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <div className="w-4 h-4 bg-teal-500 rounded"></div>
                    </div>
                    <div className="text-sm font-medium text-primary-text">Nature</div>
                  </div>
                  
                  <div className="border border-light-border rounded-lg p-3 cursor-pointer hover:border-primary-blue">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-4 h-4 bg-purple-500 rounded"></div>
                      <div className="w-4 h-4 bg-pink-500 rounded"></div>
                    </div>
                    <div className="text-sm font-medium text-primary-text">Creative</div>
                  </div>
                  
                  <div className="border border-light-border rounded-lg p-3 cursor-pointer hover:border-primary-blue">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-4 h-4 bg-gray-800 rounded"></div>
                      <div className="w-4 h-4 bg-gray-600 rounded"></div>
                    </div>
                    <div className="text-sm font-medium text-primary-text">Professional</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-6 border-t border-light-border">
          <Button variant="outline">
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset to Default
          </Button>
          <div className="flex items-center space-x-2">
            <Button variant="outline">Cancel</Button>
            <Button>Save Theme</Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 