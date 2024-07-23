import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { IconButton } from './IconButton';

const meta = {
  title: 'Components/Buttons/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
  args: { onClick: fn(), children: 'Test' },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};