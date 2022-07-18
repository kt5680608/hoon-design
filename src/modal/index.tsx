import React, { useState, ReactNode } from 'react';
import { Button } from '../../src';
import {
  ModalTitle,
  ModalBody,
  ModalContent,
  Overlay,
  ModalFooter,
} from './style';
import GlobalStyle from '../globalstyles';

export interface ModalProps {
  buttonText: ReactNode;
  title?: ReactNode;
  children?: ReactNode;
  modalCloseButton?: boolean;
  id?: string;
  backgroundColor?: string;
  display?: boolean;
  size?: 'sm' | 'lg';
  center?: 'normal' | 'center';
}
export const Modal = ({
  modalCloseButton = true,
  buttonText = 'open',
  display = true,
  size = 'sm',
  center = 'normal',
  ...props
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (isOpen) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }
  return (
    <>
      <GlobalStyle />
      <Button
        display={display}
        id={props.id}
        onClick={() => setIsOpen(!isOpen)}
        backgroundColor={props.backgroundColor}
      >
        {buttonText}
      </Button>
      {isOpen && (
        <ModalBody>
          <Overlay onClick={() => setIsOpen(!isOpen)}></Overlay>
          <ModalContent
            size={size}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ y: 1000 }}
          >
            <ModalTitle>{props.title}</ModalTitle>
            {props.children}
            <ModalFooter>
              {modalCloseButton && (
                <Button onClick={() => setIsOpen(!isOpen)}>close</Button>
              )}
            </ModalFooter>
          </ModalContent>
        </ModalBody>
      )}
    </>
  );
};
