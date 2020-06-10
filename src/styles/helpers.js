import styled, { css } from 'styled-components';

export const flexboxRow = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const flexboxColumn = css`
  display: flex;
  flex-direction: column;
  justify-content: center
`;

export const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  min-height: 24px;
  background: inherit;
`;

export const InlineSvg = styled.svg`
  height: 24px;
  width: 24px;
  color: white;
  fill: currentColor;
`;