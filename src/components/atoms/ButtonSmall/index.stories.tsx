import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import ButtonSmall from './index';

const meta = {
  title: 'Components/Buttons/ButtonSmall',
  component: ButtonSmall,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
  args: { onClick: fn(), children: 'Test' },
} satisfies Meta<typeof ButtonSmall>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};