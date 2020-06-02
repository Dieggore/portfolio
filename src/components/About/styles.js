import styled from 'styled-components';
import { motion } from 'framer-motion';
import { flexboxRow } from '../../styles/helpers';

export const StyledAbout = styled.section`
  ${flexboxRow}
  justify-content: center;
  height: 780px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.92) 54.17%, rgba(0, 0, 0, 0.6556) 100%);
`;

export const AboutImage = styled(motion.img)`
  width: 464px;
  height: 461px;
`;

export const AboutWrapper = styled.div`
  ${flexboxRow}
  justify-content: space-between;
  width: 998px;
`;

export const AboutDescription = styled.section`
  max-width: 435px;
  font-size: 24px;
  line-height: 30px;
  height: auto;
  color: white;
  text-align: left;
`;

export const AboutTitle = styled.h3`
  color: white;
  font-weight: 600;
  font-size: 36px;
  line-height: 55px;
  text-align: left;
`;
