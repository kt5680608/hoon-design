import React from 'react';
import { SkeletonBox, SkeletonBlur } from './style';
import { SkeletonProps } from './types';

export const Skeleton = ({
  type,
  height = '30px',
  margin,
  padding,
  width = '300px',
  diameter = '60px',
  borderRadius,
}: SkeletonProps) => {
  return (
    <SkeletonBox
      type={type}
      diameter={diameter}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      borderRadius={borderRadius}
    >
      <SkeletonBlur
        initial={{
          x: `${
            type === 'circle'
              ? `calc(-${diameter} * 2)`
              : `calc(${width}* -1.2 -  ${width} / 2)`
          }`,
          rotate: 12,
        }}
        animate={{
          x: `${
            type === 'circle' ? `calc(${diameter} * 2)` : `calc(${width} *1.2)`
          }`,
          transition: {
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 2,
          },
        }}
        height={height}
        width={width}
        type={type}
        diameter={diameter}
      />
    </SkeletonBox>
  );
};
