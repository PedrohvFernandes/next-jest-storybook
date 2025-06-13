import { render, screen, fireEvent } from '@testing-library/react';
import { Header, HeaderProps } from './index';

describe('Header Component', () => {
  const mockOnLogin = jest.fn();
  const mockOnLogout = jest.fn();
  const mockOnCreateAccount = jest.fn();

  const defaultProps: HeaderProps = {
    onLogin: mockOnLogin,
    onLogout: mockOnLogout,
    onCreateAccount: mockOnCreateAccount,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly when no user is logged in', () => {
    render(<Header {...defaultProps} />);

    // Verifica se o texto "Log in" e "Sign up" aparecem
    expect(screen.getByText('Log in')).toBeInTheDocument();
    expect(screen.getByText('Sign up')).toBeInTheDocument();
    // Verifica se a mensagem de boas-vindas não aparece
    expect(screen.queryByText(/Welcome/i)).not.toBeInTheDocument();
  });

  it('should call onLogin when "Log in" button is clicked', () => {
    render(<Header {...defaultProps} />);

    const loginButton = screen.getByText('Log in');
    fireEvent.click(loginButton);

    expect(mockOnLogin).toHaveBeenCalledTimes(1);
  });

  it('should call onCreateAccount when "Sign up" button is clicked', () => {
    render(<Header {...defaultProps} />);

    const signUpButton = screen.getByText('Sign up');
    fireEvent.click(signUpButton);

    expect(mockOnCreateAccount).toHaveBeenCalledTimes(1);
  });

  it('should render correctly when user is logged in', () => {
    const user = { name: 'John Doe' };
    render(<Header {...defaultProps} user={user} />);

    // Verifica a mensagem de boas-vindas com o nome do usuário
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
    // Verifica se o botão "Log out" aparece
    expect(screen.getByText('Log out')).toBeInTheDocument();
    // Verifica se os botões "Log in" e "Sign up" não aparecem
    expect(screen.queryByText('Log in')).not.toBeInTheDocument();
    expect(screen.queryByText('Sign up')).not.toBeInTheDocument();
  });

  it('should call onLogout when "Log out" button is clicked', () => {
    const user = { name: 'John Doe' };
    render(<Header {...defaultProps} user={user} />);

    const logoutButton = screen.getByText('Log out');
    fireEvent.click(logoutButton);

    expect(mockOnLogout).toHaveBeenCalledTimes(1);
  });
});
