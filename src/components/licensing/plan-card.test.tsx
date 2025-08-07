import React from 'react'
import { render, screen } from '@testing-library/react'
import { PlanCard } from './plan-card'

const mockProps = {
  planType: 'Premium',
  status: 'Active Trial',
  price: '5325',
  currency: '$',
  period: 'Year',
  expiresDate: '17th Dec, 2024'
}

describe('PlanCard', () => {
  it('renders plan information correctly', () => {
    render(<PlanCard {...mockProps} />)
    
    expect(screen.getByText('Plan')).toBeInTheDocument()
    expect(screen.getByText('Active Trial')).toBeInTheDocument()
  })

  it('displays price correctly', () => {
    render(<PlanCard {...mockProps} />)
    
    expect(screen.getByText('$5325 USD/Year')).toBeInTheDocument()
  })

  it('shows expiration date correctly', () => {
    render(<PlanCard {...mockProps} />)
    
    expect(screen.getByText('Expires on 17th Dec, 2024')).toBeInTheDocument()
  })

  it('displays buy license button', () => {
    render(<PlanCard {...mockProps} />)
    
    expect(screen.getByText('Buy License')).toBeInTheDocument()
  })
})
