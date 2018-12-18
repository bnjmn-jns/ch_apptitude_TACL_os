import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, injectGlobal } from 'styled-components';
import Select from '../Select/DesktopSelect';
import Text from '../../../components/Text';
import { baseInputStyle } from '../styles';

export const Wrapper = styled.div`
  ${({
    focused,
    disabled,
    regionSelectable,
    hasStatus,
    displayValidationBorderColor,
    value,
    theme: { inputStyles, inputStyles: { colors, spacing }, uiStyles, rtl },
    showClearIcon,
  }) =>
    css`
      ${baseInputStyle(inputStyles, hasStatus, displayValidationBorderColor, rtl)};
      padding: 0;
      overflow: visible;
      position: relative;
      ${regionSelectable &&
        css`
          padding-left: 0;
        `};
      display: flex;
      align-items: center;
      > div,
      input {
        height: 100% !important;
        width: 100%;
      }
      ${focused && uiStyles.focusStyle};
      ${disabled &&
        css`
          background: ${colors.backgroundDisabled} !important;
          cursor: not-allowed;
        `};
      input {
        border: none !important;
        box-shadow: none !important;
        border-radius: 0 !important;
        flex-grow: 1;
        color: ${hasStatus && value && hasStatus.type !== 'success' ? colors[hasStatus.type] : colors.inputText};
        background: ${colors.backgroundClear};
        padding: ${value && showClearIcon ? `0 ${spacing.padding.lg}px 0 0` : `0 ${spacing.padding.sm * 1.5}px 0 0`};
        :focus {
          outline: none !important;
        }
        ::placeholder {
          color: ${colors.placeholderText};
        }
        :disabled {
          background: ${colors.backgroundDisabled} !important;
          cursor: not-allowed;
        }
      }
      cursor: ${disabled ? 'not-allowed' : 'default'};
      * {
        ${disabled && 'cursor: not-allowed !important;'};
      }
    `};
`;

const PositionedEmojiBox = styled.div`
  ${({ spacing }) =>
    css`
      position: absolute;
      top: 2px;
      left: ${spacing.padding.sm * 1.5}px;
      height: ${spacing.height}px;
      width: ${spacing.height}px !important;
      display: flex;
      align-items: center;
      pointer-events: none;
    `};
`;

const ClickThroughText = styled(Text)`
  pointer-events: none;
`;

export const EmojiFlag = ({ flag, theme: { inputStyles: { spacing } } }) => (
  <PositionedEmojiBox spacing={spacing}>
    <ClickThroughText message={flag} size={22} noSelect />
  </PositionedEmojiBox>
);

EmojiFlag.propTypes = {
  flag: PropTypes.string,
  theme: PropTypes.object,
};

const selectWidth = 200;

export const StyledSelect = styled(Select)`
  ${({ value, focused, searching, theme: { inputStyles, uiStyles } }) => {
    const smallWidth = inputStyles.spacing.height * 2;
    const largeWidth = inputStyles.spacing.height * 3;
    const xlWidth = selectWidth;
    return css`
      top: -1px;
      left: -1px;
      margin-right: ${inputStyles.spacing.padding.sm}px;
      width: ${value ? smallWidth + 5 : largeWidth}px !important;
      ${searching &&
        css`
          width: ${xlWidth}px !important;
        `};
      transition: ${uiStyles.transition('width')};
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      .rc-select-selection-selected-value {
        display: none !important;
      }
      .rc-select-selection--single {
        min-width: ${smallWidth}px;
        border-top-right-radius: 0 !important;
        border-bottom-right-radius: 0 !important;
      }

      .select-right-box {
        border-left: none;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        ${focused &&
          css`
            border-right: 1px solid ${inputStyles.colors.highlight} !important;
          `};
        div {
          background: white;
        }
      }
      .rc-select-selection--single .rc-select-selection__rendered {
        margin-left: ${inputStyles.spacing.padding.sm * 1.5}px;
      }
      input {
        opacity: ${searching ? 1 : 0};
      }
    `;
  }};
`;

export const StyledText = styled(Text)`
  margin-right: ${props => props.theme.inputStyles.spacing.padding.sm}px;
`;

injectGlobal`
  .rc-select-dropdown {
    min-width: ${selectWidth}px;
  }
`;
