import React from 'react';
// import GithubLogoSvg from '../../svg/gitLogo.svg';
// import LinkedInLogoSvg from '../../svg/linkedInLogo.svg';
import { StyledHeader, NavWrapper, NavItem, SocialLinksWrapper } from './styles';

const Header = () => (
  <StyledHeader>
    <NavWrapper>
      <NavItem>Home</NavItem>
      <NavItem>Stats</NavItem>
    </NavWrapper>
      {/* <GithubLogoSvg />
      <LinkedInLogoSvg />   */}
  </StyledHeader>
);

export default Header;