import type { Meta, StoryObj } from '@storybook/react';

import Collumns from './index';
import { fn } from '@storybook/test';
import { EMPTY_COLUMNS, SEPARATED_DATA } from '../../../consts/testConsts';


const meta = {
  title: 'Components/Collumns',
  component: Collumns,
  tags: ['autodocs'],
  argTypes: {

  },
  args: {
    deleteRegistration: fn(),
    changeRegistrationStatus: fn(),
    separatedData: EMPTY_COLUMNS
  },
} satisfies Meta<typeof Collumns>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EmptyColumn: Story = {
  args: {
    separatedData: EMPTY_COLUMNS
  }
};

export const ColumnWithData: Story = {
  args: {
    separatedData: SEPARATED_DATA
  }
};