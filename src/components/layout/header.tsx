import React from 'react'
import { Search, Bell, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAppStore } from '@/lib/store'

export function Header() {
  const currentSite = useAppStore((state) => state.currentSite)

  return (
    <header className="h-16 bg-white border-b border-light-border px-6 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {currentSite && (
          <div className="text-sm text-subtle-text">
            Managing: <span className="font-medium text-primary-text">{currentSite.name}</span>
          </div>
        )}
      </div>

      <div className="flex items-center space-x-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-subtle-text" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-light-border rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
          />
        </div>

        {/* Notifications */}
        <Button variant="ghost" size="icon">
          <Bell className="h-4 w-4" />
        </Button>

        {/* User Profile - Temporary placeholder */}
        <Button variant="ghost" size="icon">
          <User className="h-4 w-4" />
        </Button>
      </div>
    </header>
  )
} 