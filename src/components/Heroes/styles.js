import styled from 'styled-components';
import { flexboxColumn } from '../../styles/helpers';

export const HeroWrapper = styled.section`
  height: 920px;
  width: 100%; 
  background: ${({ frameNumber }) => `url(img/${frameNumber}.png) no-repeat`};
  background-size: contain;
  background-position: top 0px right 50%;
  background-color: black;
  display: flex;
  position: sticky;
`;

export const WelcomeWrapper = styled.article`
  ${flexboxColumn};
  justify-content: space-between;
  width: 50%;
  margin: auto;
  align-self: flex-start;
  padding-top: 10rem;
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


