/* eslint no-console: 0 */
import { css } from 'styled-components';

const consoleWarnStyles = css`
  color: white;
  background: #424f60;
  line-height: 2;
  font-size: 1.2em;
  padding: 10px;
  text-align: center;
  margin-bottom: 1em;
  border-radius: 10px;
`;

export const deprecate = (componentName, versionNumber, alternative) => {
  const versionNumberMessage = versionNumber ? `v${versionNumber}` : 'a future release';
  const componentNameMessage = componentName ? `The ${componentName} component` : 'This component';
  const alternativeComponent = alternative ? ` Consider instead using the ${alternative}.` : '';
  if (process.env.NODE_ENV === 'development') {
    console.warn(
      `%c ☠️ TACL: ${componentNameMessage} is deprecated and will be removed from the TACL in ${versionNumberMessage} and is therefore not recommended for use in production.${alternativeComponent} ☠️`,
      consoleWarnStyles,
    );
  }
};

export const deprecateFeatureOrProp = (featureOrPropName, type, componentName, versionNumber, alternative) => {
  const versionNumberMessage = versionNumber ? `v${versionNumber}` : 'a future release';
  const componentNameMessage = componentName ? `the ${componentName} component` : 'this component';
  const alternativePropOrFeature = alternative ? `Consider instead using the ${alternative}.` : '';

  if (process.env.NODE_ENV === 'development') {
    console.warn(
      `%c ☠️ TACL: Using ${type} '${featureOrPropName}' in ${componentNameMessage} is deprecated and will be removed from the TACL in ${versionNumberMessage} and is therefore not recommended for use in production. ${alternativePropOrFeature} ☠️`,
      consoleWarnStyles,
    );
  }
};

export const removeFeatureOrProp = (featureOrPropName, type, componentName, versionNumber, alternative) => {
  const versionNumberMessage = versionNumber ? ` in v${versionNumber}` : '';
  const componentNameMessage = componentName ? `the ${componentName} component` : 'this component';
  const alternativePropOrFeature = alternative ? `Consider using the ${alternative} ${type} instead.` : '';

  if (process.env.NODE_ENV === 'development') {
    console.warn(
      `%c ☠️ TACL: The ${type} '${featureOrPropName}' in ${componentNameMessage} has been removed from the TACL${versionNumberMessage}. ${alternativePropOrFeature} ☠️`,
      consoleWarnStyles,
    );
  }
};
