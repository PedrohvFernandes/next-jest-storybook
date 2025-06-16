import { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Header } from '.'
import { UserContext, UserContextProvider } from '@/contexts/user-context'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
  decorators: [
    (Story) => (
      <UserContextProvider>
        <Story />
      </UserContextProvider>
    ),
  ],
}

export const LoggedOut: Story = {
  parameters: {
    user: { name: 'TESTE' },
  },
  decorators: [(Story) => <Story />],
}
