import type { Meta, StoryObj } from '@storybook/react';
import {withThemeFromJSXProvider} from '@storybook/addon-styling';

import GlobalStyles from 'styles/global';
import Home from '.';

const meta: Meta<typeof Home> = {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withThemeFromJSXProvider({GlobalStyles})],
};

export default meta;
type Story = StoryObj<typeof Home>;

export const Basic: Story = {};

