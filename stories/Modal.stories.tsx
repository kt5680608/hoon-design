import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Modal, ModalProps } from '../src';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Modal',
  component: Modal,
  argTypes: {
    modalButtonChildren: {
      defaultValue: 'Default',
    },
  },
};

export default meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});

Default.args = {
  buttonText: 'open',
  title: 'modal',
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  modalCloseButton: true,
  id: 'hihihi',
};
