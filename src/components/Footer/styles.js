import styled from 'styled-components';
import { DOVE_GRAY } from '../../styles/colors';

export const StyledFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: ${DOVE_GRAY};
  padding: 3rem 3rem;
`;

export const StyledLinkItem = styled.h5`
  color: white;
  margin-bottom: 0.1rem;
  font-weight: normal;
  cursor: pointer;

  &:last-child {
    margin-bottom: 2rem;
  }
`;

export const ColumnTitle = styled.h5`
  font-weight: 700;
  color: #FAF3E6;
  margin-bottom: 0.5rem;
`;


export const FooterColumnWrapper = styled.article`
  width: auto;
`;
