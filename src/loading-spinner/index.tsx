import React, { useEffect } from 'react';
import { SpinnerMainContainer, SpinnerCircle } from './style';
import { useAnimation } from 'framer-motion';
import { LoadingSpinnerProps } from './type';

function LoadingSpinner({ backgroundColor, innerColor }: LoadingSpinnerProps) {
  const mainContainerRotate = useAnimation();

  async function sequence() {
    mainContainerRotate.start({
      rotate: 90,
      transition: { repeatDelay: 0.3, repeat: Infinity, duration: 0.7 },
    });
  }
  useEffect(() => {
    sequence();
  }, []);

  return (
    <SpinnerMainContainer
      animate={mainContainerRotate}
      backgroundColor={backgroundColor}
    >
      <SpinnerCircle innerColor={innerColor} />
      <SpinnerCircle innerColor={innerColor} />
      <SpinnerCircle innerColor={innerColor} />
      <SpinnerCircle innerColor={innerColor} />
    </SpinnerMainContainer>
  );
}

export default LoadingSpinner;
