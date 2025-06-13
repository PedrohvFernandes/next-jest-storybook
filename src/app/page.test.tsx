import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Page from './page';

import { faker } from '@faker-js/faker'


jest.mock('../hooks/get-user', () => ({
  useUser: jest.fn(),
}));

import { useUser } from '../hooks/get-user';

describe('Page component', () => {
  test('should render correctly with no user', () => {
    (useUser as jest.Mock).mockReturnValue({
      user: null,
      login: jest.fn(),
      logout: jest.fn(),
    });

    render(<Page />);
    expect(screen.getByText('Log in')).toBeInTheDocument();
    expect(screen.getByText('Sign up')).toBeInTheDocument();
  });

  test('should set user when Login button is clicked', () => {
    const loginMock = jest.fn();
    (useUser as jest.Mock).mockReturnValue({
      user: null,
      login: loginMock,
      logout: jest.fn(),
    });

    render(<Page />);
    fireEvent.click(screen.getByText('Log in'));
    expect(loginMock).toHaveBeenCalled(); // verifica se a função foi chamada
  });

  test('should show user when logged in', () => {
    const user = faker.internet.displayName();

    (useUser as jest.Mock).mockReturnValue({
      user: { name: user },
      login: jest.fn(),
      logout: jest.fn(),
    });

    render(<Page />);
    expect(screen.getByText(user))
  });

  test('should call logout when Logout button is clicked', () => {
    const logoutMock = jest.fn();
    (useUser as jest.Mock).mockReturnValue({
      user: { name: 'Mocked User' },
      login: jest.fn(),
      logout: logoutMock,
    });

    render(<Page />);
    fireEvent.click(screen.getByText('Log out'));
    expect(logoutMock).toHaveBeenCalled();
  });
});
