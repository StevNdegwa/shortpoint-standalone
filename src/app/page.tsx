import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, Users, FileText, Palette, Shield, Zap } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/shortpoint-logo.svg" alt="ShortPoint" className="h-8 w-auto" />
            <span className="text-xl font-semibold text-gray-900">ShortPoint</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/sign-in">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Your Complete Intranet Solution
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          ShortPoint Standalone helps small to medium businesses organize departmental information 
          and create custom sites for different teams. Like Wix for hosting, but for your company's internal needs.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Link href="/sign-up">
            <Button size="lg" className="text-lg px-8 py-3">
              Start Building Today
            </Button>
          </Link>
          <Link href="#features">
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Everything You Need to Build Your Intranet
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Building2 className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Multi-Site Management</CardTitle>
              <CardDescription>
                Create unlimited sites for different departments - HR, Finance, IT, Development, Sales
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Role-Based Access</CardTitle>
              <CardDescription>
                Control who can access what with admin and normal user roles
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Rich Content Editor</CardTitle>
              <CardDescription>
                Create beautiful pages with our powerful WYSIWYG editor
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Palette className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Theme Customization</CardTitle>
              <CardDescription>
                Customize colors, fonts, and styling to match your brand
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Secure & Reliable</CardTitle>
              <CardDescription>
                Enterprise-grade security with multi-tenant architecture
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Real-Time Collaboration</CardTitle>
              <CardDescription>
                Work together with live updates and version history
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Company's Internal Communication?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of companies using ShortPoint to organize their information better.
          </p>
          <Link href="/sign-up">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src="/shortpoint-logo.svg" alt="ShortPoint" className="h-6 w-auto" />
            <span className="text-lg font-semibold text-gray-900">ShortPoint</span>
          </div>
          <p className="text-gray-600">
            © 2024 ShortPoint. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
} 