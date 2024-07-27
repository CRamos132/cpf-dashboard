import type { Meta, StoryObj } from '@storybook/react';

import Collumns from './index';
import { fn } from '@storybook/test';


const meta = {
  title: 'Components/Collumns',
  component: Collumns,
  tags: ['autodocs'],
  argTypes: {

  },
  args: {
    deleteRegistration: fn(),
    changeRegistrationStatus: fn(),
    separatedData: {
      APPROVED: [],
      REPROVED: [],
      REVIEW: []
    }
  },
} satisfies Meta<typeof Collumns>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EmptyColumn: Story = {
  args: {
    separatedData: {
      APPROVED: [],
      REPROVED: [],
      REVIEW: []
    }
  }
};

export const ColumnWithData: Story = {
  args: {
    separatedData: {
      APPROVED: [{
        "admissionDate": "22/10/2023",
        "email": "luiz@caju.com.br",
        "employeeName": "Luiz Filho",
        "status": "APPROVED",
        "cpf": "56642105087",
        "id": "3"
      }],
      REPROVED: [{
        "id": "2",
        "admissionDate": "22/10/2023",
        "email": "jose@caju.com.br",
        "employeeName": "José Leão",
        "status": "REPROVED",
        "cpf": "78502270001"
      }],
      REVIEW: [{
        "id": "1",
        "admissionDate": "22/10/2023",
        "email": "filipe@caju.com.br",
        "employeeName": "Filipe Marins",
        "status": "REVIEW",
        "cpf": "78502270001"
      }]
    }
  }
};