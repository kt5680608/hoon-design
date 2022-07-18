import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Heading, HeadingProps } from '../src/';

const meta: Meta = {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      defaultValue: 'Default',
    },
  },
};

export default meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Text',
  fontSize: 'xl',
};
