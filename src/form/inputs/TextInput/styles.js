import React from 'react';
import styled, { css } from 'styled-components';
import InputMask from 'react-input-mask';

import { rtlHelper } from 'assets/theme/helpers';

export const StyledInput = styled(({ hasStatus, theme, showClearIcon, displayValidationBorderColor, ...rest }) => (
  <InputMask {...rest} />
))`
  ${({ theme: { inputStyles: { colors, metrics, spacing, fontSize }, rtl }, hasStatus, value, showClearIcon, disabled }) => {
    const fontColor = hasStatus && value && hasStatus.type !== 'success' ? colors[hasStatus.type] : colors.inputText;

    return css`
      border: none;
      border-radius: ${metrics.borderRadius}px;
      -moz-appearance: textfield;
      background-color: ${disabled ? colors.backgroundDisabled : colors.background};
      padding-${rtlHelper(rtl, 'right')}: ${value && showClearIcon ? `${spacing.padding.lg}px` : `${spacing.padding.sm}px`};
      font-size: ${fontSize.inputText}px;
      color: ${fontColor};
      padding: 0 ${spacing.padding.sm}px;
      text-align: ${rtlHelper(rtl, 'left')};
      flex-grow: 1;
      ::placeholder {
        color: ${colors.placeholderText};
      }
      :focus {
        outline: none;
      }
    `;
  }};
`;
