import type { Meta, StoryObj } from '@storybook/react';
import { LoadingButton } from '../shared/ui';

const meta: Meta<typeof LoadingButton> = {
  title: 'Buttons/LoadingButton',
  component: LoadingButton,
  tags: ['autodocs'],
};
export default meta;

type Template = StoryObj<typeof LoadingButton>;


export const Default:  Template = {
  args :{
  },
};