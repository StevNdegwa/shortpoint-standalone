import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface NavigationItem {
  id: string
  label: string
  href: string
  isActive: boolean
}

interface SiteNavigationProps {
  navigation: NavigationItem[]
}

export function SiteNavigation({ navigation }: SiteNavigationProps) {
  return (
    <nav className="bg-white border border-light-border rounded-lg p-4">
      <div className="flex items-center space-x-8">
        {navigation.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary-blue",
              item.isActive 
                ? "text-primary-blue" 
                : "text-subtle-text"
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
} 