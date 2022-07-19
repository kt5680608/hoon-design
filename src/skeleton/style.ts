import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SkeletonProps, SkeletonBlurProps } from './types';

export const SkeletonBox = styled.div<SkeletonProps>`
  width: ${(props) =>
    props.type === 'circle'
      ? props.diameter
      : props.width
      ? props.width
      : '100%'};
  height: ${(props) =>
    props.type === 'circle'
      ? props.diameter
      : props.height
      ? props.height
      : '30px'};
  margin: ${(props) => props.margin && props.margin};
  padding: ${(props) => props.padding && props.padding};
  background-color: #ddd;
  border-radius: ${(props) =>
    props.type === 'circle'
      ? '50%'
      : props.borderRadius
      ? props.borderRadius
      : 0};
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
`;

export const SkeletonBlur = styled(motion.div)<SkeletonBlurProps>`
  box-shadow: 0 0 16px
    ${(props) =>
      props.type === 'circle'
        ? `calc(${props.diameter} / 8)`
        : `calc(${props.width} / 8)`}
    #e8e8e8;
  height: ${(props) =>
    props.type === 'circle'
      ? props.diameter
      : props.height
      ? props.height
      : '30px'};
`;
