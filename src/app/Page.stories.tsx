import Page from '../app/page';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect, userEvent, within } from 'storybook/test';

import { UserContextProvider } from '@/contexts/user-context';

const meta = {
  title: 'Example/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  render: () => (
    <UserContextProvider>
      <Page />
    </UserContextProvider>
  ),
};

export const LoggedIn: Story = {
  render: () => (
    <UserContextProvider>
      <Page />
    </UserContextProvider>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);

    // Aguarde a atualização de estado (opcional aguardar async)
    await expect(canvas.queryByRole('button', { name: /Log in/i })).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole('button', { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};
