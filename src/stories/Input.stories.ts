import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../shared/ui';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
};
export default meta;

type Template = StoryObj<typeof Input>;


export const Default:  Template = {
  args :{
    label: 'Label',
    placeholder: 'Плейсхолдер'
  },
};