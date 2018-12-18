import styled, { css, injectGlobal } from 'styled-components';
import { baseInputStyle } from '../styles';
import Select from '../Select/DesktopSelect';
import { rtlHelper } from 'assets/theme/helpers';

export const UnitBox = styled.div`
  ${({ theme: { uiStyles, inputStyles: { colors, metrics, spacing }, rtl }, value, unitPosition, showClearIcon, disabled }) =>
    css`
      height: 100%;
      z-index: 1;
      padding: ${
        value && unitPosition !== 'start' && showClearIcon
          ? `0 ${spacing.padding.lg}px 0 ${spacing.padding.sm * 1.5}px`
          : `0 ${spacing.padding.sm * 1.5}px`
      }};
      background: ${colors.backgroundDisabled};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8em;
      transition: ${uiStyles.transition('padding')};
      border-radius: ${getBorderRadiusValues(metrics.borderRadius, unitPosition, rtl)};
      border-${unitPosition === 'start' ? rtlHelper(rtl, 'right') : rtlHelper(rtl, 'left')}: ${
      disabled ? `1px solid ${colors.border}` : 'none'
    };
    `};
`;

const getBorderRadiusValues = (borderRadius, unitPosition, rtl) => {
  const unitOnLeft = `${borderRadius}px 0 0 ${borderRadius}px`;
  const unitOnRight = `0 ${borderRadius}px ${borderRadius}px 0`;

  return [[unitOnLeft, unitOnRight], [unitOnRight, unitOnLeft]][Number(unitPosition === 'end')][Number(rtl)];
};

export const Wrapper = styled.div`
  ${({ theme: { inputStyles, uiStyles, rtl }, focused, hasStatus, displayValidationBorderColor, disabled }) =>
    css`
      ${baseInputStyle(inputStyles, hasStatus, displayValidationBorderColor, rtl)};
      overflow: visible;
      padding: 0;
      display: flex;
      align-items: center;
      transition: ${uiStyles.transitionAll};
      background-color: ${disabled ? inputStyles.colors.backgroundDisabled : inputStyles.colors.background};
      cursor: text;
      ${disabled &&
        `
        cursor: not-allowed;
        * {
          cursor: not-allowed;
          }
      `};
      ${focused && uiStyles.focusStyle};
      input {
        align-self: stretch;
      }
    `};
`;

export const StyledInput = styled.input`
  ${({ unitPosition, value, disabled, rtl, inputStyles: { colors, fontSize, spacing, metrics }, hasStatus }) => {
    const inputPadding = getInputPadding(unitPosition, spacing, rtl);
    const fontColor = hasStatus && value && hasStatus.type !== 'success' ? colors[hasStatus.type] : colors.inputText;
    return css`
      padding: ${inputPadding};
      color: ${fontColor};
      background-color: ${disabled ? colors.backgroundDisabled : colors.background};
      font-size: ${fontSize.inputText}px;
      border-radius: ${unitPosition
        ? getBorderRadiusValues(metrics.borderRadius, unitPosition, !rtl)
        : `${metrics.borderRadius}px`};
      -moz-appearance: textfield;
      text-align: ${rtlHelper(rtl, 'left')};

      ::placeholder {
        color: ${colors.placeholderText};
      }
      flex-grow: 1;
      border: none;
      ::-webkit-inner-spin-button,
      ::-webkit-outer-spin-button {
        -webkit-appearance: none;
      }
      :focus {
        outline: none;
      }
    `;
  }};
`;

const getInputPadding = (unitPosition, spacing, rtl) => {
  const { sm, lg } = spacing.padding;
  if (rtl) {
    return `0 ${unitPosition !== 'end' ? `${sm}px 0 ${lg}px` : `${sm}px`}`;
  }
  return `0 ${unitPosition !== 'end' ? `${lg}px 0 ${sm}px` : `${sm}px`}`;
};

export const injectSelectStyles = width => {
  injectGlobal`
    .numberInputDropDown.rc-select-dropdown {
      min-width: auto;
      width: ${width}px;
    }
`;
};
export const UnitSelect = styled(Select)`
  ${({ units, value, disabled, focused, searching, theme: { inputStyles, uiStyles, rtl }, smallWidth, largeWidth }) => {
    const isOnLeft = (units && units.position === 'start' && !rtl) || (units && units.position === 'end' && rtl);
    const { borderRadius } = inputStyles.metrics;

    return css`
      z-index: 10;
      height: 100% !important;
      top: -1px;
      width: ${smallWidth + 5}px !important;
      transition: ${uiStyles.transition('width')};
      border-radius: 3px;


      ${units && units.position === 'start' ? rtlHelper(rtl, 'left') : rtlHelper(rtl, 'right')}: -1px;
      ${searching &&
        css`
          width: ${largeWidth}px !important;
        `};


      .rc-select-selection--single {
        width: ${smallWidth}px;
        border-radius: 0;
        border-top-left-radius: ${isOnLeft ? borderRadius : 0}px;
        border-bottom-left-radius: ${isOnLeft ? borderRadius : 0}px;
        border-right: none;

        ${focused &&
          units &&
          units.position === 'end' &&
          css`
            border-left: 1px solid ${inputStyles.colors.highlight};
          `}
      }

      .select-right-box {
        border-left: none;

        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        ${isOnLeft &&
          css`
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          `}
        ${focused &&
          units &&
          units.position === 'start' &&
          css`
            border-right: 1px solid ${inputStyles.colors.highlight} !important;
          `};
        div {
          background: ${disabled ? 'transparent' : 'white'};
        }
      }
      
      .rc-select-selection--single .rc-select-selection__rendered {
        margin-${rtlHelper(rtl, 'left')}: ${inputStyles.spacing.padding.sm * 1.5}px;

      }
      input {
        opacity: ${searching ? 1 : 0};
      }
    `;
  }};
`;
