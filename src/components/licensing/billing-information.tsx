import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CreditCard, User, MapPin, Phone, Mail } from 'lucide-react'

interface BillingInformationProps {
  billingAddress: {
    name: string
    company: string
    address: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  contactInfo: {
    email: string
    phone: string
  }
  paymentMethod: {
    type: string
    last4: string
    expiryDate: string
  }
}

export function BillingInformation({
  billingAddress,
  contactInfo,
  paymentMethod
}: BillingInformationProps) {
  return (
    <Card className="rounded-[14px] bg-white shadow-[0_7px_7px_-5px_rgba(0,0,0,0.04),0_10px_15px_-5px_rgba(0,0,0,0.10),0_1px_3px_0_rgba(0,0,0,0.05)]">
      <CardHeader className="pb-6">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-3 text-xl font-bold">
            <div className="p-2 bg-green-100 rounded-lg">
              <CreditCard className="h-5 w-5 text-green-600" />
            </div>
            <span>Billing Information</span>
          </CardTitle>
          <Button variant="outline" size="sm">
            Change
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Billing Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Billing Address</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <User className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">{billingAddress.name}</p>
                  <p className="text-sm text-gray-600">{billingAddress.company}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-900">{billingAddress.address}</p>
                  <p className="text-sm text-gray-600">
                    {billingAddress.city}, {billingAddress.state} {billingAddress.zipCode}
                  </p>
                  <p className="text-sm text-gray-600">{billingAddress.country}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <p className="text-sm text-gray-600">{contactInfo.email}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Phone</p>
                  <p className="text-sm text-gray-600">{contactInfo.phone}</p>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="pt-4 border-t border-gray-200">
              <h4 className="text-md font-semibold text-gray-900 mb-3">Payment Method</h4>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <CreditCard className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {paymentMethod.type} ending in {paymentMethod.last4}
                  </p>
                  <p className="text-sm text-gray-600">Expires {paymentMethod.expiryDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
