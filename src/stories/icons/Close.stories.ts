import type { Meta, StoryObj } from '@storybook/react';
import { CloseIcon } from '../../shared/ui/Icons';

const meta: Meta<typeof CloseIcon> = {
  title: 'Icons/Close',
  component: CloseIcon,
  tags: ['autodocs'],
};
export default meta;

type Template = StoryObj<typeof CloseIcon>;


export const Default:  Template = {
  args :{
  },
};