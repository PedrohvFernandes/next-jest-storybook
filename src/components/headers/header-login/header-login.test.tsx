import { render, screen } from '@testing-library/react';
import { HeaderLogin } from './index';
import { useUser } from '@/hooks/get-user';
import { Header } from '../header-default';

jest.mock('../../../hooks/get-user'); // Mock do hook

describe('HeaderLogin Component', () => {
  const mockUser = { name: 'John Doe' };
  const mockLogin = jest.fn();
  const mockLogout = jest.fn();

  beforeEach(() => {
    (useUser as jest.Mock).mockReturnValue({
      user: mockUser,
      login: mockLogin,
      logout: mockLogout,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render Header with the correct props', () => {
    render(<HeaderLogin />);

    // Verifica se o Header foi renderizado
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});
