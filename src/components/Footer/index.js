import React from 'react';
import Link from 'next/link';
import {
  StyledFooter,
} from './styles';

export const Footer = () => (
  <StyledFooter>
    <hr />
    <h5>This website is open source! Fork it on Github</h5>
    <h5>Diego Montes 2020</h5>
  </StyledFooter>
);

export default Footer;
