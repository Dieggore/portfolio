import React from 'react';
import {
  StyledAbout, AboutImage, AboutTitle, AboutDescription, AboutWrapper
} from './styles';
import { ARRIVE_FROM_LEFT } from '../../utils/animations';
import Parallaxator from '../Parallaxator';


export const About = () => (
  <StyledAbout>
    <AboutWrapper>
      <Parallaxator>  
        <AboutImage src="/img/diegoAbout.png" />
      </Parallaxator>
      <Parallaxator>
        <AboutDescription>
          <AboutTitle>About me</AboutTitle>
          I'm a pragmatic full stack engineer with over 10 years of experience. 
          My core competency lies in architecting and developing front end applications. 
          I'm a craftsperson who cares deeply about software quality in terms of code, performance and UI/UX.
          I love to experiment and enjoy starting projects from ground up and transforming ideas to viable products (MVP).
          Let's chat!
        </AboutDescription>
      </Parallaxator>
    </AboutWrapper>
  </StyledAbout>
);

export default About;
