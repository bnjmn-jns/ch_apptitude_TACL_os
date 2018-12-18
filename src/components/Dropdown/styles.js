import styled, { css } from 'styled-components';
import Pill from '../Pill';

export const Wrapper = styled.div`
  ${({ theme, contentWidth }) => {
    const { colors } = theme.inputStyles;
    return css`
      display: inline-flex;
      flex-direction: column;
      user-select: none;
      position: relative;
      color: ${colors.placeholderText};
      > div {
        ${contentWidth && `min-width: ${contentWidth}px;`};
      }
    `;
  }};
`;

export const PillShape = styled(Pill)`
  ${({ selectedOption, theme }) => {
    const { colors } = theme.inputStyles;
    return css`
      .left {
        display: flex;
        flex-grow: 1;
        color: ${selectedOption ? colors.inputText : colors.placeholderText};
        white-space: nowrap;
      }
    `;
  }};
`;

export const DropdownContents = styled.ul`
  ${({ theme, maxHeight }) => {
    const { inputStyles, base } = theme;
    const { colors, spacing } = inputStyles;
    return css`
      padding: 0;
      border: 1px solid ${colors.border};
      border-radius: ${base.borderRadius.mdLg}px;
      overflow: ${maxHeight ? 'auto' : 'hidden'};
      margin-top: ${spacing.height + spacing.padding.sm}px;
      position: absolute;
      left: 2%;
      z-index: 42;
      ${maxHeight && `max-height: ${maxHeight}px;`};
    `;
  }};
`;

export const DropdownItem = styled.li`
  ${({ theme, contentIsReactComponent }) => {
    const { colors, spacing } = theme.inputStyles;
    return css`
      color: ${colors.labelText};
      white-space: nowrap;
      border-bottom: 1px solid ${colors.border};
      list-style: none;
      padding: ${spacing.padding.sm}px ${contentIsReactComponent ? spacing.padding.sm : spacing.padding.md}px;
      cursor: pointer;
      display: flex;
      align-items: center;
      flex-grow: 1;

      background-color: ${colors.background};
      position: relative;

      :hover,
      :focus {
        background-color: ${colors.backgroundDisabled};
        outline: none;
      }

      :last-of-type {
        border: none;
      }
    `;
  }};
`;
