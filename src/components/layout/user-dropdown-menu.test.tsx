import React, { useState, useRef, useEffect } from 'react'
import { User, Settings, LogOut, ChevronDown } from 'lucide-react'
import { useAuth, useClerk } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'

interface UserDropdownMenuProps {
  className?: string
}

export function UserDropdownMenu({ className = '' }: UserDropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { user, isLoaded } = useAuth()
  const { signOut } = useClerk()

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLogout = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  if (!isLoaded || !user) {
    return (
      <div className={`flex items-center space-x-4 pl-6 border-l border-gray-200 ${className}`}>
        <div className="text-right">
          <p className="text-sm font-semibold text-gray-900">Loading...</p>
          <p className="text-xs text-gray-500">Please wait</p>
        </div>
        <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-gray-100">
          <User className="h-5 w-5 text-gray-500" />
        </Button>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div className="flex items-center space-x-4 pl-6 border-l border-gray-200">
        <div className="text-right">
          <p className="text-sm font-semibold text-gray-900">
            {user.firstName && user.lastName 
              ? `${user.firstName} ${user.lastName}` 
              : user.username || 'User'
            }
          </p>
          <p className="text-xs text-gray-500">{user.primaryEmailAddress?.emailAddress}</p>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-12 w-12 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {user.imageUrl ? (
            <img 
              src={user.imageUrl} 
              alt="Profile" 
              className="h-8 w-8 rounded-full object-cover"
            />
          ) : (
            <User className="h-5 w-5 text-blue-700" />
          )}
          <ChevronDown className={`h-4 w-4 text-blue-700 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </Button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-900">
              {user.firstName && user.lastName 
                ? `${user.firstName} ${user.lastName}` 
                : user.username || 'User'
              }
            </p>
            <p className="text-xs text-gray-500">{user.primaryEmailAddress?.emailAddress}</p>
          </div>
          
          <div className="py-1">
            <button
              onClick={() => {
                setIsOpen(false)
                // Navigate to account settings
                window.location.href = '/admin/settings'
              }}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <Settings className="h-4 w-4 mr-3 text-gray-500" />
              Account Settings
            </button>
            
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="h-4 w-4 mr-3 text-red-500" />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
