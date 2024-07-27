import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button from './index';

const meta = {
  title: 'Components/Buttons/DefaultButton',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
  args: { onClick: fn(), children: 'Test' },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};