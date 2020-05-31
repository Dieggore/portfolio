import React, { useEffect, useState } from "react";
import { useTransform, useViewportScroll } from "framer-motion";
import { HeroWrapper, WelcomeWrapper, HelloLine, GreetingLine } from './styles';

const getFrameValue = (frameNumber) => { 
  const roundedFrameNumber = Math.round(frameNumber) 
  if (roundedFrameNumber < 10) return `0${roundedFrameNumber}`;
  return roundedFrameNumber;
};


const ScrollableHero = () => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [200, 1200], [1, 12]);
  const [value, setValue] = useState(0);
  useEffect(() => y.onChange(v => setValue(v)), [y]);
 
  return (
    <HeroWrapper frameNumber={getFrameValue(value)}>
      <WelcomeWrapper>
        <HelloLine>Hello,<span>I'm Diego!</span></HelloLine>
        <GreetingLine>
          Nice to meet you! I'm a Web Developer who Ioves bringing ideas to life. 
        </GreetingLine>
      </WelcomeWrapper>
    </HeroWrapper>
  );
}

export default ScrollableHero;