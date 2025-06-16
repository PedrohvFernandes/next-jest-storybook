import React from 'react';
import { render, screen } from '../../helpers/all-the-providers';
import Home from './page';

// Mock necessário por causa do Header (useRouter + usePathname)
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    refresh: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => '/', // simples pathname mockado
}));

describe('Home component', () => {
  it('should render the heading correctly', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 2, name: /Pages in Storybook/i })).toBeInTheDocument();
  });
});
