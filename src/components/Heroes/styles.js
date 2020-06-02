import styled from 'styled-components';
import { flexboxColumn } from '../../styles/helpers';
import { motion } from 'framer-motion';

export const HeroWrapper = styled(motion.section)`
  height: 100vh;
  width: 100%; 
  background: ${({ frameNumber }) => `url(img/guitarColoredJPG/${frameNumber}.jpg) no-repeat`};
  background-size: cover;
  background-position: top 0px right 50%;
  background-color: black;
  display: flex;
  position: sticky;
`;

export const WelcomeWrapper = styled.article`
  ${flexboxColumn};
  width: 100%;
  height: 100%;
  background-color: #0000007d;
  margin: auto;
  align-self: flex-start;

`;

export const HelloLine = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 97px;
  text-align: center;
  color: white;
  > span {
    font-size: 66px;
    color: #FBFF48;
  }
`;

export const GreetingLine = styled.h1`
  font-size: 48px;
  color: white;
  font-family: Titillium Web;
  font-weight: normal;
  line-height: 73px;
  text-align: center;
`;


