import React, { HTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  /** anything you want */
  children?: ReactNode;
  id: string;
  display?: 'none' | 'flex' | 'visible' | 'inline-flex';
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
  backgroundColor?: string;
  color?: string;
  border?: string;
  borderRadius?: string;
  isAnimated?: boolean;
  animateY?: string;
}

export const Box = ({
  children,
  id,
  display,
  justifyContent,
  alignItems,
  flexDirection,
  width,
  height,
  maxWidth,
  maxHeight,
  overflowX,
  overflowY,
  margin,
  padding,
  backgroundColor,
  color,
  border,
  borderRadius,
  isAnimated = false,
  animateY,
}: BoxProps) => {
  return (
    <motion.div
      id={id}
      style={{
        display: display,
        justifyContent: `${justifyContent ? justifyContent : 'flex-start'}`,
        alignItems: `${alignItems ? alignItems : 'flex-start'}`,
        width: width,
        height: height,
        maxWidth: maxWidth,
        maxHeight: maxHeight,
        overflowX: overflowX,
        overflowY: overflowY,
        margin: margin,
        padding: padding,
        flexDirection: flexDirection,
        backgroundColor: backgroundColor,
        color: `${color ? color : 'black'}`,
        border: border,
        borderRadius: borderRadius,
      }}
      initial={{
        y: `${isAnimated === true && animateY ? animateY : '20px'}`,
        opacity: `${isAnimated === true && 0}`,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: `${isAnimated === true && 0.5}`,
        },
      }}
    >
      {children}
    </motion.div>
  );
};
