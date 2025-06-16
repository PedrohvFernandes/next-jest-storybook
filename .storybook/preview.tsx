import type { Preview } from '@storybook/nextjs-vite';

import '../src/styles/globals.css';
import { Header } from '../src/components/header';
import { UserContext } from '../src/contexts/user-context';


const withConditionalContextDecorator = (Story: any, context: any) => {
  const user = context.parameters.user;
  const setUser = context.parameters.setUser

  if (context.kind.startsWith('Components/')) {
    return (
      <UserContext value={{ user, setUser }}>
        <Story />
      </UserContext>
    );
  }

  return <Story />;
};

const withConditionalHeaderDecorator = (Story: any, context: any) => {
  const user = context.parameters.user;
  const setUser = context.parameters.setUser

  // Aplica Header somente para 'Example/'
  if (context.kind.startsWith('Example/')) {
    return (
      <UserContext value={{ user, setUser }}>
        <Header />
        <div className='pt-20 px-5 bg-gray-900 h-screen flex'>
          <Story />
        </div>
      </UserContext>
    );
  }

  return <Story />;
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    backgrounds: {
      options: {
        // 👇 Default options
        dark: { name: 'Dark', value: '#333' },
        light: { name: 'Light', value: '#F7F9F2' },
        // 👇 Add your own
        maroon: { name: 'Maroon', value: '#400' },
      },
    },
  },
  initialGlobals: {
    // 👇 Set the initial background color
    backgrounds: { value: 'dark' },
  },
  decorators: [withConditionalHeaderDecorator, withConditionalContextDecorator],
};

export default preview;
