import styled, { css } from 'styled-components';
import Icon from '../Icon';

export const Box = styled.div`
  ${({ backgroundColor, theme: { base, uiStyles }, onClick, size, backgroundHoverColor }) => css`
    display: inline-flex;
    background-color: ${backgroundColor};
    border-radius: ${base.borderRadius.md}px;
    padding: ${base.spacing.padding[size] / 2}px ${base.spacing.padding[size]}px;
    cursor: ${onClick ? 'pointer' : 'default'};
    margin: ${base.spacing.padding.sm / 2}px;
    min-width: 50px;
    justify-content: center;
    align-items: center;
    transition: ${uiStyles.transitionAll};
    ${backgroundHoverColor &&
      css`
        :hover {
          background-color: ${backgroundHoverColor};
        }
      `};
  `};
`;

export const PositionedIcon = styled(Icon)`
  margin-right: ${({ theme }) => theme.base.spacing.padding.sm / 2}px;
`;
