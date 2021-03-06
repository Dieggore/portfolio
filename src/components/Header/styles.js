import styled from 'styled-components';
import { motion } from 'framer-motion';
import { flexboxRow } from '../../styles/helpers';

export const NavItem = styled.a`
  color: white;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  ${flexboxRow};
  justify-content: space-between;
  width: 144px;
  background-color: #000000c4;
`;

export const NavWrapper = styled.nav`
  ${flexboxRow};
  justify-content: space-between;
  width: 100%;
`;

export const SocialLinksWrapper = styled.div`
  ${flexboxRow};
  justify-content: space-between;
  width: 144px;
`;

export const StyledHeader = styled(motion.header)`
  ${flexboxRow};
  position: absolute;
  background-color: black;
  width: 100%;
  top: 0;
  z-index: 1;
  justify-content: space-between;
  height: 115px;
  padding: 0rem 5rem;
  position: sticky;
  
`;

