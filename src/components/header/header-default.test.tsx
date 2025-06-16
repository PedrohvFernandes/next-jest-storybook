import { render, screen } from '@testing-library/react'
import { Header } from './'
import { useUser } from '@/hooks/get-user'

jest.mock('../../hooks/get-user') // Mock do hook

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    refresh: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => '/',
}))

describe('Header Component', () => {
  const mockLogin = jest.fn()
  const mockLogout = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render login and signup buttons when no user is logged in', () => {
    ;(useUser as jest.Mock).mockReturnValue({
      user: null,
      login: mockLogin,
      logout: mockLogout,
    })

    render(<Header />)

    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument()
  })

  it('should render user name and logout button when user is logged in', () => {
    const mockUser = { name: 'John Doe' }

    ;(useUser as jest.Mock).mockReturnValue({
      user: mockUser,
      login: mockLogin,
      logout: mockLogout,
    })

    render(<Header />)

    expect(screen.getByText(/John Doe/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /log out/i })).toBeInTheDocument()
  })
})
