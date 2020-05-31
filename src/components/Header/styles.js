import styled from 'styled-components';
import { flexboxRow } from '../../styles/helpers';

// export const GithubLogo = styled(githubLogoSvg)`
//   height: 40px;
//   width: 40px;
// `;

// export const LinkedInLogo = styled(linkedInLogoSvg)`
//   height: 40px;
//   width: 40px;
// `;

export const NavItem = styled.a`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

export const NavWrapper = styled.nav`
  ${flexboxRow};
  justify-content: space-between;
  width: 144px;
`;

export const SocialLinksWrapper = styled.div`
  ${flexboxRow};
  justify-content: space-between;
  width: 144px;
  background-color: black;
`;

export const StyledHeader = styled.header`
  ${flexboxRow};
  position: absolute;
  width: 100%;
  top: 0;
  justify-content: space-between;
  height: 115px;
  padding: 0rem 5rem;
`;

