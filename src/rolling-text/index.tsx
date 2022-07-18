import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useCounterAnimation } from './use-count-up';

// styles
import { MainContainer, Blur, Focused, Text, UnitBox, Number } from './style';

export interface CounterProps {
  numberValue: number;
  unit?: string;
  fontSize: 'md' | 'lg';
  width: string;
  height: string;
  backgroundColor?: string;
  color?: string;
}

function Counter({
  numberValue,
  unit,
  fontSize = 'md',
  width,
  height,
  backgroundColor,
  color,
}: CounterProps) {
  const [calcFontSize, setCalcFontSize] = useState(36 | 48);
  useEffect(() => {
    if (fontSize === 'md') {
      setCalcFontSize(36);
    }
    if (fontSize === 'lg') {
      setCalcFontSize(48);
    }
  }, []);
  const [ref, inView] = useInView();
  const counterAnimation = useCounterAnimation(numberValue, calcFontSize);
  const [animationStart, setAnimationStart] = useState(false);
  const numberValueArr: Array<string> = String(numberValue).split('');
  const numberValueArrLength = numberValueArr.length + 1;

  // inView 값은 고정이 안되므로 inView를 애니메이션 트리거로 만들면 값이 바뀔때마다 애니메이션이 동작과 정지를 반복함. 따라서 animationStart state를 만들어서 따로 관리함
  useEffect(() => {
    if (inView) {
      setAnimationStart(true);
    }
  }, [inView]);
  useEffect(() => {
    if (animationStart) {
      counterAnimation.sequence();
    }
  }, [animationStart]);
  return (
    <MainContainer
      ref={ref}
      id="counter-container"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      backgroundColor={backgroundColor}
      height={height}
      width={width}
      fontSize={calcFontSize}
    >
      <Blur
        initial={{ width: `${(numberValueArrLength - 1) * 24}px` }}
        backgroundColor={backgroundColor}
      />
      <Focused fontSize={calcFontSize} backgroundColor={backgroundColor}>
        {numberValueArr[0] !== undefined && (
          <Number
            backgroundColor={backgroundColor}
            color={color}
            fontSize={calcFontSize}
            initial={{ y: `${(calcFontSize + 4) * 6}px` }}
            animate={counterAnimation.animation1}
            transition={{
              duration: 2,
              ease: 'circOut',
              delay: 0.1,
            }}
          >
            <div>01234567890</div>
          </Number>
        )}
        {numberValueArr[1] !== undefined && (
          <Number
            backgroundColor={backgroundColor}
            color={color}
            fontSize={calcFontSize}
            initial={{ y: `${(calcFontSize + 4) * 6}px` }}
            animate={counterAnimation.animation2}
            transition={{
              duration: 2,
              ease: 'circOut',
              delay: 0.2,
            }}
          >
            <div>01234567890</div>
          </Number>
        )}
        {numberValueArr[2] !== undefined && (
          <Number
            backgroundColor={backgroundColor}
            color={color}
            fontSize={calcFontSize}
            initial={{ y: `${(calcFontSize + 4) * 6}px` }}
            animate={counterAnimation.animation3}
            transition={{
              duration: 2,
              ease: 'circOut',
              delay: 0.3,
            }}
          >
            <div>01234567890</div>
          </Number>
        )}
        {numberValueArr[3] !== undefined && (
          <Number
            backgroundColor={backgroundColor}
            color={color}
            fontSize={calcFontSize}
            initial={{ y: `${(calcFontSize + 4) * 6}px` }}
            animate={counterAnimation.animation4}
            transition={{
              duration: 2,
              ease: 'circOut',
              delay: 0.4,
            }}
          >
            <div>01234567890</div>
          </Number>
        )}
        {numberValueArr[4] !== undefined && (
          <Number
            backgroundColor={backgroundColor}
            color={color}
            fontSize={calcFontSize}
            initial={{ y: `${(calcFontSize + 4) * 6}px` }}
            animate={counterAnimation.animation5}
            transition={{
              duration: 2,
              ease: 'circOut',
              delay: 0.5,
            }}
          >
            <div>01234567890</div>
          </Number>
        )}
        {numberValueArr[5] !== undefined && (
          <Number
            backgroundColor={backgroundColor}
            color={color}
            fontSize={calcFontSize}
            initial={{ y: `${(calcFontSize + 4) * 6}px` }}
            animate={counterAnimation.animation6}
            transition={{
              duration: 2,
              ease: 'circOut',
              delay: 0.6,
            }}
          >
            <div>01234567890</div>
          </Number>
        )}
        {numberValueArr[6] !== undefined && (
          <Number
            backgroundColor={backgroundColor}
            color={color}
            fontSize={calcFontSize}
            initial={{ y: `${(calcFontSize + 4) * 6}px` }}
            animate={counterAnimation.animation7}
            transition={{
              duration: 2,
              ease: 'circOut',
              delay: 0.7,
            }}
          >
            <div>01234567890</div>
          </Number>
        )}
        {numberValueArr[7] !== undefined && (
          <Number
            backgroundColor={backgroundColor}
            color={color}
            fontSize={calcFontSize}
            initial={{ y: `${(calcFontSize + 4) * 6}px` }}
            animate={counterAnimation.animation8}
            transition={{
              duration: 2,
              ease: 'circOut',
              delay: 0.8,
            }}
          >
            <div>01234567890</div>
          </Number>
        )}

        {numberValueArr[8] !== undefined && (
          <Number
            backgroundColor={backgroundColor}
            color={color}
            fontSize={calcFontSize}
            initial={{ y: `${(calcFontSize + 4) * 6}px` }}
            animate={counterAnimation.animation9}
            transition={{
              duration: 2,
              ease: 'circOut',
              delay: 0.9,
            }}
          >
            <div>01234567890</div>
          </Number>
        )}
        {numberValueArr[9] !== undefined && (
          <Number
            backgroundColor={backgroundColor}
            color={color}
            fontSize={calcFontSize}
            initial={{ y: `${(calcFontSize + 4) * 6}px` }}
            animate={counterAnimation.animation10}
            transition={{
              duration: 2,
              ease: 'circOut',
              delay: 1.1,
            }}
          >
            <div>01234567890</div>
          </Number>
        )}
        {numberValueArr[10] !== undefined && (
          <Number
            backgroundColor={backgroundColor}
            color={color}
            fontSize={calcFontSize}
            initial={{ y: `${(calcFontSize + 4) * 6}px` }}
            animate={counterAnimation.animation11}
            transition={{
              duration: 2,
              ease: 'circOut',
              delay: 1.3,
            }}
          >
            <div>01234567890</div>
          </Number>
        )}

        <UnitBox
          id="motion-box"
          backgroundColor={backgroundColor}
          color={color}
          initial={{
            x: `0px`,
            paddingRight: `${
              (numberValueArrLength * ((calcFontSize * 3) / 2)) / 3
            }px`,
          }}
          animate={counterAnimation.animationUnit}
          transition={{ duration: 2.4 }}
        >
          <Text fontSize={calcFontSize}>{unit}</Text>
        </UnitBox>
      </Focused>
      <Blur
        backgroundColor={backgroundColor}
        initial={{
          width: `${numberValueArrLength * ((calcFontSize / 3) * 2)}px`,
        }}
      />
    </MainContainer>
  );
}

export default Counter;
