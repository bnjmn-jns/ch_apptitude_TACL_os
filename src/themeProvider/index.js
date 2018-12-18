import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Theme, { getComponentTheme } from 'assets/theme'; // es-lint-disable-line
import merge from 'lodash.merge';

const TaclThemeProvider = ({ baseThemeConfig, componentThemeConfig, rtl, children }) => {
  const mergedBase = merge(Theme.base, baseThemeConfig);
  const componentThemeFromBase = getComponentTheme(mergedBase);

  const mergedComponentTheme = merge(componentThemeFromBase, componentThemeConfig);

  const finalTheme = { base: mergedBase, rtl: rtl || false, ...mergedComponentTheme };

  return <ThemeProvider theme={finalTheme}>{children}</ThemeProvider>;
};

TaclThemeProvider.propTypes = {
  baseThemeConfig: PropTypes.object,
  componentThemeConfig: PropTypes.object,
  children: PropTypes.node,
  rtl: PropTypes.bool,
};

export default TaclThemeProvider;
