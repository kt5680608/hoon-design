import React, { HTMLAttributes, ReactNode } from 'react';
import { GlobalStyle } from '../globalstyles';

export interface HeadingProps extends HTMLAttributes<HTMLParagraphElement> {
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

  /** choose color would you want */
  color?: string;
}

export const Heading = ({ children, fontSize = 'md', color }: HeadingProps) => {
  return (
    <>
      <GlobalStyle />
      <h2
        style={{
          margin: 0,
          fontSize: `var(--font-size-${fontSize})`,
          fontWeight: 'bold',
          color: color ? color : 'black',
        }}
      >
        {children}
      </h2>
    </>
  );
};
