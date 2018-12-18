import styled, { css } from 'styled-components';
import RcCheckbox from 'rc-checkbox';
import { rtlHelper } from 'assets/theme/helpers';

const CheckMarkStyles = (spacing, displayCheckMark, rtl) => css`
  height: ${10}px;
  border: 1px solid #ffffff;
  border-top: 0;
  border-left: 0;
  border-radius: 1px;
  ${rtlHelper(rtl, 'left')}: 4px;
  top: 0;
  left: 4px !important;
  ${!displayCheckMark &&
    css`
      display: none;
    `};
`;

export const StyledCheckbox = styled(RcCheckbox)`
  ${({
    theme: { rtl, inputStyles: { colors, spacing }, base: { colors: { darkerGrey } } },
    checked,
    disabled,
    displayCheckMark,
  }) =>
    css`
      display: flex;
      vertical-align: middle;
      align-items: center;

      .rc-checkbox-inner.rc-checkbox-inner {
        border-color: ${colors.border};
        border-radius: 2px;
        margin-${rtlHelper(rtl, 'right')}: ${spacing.padding.md}px;
        ${rtlHelper(rtl, 'left')}: 1px;
        ${checked &&
          disabled &&
          !displayCheckMark &&
          css`
            background-color: ${darkerGrey} !important;
          `};

      }
      .rc-checkbox-inner.rc-checkbox-inner {
        height: 16px;
        width: 16px;
      }

      :hover .rc-checkbox-inner.rc-checkbox-inner,
      .rc-checkbox-input:focus + .rc-checkbox-inner {
        border-color: ${colors.highlight};
      }

      .rc-checkbox-inner:after {
        ${props => CheckMarkStyles(spacing, props.displayCheckMark, rtl)};
      }

      ${props =>
        props.checked &&
        css`
          .rc-checkbox-inner.rc-checkbox-inner {
            border-color: ${colors.highlight};
            background-color: ${colors.highlight};

            :after {
              ${CheckMarkStyles(spacing, props.displayCheckMark, props.rtl)};
            }
          }
        `};

      ${props =>
        props.checked &&
        props.disabled &&
        css`
          .rc-checkbox-inner.rc-checkbox-inner.rc-checkbox-inner:after {
            border-color: ${colors.icon};
          }
        `};

      ${props =>
        props.disabled &&
        css`
          cursor: not-allowed !important;
        `};
      input {
        ${props =>
          props.disabled &&
          css`
            cursor: not-allowed !important;
          `};
      }
    `};
`;

export const CheckboxGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  ${({ inputStyles, disabled, theme: { rtl } }) =>
    css`
      display: inline-flex;
      align-items: center;
      margin-bottom: 1em;
      color: ${inputStyles.colors.labelText};
      user-select: none;
      flex-direction: ${rtl ? 'row-reverse' : 'row'};
      ${disabled &&
        css`
          opacity: 0.5;
          cursor: not-allowed !important;
        `};
    `};
`;
