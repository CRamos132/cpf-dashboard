import type { Meta, StoryObj } from '@storybook/react';

import Collumns from './index';


const meta = {
  title: 'Pages/Dashboard/Collumns',
  component: Collumns,
  tags: ['autodocs'],
  argTypes: {

  },
  args: {
    registrations: []
  },
} satisfies Meta<typeof Collumns>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EmptyColumn: Story = {
  args: {
    registrations: []
  }
};

export const ColumnWithData: Story = {
  args: {
    registrations: [
      {
        "id": "1",
        "admissionDate": "22/10/2023",
        "email": "filipe@caju.com.br",
        "employeeName": "Filipe Marins",
        "status": "REVIEW",
        "cpf": "78502270001"
      }
    ]
  }
};