import styled from 'styled-components';
import { flexboxColumn } from '../../styles/helpers';
import { motion } from 'framer-motion';

export const HeroWrapper = styled.section`
  display: grid;
  height: 500vh;
  position: sticky;
  
  background: linear-gradient(180deg,rgba(0, 0, 0, 0.92) 0%,rgb(142, 140, 140) 8%,rgb(0, 0, 0) 12%);
  //background: linear-gradient(180deg,rgba(255, 255, 255, 0.92) 0%,rgb(4, 4, 4) 11%,rgb(0, 0, 0) 100%);
`;

export const FrameAnimation = styled(motion.img)`
  width: 80%;
  margin: auto;
  height: auto;
  display: inline-block;
  object-fit: contain;
  position: sticky;
  top: -10px;
  z-index: -1;
`;

export const WelcomeWrapper = styled.article`
  ${flexboxColumn};
  background-color: #0000007d;
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


