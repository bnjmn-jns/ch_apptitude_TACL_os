import React from 'react';
import { Link } from 'react-router';
import styled, { css } from 'styled-components';
import Theme from 'assets/theme';
import { rtlHelper } from 'assets/theme/helpers';

import Icon from '../Icon';

const getBackgroundColor = (statusProp, backgroundProp, theme) => {
  if (!statusProp || statusProp === 'loading') {
    return backgroundProp || 'transparent';
  }
  if (statusProp === 'success' || statusProp === 'error') {
    return theme.base.colors[statusProp];
  }
  return 'transparent';
};

const defaultStyle = ({
  status,
  hasStatus,
  fontColor,
  background,
  borderColor,
  hoverBackground,
  hoverBorderColor,
  hoverIconColor,
  hoverFontColor,
  theme,
  disabled,
  theme: { base, buttonStyles },
}) => {
  return css`
    font-family: ${base.font.family};
    cursor: ${hasStatus || status ? 'not-allowed' : 'pointer'};
    border: none;
    color: ${fontColor || base.colors.background};
    padding: 0 ${base.spacing.padding.md}px;
    height: ${base.spacing.height - 2}px;
    line-height: 1;
    border-radius: ${buttonStyles.borderRadius}px;
    outline: none;
    text-align: center;
    background-color: ${getBackgroundColor((hasStatus && hasStatus.type) || status, background, theme)};
    font-size: ${base.font.size.md}px;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    user-select: none;
    transition: all 0.3s ease;
    text-decoration: none;

    ${typeof buttonStyles.boxShadow === 'function' &&
      css`
        box-shadow: ${() =>
          buttonStyles.boxShadow(getBackgroundColor((hasStatus && hasStatus.type) || status, background, theme))};
      `};
    ${borderColor &&
      css`
        border: 1px solid ${borderColor};
      `};

    ${!status &&
      !hasStatus &&
      css`
        :hover,
        :focus {
          background-color: ${hoverBackground};
          color: ${hoverFontColor || base.colors.background};
          ${borderColor &&
            hoverBorderColor &&
            css`
              border: 1px solid ${hoverBorderColor};
            `};
          ${hoverIconColor &&
            css`
              svg {
                stroke: ${hoverIconColor};
              }
            `};
        }
      `};
    :disabled {
      cursor: not-allowed;
      background-color: ${base.colors.lightGrey};
      color: ${base.colors.midGrey};
    }
    ${!hasStatus &&
      !status &&
      !disabled &&
      typeof buttonStyles.activeState === 'function' &&
      css`
        :active {
          ${buttonStyles.activeState(getBackgroundColor((hasStatus && hasStatus.type) || status, background, theme))};
        }
      `} * {
      margin: 0;
    }
  `;
};

export const StyledButton = styled(
  ({
    fontColor,
    status,
    hasStatus,
    background,
    hoverBackground,
    hoverFontColor,
    borderColor,
    hoverBorderColor,
    icon,
    iconColor,
    hoverIconColor,
    theme,
    showClearIcon,
    ...rest
  }) => <button {...rest} />,
)`
  ${props => defaultStyle(props)};
`;

export const StyledA = styled(
  ({
    fontColor,
    status,
    hasStatus,
    background,
    hoverBackground,
    hoverFontColor,
    borderColor,
    hoverBorderColor,
    icon,
    iconColor,
    hoverIconColor,
    children,
    theme,
    showClearIcon,
    ...rest
  }) => <a {...rest}>{children}</a>,
)`
  ${props => defaultStyle(props)};
`;

export const StyledLink = styled(
  ({
    fontColor,
    status,
    hasStatus,
    background,
    hoverBackground,
    hoverFontColor,
    borderColor,
    hoverBorderColor,
    icon,
    iconColor,
    hoverIconColor,
    theme,
    showClearIcon,
    ...rest
  }) => <Link {...rest} />,
)`
  ${props => defaultStyle(props)};
`;

export const StyledIconInButton = styled(Icon)`
  ${props =>
    props.message &&
    css`
      margin-${rtlHelper(props.rtl, 'right')}: ${props.padding.sm}px;
    `};
`;

const defaultProps = {
  theme: Theme,
};

StyledLink.defaultProps = defaultProps;
StyledButton.defaultProps = defaultProps;
StyledA.defaultProps = defaultProps;
