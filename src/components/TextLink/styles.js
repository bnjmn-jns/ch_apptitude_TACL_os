import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router';

// eslint-disable-next-line jsx-a11y/anchor-has-content
export const StyledA = styled(({ theme, showClearIcon, message, block, ...rest }) => <a {...rest} />)`
  ${props => linkStyles(props.theme)};
`;

export const StyledLink = styled(({ theme, showClearIcon, message, href, block, ...rest }) => <Link {...rest} />)`
  ${props => linkStyles(props.theme)};
`;

const linkStyles = theme => css`
  cursor: pointer;
  color: ${theme.base.colors.secondary};
  :hover,
  :focus {
    color: ${theme.base.colors.secondaryDark};
  }
  *:active,
  *:focus {
    text-decoration: underline;
  }
`;
