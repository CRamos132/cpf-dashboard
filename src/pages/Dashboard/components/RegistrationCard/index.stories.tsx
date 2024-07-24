import type { Meta, StoryObj } from '@storybook/react';

import RegistrationCard, { RegistrationCardData } from './index';

const defaultData: RegistrationCardData = {
  admissionDate: '19/12/2007',
  email: 'email@email.com',
  employeeName: 'Test Name'
}

const meta = {
  title: 'Components/RegistrationCard',
  component: RegistrationCard,
  tags: ['autodocs'],
  argTypes: {
    data: {}
  },
  args: {
    data: defaultData
  },
} satisfies Meta<typeof RegistrationCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: defaultData
  }
};