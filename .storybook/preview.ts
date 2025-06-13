import type { Preview } from '@storybook/nextjs-vite'

import '../src/app/globals.css'

const clearLocalStorageDecorator = (Story: any) => {
  localStorage.clear();
  return Story();
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },

  decorators: [clearLocalStorageDecorator]
};

export default preview;