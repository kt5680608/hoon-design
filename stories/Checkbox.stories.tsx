import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox, Props } from '../src/Checkbox';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onClick: action('clicked'),
    children: {
      defaultValue: 'Default',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'primary',
};
