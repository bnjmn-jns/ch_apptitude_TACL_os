import React from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal, css } from 'styled-components';
import RcSelect from 'rc-select';

import Icon from '../../../components/Icon';
import { baseInputStyle, inputBoxStyle, getBorderColor } from '../styles';
import { statusTypeShape } from '../../../propTypes';
import { rtlHelper } from 'assets/theme/helpers';

export const SelectElement = styled.select`
  ${({ inputStyles, hasStatus, displayValidationBorderColor, rtl }) =>
    css`
      -webkit-appearance: none;
      ${baseInputStyle(inputStyles, hasStatus, displayValidationBorderColor, rtl)};
      border-right: none;
      width: 100%;
      outline: none;
    `};
`;

export const injectGlobalSelectStyles = theme => {
  const { inputStyles: { fontSize, colors, spacing }, uiStyles: { transitionAll }, inputStyles } = theme;
  injectGlobal` 
    .rc-select-selection__placeholder {
      font-size: ${fontSize.inputText}px;
      color: ${colors.placeholderText};
    }

    .rc-select-dropdown {
      max-height: ${spacing.height * 8.5}px;
      overflow: scroll;

    }
    .rc-select-dropdown--single {
      ${inputBoxStyle(inputStyles)};
      height: auto;
    }

    .rc-select-selection--single.rc-select-selection--single.rc-select-selection--single  {
    transition: ${transitionAll};
      
      padding: 0;
      .rc-select-selection__rendered{
        height: ${spacing.height}px;
        line-height: ${spacing.height}px;
        font-size: ${fontSize.inputText}px;
      }
    }

    li.rc-select-dropdown-menu-item {
      border-bottom: 1px solid ${colors.border};
      padding:${spacing.padding.sm}px ${spacing.padding.md}px;
      display: flex;
      align-items: center;
      background-color: ${colors.background};
      position: relative;
      font-weight: normal;
      font-size: ${fontSize.inputText}px;
      transition: ${transitionAll};
      color: ${colors.inputText};
      font-family: ${theme.base.font.family};
      height: ${spacing.height}px; 
      
      &.rc-select-dropdown-menu-item-active {
        background-color: ${colors.backgroundDisabled};
        color: ${colors.disabledText};
      }
    
      :hover,
      :focus {
        background-color: ${colors.backgroundDisabled};
        color: ${colors.disabledText};
        outline: none;
      }

      :last-of-type {
        border: none;
      }
    }

    li.rc-select-dropdown-menu-item-disabled {
      color: ${colors.disabledText};
      cursor: not-allowed;
      :hover {
        background: ${colors.background};
        color: ${colors.disabledText};
        
      }
    }
    
    .rc-select-focused .rc-select-selection,
    .rc-select-enabled .rc-select-selection:hover {
      box-shadow: none;
      border-color: ${colors.highlight};
    }
  `;
};

export const StyledSelect = styled(RcSelect)`
  ${({ value, theme: { inputStyles, inputStyles: { colors }, rtl }, hasStatus, displayValidationBorderColor, disabled }) =>
    css`
      width: 100%;

      .rc-select-selection--single {
        ${baseInputStyle(inputStyles, hasStatus, displayValidationBorderColor, rtl)};
        background-color: ${disabled ? colors.backgroundDisabled : colors.background};
        * {
          color: ${value ? colors.inputText : colors.disabledText};
        }
      }

      input {
        color: ${inputStyles.colors.inputText};
        font-size: ${inputStyles.fontSize.inputText}px;
      }
    `};
`;

export const RightBox = styled.div`
  ${({ theme, hovering, focused, hasStatus, displayValidationBorderColor, disabled }) => {
    const { inputStyles: { colors, spacing, metrics }, inputStyles, uiStyles } = theme;
    return css`
      ${inputBoxStyle(inputStyles)};
      border-radius: 0 ${metrics.borderRadius}px ${metrics.borderRadius}px 0;
      width: ${spacing.height}px;
      height: ${spacing.height}px;
      background-color: ${disabled ? colors.backgroundDisabled : colors.background};
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      position: absolute;
      right: 0;
      pointer-events: none;
      border-color: ${hovering || focused
        ? colors.highlight
        : getBorderColor(theme.inputStyles, hasStatus, displayValidationBorderColor)} !important;
      transition: ${uiStyles.transitionAll};
      svg {
        transition: ${uiStyles.transitionAll};
      }
    `;
  }};
`;

export const RightBoxWithChevron = ({ hovering, focused, disabled, theme, hasStatus, displayValidationBorderColor }) => {
  const { inputStyles } = theme;
  return (
    <RightBox
      className="select-right-box"
      hasStatus={hasStatus}
      displayValidationBorderColor={displayValidationBorderColor}
      disabled={disabled}
      hovering={hovering && !disabled}
      focused={focused && !disabled}
      theme={theme}
    >
      <Icon
        path="chevronDown"
        color={
          (focused || hovering) && !disabled
            ? inputStyles.colors.highlight
            : getBorderColor(inputStyles, hasStatus, displayValidationBorderColor)
        }
        size={20}
      />
    </RightBox>
  );
};

RightBoxWithChevron.propTypes = {
  hovering: PropTypes.bool,
  focused: PropTypes.bool,
  disabled: PropTypes.bool,
  hasStatus: statusTypeShape,
  displayValidationBorderColor: PropTypes.bool,
  theme: PropTypes.object,
};
