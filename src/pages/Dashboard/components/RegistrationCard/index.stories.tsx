import type { Meta, StoryObj } from '@storybook/react';

import RegistrationCard from './index';
import { IRegistration } from '../../hooks';
import { fn } from '@storybook/test';

const defaultData: IRegistration = {
  "admissionDate": "22/10/2023",
  "email": "luiz@caju.com.br",
  "employeeName": "Luiz Filho",
  "status": "APPROVED",
  "cpf": "56642105087",
  "id": "3"
}

const meta = {
  title: 'Components/RegistrationCard',
  component: RegistrationCard,
  tags: ['autodocs'],
  argTypes: {
    data: {}
  },
  args: {
    data: defaultData,
    changeRegistrationStatus: fn,
    deleteRegistration: fn,
  },
} satisfies Meta<typeof RegistrationCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: defaultData
  }
};