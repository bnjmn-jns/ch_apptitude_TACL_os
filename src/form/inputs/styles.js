import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Theme from 'assets/theme'; //eslint-disable-line
import { rtlHelper } from 'assets/theme/helpers'; //eslint-disable-line
import media from 'assets/theme/media'; //eslint-disable-line
import Icon from './../../components/Icon';

export const inputBoxStyle = (inputStyles, hasStatus, displayValidationBorderColor) => css`
  background: ${inputStyles.colors.backgroundClear};
  border-radius: ${inputStyles.metrics.borderRadius}px;
  border: 1px solid
    ${hasStatus && hasStatus.type && hasStatus.type !== 'success'
      ? inputStyles.colors[hasStatus.type]
      : inputStyles.colors.border};
  ${media.sm`
    border: 1px solid ${getBorderColor(inputStyles, hasStatus, displayValidationBorderColor)};
  `};
`;

export const baseInputStyle = (inputStyles, hasStatus, displayValidationBorderColor, rtl) => css`
  ${inputBoxStyle(inputStyles, hasStatus, displayValidationBorderColor)};
  height: ${inputStyles.spacing.height}px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 ${inputStyles.spacing.padding.sm}px;
  color: ${inputStyles.colors.inputText};
  overflow: hidden;
  text-align: ${rtlHelper(rtl, 'left')};
  transition: border-color 0.2s ease-in-out;

  :disabled {
    cursor: not-allowed;
    background: ${inputStyles.colors.backgroundDisabled};
    border: 1px solid ${getBorderColor(inputStyles, hasStatus, displayValidationBorderColor)};
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const ClearInputIcon = ({ className, onClick, inputStyles }) => (
  <Icon
    path="x"
    size={15}
    strokeWidth={2}
    color={inputStyles.colors.icon}
    hoverColor={inputStyles.colors.iconHover}
    className={className}
    onClick={onClick}
  />
);

ClearInputIcon.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  inputStyles: PropTypes.object,
};

export const getBorderColor = (inputStyles, hasStatus, displayValidationBorderColor) => {
  if (hasStatus && hasStatus.type && hasStatus.type !== 'success' && displayValidationBorderColor) {
    return inputStyles.colors[hasStatus.type];
  }
  return inputStyles.colors.border;
};

export const InputIcon = styled(Icon)`
  ${({ theme }) => `margin-${rtlHelper(theme.rtl, 'left')}: ${theme.inputStyles.spacing.padding.sm}px`};
  pointer-events: none;
`;
