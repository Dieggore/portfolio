export const getFrameValue = (frameNumber) => { 
  const roundedFrameNumber = Math.round(frameNumber);
  let frame = roundedFrameNumber;
  if(roundedFrameNumber < 126) {
    frame = 126;
  }  
  return `img/animation/Q${frame}.png`;
};

export const getFrameValueRaw = (frameNumber) => { 
  const roundedFrameNumber = Math.round(frameNumber);
  let frame = roundedFrameNumber;
  if(roundedFrameNumber < 126) {
    frame = 126;
  }  
  return `Q${frame}`;
};
