import { render, screen } from '@testing-library/react'
import { Heading } from './'

describe('Heading Component', () => {
  it('should render with default props', () => {
    render(<Heading>Default Heading</Heading>)
    const headingElement = screen.getByText('Default Heading')
    expect(headingElement).toBeInTheDocument()
    expect(headingElement.tagName).toBe('H2') // default é <h2>
    expect(headingElement).toHaveClass('text-xl') // tamanho padrão é 'md'
  })

  it('should render with size sm', () => {
    render(<Heading size="sm">Small Heading</Heading>)
    const headingElement = screen.getByText('Small Heading')
    expect(headingElement).toHaveClass('text-lg')
  })

  it('should render with size md', () => {
    render(<Heading size="md">Medium Heading</Heading>)
    const headingElement = screen.getByText('Medium Heading')
    expect(headingElement).toHaveClass('text-xl')
  })

  it('should render with size lg', () => {
    render(<Heading size="lg">Large Heading</Heading>)
    const headingElement = screen.getByText('Large Heading')
    expect(headingElement).toHaveClass('text-2xl')
  })

  it('should render as a child element when asChild is true', () => {
    render(
      <Heading asChild>
        <h1>H1 Heading</h1>
      </Heading>
    )
    const headingElement = screen.getByText('H1 Heading')
    expect(headingElement.tagName).toBe('H1') // deve ser <h1>, não <h2>
  })

  it('should apply additional class names', () => {
    render(<Heading className="custom-class">Custom Class Heading</Heading>)
    const headingElement = screen.getByText('Custom Class Heading')
    expect(headingElement).toHaveClass('custom-class')
  })
})
