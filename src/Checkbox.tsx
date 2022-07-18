import React, { HTMLAttributes, ReactNode, useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';
export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** text for checkbox */
  children: ReactNode;

  /** choose size would you like */
  size: 'sm' | 'md' | 'lg';

  /** choose backgroundColor would you like */
  backgroundColor: string;

  /** choose border color would you like */
  borderColor: string;
}

export const Checkbox = ({
  children,
  size = 'md',
  backgroundColor,
  borderColor,
  ...props
}: Props) => {
  const [isClick, setIsClick] = useState(false);
  return (
    <div
      style={{
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        {...props}
        style={{
          backgroundColor:
            isClick === false
              ? 'white'
              : backgroundColor
              ? backgroundColor
              : 'black',
          border: borderColor ? `2px solid ${borderColor}` : '2px solid black',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontFamily: 'Helvetica',
          padding: '2px',
          width: size === 'sm' ? '8px' : size === 'md' ? '12px' : '16px',
          height: size === 'sm' ? '8px' : size === 'md' ? '12px' : '16px',
          borderRadius: '10%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: '4px',
        }}
        onClick={() => setIsClick(!isClick)}
      >
        {isClick === true && <BsCheckLg color="white" size="20" />}
      </div>
      <p
        style={{
          fontFamily: 'Helvetica',
          margin: '0px',
          fontSize: size === 'sm' ? '14px' : size === 'md' ? '16px' : '20px',
        }}
      >
        {children}
      </p>
    </div>
  );
};
