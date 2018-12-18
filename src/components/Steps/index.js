import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Icon from '../Icon';

import { Step, StepSuccess, StepError, Label, HorizontalLine, VerticalLine, StepsWrapper, StepContainer } from './styles';
import { deprecateFeatureOrProp } from '../../helpers';

import Theme from 'assets/theme'; // eslint-disable-line

class Steps extends React.PureComponent {
  getSteps = (steps, direction) => {
    const { currentIndex, handleStepClick, theme } = this.props;
    const { colors } = theme.inputStyles;
    const components = [];
    steps.forEach(({ label, key, status: oldStatus, hasStatus }, index) => {
      const counter = index + 1;
      const labelText = label && direction !== 'vertical' ? `${counter}. ${label}` : `${counter}`;
      const onClick = handleStepClick ? () => handleStepClick(index) : null;
      const stepKey = `${index}-${label}-${key}`;

      const status = hasStatus ? hasStatus.type : oldStatus;

      if (oldStatus) {
        deprecateFeatureOrProp('status', 'prop', 'Steps', '1.0', "'hasStatus' prop");
      }

      if (currentIndex === index && status === 'error') {
        components.push(
          <StepContainer>
            <StepError tabIndex={-1} key={stepKey} theme={theme} color={colors.error} direction={direction}>
              <Label color={colors.error} size={15} message={labelText} weight={500} theme={theme} />
            </StepError>
            {direction === 'vertical' &&
              label && <Label color={colors.error} size={15} message={label} weight={500} theme={theme} />}
          </StepContainer>,
        );
      } else if (currentIndex === index) {
        components.push(
          <StepContainer>
            <StepSuccess key={stepKey} tabIndex={-1} onClick={onClick} theme={theme} direction={direction}>
              <Label color={colors.highlight} size={15} message={labelText} weight={500} theme={theme} />
            </StepSuccess>
            {direction === 'vertical' &&
              label && <Label color={colors.highlight} size={15} message={label} weight={500} theme={theme} />}
          </StepContainer>,
        );
      } else if (status === 'success') {
        components.push(
          <StepContainer>
            <StepSuccess key={stepKey} onClick={onClick} theme={theme} direction={direction}>
              <Label theme={theme}>
                <Icon path="check" color={colors.highlight} />
              </Label>
            </StepSuccess>
            {direction === 'vertical' &&
              label && <Label color={colors.highlight} message={label} size={15} weight={500} theme={theme} />}
          </StepContainer>,
        );
      } else if (status === 'error') {
        components.push(
          <StepContainer>
            <StepError key={stepKey} tabIndex={-1} color={colors.error} theme={theme} direction={direction}>
              <Label theme={theme}>
                <Icon path="x" color={colors.error} />
              </Label>
            </StepError>
            {direction === 'vertical' &&
              label && <Label color={colors.error} message={label} size={15} weight={500} theme={theme} />}
          </StepContainer>,
        );
      } else {
        components.push(
          <StepContainer>
            <Step key={stepKey} tabIndex={-1} onClick={onClick} theme={theme} direction={direction}>
              <Label color={colors.icon} message={counter} size={15} weight={500} theme={theme} />
            </Step>
            {direction === 'vertical' &&
              label && <Label color={colors.icon} message={label} size={15} weight={500} theme={theme} />}
          </StepContainer>,
        );
      }

      if (index !== steps.length - 1) {
        const lineIndex = `${index + 1}-Line`;
        components.push(
          direction === 'vertical' ? (
            <VerticalLine key={lineIndex} color={colors.border} direction={direction} />
          ) : (
            <HorizontalLine key={lineIndex} color={colors.border} />
          ),
        );
      }
    });
    return components;
  };

  render() {
    const { steps, className, direction, theme: { rtl } } = this.props;
    const components = this.getSteps(steps, direction);

    return (
      <StepsWrapper direction={direction} className={className} rtl={rtl}>
        {components}
      </StepsWrapper>
    );
  }
}

Steps.propTypes = {
  currentIndex: PropTypes.number,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      key: PropTypes.number,
    }),
  ),
  handleStepClick: PropTypes.func,
  className: PropTypes.string,
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  theme: PropTypes.object,
};

Steps.defaultProps = {
  theme: Theme,
  direction: 'horizontal',
};

export default withTheme(Steps);
