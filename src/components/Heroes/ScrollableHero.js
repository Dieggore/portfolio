import React, { useEffect, useState } from "react";
import { useTransform, useViewportScroll } from "framer-motion";
import { HeroWrapper, WelcomeWrapper, FrameAnimation, HelloLine, GreetingLine } from './styles';
import { DISOLVE_IN } from '../../utils/animations';
import { getFrameValue, getFrameValueRaw } from  './helpers';
import About from '../About';
import Experience from "../Experience";

let INITIAL_FRAME_VALUE = 1;
let FINAL_FRAME_VALUE = 31;
const imgPathBuilder = frameNumber => getFrameValue(frameNumber);

const ScrollableHero = () => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [200, 3100], [INITIAL_FRAME_VALUE, FINAL_FRAME_VALUE]);
  const [value, setValue] = useState(0);
  const [imgMap, setImgInMap] = useState({});

  useEffect(() => y.onChange(v => setValue(v)), [y]);
  
  useEffect(() => {
    let idx = 1;
    let temp = {};
    while(idx <= FINAL_FRAME_VALUE) {
      let img = new Image();
      img.src = imgPathBuilder(idx);
      temp[`Q${idx}`] = img;
      idx++;
    }
    setImgInMap(temp);
  }, []);

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
      {imgMap && imgMap[getFrameValueRaw(value)] && <FrameAnimation src={imgMap[getFrameValueRaw(value)].getAttribute('src')} />}
      <About />
      <Experience />
    </HeroWrapper>
  );
}

export default ScrollableHero;