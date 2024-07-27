import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import LinkButton from '.';

const meta = {
  title: 'Components/Buttons/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
  args: { onClick: fn(), children: 'Test' },
} satisfies Meta<typeof LinkButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};