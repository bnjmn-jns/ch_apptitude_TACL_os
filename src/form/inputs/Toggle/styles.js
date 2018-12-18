import styled, { css } from 'styled-components';
import { rtlHelper } from 'assets/theme/helpers';

export const Wrapper = styled.div`
  ${({ inputStyles, disabled, theme: { rtl } }) => {
    const { borderRadius } = inputStyles.metrics;
    return css`
      ${disabled &&
        `
      opacity: 0.5
      `};
      position: relative;
      display: flex;
      flex-direction: ${rtl ? 'row-reverse' : 'row'};

      div:first-of-type {
        border-top-${rtlHelper(rtl, 'left')}-radius: ${borderRadius}px;
        border-bottom-${rtlHelper(rtl, 'left')}-radius: ${borderRadius}px;
      }
      div:last-of-type {
        border-top-${rtlHelper(rtl, 'right')}-radius: ${borderRadius}px;
        border-bottom-${rtlHelper(rtl, 'right')}-radius: ${borderRadius}px;
      }
    `;
  }};
`;

export const Option = styled.div`
  ${({ theme, theme: { inputStyles }, isSelectedOption, disabled }) => css`
    display: inline-flex;
    height: ${inputStyles.spacing.height + inputStyles.spacing.padding.sm}px;
    padding: 0 ${inputStyles.spacing.padding.sm * 1.5}px;
    background-color: ${getOptionBackgroundColor(inputStyles, disabled, isSelectedOption)};
    border: 1px solid ${getOptionBorderColor(inputStyles, disabled, isSelectedOption)};
    cursor: ${disabled ? 'not-allowed' : isSelectedOption ? 'initial' : 'pointer'};
    margin-left: -1px;
    transition: all 0.3s ease-in-out;
    align-items: center;
    justify-content: center;
    z-index: 0;
    box-sizing: content-box !important;
    :focus,
    :hover {
      outline: none;
      ${!disabled &&
        `z-index: 10;
        ${theme.uiStyles.focusStyle};`};
    }
  `};
`;

const getOptionBackgroundColor = (inputStyles, disabled, isSelectedOption) => {
  const { colors } = inputStyles;
  if (disabled) {
    return isSelectedOption ? colors.disabledText : colors.backgroundDisabled;
  }
  return isSelectedOption ? inputStyles.colors.highlight : 'white';
};

const getOptionBorderColor = (inputStyles, disabled, isSelectedOption) => {
  const { colors } = inputStyles;
  if (disabled) {
    return isSelectedOption ? colors.disabledText : colors.border;
  }
  return isSelectedOption ? inputStyles.colors.highlight : colors.border;
};
