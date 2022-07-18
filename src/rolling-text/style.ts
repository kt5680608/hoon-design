import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Box } from '../globalstyles';
import {
  NumberProps,
  TextProps,
  FocusedProps,
  MainContainerProps,
  BlurProps,
  UnitBoxProps,
} from './types';

export const MainContainer = styled(Box)<MainContainerProps>`
  width: ${(props) => (props.width ? props.width : '100vw')};
  height: ${(props) => (props.height ? props.height : '100vh')};
  min-width: ${(props) => (props.fontSize === 36 ? '240px' : '420px')};
  padding: 0 12px 0 12px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'black'};
`;

export const Focused = styled.div<FocusedProps>`
  height: ${(props) => props.fontSize && `${props.fontSize + 4}px`};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: white;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'black'};
  min-width: ${(props) => (props.fontSize === 36 ? '240px' : '360px')};
  margin-right: ${(props) => (props.fontSize === 36 ? '30px' : '60px')};
`;

export const Blur = styled(motion.div)<BlurProps>`
  height: 0px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'black'};
  box-shadow: 0 0 6px 4px
    ${(props) => (props.backgroundColor ? props.backgroundColor : 'black')};
  display: block;
  z-index: 20;
`;

export const NumberSpan = styled(motion.div)`
  width: 24px;
  height: 36px;
  box-shadow: inset 0 0 4px 10px black;
  position: relative;
  z-index: 2;
  text-align: center;
  display: absolute;
`;

export const Number = styled(motion.div)<NumberProps>`
  width: ${(props) => props.fontSize && `${props.fontSize / 2 + 6}px`};
  text-align: center;
  font-size: ${(props) => props.fontSize && `${props.fontSize}px`};
  word-break: break-all;
  line-height: ${(props) => props.fontSize && `${props.fontSize + 4}px`};
  font-weight: bold;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: -1px;
  color: ${(props) => (props.color ? props.color : 'white')};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'black'};
`;

export const Text = styled(motion.p)<TextProps>`
  text-align: center;
  font-size: ${(props) => props.fontSize && `${props.fontSize - 4}px`};
  word-break: break-all;
  vertical-align: middle;
  line-height: ${(props) => props.fontSize && `${props.fontSize - 4}px`};
  font-weight: bold;
  margin: 0;
`;

export const Span = styled(motion.span)`
  text-align: center;
  font-size: 32px;
  word-break: break-all;
  line-height: 40px;
  font-weight: 400;
  letter-spacing: -1px;
`;
export const Heading = styled.h2`
  font-size: 36px;
  line-height: 36px;
  font-weight: 900;
`;

export const UnitBox = styled(Box)<UnitBoxProps>`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'black'};
  color: ${(props) => (props.color ? props.color : 'white')};
  padding: 0 0 0 0px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 99;
  height: 100%;
`;
