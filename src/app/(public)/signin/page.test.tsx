/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, fireEvent } from '@testing-library/react'
import Signin from './page'
import { useLoginUser } from '@/hooks/use-login-user'

// Mock dos hooks e dependências
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

jest.mock('../../../hooks/use-login-user', () => ({
  useLoginUser: jest.fn(),
}))

describe('Signin Page', () => {
  const mockHandleSubmit = jest.fn((fn) => (e: any) => {
    e.preventDefault()
    fn()
  })
  const mockLogin = jest.fn()
  const mockRegister = jest.fn(() => ({}))

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useLoginUser as jest.Mock).mockReturnValue({
      handleSubmit: mockHandleSubmit,
      login: mockLogin,
      register: mockRegister,
      errors: {
        name: { message: 'Nome é obrigatório' },
      },
    })
  })

  it('should render heading, text and form elements', () => {
    render(<Signin />)

    expect(screen.getByText(/teste/i)).toBeInTheDocument()
    expect(screen.getByText(/c6 bank/i)).toBeInTheDocument()
    expect(screen.getByText(/faça login e comece a usar!/i)).toBeInTheDocument()
    expect(screen.getByText(/seu nome/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/digite seu nome/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /entrar na plataforma/i }),
    ).toBeInTheDocument()
  })

  it('should show error message when name is invalid', () => {
    render(<Signin />)

    expect(screen.getByText('Nome é obrigatório')).toBeInTheDocument()
  })

  it('should call login function on submit', () => {
    // Simular erro vazio para permitir o envio
    ;(useLoginUser as jest.Mock).mockReturnValue({
      handleSubmit: mockHandleSubmit,
      login: mockLogin,
      register: mockRegister,
      errors: {},
    })

    render(<Signin />)

    const button = screen.getByRole('button', { name: /entrar na plataforma/i })

    fireEvent.click(button)

    expect(mockHandleSubmit).toHaveBeenCalled()
  })
})
