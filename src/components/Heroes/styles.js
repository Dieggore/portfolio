import styled from 'styled-components';
import { flexboxColumn } from '../../styles/helpers';

export const HeroWrapper = styled.section`
  height: 1860px;
  width: 100%;
  background: ${({ frameNumber }) => frameNumber <= 12 ? `url(img/diego000${frameNumber}.png) center no-repeat` : `url(img/diego00001.png) center no-repeat`};
  background-size: cover;
  background-color: black;
  display: flex;
`;

export const WelcomeWrapper = styled.article`
  ${flexboxColumn};
  justify-content: space-between;
  width: 30%;
  margin: auto;
  align-self: flex-start;
  padding-top: 82rem;
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


