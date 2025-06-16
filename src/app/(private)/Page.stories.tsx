import Home from './page'

import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, within } from 'storybook/test'

const meta = {
  title: 'Example/HomePage',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Home>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    user: { name: 'TESTE' },
  },
  render: () => <Home />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const heading = canvas.getByRole('heading', {
      level: 2,
      name: /Pages in Storybook/i,
    })
    await expect(heading).toBeInTheDocument()
  },
}
