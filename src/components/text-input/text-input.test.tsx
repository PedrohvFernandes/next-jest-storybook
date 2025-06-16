import { render, screen } from '@testing-library/react'
import { TextInput } from './'
import { Envelope } from 'phosphor-react'
import userEvent from '@testing-library/user-event'

describe('TextInput component', () => {
  it('should render TextInput.Root with children', () => {
    render(
      <TextInput.Root>
        <span>Child Content</span>
      </TextInput.Root>,
    )
    expect(screen.getByText('Child Content')).toBeInTheDocument()
  })

  it('should render TextInput.Icon with an icon', () => {
    render(
      <TextInput.Icon>
        <Envelope data-testid="icon" />
      </TextInput.Icon>,
    )
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render TextInput.Input with placeholder', () => {
    render(<TextInput.Input placeholder="Type here" />)
    expect(screen.getByPlaceholderText('Type here')).toBeInTheDocument()
  })

  it('should render TextInput.Input with type password', () => {
    render(<TextInput.Input type="password" placeholder="Password" />)
    const input = screen.getByPlaceholderText('Password') as HTMLInputElement
    expect(input.type).toBe('password')
  })

  it('should accept value and onChange props', async () => {
    const user = userEvent.setup()
    render(<TextInput.Input placeholder="Type here" />)
    const input = screen.getByPlaceholderText('Type here') as HTMLInputElement

    await user.type(input, 'Hello World')
    expect(input).toHaveValue('Hello World')
  })

  it('should apply focus when input is focused', async () => {
    const user = userEvent.setup()
    render(
      <TextInput.Root>
        <TextInput.Input placeholder="Focus here" />
      </TextInput.Root>,
    )

    const input = screen.getByPlaceholderText('Focus here')
    await user.click(input)
    expect(input).toHaveFocus()
  })

  it('should render Root with Icon and Input correctly', () => {
    render(
      <TextInput.Root>
        <TextInput.Icon>
          <Envelope data-testid="icon" />
        </TextInput.Icon>
        <TextInput.Input placeholder="Email" />
      </TextInput.Root>,
    )

    // Icon renderizado
    expect(screen.getByTestId('icon')).toBeInTheDocument()

    // Input renderizado com o placeholder
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
  })
})
