import { render, screen } from '@testing-library/react'
import { AboutInterests } from './AboutInterests'
import { personalInterests } from '@/data/personalInterests'

jest.mock('@/components/ui/SectionSubtitle/SectionSubtitle', () => ({
  SectionSubtitle: ({subtitle}: { subtitle: string }) => (
    <h2 data-testid="mock-subtitle">{subtitle}</h2>
  )
}))

jest.mock('@/components/ui/SkillCard/SkillCard', () => ({
  SkillCard: ({name, icon: Icon}: { name: string; icon: any }) => (
    <div data-testid="mock-skill-card">
      <span data-testid="skill-name">{name}</span>
      <Icon data-testid="skill-icon"/>
    </div>
  )
}))

jest.mock('@/data/personalInterests', () => ({
  personalInterests: [
    {name: 'Reading', icon: () => <span>📚</span>},
    {name: 'Gaming', icon: () => <span>🎮</span>},
    {name: 'Music', icon: () => <span>🎵</span>}
  ]
}))

describe('AboutInterests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  
  it('renders the component', () => {
    const {container} = render(<AboutInterests/>)
    expect(container).toBeInTheDocument()
  })
  
  it('renders the correct subtitle', () => {
    render(<AboutInterests/>)
    const subtitle = screen.getByTestId('mock-subtitle')
    expect(subtitle).toHaveTextContent("When I'm not Coding")
  })
  
  it('renders all interest cards from personalInterests data', () => {
    render(<AboutInterests/>)
    const cards = screen.getAllByTestId('mock-skill-card')
    expect(cards).toHaveLength(personalInterests.length)
  })
  
  it('renders correct interest names', () => {
    render(<AboutInterests/>)
    personalInterests.forEach(interest => {
      expect(screen.getByText(interest.name)).toBeInTheDocument()
    })
  })
  
  it('applies correct grid classes', () => {
    const {container} = render(<AboutInterests/>)
    const grid = container.querySelector('.grid')
    expect(grid).toHaveClass('grid-cols-3', 'md:grid-cols-6', 'gap-5')
  })
  
  it('applies dark mode classes', () => {
    const {container} = render(<AboutInterests/>)
    const wrapper = container.firstChild
    expect(wrapper).toHaveClass('prose', 'dark:prose-dark', 'mb-16')
  })
  
  it('renders each interest with unique key', () => {
    const {container} = render(<AboutInterests/>)
    const cards = container.querySelectorAll('[data-testid="mock-skill-card"]')
    const cardNames = Array.from(cards).map(card =>
      card.querySelector('[data-testid="skill-name"]')?.textContent
    )
    const uniqueNames = new Set(cardNames)
    expect(uniqueNames.size).toBe(cardNames.length)
  })
})
