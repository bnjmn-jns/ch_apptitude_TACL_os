import styled, { css } from 'styled-components';
import { ClearInputIcon } from '../styles';
import Text from '../../../components/Text';
import StatusIcon from '../../../components/Icon/StatusIcon';
import FormHelper from '../../../components/FormHelper';

import { rtlHelper } from 'assets/theme/helpers';

import media from 'assets/theme/media';

export const Label = styled.label`
  ${({ inputStyles, disabled, displayValidationMessage, labelPosition, rtl }) =>
    css`
      font-size: ${inputStyles.fontSize.labelText};
      display: flex;
      position: relative;
      ${disabled && `color: ${inputStyles.colors.backgroundDisabled};`};
      padding-bottom: ${displayValidationMessage ? `${inputStyles.spacing.padding.lg * 1.5}px` : 0};
      align-items: ${rtl ? 'flex-end' : 'flex-start'};
      flex-direction: column;
      ${media.sm`
        align-items: ${labelPosition === 'top' ? rtlHelper(rtl, 'flex-start') : 'center'};
        flex-direction: ${getflexDirection(labelPosition, rtl)};
      `};
    `};
`;

const getflexDirection = (labelPosition, rtl) => {
  if (labelPosition === 'top') {
    return 'column';
  }
  return rtl ? 'row-reverse' : 'row';
};

export const InnerLabel = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  flex-direction: ${({ rtl }) => (rtl ? 'row-reverse' : 'row')};
`;

const getLabelMarginBottom = (labelPosition, inputStyles, description) => {
  if (labelPosition === 'top') {
    return description ? `${inputStyles.spacing.padding.sm}px` : `${inputStyles.spacing.padding.md}px`;
  }
  return 0;
};

export const LabelText = styled(Text)`
  ${({ labelPosition, inputStyles, description, rtl }) =>
    css`
      text-align: ${rtlHelper(rtl, 'left')};
      margin-bottom: ${description ? `${inputStyles.spacing.padding.sm}px` : `${inputStyles.spacing.padding.md}px`};
      ${media.sm`
        text-align: ${labelPosition === 'top' ? rtlHelper(rtl, 'left') : rtlHelper(rtl, 'right')};
        margin-bottom: ${getLabelMarginBottom(labelPosition, inputStyles, description)};
      `};
    `};
`;

export const LabelContainer = styled.div`
  ${({ labelPosition, inputStyles, labelAtTop, rtl }) => css`
    display: flex;
    flex-direction: column;
    max-width: ${labelPosition === 'top' ? 450 : 200}px;
    margin-${rtlHelper(rtl, 'right')}: ${inputStyles.spacing.padding.md}px;
    ${labelAtTop &&
      `
        align-self: start;
        margin-top: ${inputStyles.spacing.padding.sm / 2}px;
      `};
  `};
`;

export const DescriptionText = styled(Text)`
  ${({ inputStyles, labelPosition, rtl }) =>
    css`
      text-align: ${rtlHelper(rtl, 'left')};
      margin-bottom: ${inputStyles.spacing.padding.md}px;
      ${media.sm`
        text-align: ${labelPosition === 'top' ? rtlHelper(rtl, 'left') : rtlHelper(rtl, 'right')};
        margin-bottom: ${labelPosition === 'top' ? `${inputStyles.spacing.padding.md}px` : 0};
      `};
    `};
`;

export const StyledX = styled(ClearInputIcon)`
  ${({ rtl, inputStyles }) =>
    css`
      position: relative;
      cursor: pointer;
      ${`${rtlHelper(rtl, 'right')}: ${inputStyles.spacing.padding.sm * 2.5 + 5}px`};
      margin-${rtlHelper(rtl, 'right')}: -${inputStyles.spacing.padding.sm * 1.5}px;
    `};
`;

export const PositionBlock = styled.div`
  display: inline-block;
  width: 32px;
  span,
  div {
    display: flex;
    align-items: center;
  }
`;

export const PositionBlockHideSmallScreens = styled(PositionBlock)`
  display: none;
  ${media.sm`
    display: inline-flex;
  `};
`;

export const ErrorMessage = styled(Text)`
  ${({ inputStyles, rtl }) =>
    css`
      align-self: stretch;
      position: absolute;
      bottom: -${props => props.inputStyles.spacing.padding.md * 1.5}px;
      ${rtlHelper(rtl, 'left')}: ${inputStyles.spacing.padding.sm}px;
      ${media.sm`
        ${rtlHelper(rtl, 'left')}: ${inputStyles.spacing.padding.sm * 1.5}px;
    `};
    `};
`;

export const PositionedStatusIcon = styled(StatusIcon)`
  ${({ rtl, inputStyles }) =>
    css`
    margin-${rtlHelper(rtl, 'left')}: ${inputStyles.spacing.padding.sm}px;
    `};
`;

export const PositionedFormHelper = styled(FormHelper)`
  ${({ inputStyles, rtl }) =>
    css`
      margin-${rtlHelper(rtl, 'left')}: ${inputStyles.spacing.padding.sm}px;
      .Popover {
        .Popover-above .Popover-tip {
          margin-top: -1px;
        }
        .Popover-below .Popover-tip {
          margin-bottom: -1px;
          ${rtlHelper(rtl, 'right')}: 11px;
        }
        .Popover-right .Popover-tip {
          margin-right: -1px;
        }
        .Popover-left .Popover-tip {
          margin-left: -1px;
        }
        .Popover-tip {
          filter: none;
          position: relative;
        }

        .Popover-tipShape {
          stroke: ${inputStyles.colors.border};
          stroke-dasharray: 0, 0, 30;
        }
      }
    `};
`;
