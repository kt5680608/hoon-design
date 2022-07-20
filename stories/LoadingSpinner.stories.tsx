import React from 'react';
import { Meta, Story } from '@storybook/react';
import { LoadingSpinner, LoadingSpinnerProps } from '../src/';

const meta: Meta = {
  title: 'LoadingSpinner',
  component: LoadingSpinner,
  argTypes: {
    children: {
      defaultValue: 'Default',
    },
  },
};

export default meta;

const Template: Story<LoadingSpinnerProps> = (args) => (
  <LoadingSpinner {...args} />
);

export const Default = Template.bind({});

Default.args = {
  backgroundColor: 'white',
  innerColor: 'black',
};
