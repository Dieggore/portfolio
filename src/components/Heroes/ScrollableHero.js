import React, { useEffect, useState } from "react";
import { useTransform, useViewportScroll } from "framer-motion";
import { HeroWrapper, WelcomeWrapper, FrameAnimation, HelloLine, GreetingLine } from './styles';
import { DISOLVE_IN } from '../../utils/animations';
import { getFrameValue } from  './helpers';
import About from '../About';
import Experience from "../Experience";

const ScrollableHero = () => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 2840], [2, 284]);
  const [value, setValue] = useState(0);

  useEffect(() => y.onChange(v => setValue(v)), [y]);
  
  return (
    <HeroWrapper>
      <WelcomeWrapper>
        <HelloLine>
          Hello, <span>I'm Diego!</span>
        </HelloLine>
        <GreetingLine>
          Nice to meet you! 
        </GreetingLine>
      </WelcomeWrapper>
      <FrameAnimation {...DISOLVE_IN} src={getFrameValue(value)} />
      <About />
      <Experience />
    </HeroWrapper>
  );
}

export default ScrollableHero;