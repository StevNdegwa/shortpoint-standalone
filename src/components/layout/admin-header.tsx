import React from 'react'
import { Bell, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { UserDropdownMenu } from './user-dropdown-menu'

export function AdminHeader() {
  return (
    <header className="bg-white border-b border-gray-200 px-12 py-8 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-6">
          <img src="/shortpoint-logo.svg" alt="ShortPoint" className="h-10 w-auto" />
          <div className="border-l border-gray-300 h-8 mx-4"></div>
          <span className="text-xl font-bold text-gray-900">Admin Dashboard</span>
        </div>

        {/* Right side - Search, Notifications, User Profile */}
        <div className="flex items-center space-x-8">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-12 pr-4 py-3 border border-gray-200 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80 transition-all duration-200"
            />
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative h-12 w-12 rounded-full hover:bg-gray-100">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center font-medium">
              3
            </span>
          </Button>

          {/* User Profile */}
          <UserDropdownMenu />
        </div>
      </div>
    </header>
  )
} 