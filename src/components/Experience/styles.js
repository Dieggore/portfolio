import styled from 'styled-components';
// import { motion } from 'framer-motion';
import { flexboxRow } from '../../styles/helpers';

export const ExperienceWrapper = styled.section`
  height: auto;
  padding: 3rem;
  display: grid;
  grid-template-rows: 10% 60%;
  justify-items: center;
  align-items: center;
  background: url('img/texture.jpeg');
  // background-size: cover;

  div {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 0.5em;
  }
`;

export const ExperienceTitle = styled.h3`
  color: white;
  font-weight: 600;
  font-size: 36px;
  line-height: 55px;
  width: 100%;
  text-align: center;
`;
