import React from 'react';
import {
  AboutImage, AboutTitle, AboutDescription, AboutWrapper
} from './styles';
import { WelcomeWrapper, HelloLine, GreetingLine } from '../Heroes/styles';
import { ARRIVE_FROM_LEFT } from '../../utils/animations';
import Parallaxator from '../Parallaxator';


export const About = () => (
  <AboutWrapper>
    <AboutDescription>
      <AboutTitle>About me</AboutTitle>
      I'm a software engineer with over 10 years of experience.<br /> 
      My core competency lies in architecting and developing front end applications. 
      I'm a craftsperson who cares deeply about software quality.
    </AboutDescription>
  </AboutWrapper>
);

export default About;
