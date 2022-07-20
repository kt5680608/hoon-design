import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LoadingSpinnerProps } from './type';
export const SpinnerMainContainer = styled(motion.div)<LoadingSpinnerProps>`
  width: 24px;
  height: 24px;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  border-radius: 50%;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'white'};
  padding: 8px;
`;

export const SpinnerCircle = styled(motion.div)<LoadingSpinnerProps>`
  width: 8px;
  height: 8px;
  background-color: ${(props) =>
    props.innerColor ? props.innerColor : 'black'};
  border-radius: 50%;
`;
