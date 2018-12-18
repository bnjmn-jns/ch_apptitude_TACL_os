import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import RcPagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import Text from '../Text';
import Icon from '../Icon';

import { messageShape } from '../../propTypes';

import Theme from 'assets/theme';

export const Wrapper = styled.div`
  display: flex;
`;

const paginationItemStyle = theme => {
  const { base: { colors }, inputStyles } = theme;
  return css`
    color: ${colors.primary};
    border-color: ${inputStyles.colors.border};
    border-radius: ${theme.base.borderRadius.md}px;
    :hover {
      border-color: ${inputStyles.colors.highlight};
      a {
        color: ${inputStyles.colors.highlight};
      }
    }
    :focus {
      outline: none;
      border-color: ${inputStyles.colors.highlight};
    }
    a {
      color: ${colors.primary};
    }
    &.rc-pagination-item-active a {
      color: ${colors.background};
    }
  `;
};

export const StyledPagination = styled(RcPagination)`
  ${({ theme }) => {
    const { inputStyles } = theme;
    const { colors, spacing } = inputStyles;
    return css`
      font-family: ${theme.base.font.family} !important;
      display: inline-block;
      margin: 0 ${spacing.padding.md}px 0 0;

      .rc-pagination-item-active.rc-pagination-item-active {
        background-color: ${colors.highlight};
        border-color: ${colors.highlight};

        :hover a {
          color: white;
        }

        :focus {
          border-color: ${theme.base.colors.secondaryDark};
        }
      }

      .rc-pagination-item {
        ${paginationItemStyle(theme)};
        margin: 0 ${spacing.padding.md}px 0 0;
      }

      .rc-pagination-options-quick-jumper {
        margin-left: 0;
        color: ${colors.labelText};
        input {
          margin: 0;
          margin-left: ${spacing.padding.sm}px;
          border-color: ${inputStyles.colors.border};
          border-radius: ${theme.base.borderRadius.md}px;

          :hover,
          :focus {
            border-color: ${colors.highlight};
          }
        }
      }

      .rc-pagination-disabled {
        opacity: 0;
        pointer-events: none;
      }

      .rc-pagination-next,
      .rc-pagination-prev {
        ${nextPreviousStyles(theme)};
        display: flex;
        align-items: center;
        justify-content: center;

        :focus {
          outline: none;
          border-color: ${colors.highlight};
        }

        :hover {
          border-color: ${colors.highlight};
          svg {
            stroke: ${colors.highlight};
          }
        }
      }

      .rc-pagination-jump-next,
      .rc-pagination-jump-prev {
        :hover:after {
          content: '►';
          font-size: 1em;
          color: ${colors.highlight};
        }

        :focus {
          outline: none;
          a {
            color: ${colors.highlight};
          }
        }
      }

      .rc-pagination-jump-prev {
        :hover:after {
          content: '◄';
        }
      }
    `;
  }};
`;

export const nextPreviousStyles = theme => css`
  ${paginationItemStyle(theme)};
  cursor: pointer;
  width: 28px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  border: 1px solid ${theme.inputStyles.colors.border};
  background-color: #fff;
  margin-right: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  :hover svg {
    stroke: ${theme.inputStyles.colors.border};
  }
`;

const PageSizeSelect = styled.select`
  ${({ theme }) => {
    const { padding } = theme.inputStyles.spacing;
    return css`
      -webkit-appearance: none;
      -moz-appearance: none;
      ${paginationItemStyle(theme)};
      border: 1px solid ${theme.inputStyles.colors.border};
      height: 28px;
      background-color: white;
      min-width: ${padding.lg}px;
      padding-left: ${padding.sm}px;
      padding-right: 24px;
      margin-left: ${padding.sm}px;
      cursor: pointer;
    `;
  }};
`;

const PageSizeWrapper = styled.span`
  position: relative;
`;

const PositionedIcon = styled(Icon)`
  ${({ padding }) => css`
    position: absolute;
    right: ${padding.sm}px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  `};
`;

const StyledPlaceholder = styled(Text)`
  margin-right: 5px;
`;

export const PageSizeControl = ({ onChange, pageSizeOptions, pageSizePlaceholder, pageSize, theme }) => {
  const isInArray = pageSizeOptions.includes(Number(pageSize));
  const lastOption = pageSizeOptions[pageSizeOptions.length - 1];
  const { inputStyles } = theme;
  const { colors } = inputStyles;
  const { padding } = inputStyles.spacing;

  return (
    <PageSizeWrapper>
      <StyledPlaceholder message={pageSizePlaceholder} noSelect color={colors.labelText} />
      <Text message=":" noSelect color={colors.labelText} />
      <PageSizeSelect onChange={onChange} value={isInArray || pageSize > lastOption ? pageSize : lastOption} theme={theme}>
        {pageSizeOptions.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </PageSizeSelect>
      <PositionedIcon size={12} path="chevronDown" padding={padding} />
    </PageSizeWrapper>
  );
};

PageSizeControl.propTypes = {
  onChange: PropTypes.func,
  pageSizeOptions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  pageSizePlaceholder: messageShape,
  pageSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  theme: PropTypes.object,
};

PageSizeControl.defaultProps = {
  theme: Theme,
};

StyledPagination.defaultProps = {
  theme: Theme,
};
