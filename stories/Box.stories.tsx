import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Box, BoxProps } from '../src/';

const meta: Meta = {
  title: 'Box',
  component: Box,
};

export default meta;

const Template: Story<BoxProps> = (args) => <Box {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: 'example',
  children: 'my name hoon',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '200px',
  height: '100px',
  margin: '12px 12px 12px 12px',
  flexDirection: 'column',
  backgroundColor: 'black',
  borderRadius: '12px',
  color: 'white',
  isAnimated: true,
};
