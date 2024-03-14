import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../shared/ui/Button';

const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
  tags: ['autodocs'],
};
export default meta;

type Template = StoryObj<typeof Button>;


export const Default:  Template = {
  args :{
    children: 'В корзину',
  },
};