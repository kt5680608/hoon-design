import React, { HTMLAttributes, ReactNode } from 'react';
import { GlobalStyle } from './globalstyles';
import { motion } from 'framer-motion';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  /** set your text */
  children?: ReactNode;

  /** choose size would you want */
  fontSize?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl';

  /** choose weight would you want */
  fontWeight?: 'normal' | 'bold';

  /** choose color would you want */
  color?: string;
}

export const Text = ({
  children,
  fontSize = 'md',
  fontWeight = 'normal',
  color,
}: TextProps) => {
  return (
    <>
      <GlobalStyle />
      <motion.p
        style={{
          margin: 0,
          fontSize: `var(--font-size-${fontSize})`,
          fontWeight: fontWeight,
          color: color ? color : 'black',
        }}
      >
        {children}
      </motion.p>
    </>
  );
};
