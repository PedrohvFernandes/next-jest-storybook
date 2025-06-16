import { FormUser } from '.'

import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta = {
  title: 'Components/Signin/FormUser',
  component: FormUser,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FormUser>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <FormUser className="w-sm" />,
}
