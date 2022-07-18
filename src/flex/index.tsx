import React, { HTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  /** anything you want */
  children?: ReactNode;
  /** Defines the alignment along the main axis.  */
  justifyContent?:
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'flex-start'
    | 'flex-end';

  /** Defines the default behaviour for how flex items are laid out along the cross axis on the current line */
  alignItems?:
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'flex-start'
    | 'flex-end';

  /** Establishes the main axis, thus defining the direction flex items are placed in the flex container. */
  flexDirection?: 'row' | 'column';
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  overflowX?: 'hidden' | 'visible' | 'auto' | 'scroll';
  overflowY?: 'hidden' | 'visible' | 'auto' | 'scroll';
  margin?: string;
  padding?: string;
  gap?: string;
}

export const Flex = ({
  children,
  justifyContent,
  alignItems,
  flexDirection,
  overflowX,
  overflowY,
  margin,
  padding,
  gap,
}: FlexProps) => {
  return (
    <motion.div
      style={{
        display: 'flex',
        justifyContent: `${justifyContent ? justifyContent : 'flex-start'}`,
        alignItems: `${alignItems ? alignItems : 'flex-start'}`,
        overflowX: overflowX,
        overflowY: overflowY,
        margin: margin,
        padding: padding,
        flexDirection: flexDirection,
        gap: gap,
      }}
    >
      {children}
    </motion.div>
  );
};
