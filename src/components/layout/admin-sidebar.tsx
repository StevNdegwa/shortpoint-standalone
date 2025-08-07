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
    href: '/admin', 
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
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-6">
        <nav className="space-y-2">
          {adminNavItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/')

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors group",
                  isActive 
                    ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700" 
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <Icon className={cn(
                  "h-5 w-5",
                  isActive ? "text-blue-700" : "text-gray-400 group-hover:text-gray-500"
                )} />
                <div className="flex-1">
                  <div className="font-medium">{item.label}</div>
                  <div className={cn(
                    "text-xs",
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