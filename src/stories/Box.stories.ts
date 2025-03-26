import type { Meta, StoryObj } from '@storybook/react';

import { Box } from './Box';

const meta = {
  title: 'motion/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {

};
