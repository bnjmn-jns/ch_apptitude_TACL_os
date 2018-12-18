import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ size, onClick, onMouseDown, clickThrough, hoverColor, iconType }) => css`
    cursor: ${onClick || onMouseDown ? 'pointer' : 'inherit'};
    height: ${size}px;
    width: ${size}px;
    display: inline-flex;
    ${clickThrough && 'pointer-events: none'};
    :hover svg,
    :focus svg {
      ${iconType === 'fill' ? 'fill' : 'stroke'}: ${hoverColor};
    }
    :focus {
      outline: none;
    }
  `};
`;
