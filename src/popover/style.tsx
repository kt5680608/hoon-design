import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RiCloseFill } from 'react-icons/ri';
import { PopoverContentProps } from './types';

export const PopoverContent = styled(motion.div)<PopoverContentProps>`
  position: absolute;
  top: 88%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'black'};
  padding: 24px 36px;
  border-radius: 64px;
  min-width: 300px;
  max-width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 426px) {
    min-width: 80vw;
    padding: 18px 24px;
  }
`;

export const CloseIcon = styled(RiCloseFill)``;

export const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 50%;
  padding: 6px;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #262626;
  }
`;
