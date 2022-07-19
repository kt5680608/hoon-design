import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Skeleton, SkeletonProps } from '../src';

const meta: Meta = {
  title: 'Skeleton',
  component: Skeleton,
  argTypes: {
    content: {
      defaultValue: 'Default',
    },
  },
};

export default meta;

const Template: Story<SkeletonProps> = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});

Default.args = {
  height: '200px',
  type: 'rect',
  borderRadius: '16px',
};
