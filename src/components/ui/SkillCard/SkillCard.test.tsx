import { render, screen } from '@testing-library/react'
import { SkillCard } from './SkillCard'
import { FiCode } from 'react-icons/fi'

describe('SkillCard', () => {
  const mockProps = {
    icon: FiCode,
    name: 'Coding'
  }
  
  it('renders skill name correctly', () => {
    render(<SkillCard {...mockProps} />)
    const nameElement = screen.getByTestId('skill-card-name')
    expect(nameElement).toHaveTextContent('Coding')
  })
  
  it('renders with custom className', () => {
    render(<SkillCard {...mockProps} className="custom-class"/>)
    const card = screen.getByTestId('skill-card')
    expect(card).toHaveClass('custom-class')
  })
  
  it('renders icon component', () => {
    render(<SkillCard {...mockProps} />)
    const iconElement = screen.getByTestId('skill-card-icon')
    expect(iconElement).toBeInTheDocument()
  })
})
