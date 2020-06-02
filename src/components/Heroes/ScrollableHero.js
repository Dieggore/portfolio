import React, { useEffect, useState } from "react";
import { useTransform, useViewportScroll } from "framer-motion";
import { HeroWrapper, WelcomeWrapper, HelloLine, GreetingLine } from './styles';
import { DISOLVE_IN } from '../../utils/animations';

const getFrameValue = (frameNumber) => { 
  const roundedFrameNumber = Math.round(frameNumber) 
  if (roundedFrameNumber < 2) return `diego0000${roundedFrameNumber}`;
  if (roundedFrameNumber < 10) return `diego000${roundedFrameNumber}1`;
  return `diego00${roundedFrameNumber}1`;
};

const ScrollableHero = () => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 680], [1, 17]);
  const [value, setValue] = useState(1);
  useEffect(() => y.onChange(v => setValue(v)), [y]);
  return (
    <HeroWrapper {...DISOLVE_IN} frameNumber={getFrameValue(value)}>
      <WelcomeWrapper>
        <HelloLine>Hello, <span>I'm Diego!</span></HelloLine>
        <GreetingLine>
          Nice to meet you! 
        </GreetingLine>
      </WelcomeWrapper>
    </HeroWrapper>
  );
}

export default ScrollableHero;