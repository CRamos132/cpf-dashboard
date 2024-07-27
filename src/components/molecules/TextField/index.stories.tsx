import type { Meta, StoryObj } from '@storybook/react';

import TextInput from './index';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/TextField',
  tags: ['autodocs'],
  component: TextInput,
  argTypes: {
    value: { control: 'text' },
    mask: { control: 'text' },
    label: { control: 'text' },
  },
  args: { onChange: fn(), value: 'Test', mask: '', label: 'Label' },
} satisfies Meta<typeof TextInput>;

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