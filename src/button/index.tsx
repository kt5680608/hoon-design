import React, { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
export interface ButtonProps {
  /** text for button */
  children: ReactNode;

  /** choose color would you like */
  color?: string;

  /** choose background-color would you like */
  backgroundColor?: string;
  display?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isAnimated?: boolean;
  id?: string;
}
export const Button = ({
  children,
  color,
  backgroundColor,
  isAnimated = true,
  display = true,
  ...props
}: ButtonProps) => {
  const [isHover, setIsHover] = useState(0);
  return isAnimated === true ? (
    <motion.button
      {...props}
      whileHover={{ scale: 1.04 }}
      style={{
        position: 'relative',
        filter: `${isHover === 1 ? 'brightness(88%)' : 'brightness(100%)'}`,
        backgroundColor: backgroundColor ? backgroundColor : 'black',
        color: color ? color : 'white',
        border: 'none',
        padding: 10,
        borderRadius: '24px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        zIndex: 10,
        display: display === true ? 'inline-block' : 'none',
      }}
      onMouseOver={() => {
        setIsHover(1);
      }}
      onMouseOut={() => {
        setIsHover(0);
      }}
      id={props.id}
    >
      {children}
    </motion.button>
  ) : (
    <button
      style={{
        position: 'relative',
        filter: `${isHover === 1 ? 'brightness(88%)' : 'brightness(100%)'}`,
        backgroundColor: backgroundColor ? backgroundColor : 'black',
        color: color ? color : 'white',
        border: 'none',
        padding: 10,
        borderRadius: '24px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        zIndex: 10,
        display: display === true ? 'inline-block' : 'none',
      }}
    >
      {children}
    </button>
  );
};
