import React from 'react';
import styled, { css } from 'styled-components';
import { Radio, RadioGroup } from 'react-radio-group';

export const StyledRadio = styled(({ colors, ...rest }) => <Radio {...rest} />)`
  ${({ disabled, colors }) => css`
    position: absolute;
    left: -9999px;

    :checked + label:after {
      content: ' ';
      display: block;
      transform: scale(1);
      opacity: 1;
    }

    :checked + label:before {
      border: 1px solid ${disabled ? colors.border : colors.highlight};
    }

    pointer-events: ${disabled ? 'none' : 'auto'};
  `};
`;

export const StyledRadioGroup = styled(RadioGroup)`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  ${({ disabled, theme, theme: { inputStyles } }) =>
    css`
      margin-bottom: 1em;
      color: ${inputStyles.colors.labelText};
      cursor: pointer;
      display: flex;
      align-items: center;
      position: relative;
      left: 2em;
      user-select: none;

      ${disabled &&
        `
    color: ${inputStyles.colors.border};
    cursor: not-allowed;
    `} :hover:before {
        border: 1px solid ${disabled ? inputStyles.colors.border : inputStyles.colors.highlight};
      }

      :before,
      :after {
        content: ' ';
        position: absolute;
        left: -2em;
        top: 50%;
        left: -2em;
        transform: translateY(-50%);
      }

      :before {
        display: block;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background-color: ${disabled ? inputStyles.colors.backgroundDisabled : inputStyles.colors.background};
        border: 1px solid ${inputStyles.colors.border};
        cursor: ${disabled ? 'cursor: not-allowed' : 'pointer'};
        box-sizing: border-box;
      }

      :after {
        transform: scale(0.5);
        opacity: 0;
        transition: ${theme.uiStyles.transitionAll};
        height: 6px;
        width: 6px;
        margin: 5px;
        background: ${disabled ? inputStyles.colors.border : inputStyles.colors.highlight};
        border-radius: 50%;
        transform: translateY(-130%) !important;
      }
    `};
`;
