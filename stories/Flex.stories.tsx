import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Flex, FlexProps } from '../src/';

const meta: Meta = {
  title: 'Flex',
  component: Flex,
};

export default meta;

const Template: Story<FlexProps> = (args) => <Flex {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </>
  ),
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '12px 12px 12px 12px',
  flexDirection: 'column',
  gap: '10px',
};
