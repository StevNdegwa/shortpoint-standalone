import React from 'react'
import { useAppStore } from '@/lib/store'
import { Sidebar } from './sidebar'
import { Header } from './header'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const sidebarOpen = useAppStore((state) => state.sidebarOpen)

  return (
    <div className="min-h-screen bg-main-bg">
      <Sidebar />
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-sidebar' : 'ml-0'}`}>
        <Header />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
} 