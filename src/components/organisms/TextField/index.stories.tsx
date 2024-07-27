import type { Meta, StoryObj } from '@storybook/react';

import Index from './index';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/TextField',
  tags: ['autodocs'],
  component: Index,
  argTypes: {
    value: { control: 'text' },
    mask: { control: 'text' }
  },
  args: { onChange: fn(), value: 'Test', mask: '' },
} satisfies Meta<typeof Index>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const InputWithMask: Story = {
  args: {
    mask: "999.999.999-99"
  }
};