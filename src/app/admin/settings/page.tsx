'use client'

import React from 'react'
import { AdminLayout } from '@/components/layout/admin-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Globe } from 'lucide-react'

export default function TenantSettingsPage() {
  return (
    <AdminLayout>
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="w-96">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Globe className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Tenant Domain</h2>
            <p className="text-lg text-gray-600 font-mono">company.com</p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
} 