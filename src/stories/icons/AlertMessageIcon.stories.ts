import type { Meta, StoryObj } from '@storybook/react';
import { AlertMessageIcon } from '../../shared/ui/Icons';

const meta: Meta<typeof AlertMessageIcon> = {
  title: 'Icons/AlertMessageIcon',
  component: AlertMessageIcon,
  tags: ['autodocs'],
};
export default meta;

type Template = StoryObj<typeof AlertMessageIcon>;


export const Default:  Template = {
  args :{
  },
};