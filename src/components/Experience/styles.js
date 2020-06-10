import styled from 'styled-components';
// import { motion } from 'framer-motion';
import { flexboxRow } from '../../styles/helpers';

export const ExperienceWrapper = styled.section`
  height: 90vh;
  background-color: #000000c9;
  margin-bottom: 5rem;
  display: grid;
  grid-template-rows: 5% 55%;
  grid-gap: 5rem;
  justify-items: center;
  align-items: space-around;
  padding: 3rem 0rem;
  div {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 2em;
  }
`;

export const ExperienceTitle = styled.h3`
  // background-color: #000000c9;
  color: white;
  font-weight: 600;
  position: sticky;
  top: 0;
  font-size: 24px;
  //padding: 2rem;
  // margin-bottom: 2rem;
  line-height: 55px;
  width: 100%;
  text-align: center;
`;
