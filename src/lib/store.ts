import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: string
  email: string
  role: 'ADMIN' | 'NORMAL'
  tenantId: string
}

interface Tenant {
  id: string
  name: string
  slug: string
  companyId: string
}

interface Site {
  id: string
  name: string
  slug: string
  description?: string
  tenantId: string
}

interface AppState {
  // User state
  user: User | null
  tenant: Tenant | null
  currentSite: Site | null
  
  // UI state
  sidebarOpen: boolean
  theme: {
    primaryColor: string
    secondaryColor: string
    customCss?: string
  }
  
  // Actions
  setUser: (user: User | null) => void
  setTenant: (tenant: Tenant | null) => void
  setCurrentSite: (site: Site | null) => void
  setSidebarOpen: (open: boolean) => void
  setTheme: (theme: { primaryColor: string; secondaryColor: string; customCss?: string }) => void
  reset: () => void
}

const initialState = {
  user: null,
  tenant: null,
  currentSite: null,
  sidebarOpen: true,
  theme: {
    primaryColor: '#3161D1',
    secondaryColor: '#5774A8',
  },
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      ...initialState,
      
      setUser: (user) => set({ user }),
      setTenant: (tenant) => set({ tenant }),
      setCurrentSite: (currentSite) => set({ currentSite }),
      setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
      setTheme: (theme) => set({ theme }),
      reset: () => set(initialState),
    }),
    {
      name: 'shortpoint-store',
      partialize: (state) => ({
        sidebarOpen: state.sidebarOpen,
        theme: state.theme,
      }),
    }
  )
) 