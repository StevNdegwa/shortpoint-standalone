"use client"

import React, { useState } from 'react';
import { AdminLayout } from '@/components/layout/admin-layout'
import { Button } from '@/components/ui/button'
import { PlanCard } from '@/components/licensing/plan-card'
import { BillingInformation } from '@/components/licensing/billing-information'
import { DesignersForm } from '@/components/licensing/designers-form'
import { Save } from 'lucide-react'

// Mock data
const mockLicense = {
  planType: 'Premium',
  status: 'Active Trial',
  price: '5325',
  currency: '$',
  period: 'Year',
  expiresDate: '17th Dec, 2024'
}

const mockBillingInfo = {
  billingAddress: {
    name: 'John Doe',
    company: 'Acme Corporation',
    address: '123 Business Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States'
  },
  contactInfo: {
    email: 'john.doe@acme.com',
    phone: '+1 (555) 123-4567'
  },
  paymentMethod: {
    type: 'Visa',
    last4: '4242',
    expiryDate: '12/25'
  }
}

const mockDesigners = [
  { id: '1', email: 'designer1@acme.com' },
  { id: '2', email: 'designer2@acme.com' },
  { id: '3', email: 'designer3@acme.com' }
]

export default function AdminLicensingPage() {
  const [designers, setDesigners] = useState(mockDesigners)

  const handleDesignersChange = (newDesigners: typeof designers) => {
    setDesigners(newDesigners)
  }

  return (
    <AdminLayout>
      <div className="min-h-screen bg-[#F5F6FA] p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Licensing</h1>
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save
          </Button>
        </div>

        {/* Components */}
        <div className="space-y-8">
          {/* Plan Card */}
          <PlanCard
            planType={mockLicense.planType}
            status={mockLicense.status}
            price={mockLicense.price}
            currency={mockLicense.currency}
            period={mockLicense.period}
            expiresDate={mockLicense.expiresDate}
          />

          {/* Billing Information */}
          <BillingInformation
            billingAddress={mockBillingInfo.billingAddress}
            contactInfo={mockBillingInfo.contactInfo}
            paymentMethod={mockBillingInfo.paymentMethod}
          />

          {/* Designers Form */}
          <DesignersForm
            designers={designers}
            onDesignersChange={handleDesignersChange}
          />
        </div>
      </div>
    </AdminLayout>
  )
} 