import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Text from '../../../components/Text';
import Icon from './../../../components/Icon';
import { baseInputStyle, inputBoxStyle } from '../styles';
import GoogleLogo from './googleLogo';
import { messageShape } from '../../../propTypes';

import { rtlHelper } from 'assets/theme/helpers';
// const { colors, fontSize } = inputStyles;

export const Wrapper = styled.div`
  ${({ theme }) => {
    const { inputStyles, uiStyles, rtl } = theme;
    const { spacing, colors, metrics } = inputStyles;
    const hasRoundedCorners = !!metrics.borderRadius;

    return css`
      position: relative;
      input {
        ${baseInputStyle(inputStyles, null, false, rtl)};
        padding-${rtlHelper(rtl, 'left')}: ${spacing.padding.lg}px !important;
        :focus {
          ${uiStyles.focusStyle};
        }
      }

      .results-container {
        ${inputBoxStyle(inputStyles)};
        z-index: 42;
        width: 100%;
        position: absolute;
        top: ${hasRoundedCorners ? spacing.height + spacing.padding.sm : spacing.height - 1}px;
        background-color: ${colors.background};
        ${!hasRoundedCorners && `border-top: 1px solid ${colors.highlight}`};
        border-radius: ${metrics.borderRadius}px;
        overflow: hidden;
        > div:not(.poweredbygoogle) {
          padding: 0 !important;
        }
      }
    `;
  }};
`;

const FooterWrapper = styled.div`
  ${({ inputStyles }) => {
    const { spacing, colors, metrics } = inputStyles;
    const resultPadding = `${spacing.padding.sm}px ${spacing.padding.md}px`;
    return css`
      pointer-events: none;
      padding: ${resultPadding};
      display: flex;
      align-items: center;
      justify-content: flex-end;
      background-color: ${colors.backgroundDisabled};
      border-top: 1px solid ${colors.border};
      border-radius: 0 0 ${metrics.borderRadius}px ${metrics.borderRadius}px;
      img {
        max-height: 10px;
      }
    `;
  }};
`;

export const Footer = ({ poweredBy, theme: { inputStyles } }) => (
  <FooterWrapper className="poweredbygoogle" inputStyles={inputStyles}>
    <Text message={poweredBy} color={inputStyles.colors.disabledText} size={inputStyles.fontSize.validationText} />
    <GoogleLogo />
  </FooterWrapper>
);

const SuggestionWrapper = styled.div`
  ${({ theme: { inputStyles, uiStyles } }) => {
    const { spacing, colors } = inputStyles;
    const resultPadding = `${spacing.padding.sm}px ${spacing.padding.md}px`;
    return css`
      padding: ${resultPadding} !important;
      display: flex;
      align-items: center;
      transition: ${uiStyles.transitionAll};

      :hover,
      :focus {
        background-color: ${colors.backgroundDisabled} !important;
        color: ${colors.inputText} !important;
        outline: none;

        svg {
          stroke: ${colors.highlight};
        }
      }
    `;
  }};
`;

const IconWrapper = styled.div`
  ${props => `margin-${rtlHelper(props.theme.rtl, 'right')}: ${props.theme.inputStyles.spacing.padding.md}px`};
  position: relative;
  top: 1px;
`;

const PositionedIcon = styled(Icon)`
  position: absolute;
  ${props => `${rtlHelper(props.theme.rtl, 'left')}: ${props.theme.inputStyles.spacing.padding.sm * 1.5}px;`};
  top: 50%;
  transform: translateY(-50%);
  z-index: 42;
`;

export const SearchIcon = ({ theme }) => (
  <PositionedIcon path="search" color={theme.inputStyles.colors.labelText} size={16} clickThrough theme={theme} />
);

export const Suggestion = ({ formattedSuggestion, renderFooter, theme }) => {
  const { colors } = theme.inputStyles;
  return (
    <SuggestionWrapper renderFooter={renderFooter} theme={theme}>
      <IconWrapper theme={theme}>
        <Icon path="mapPin" color={colors.border} size={16} />
      </IconWrapper>
      <div>
        <Text message={formattedSuggestion.mainText} block size={theme.inputStyles.fontSize.inputText} color={colors.inputText} />
        <Text
          message={formattedSuggestion.secondaryText}
          block
          size={theme.inputStyles.fontSize.validationText}
          color={colors.disabledText}
        />
      </div>
    </SuggestionWrapper>
  );
};

Suggestion.propTypes = {
  formattedSuggestion: PropTypes.shape({
    mainText: PropTypes.string,
    secondaryText: PropTypes.string,
  }),
  renderFooter: PropTypes.bool,
  theme: PropTypes.object,
};

Footer.propTypes = {
  poweredBy: messageShape,
  theme: PropTypes.object,
};

SearchIcon.propTypes = {
  theme: PropTypes.object,
};
