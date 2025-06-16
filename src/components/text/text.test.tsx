import { render, screen } from '@testing-library/react'
import { Text } from './'

describe('Text Component', () => {
  it('should render with default props', () => {
    render(<Text>Default Text</Text>)
    const textElement = screen.getByText('Default Text')
    expect(textElement).toBeInTheDocument()
    expect(textElement.tagName).toBe('SPAN')
    expect(textElement).toHaveClass('text-sm') // tamanho padrão é 'md'
  })

  it('should render with size sm', () => {
    render(<Text size="sm">Small Text</Text>)
    const textElement = screen.getByText('Small Text')
    expect(textElement).toHaveClass('text-xs')
  })

  it('should render with size md', () => {
    render(<Text size="md">Medium Text</Text>)
    const textElement = screen.getByText('Medium Text')
    expect(textElement).toHaveClass('text-sm')
  })

  it('should render with size lg', () => {
    render(<Text size="lg">Large Text</Text>)
    const textElement = screen.getByText('Large Text')
    expect(textElement).toHaveClass('text-md')
  })

  it('should render as a child element when asChild is true', () => {
    render(
      <Text asChild>
        <p>Paragraph Text</p>
      </Text>
    )
    const textElement = screen.getByText('Paragraph Text')
    expect(textElement.tagName).toBe('P') // deve ser um <p>, não um <span>
  })

  it('should apply additional class names', () => {
    render(<Text className="custom-class">Custom Class Text</Text>)
    const textElement = screen.getByText('Custom Class Text')
    expect(textElement).toHaveClass('custom-class')
  })
})
