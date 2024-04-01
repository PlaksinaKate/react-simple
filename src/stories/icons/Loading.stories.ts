import type { Meta, StoryObj } from '@storybook/react';
import { LoadingIcon } from '../../shared/ui/Icons';

const meta: Meta<typeof LoadingIcon> = {
  title: 'Icons/Loading',
  component: LoadingIcon,
  tags: ['autodocs'],
};
export default meta;

type Template = StoryObj<typeof LoadingIcon>;


export const Default:  Template = {
  args :{
  },
};