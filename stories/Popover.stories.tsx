import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Popover, PopoverProps } from '../src';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Popover',
  component: Popover,
  argTypes: {
    content: {
      defaultValue: 'Default',
    },
  },
};

export default meta;

const Template: Story<PopoverProps> = (args) => <Popover {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'check your notification',
  isPopoverOpen: true,
};
