import styled from 'styled-components';
import { motion } from 'framer-motion';
import { flexboxRow } from '../../styles/helpers';

export const AboutWrapper = styled.div`
  background-color: #000000c4;
  height: 100vh;
  display: grid;
`;

export const AboutDescription = styled.section`
  max-width: 435px;
  margin: auto;
  font-size: 24px;
  line-height: 30px;
  height: auto;
  color: white;
  text-align: left;
  position: sticky;
`;

export const AboutTitle = styled.h3`
  color: white;
  font-weight: 600;
  font-size: 36px;
  line-height: 55px;
  text-align: left;
`;
