import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import ConfirmationModal from './index';

const meta = {
  title: 'Components/ConfirmationModal',
  component: ConfirmationModal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    actionText: { control: 'text' }

  },
  args: { actionFunction: fn(), actionText: 'Test', cancelFunction: fn(), isOpen: true },
} satisfies Meta<typeof ConfirmationModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};