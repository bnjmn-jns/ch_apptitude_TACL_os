import React from 'react';
import PropTypes from 'prop-types';
import { messageShape } from '../../../../propTypes';
import styled, { css } from 'styled-components';
import Text from '../../../../components/Text';
import Select from '../../Select';
import InputWrapper from '../../InputWrapper';
import { IconButton } from '../../../../components/Button/variants';
import Icon from '../../../../components/Icon';

export const Wrapper = styled.div`
  ${({ inputStyles: { colors, spacing, metrics } }) => {
    return css`
      border: 1px solid ${colors.border};
      width: 100%;
      padding: ${spacing.padding.lg}px ${spacing.padding.lg}px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      border-radius: ${metrics.borderRadius}px;
      background-color: ${colors.backgroundClear};
    `;
  }};
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
`;

export const VerticalBlock = Block.extend`
  flex-direction: column;
`;

export const MiddleBlock = Block.extend`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: initial;
`;

export const StyledSelect = styled(Select)`
  max-width: 250px;
`;

const PreviewBox = styled.div`
  ${({ theme }) => css`
    height: ${theme.inputStyles.spacing.height * 2}px;
    width: ${theme.inputStyles.spacing.height * 2}px;
    margin-right: ${theme.inputStyles.spacing.padding.lg}px;
    display: flex;
    align-items: center;
    justify-content: center;
  `};
`;

export const PreviewImg = PreviewBox.extend`
  background-size: auto 100%;
  background-position: center;
  background-image: url(${props => props.imageUrl});
`;

export const PreviewDoc = ({ theme, theme: { inputStyles } }) => {
  return (
    <PreviewBox theme={theme}>
      <Icon path="fileText" size={36} color={inputStyles.colors.icon} strokeWidth={1} />
    </PreviewBox>
  );
};

export const PaddedInputWrapper = styled(InputWrapper)`
  p {
    padding: 0;
    margin-right: ${props => props.theme.inputStyles.spacing.padding.lg}px;
  }
`;

export const PositionedInputWrapper = PaddedInputWrapper.extend`
  label {
    padding-bottom: ${props => props.theme.inputStyles.spacing.padding.md}px;
  }
  div {
    align-items: center;
    display: flex;
  }
`;

export const PositionedIconButton = styled(IconButton)`
  margin-left: ${props => props.theme.inputStyles.spacing.padding.md}px;
`;

export const StyledWrapperActions = styled.div`
  margin-left: 16px;
`;

export const PositionedErrorText = styled(Text)`
  margin-top: ${props => props.theme.inputStyles.spacing.padding.md}px;
`;

const IconCircle = styled.div`
  ${({ theme: { inputStyles }, isValid }) => css`
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 50%;
    margin-left: ${inputStyles.spacing.padding.md}px;
    ${isValid
      ? css`
          background: ${inputStyles.colors.success};
          border: none;
        `
      : css`
          background: ${inputStyles.colors.background};
          border: 1px solid ${inputStyles.colors.iconInnactive};
        `};
  `};
`;

const SyncBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const ValidFileIcon = ({ isValid, theme, theme: { inputStyles } }) => (
  <IconCircle isValid={isValid} theme={theme}>
    <Icon path="check" color={isValid ? inputStyles.colors.background : inputStyles.colors.iconInnactive} size={18} />
  </IconCircle>
);

const SyncdText = styled(Text)`
  margin-right: ${props => props.theme.inputStyles.spacing.padding.sm}px;
`;

const SyncdFileIcon = ({ isSyncd, syncdMessage, className, theme, theme: { inputStyles } }) => (
  <SyncBlock className={className}>
    {syncdMessage && (
      <SyncdText
        message={syncdMessage}
        size={inputStyles.fontSize.validationText}
        color={inputStyles.colors.labelText}
        theme={theme}
        noSelect
      />
    )}
    <Icon path="refreshCw" color={isSyncd ? inputStyles.colors.success : inputStyles.colors.iconInnactive} size={18} />
  </SyncBlock>
);

export const PositionedSyncdIcon = styled(SyncdFileIcon)`
  ${({ theme: { inputStyles } }) => css`
    position: absolute;
    top: ${inputStyles.spacing.padding.sm}px;
    right: ${inputStyles.spacing.padding.sm}px;
  `};
`;

ValidFileIcon.propTypes = {
  isValid: PropTypes.bool,
  theme: PropTypes.object,
};

SyncdFileIcon.propTypes = {
  isSyncd: PropTypes.bool,
  syncdMessage: messageShape,
  className: PropTypes.string,
  theme: PropTypes.object,
};
