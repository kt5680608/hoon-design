import React from 'react';
import { Meta, Story } from '@storybook/react';
import { RollingText, CounterProps } from '../src';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'RollingText',
  component: RollingText,
  argTypes: {
    content: {
      defaultValue: 'Default',
    },
  },
};

export default meta;

const Template: Story<CounterProps> = (args) => <RollingText {...args} />;

export const Default = Template.bind({});

Default.args = {
  numberValue: 55555,
  unit: '원',
  fontSize: 'lg',
  width: '800px',
  backgroundColor: 'black',
};
