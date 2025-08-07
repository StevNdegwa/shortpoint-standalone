import React from 'react'
import { render, screen } from '@testing-library/react'
import { BillingInformation } from './billing-information'

const mockProps = {
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

describe('BillingInformation', () => {
  it('renders billing information correctly', () => {
    render(<BillingInformation {...mockProps} />)
    
    expect(screen.getByText('Billing Information')).toBeInTheDocument()
    expect(screen.getByText('Change')).toBeInTheDocument()
  })

  it('displays billing address information', () => {
    render(<BillingInformation {...mockProps} />)
    
    expect(screen.getByText('Billing Address')).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Acme Corporation')).toBeInTheDocument()
    expect(screen.getByText('123 Business Street')).toBeInTheDocument()
    expect(screen.getByText('New York, NY 10001')).toBeInTheDocument()
    expect(screen.getByText('United States')).toBeInTheDocument()
  })

  it('displays contact information', () => {
    render(<BillingInformation {...mockProps} />)
    
    expect(screen.getByText('Contact Information')).toBeInTheDocument()
    expect(screen.getByText('john.doe@acme.com')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
  })

  it('displays payment method information', () => {
    render(<BillingInformation {...mockProps} />)
    
    expect(screen.getByText('Payment Method')).toBeInTheDocument()
    expect(screen.getByText('Visa ending in 4242')).toBeInTheDocument()
    expect(screen.getByText('Expires 12/25')).toBeInTheDocument()
  })
})
