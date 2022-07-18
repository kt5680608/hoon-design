import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

export const GlobalStyle = createGlobalStyle`
 :root {
  --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-md: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;
    --font-size-4xl: 2.25rem;
    --font-size-5xl: 3rem;
    --font-size-6xl: 3.75rem;
    --font-size-7xl: 4.5rem;
    --font-size-8xl: 6rem;
    --font-size-9xl: 8rem;
    }
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.4;
    font-size: 16px;
  }
  body.active-modal {
  overflow-y: hidden;
}
`;

export default GlobalStyle;

type BoxProps = {
  id: string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  height?: string;
  margin?: string;
  overflow?: string;
};

export const Box = styled(motion.div)<BoxProps>`
  display: ${(props) => props.display && props.display};
  flex-direction: ${(props) => props.flexDirection && props.flexDirection};
  justify-content: ${(props) => props.justifyContent && props.justifyContent};
  align-items: ${(props) => props.alignItems && props.alignItems};
  margin: ${(props) => props.margin && props.margin};
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
  overflow: ${(props) => props.overflow && props.overflow};
  position: relative;
  z-index: 1;
  background-color: black;
`;
