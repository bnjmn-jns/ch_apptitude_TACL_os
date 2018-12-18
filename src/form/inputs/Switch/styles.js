import styled, { css } from 'styled-components';
import Text from '../../../components/Text';
import { rtlHelper } from 'assets/theme/helpers';

const switchHeight = 28;

export const StyledSwitch = styled.div`
  ${({ inputStyles: { colors }, disabled, on, displayInnerLabel }) => css`
    border: 1px solid ${displayInnerLabel && on ? colors.highlight : colors.border};
    background: ${disabled ? colors.backgroundDisabled : colors.background};
    width: 58px;
    height: ${switchHeight}px;
    border-radius: 30px;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    opacity: ${disabled ? 0.5 : 1};
    display: flex;
    align-items: center;
    justify-content: center;

    transition: border 0.2 ease-in-out;
    overflow: hidden;
    :focus,
    :hover {
      ${props => !props.disabled && props.theme.uiStyles.focusStyle};
    }
  `};
`;

export const SwitchToggle = styled.div`
  ${({ inputStyles: { colors }, displayInnerLabel, on, rtl }) => {
    const toggleHeight = displayInnerLabel ? 28 : 16;
    return css`
      align-self: center;
      width: ${toggleHeight}px;
      height: ${toggleHeight}px;
      border-radius: 100%;
      position: absolute;
      transition: all 0.2s ease-in-out;
      background: ${getToggleColor(on, colors, displayInnerLabel)};
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
      ${rtlHelper(rtl, 'left')}: ${getToggleInnerPosition(on, displayInnerLabel)}px;
      ${rtlHelper(rtl, 'right')}: auto;
    `;
  }};
`;

export const Wrapper = styled.div`
  display: inline-block;
  outline: none;
  position: relative;
`;

export const BehindLabel = styled(Text)`
  position: relative;
  ${({ isYes, rtl }) => rtlHelper(rtl, isYes ? 'right' : 'left')}: -4px;
  z-index: 1;
`;

export const LabelGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const getToggleInnerPosition = (on, displayInnerLabel) => {
  if (displayInnerLabel) {
    return on ? 30 : 0;
  }
  return on ? 32 : 10;
};

const getToggleColor = (on, colors, displayInnerLabel) => {
  if (on) {
    return displayInnerLabel ? colors.highlight : colors.success;
  }
  return colors.border;
};
