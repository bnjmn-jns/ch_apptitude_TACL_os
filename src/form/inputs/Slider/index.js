import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { StyledSlider, StyledRange, injectSliderStyles } from './styles';
import Theme from 'assets/theme';

const SliderControl = ({ className, onChange, min, max, units, theme }) => {
  const onSliderChange = value => {
    if (onChange) {
      onChange(value);
    }
  };
  injectSliderStyles(theme);

  return (
    <StyledSlider
      min={min}
      max={max}
      onChange={onSliderChange}
      className={className}
      tipFormatter={value => addUnit(value, units)}
      theme={theme}
    />
  );
};

const RangeControl = ({ className, onChange, min, max, units, theme }) => {
  const onSliderChange = value => {
    if (onChange) {
      onChange(value);
    }
  };
  injectSliderStyles(theme);

  return (
    <StyledRange
      className={className}
      min={min}
      max={max}
      allowCross={false}
      pushable
      onChange={onSliderChange}
      tipFormatter={value => addUnit(value, units)}
      theme={theme}
    />
  );
};

const addUnit = (value, units) => {
  const intlVal = value;
  const { before, after } = units;
  if (units && before && after) {
    return `${before} ${intlVal} ${after}`;
  }
  if (before) {
    return `${before} ${intlVal}`;
  }
  if (after) {
    return `${intlVal} ${after}`;
  }
  return intlVal;
};

const propTyes = {
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
  units: PropTypes.shape({
    before: PropTypes.string,
    after: PropTypes.string,
  }),
  className: PropTypes.string,
  theme: PropTypes.object,
};

const defaultProps = {
  theme: Theme,
};

SliderControl.propTypes = propTyes;
RangeControl.propTypes = propTyes;

SliderControl.defaultProps = defaultProps;
RangeControl.defaultProps = defaultProps;

export default withTheme(SliderControl);

const Slider = withTheme(SliderControl);

const Range = withTheme(RangeControl);

export { Slider, Range };
