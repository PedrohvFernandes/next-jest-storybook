import Signin from './page';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Example/Signin',
  component: Signin,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Signin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Signin />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Testa se o texto principal foi renderizado
    const heading = canvas.getByRole('heading', { name: /teste/i });
    await expect(heading).toBeInTheDocument();

    const subtitle = canvas.getByText(/faça login e comece a usar!/i);
    await expect(subtitle).toBeInTheDocument();
  },
};
