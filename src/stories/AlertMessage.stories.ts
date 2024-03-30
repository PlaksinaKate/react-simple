import type { Meta, StoryObj } from '@storybook/react';
import { AlertMessage } from '../shared/ui/AlertMessage/alert-message.ui';

const meta: Meta<typeof AlertMessage> = {
  title: 'AlertMessage',
  component: AlertMessage,
  tags: ['autodocs'],
};
export default meta;

type Template = StoryObj<typeof AlertMessage>;


export const Default:  Template = {
  args :{
    message: 'Пользователь с таким email уже зарегистрирован',
  },
};