import styled, { css } from 'styled-components';
import { baseInputStyle } from '../styles';
import { rtlHelper } from 'assets/theme/helpers';

export const StyledInput = styled.textarea`
  ${({ theme, theme: { inputStyles, uiStyles, rtl }, hasStatus, value, showClearIcon, displayValidationBorderColor }) => {
    const { spacing, spacing: { padding }, fontSize, colors } = inputStyles;
    const textColor = hasStatus && value && hasStatus.type !== 'success' ? colors[hasStatus.type] : colors.inputText;
    return css`
      ${baseInputStyle(inputStyles, hasStatus, displayValidationBorderColor, rtl)};
      padding: ${padding.sm}px;
      padding-${rtlHelper(rtl, 'right')}: ${value && showClearIcon ? padding.lg : padding.sm}px;
      resize: vertical;
      font-size: ${fontSize.inputText}px;
      min-height: ${spacing.height}px;
      height: ${spacing.height * 2.2}px;
      color: ${textColor};
      font-family: ${theme.base.font.family};
      ::placeholder {
        color: ${colors.placeholderText};
      }
      :focus {
        ${uiStyles.focusStyle};
      }
    `;
  }};
`;
