import styled from 'styled-components';
import { flexboxRow } from '../../styles/helpers';

export const StyledAbout = styled.section`
  ${flexboxRow}
  justify-content: center;
  height: 780px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.92) 54.17%, rgba(0, 0, 0, 0.8556) 100%);
`;

export const AboutImage = styled.img`
  width: 464px;
  height: 461px;
`;

export const AboutWrapper = styled.div`
  ${flexboxRow}
  justify-content: space-between;
  width: 1270px;
`;

export const AboutDescription = styled.section`
  max-width: 635px;
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

// export const StyledLinkItem = styled.h5`
//   color: white;
//   margin-bottom: 0.1rem;
//   font-weight: normal;
//   cursor: pointer;

//   &:last-child {
//     margin-bottom: 2rem;
//   }
// `;

// export const ColumnTitle = styled.h5`
//   font-weight: 700;
//   color: #FAF3E6;
//   margin-bottom: 0.5rem;
// `;


// export const FooterColumnWrapper = styled.article`
//   width: auto;
// `;
