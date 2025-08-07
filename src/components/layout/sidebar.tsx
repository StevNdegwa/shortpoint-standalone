import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAppStore } from '@/lib/store'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { 
  Building2, 
  Navigation, 
  FileText, 
  Image, 
  Users, 
  Palette, 
  Settings,
  Menu,
  X
} from 'lucide-react'

const tenantNavItems = [
  { href: '/dashboard', label: 'Sites', icon: Building2 },
  { href: '/dashboard/tenant-config', label: 'Tenant Configuration', icon: Settings },
  { href: '/dashboard/licensing', label: 'Licensing', icon: Settings },
  { href: '/dashboard/support', label: 'Support', icon: Settings },
]

const siteNavItems = [
  { href: '/sites/[siteId]/navigation', label: 'Navigation', icon: Navigation },
  { href: '/sites/[siteId]/pages', label: 'Pages', icon: FileText },
  { href: '/sites/[siteId]/assets', label: 'Assets Library', icon: Image },
  { href: '/sites/[siteId]/team', label: 'Site Team', icon: Users },
  { href: '/sites/[siteId]/theme', label: 'Theme', icon: Palette },
  { href: '/sites/[siteId]/settings', label: 'Settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  const sidebarOpen = useAppStore((state) => state.sidebarOpen)
  const setSidebarOpen = useAppStore((state) => state.setSidebarOpen)
  const currentSite = useAppStore((state) => state.currentSite)

  // Determine if we're in a site context
  const isSiteContext = pathname.includes('/sites/')
  const navItems = isSiteContext ? siteNavItems : tenantNavItems

  // Replace [siteId] placeholder with actual site ID
  const processedNavItems = navItems.map(item => ({
    ...item,
    href: item.href.replace('[siteId]', currentSite?.id || '')
  }))

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 z-50 h-full w-sidebar bg-sidebar-bg border-r border-light-border transition-transform duration-300",
        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex h-16 items-center justify-between px-6 border-b border-light-border">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <img src="/shortpoint-logo.svg" alt="ShortPoint" className="h-8 w-auto" />
              <span className="text-lg font-semibold text-primary-text">ShortPoint</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-2">
              {processedNavItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href || 
                  (isSiteContext && pathname.startsWith(item.href.split('/').slice(0, -1).join('/')))

                return (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start text-xs leading-[14px] font-inter",
                          isActive 
                            ? "bg-light-blue text-primary-blue" 
                            : "text-secondary-blue hover:bg-light-blue/50 hover:text-primary-blue"
                        )}
                      >
                        <Icon className="mr-3 h-4 w-4" />
                        {item.label}
                      </Button>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-30 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <Menu className="h-4 w-4" />
      </Button>
    </>
  )
} 