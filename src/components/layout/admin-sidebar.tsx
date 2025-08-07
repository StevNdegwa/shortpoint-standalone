"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { 
  Building2, 
  CreditCard, 
  HelpCircle, 
  Settings,
  Users,
  BarChart3
} from 'lucide-react'

const adminNavItems = [
  { 
    href: '/admin/sites', 
    label: 'Sites',
    icon: Building2,
    description: 'Manage all sites'
  },
  { 
    href: '/admin/licensing', 
    label: 'Licensing', 
    icon: CreditCard,
    description: 'License management'
  },
  { 
    href: '/admin/users', 
    label: 'Users', 
    icon: Users,
    description: 'User management'
  },
  { 
    href: '/admin/support', 
    label: 'Support', 
    icon: HelpCircle,
    description: 'Support tickets'
  },
  { 
    href: '/admin/settings', 
    label: 'Tenant Settings', 
    icon: Settings,
    description: 'System configuration'
  },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-80 bg-white border-r border-gray-200 min-h-screen shadow-sm">
      <div className="p-10">
        <nav className="space-y-4">
          {adminNavItems.map((item) => {
            const Icon = item.icon
            // More specific active detection
            const isActive = pathname === item.href || 
                           (item.href === '/admin/sites' && pathname === '/admin') ||
                           pathname.startsWith(item.href + '/')

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center space-x-4 px-5 py-4 rounded-xl text-sm font-medium transition-all duration-200 group",
                  isActive 
                    ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700 shadow-sm" 
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm"
                )}
              >
                <div className={cn(
                  "p-2 rounded-lg transition-colors duration-200",
                  isActive ? "bg-blue-100" : "bg-gray-100 group-hover:bg-gray-200"
                )}>
                  <Icon className={cn(
                    "h-5 w-5",
                    isActive ? "text-blue-700" : "text-gray-500 group-hover:text-gray-700"
                  )} />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-base">{item.label}</div>
                  <div className={cn(
                    "text-xs mt-1",
                    isActive ? "text-blue-600" : "text-gray-500"
                  )}>
                    {item.description}
                  </div>
                </div>
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
} 