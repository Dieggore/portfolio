import React, { useEffect, useState } from "react";
import { useTransform, useViewportScroll } from "framer-motion";
import { HeroWrapper, WelcomeWrapper, FrameAnimation, HelloLine, GreetingLine } from './styles';
import { DISOLVE_IN } from '../../utils/animations';
import { getFrameValue, getFrameValueRaw } from  './helpers';
import About from '../About';
import Experience from "../Experience";

let INITIAL_FRAME_VALUE = 2;
let FINAL_FRAME_VALUE = 284;
const imgPathBuilder = frameNumber => getFrameValue(frameNumber);

const ScrollableHero = () => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 2840], [INITIAL_FRAME_VALUE, FINAL_FRAME_VALUE]);
  const [value, setValue] = useState(0);
  const [imgMap, setImgInMap] = useState({});

  useEffect(() => y.onChange(v => setValue(v)), [y]);
  
  useEffect(() => {
    let idx = 0;
    let temp = {};
    while(idx <= FINAL_FRAME_VALUE) {
      let img = new Image();
      img.src = imgPathBuilder(idx);
      temp[`Q${idx}`] = img;
      idx++;
    }
    setImgInMap(temp);
  }, []);

  console.log(imgMap);
  const ImageComponent = imgMap.Q1;
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
      {/* <FrameAnimation {...DISOLVE_IN} data-src={getFrameValue(value)} /> */}
      {/* {imgMap && React.createElement(imgMap.Q0)} */}
      {imgMap && imgMap[getFrameValueRaw(value)] && <FrameAnimation src={imgMap[getFrameValueRaw(value)].getAttribute('src')} />}
      {/* <ImageComponent /> */}


      <About />
      <Experience />
    </HeroWrapper>
  );
}

export default ScrollableHero;