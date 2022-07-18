import React, { useEffect, useState, ReactNode } from 'react';
import { PopoverContent, CloseButton, CloseIcon } from './style';
import { Text } from '../Text';

export interface PopoverProps {
  children?: ReactNode;
  backgroundColor?: string;
  color?: string;
  isAnimated?: boolean;
  isPopoverOpen?: boolean;
}
export const Popover = ({
  children,
  backgroundColor,
  color = 'white',
  isAnimated = true,
  isPopoverOpen = true,
}: PopoverProps) => {
  useEffect(() => {
    setIsOpen(isPopoverOpen);
  }, [isPopoverOpen]);
  const [isOpen, setIsOpen] = useState<boolean>(isPopoverOpen);

  if (isOpen) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }
  return isAnimated
    ? isOpen && (
        <PopoverContent
          id="popover-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          backgroundColor={backgroundColor}
        >
          <Text color={color} fontSize="md" fontWeight="bold">
            {children}
          </Text>
          <CloseButton onClick={() => setIsOpen(false)}>
            <CloseIcon color="white" size={24} />
          </CloseButton>
        </PopoverContent>
      )
    : isOpen && (
        <PopoverContent id="popover-content" backgroundColor={backgroundColor}>
          <Text color={color} fontSize="md" fontWeight="bold">
            {children}
          </Text>
          <CloseButton onClick={() => setIsOpen(false)}>
            <CloseIcon color="white" size={24} />
          </CloseButton>
        </PopoverContent>
      );
};
