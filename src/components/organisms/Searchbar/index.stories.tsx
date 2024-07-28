import type { Meta, StoryObj } from '@storybook/react';

import { SearchBar } from './index';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    cpfSearchText: { control: 'text' },
    isCPFValid: { control: 'boolean' },
  },
  args: {
    cpfSearchText: '99999999999',
    handleSearchChange: fn(),
    refresh: fn(),
    goToNewAdmissionPage: fn(),
    isCPFValid: true
  },
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const InvalidCPF: Story = {
  args: {
    isCPFValid: false
  }
};