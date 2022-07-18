import { useAnimation } from 'framer-motion';

export const useCounterAnimation = (numberValue: number, fontSize: number) => {
  const numberValueArr: Array<string> = String(numberValue).split('');

  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  const animation5 = useAnimation();
  const animation6 = useAnimation();
  const animation7 = useAnimation();
  const animation8 = useAnimation();
  const animation9 = useAnimation();
  const animation10 = useAnimation();
  const animation11 = useAnimation();

  const animationUnit = useAnimation();

  const focusedNum: number[] = [];

  for (let i = 0; i < numberValueArr.length; i++) {
    if (numberValueArr[i] === '0') {
      focusedNum.push(10);
    } else {
      focusedNum.push(parseInt(numberValueArr[i]));
    }
  }

  console.log(focusedNum[11]);

  async function sequence() {
    if (focusedNum[0] !== undefined) {
      animation1.start({
        y: `${(fontSize + 4) * 5 - (fontSize + 4) * focusedNum[0] + 3}px`,
      });
    }
    if (focusedNum[1] !== undefined) {
      animation2.start({
        y: `${(fontSize + 4) * 5 - (fontSize + 4) * focusedNum[1] + 3}px`,
      });
    }
    if (focusedNum[2] !== undefined) {
      animation3.start({
        y: `${(fontSize + 4) * 5 - (fontSize + 4) * focusedNum[2] + 3}px`,
      });
    }
    if (focusedNum[3] !== undefined) {
      animation4.start({
        y: `${(fontSize + 4) * 5 - (fontSize + 4) * focusedNum[3] + 3}px`,
      });
    }
    if (focusedNum[4] !== undefined) {
      animation5.start({
        y: `${(fontSize + 4) * 5 - (fontSize + 4) * focusedNum[4] + 3}px`,
      });
    }
    if (focusedNum[5] !== undefined) {
      animation6.start({
        y: `${(fontSize + 4) * 5 - (fontSize + 4) * focusedNum[5] + 3}px`,
      });
    }
    if (focusedNum[6] !== undefined) {
      animation7.start({
        y: `${(fontSize + 4) * 5 - (fontSize + 4) * focusedNum[6] + 3}px`,
      });
    }
    if (focusedNum[7] !== undefined) {
      animation8.start({
        y: `${(fontSize + 4) * 5 - (fontSize + 4) * focusedNum[7] + 3}px`,
      });
    }
    if (focusedNum[8] !== undefined) {
      animation9.start({
        y: `${(fontSize + 4) * 5 - (fontSize + 4) * focusedNum[8] + 3}px`,
      });
    }
    if (focusedNum[9] !== undefined) {
      animation10.start({
        y: `${(fontSize + 4) * 5 - (fontSize + 4) * focusedNum[9] + 3}px`,
      });
    }
    if (focusedNum[10] !== undefined) {
      animation11.start({
        y: `${(fontSize + 4) * 5 - (fontSize + 4) * focusedNum[10] + 3}px`,
      });
    }

    animationUnit.start({
      x: `${((numberValueArr.length + 1) / 2) * ((fontSize * 2) / 3)}px`,
      paddingRight: '0px',
    });
  }

  return {
    sequence,
    animation1,
    animation2,
    animation3,
    animation4,
    animation5,
    animation6,
    animation7,
    animation8,
    animation9,
    animation10,
    animation11,
    animationUnit,
  };
};
