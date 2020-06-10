import styled from 'styled-components';
import { flexboxColumn } from '../../styles/helpers';
import { motion } from 'framer-motion';

export const HeroWrapper = styled.section`
  display: grid;
  position: sticky;
`;

export const FrameAnimation = styled(motion.img)`
  width: 100%;
  margin: auto;
  height: auto;
  display: inline-block;
  object-fit: contain;
  position: sticky;
  top: 10px;
  z-index: -1;
`;

export const WelcomeWrapper = styled.article`
  ${flexboxColumn};
  // background-color: #0000007d;
  justify-content: space-around;
  height: 90vh;
  padding-bottom: 2rem;
  margin-top: 8rem;
`;

export const HelloLine = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 97px;
  text-align: center;
  color: white;
  position: sticky;
  top: 200px;
  margin-bottom: 6rem;
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
  position: sticky;
  top: 300px;
  margin-bottom: -8rem;
`;


