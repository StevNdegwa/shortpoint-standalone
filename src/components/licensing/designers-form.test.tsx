import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { DesignersForm } from './designers-form'

const mockDesigners = [
  { id: '1', email: 'designer1@acme.com' },
  { id: '2', email: 'designer2@acme.com' }
]

const mockOnDesignersChange = jest.fn()

describe('DesignersForm', () => {
  beforeEach(() => {
    mockOnDesignersChange.mockClear()
  })

  it('renders designers form correctly', () => {
    render(<DesignersForm designers={mockDesigners} onDesignersChange={mockOnDesignersChange} />)
    
    expect(screen.getByText('Designers')).toBeInTheDocument()
    expect(screen.getByText('Edit')).toBeInTheDocument()
  })

  it('displays existing designers', () => {
    render(<DesignersForm designers={mockDesigners} onDesignersChange={mockOnDesignersChange} />)
    
    expect(screen.getByText('designer1@acme.com')).toBeInTheDocument()
    expect(screen.getByText('designer2@acme.com')).toBeInTheDocument()
  })

  it('shows empty state when no designers', () => {
    render(<DesignersForm designers={[]} onDesignersChange={mockOnDesignersChange} />)
    
    expect(screen.getByText('No designers added yet')).toBeInTheDocument()
    expect(screen.getByText('Click edit to add designers')).toBeInTheDocument()
  })

  it('enters edit mode when edit button is clicked', () => {
    render(<DesignersForm designers={mockDesigners} onDesignersChange={mockOnDesignersChange} />)
    
    const editButton = screen.getByText('Edit')
    fireEvent.click(editButton)
    
    expect(screen.getByText('Add More Designer')).toBeInTheDocument()
    expect(screen.getByText('Save Changes')).toBeInTheDocument()
    expect(screen.getByText('Cancel')).toBeInTheDocument()
  })

  it('adds new designer when add button is clicked', () => {
    render(<DesignersForm designers={mockDesigners} onDesignersChange={mockOnDesignersChange} />)
    
    const editButton = screen.getByText('Edit')
    fireEvent.click(editButton)
    
    const addButton = screen.getByText('Add More Designer')
    fireEvent.click(addButton)
    
    const inputs = screen.getAllByPlaceholderText('designer@example.com')
    expect(inputs).toHaveLength(3) // 2 existing + 1 new
  })
})
