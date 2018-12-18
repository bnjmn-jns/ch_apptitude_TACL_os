import { css } from 'styled-components';

export const textStyles = ({ theme, block, size, cursor, align, weight, color, type, hasStatus, noSelect }) => css`
  font-family: ${theme.base.font.family};
  display: ${block ? 'block' : 'inline-block'};
  margin: 0;
  color: ${getTextColor(type || hasStatus, color, theme)};
  font-size: ${size === 'inherit' ? 'inherit' : `${size || theme.base.font.size.md}px`};
  line-height: normal;
  font-weight: ${weight || 'normal'};
  text-align: ${align || 'left'};
  cursor: ${cursor || 'inherit'};
  ${noSelect && 'user-select: none;'};
  ::selection {
    background-color: ${theme.uiStyles.colors.selection.bg};
    color: ${theme.uiStyles.colors.selection.fg};
  }
  ${({ hoverColor }) =>
    hoverColor &&
    css`
      :hover {
        color: ${hoverColor};
      }
    `};
  * {
    font-family: ${theme.base.font.family};
    display: ${block ? 'block' : 'inline-block'};
    margin: 0;
    color: ${getTextColor(type || hasStatus, color, theme)};
    font-size: ${size || theme.base.font.size.md}px;
    line-height: normal;
    font-weight: ${weight || 'normal'};
    text-align: ${align || 'left'};
    ${noSelect && 'user-select: none;'};
    ::selection {
      background-color: ${theme.uiStyles.colors.selection.bg};
      color: ${theme.uiStyles.colors.selection.fg};
    }
  }
`;

const getTextColor = (typeIn, color, theme) => {
  if (typeIn) {
    const type = typeIn.type || typeIn;
    if (type === 'info') {
      return theme.base.colors.secondary;
    }
    return theme.base.colors[type] ? theme.base.colors[type] : color || theme.base.colors.primary;
  }
  return color || theme.base.colors.primary;
};
