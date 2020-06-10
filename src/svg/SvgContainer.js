import React from 'react';
import { SvgWrapper, InlineSvg } from '../styles/helpers'; 

export const SvgContainer = ({ children }) => (
  <SvgWrapper>
    <InlineSvg>
      {children}
    </InlineSvg>
  </SvgWrapper>
);

export default SvgContainer;