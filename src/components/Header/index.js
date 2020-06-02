import React from 'react';
import GitLogo from '../../svg/GitLogo.js';
import LinkedInLogo from '../../svg/LinkedInLogo.js';
import Envelope from '../../svg/Envelope.js';
import { StyledHeader, NavWrapper, NavMenu, NavItem, SvgWrapper, InlineSvg, SocialLinksWrapper } from './styles';
import { ARRIVE_FROM_TOP } from '../../utils/animations';

const Header = () => (
  <StyledHeader {...ARRIVE_FROM_TOP}>
    <NavWrapper>
      <NavMenu>
        <NavItem>Home</NavItem>
        <NavItem>Stats</NavItem>
      </NavMenu>
      <SocialLinksWrapper>
        <NavItem href="https://github.com/Dieggore">
          <SvgWrapper>
            <InlineSvg>
              <GitLogo />
            </InlineSvg>
          </SvgWrapper>
        </NavItem>
        <NavItem href="https://www.linkedin.com/in/diego-montes-07934386/">
          <SvgWrapper>
            <InlineSvg>
              <LinkedInLogo />
            </InlineSvg>
          </SvgWrapper>
        </NavItem>
        <NavItem href="mailto:dm_pc@live.com?subject=Hey Diego!">
          <SvgWrapper>
            <InlineSvg>
              <Envelope />
            </InlineSvg>
          </SvgWrapper>
        </NavItem>
      </SocialLinksWrapper>
    </NavWrapper>
  </StyledHeader>
);

export default Header;
