import type { Meta, StoryObj } from '@storybook/react';

import RegistrationCard from './index';
import { fn } from '@storybook/test';
import { REVIEW_DATA } from '../../../consts/testConsts';

const meta = {
  title: 'Components/RegistrationCard',
  component: RegistrationCard,
  tags: ['autodocs'],
  argTypes: {
    data: {}
  },
  args: {
    data: REVIEW_DATA,
    changeRegistrationStatus: fn(),
    deleteRegistration: fn(),
  },
} satisfies Meta<typeof RegistrationCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: REVIEW_DATA
  }
};