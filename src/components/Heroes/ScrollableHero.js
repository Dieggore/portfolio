import React, { useEffect, useState } from "react";
import { useTransform, useViewportScroll } from "framer-motion";
import { HeroWrapper, WelcomeWrapper, HelloLine, GreetingLine } from './styles';

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
    <HeroWrapper frameNumber={getFrameValue(value)}>
      <WelcomeWrapper>
        <HelloLine>Hello, <span>I'm Diego!</span></HelloLine>
        <GreetingLine>
          Nice to meet you! I'm a Web Developer who Ioves bringing ideas to life. 
        </GreetingLine>
      </WelcomeWrapper>
    </HeroWrapper>
  );
}

export default ScrollableHero;