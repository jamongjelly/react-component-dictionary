import { useRef, useState } from 'react';
import { throttle } from 'lodash';

const WAIT = 700;

export const useBubblyButton = () => {
  const [animate, setAnimate] = useState(false);
  const throttled = useRef(
    throttle(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), WAIT);
    }, WAIT),
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    throttled.current();
  };

  return { animate, handleClick };
};
