export const getFrameValue = (frameNumber) => { 
  const roundedFrameNumber = Math.round(frameNumber);
  let frame = roundedFrameNumber;
  if(roundedFrameNumber < 1) {
    frame = 1;
  }  
  return `img/animation/Q${frame}.png`;
};

export const getFrameValueRaw = (frameNumber) => { 
  const roundedFrameNumber = Math.round(frameNumber);
  let frame = roundedFrameNumber;
  if(roundedFrameNumber < 1) {
    frame = 1;
  }  
  return `Q${frame}`;
};
