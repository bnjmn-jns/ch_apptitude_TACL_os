import React from 'react';
import styled, { css } from 'styled-components';
import { baseInputStyle } from '../styles';
import { rtlHelper } from 'assets/theme/helpers';

export const CalendarWrapper = styled.div`
  ${({ theme: { inputStyles: { colors, fontSize } } }) =>
    css`
      position: absolute;
      z-index: 42;
      top: 37px;

      .CalendarDay__default.CalendarDay__default {
        color: ${colors.inputText};
      }

      .CalendarDay__selected.CalendarDay__selected,
      .CalendarDay__selected.CalendarDay__selected:active,
      .CalendarDay__selected.CalendarDay__selected:hover {
        background: ${colors.highlight} !important;
        border-color: ${colors.highlight} !important;
        color: white !important;
      }
      .DayPicker__withBorder {
        border-radius: 0;
      }
      .DayPickerNavigation_button__horizontal {
        padding: 6px;
        border-color: ${colors.border};
        background: none;
        border-style: solid;
        border-width: 1px;

        :hover {
          border-color: ${colors.highlight};
          svg {
            stroke: ${colors.highlight};
          }
        }
      }
      .SingleDatePickerInput_clearDate__default:focus,
      .SingleDatePickerInput_clearDate__default:hover {
        background: transparent;
        border-radius: 0;
      }
      div.DateInput.DateInput_1 {
        width: auto;
        flex-grow: 1;
        input {
          font-size: ${fontSize.inputText}px;
          color: ${colors.inputText};
          background-color: transparent;
          padding: 0;
          border-bottom: 0;
          line-height: 32px;
        }
      }
      .DateInput_input__focused {
        border: none;
      }

      .CalendarDay_container {
        border: 1px solid ${colors.border};
        :hover {
          border-color: ${colors.border};
        }
        :not(.CalendarDay__blocked_out_of_range) {
          color: ${colors.inputText};
          :hover {
            background: ${colors.backgroundDisabled};
          }
        }
        &.CalendarDay__blocked_out_of_range {
          cursor: not-allowed;
          * {
            cursor: not-allowed;
          }
        }
      }

      .SingleDatePickerInput_calendarIcon {
        left: -1.5em;
      }

      .SingleDatePickerInput_clearDate {
        position: static;
        transform: translate(0);
      }

      .CalendarMonth_caption.CalendarMonth_caption strong {
        font-weight: normal;
        color: ${colors.inputText};
      }

      .DayPicker_weekHeader_li small {
        color: ${colors.placeholderText};
      }
    `};
`;

export const PointerFang = () => (
  <svg role="presentation" focusable="false" className="DateInput_fang DateInput_fang_1" style={{ left: '30px', top: '-10px' }}>
    <path className="DateInput_fangShape DateInput_fangShape_1" d="M0,10 20,10 10,0z" />
    <path className="DateInput_fangStroke DateInput_fangStroke_1" d="M0,10 10,0 20,10" />
  </svg>
);

export const InputWrapper = styled.div`
  ${({
    focused,
    disabled,
    hasStatus,
    value,
    showClearIcon,
    displayValidationBorderColor,
    theme: { inputStyles: { colors, fontSize, spacing }, inputStyles, uiStyles, rtl },
  }) =>
    css`
      ${baseInputStyle(inputStyles, hasStatus, displayValidationBorderColor, rtl)};
      padding: 0 0 0 ${spacing.padding.sm}px;
      display: flex;
      flex-direction: ${rtl ? 'row-reverse' : 'row'};
      align-items: center;
      > input {
        height: 100% !important;
        width: 100%;
        font-size: ${fontSize.inputText}px;
        background: ${colors.backgroundClear};
        :focus {
          outline: none;
        }
      }
      ${focused && uiStyles.focusStyle};
      ${disabled &&
        `
        background: ${colors.backgroundDisabled} !important;
        cursor: not-allowed;
      `};
      input {
        border: none !important;
        box-shadow: none !important;
        border-radius: 0 !important;
        text-align: ${rtl ? 'right' : 'left'};
        flex-grow: 1;
        padding-${rtlHelper(rtl, 'left')}: ${spacing.padding.sm}px;
        color: ${hasStatus && value && hasStatus.type !== 'success' ? colors[hasStatus.type] : colors.inputText};
        padding: ${
          value && showClearIcon
            ? `0 ${spacing.padding.lg}px 0 ${spacing.padding.sm}px`
            : `0 ${spacing.padding.sm}px 0 ${spacing.padding.sm}px`
        }};
        ::placeholder {
          color: ${colors.placeholderText};
        }
        :disabled {
          background: ${colors.backgroundDisabled} !important;
          cursor: not-allowed;
        }
        :focus {
          outline: none;
        }
      }
      cursor: ${disabled ? 'not-allowed' : 'default'};
      * {
        ${disabled && 'cursor: not-allowed !important;'};
      }
    `};
`;
