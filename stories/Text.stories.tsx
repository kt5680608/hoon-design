import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Text, TextProps } from '../src/Text';

const meta: Meta = {
  title: 'Text',
  component: Text,
  argTypes: {
    children: {
      defaultValue: 'Default',
    },
  },
};

export default meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Text',
  fontSize: 'xl',
};
