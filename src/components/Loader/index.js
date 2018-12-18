/**
 *
 * Loader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import Theme from 'assets/theme';
import { LoaderContainer, Dot, SpinnerContainer } from './styles';
import { spinnerBase } from './constants';

const Loader = ({ className, rate, color, loading, theme: { uiStyles } }) =>
  loading ? (
    <LoaderContainer rate={rate} className={className}>
      <Dot rate={rate} color={color || uiStyles.colors.loader} />
      <Dot rate={rate} color={color || uiStyles.colors.loader} />
      <Dot rate={rate} color={color || uiStyles.colors.loader} />
    </LoaderContainer>
  ) : null;

const SpinnerComponent = ({ size, color, rate, loading, className, theme: { uiStyles, rtl } }) =>
  loading ? (
    <SpinnerContainer rate={rate} size={size} className={className} rtl={rtl}>
      <svg viewBox="-75 -75 150 150 " stroke={color || uiStyles.colors.loader} fill="transparent">
        <circle cx="0" cy="0" r={spinnerBase} />
      </svg>
    </SpinnerContainer>
  ) : null;

const basePropTypes = {
  rate: PropTypes.number,
  color: PropTypes.string,
  loading: PropTypes.bool,
  className: PropTypes.string,
  theme: PropTypes.object,
};

Loader.propTypes = basePropTypes;
SpinnerComponent.propTypes = { size: PropTypes.number, ...basePropTypes };

const defaultProps = {
  className: '',
  rate: 1500,
  loading: true,
  theme: Theme,
};

Loader.defaultProps = defaultProps;
SpinnerComponent.defaultProps = { ...defaultProps, rate: 700 };

export default withTheme(Loader);
const Spinner = withTheme(SpinnerComponent);
export { Spinner };
