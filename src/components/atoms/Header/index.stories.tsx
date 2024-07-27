import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './index';

const meta = {
  title: 'Components/Header',
  tags: ['autodocs'],
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};