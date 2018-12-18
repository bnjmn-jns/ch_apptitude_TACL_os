import styled, { css, injectGlobal } from 'styled-components';
import RcSlider from 'rc-slider';
import 'rc-slider/assets/index.css';

const createSliderWithTooltip = RcSlider.createSliderWithTooltip;
const SliderWithTooltip = createSliderWithTooltip(RcSlider);
const RangeWithTooltip = createSliderWithTooltip(RcSlider.Range);

const SliderStyles = colors => css`
  max-width: 20em;

  .rc-slider-rail,
  .rc-slider-track {
    height: 1px;
  }
  .rc-slider-rail {
    background-color: ${colors.border};
  }
  .rc-slider-track {
    background-color: ${colors.highlight};

  }
  .rc-slider-handle {
    width: 16px;
    height: 16px;
    margin-top: -7px;
    border: 1px solid ${colors.highlight};

    

    :active {
      border: 2px solid ${colors.highlight};
      box-shadow: none;
  }
`;

export const injectSliderStyles = theme => injectGlobal`
  .rc-slider-tooltip-inner {
    background-color: white !important;
    color: ${theme.inputStyles.colors.highlight} !important;
    border: 1px solid ${theme.inputStyles.colors.highlight};
    font-family: ${theme.base.font.family};
    padding: 6px 6px !important;
  }
  .rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {
    border-top-color: ${theme.inputStyles.colors.highlight} !important;
    bottom: 0 !important;
}
`;

export const StyledSlider = styled(SliderWithTooltip)`
  ${props => SliderStyles(props.theme.inputStyles.colors)};
`;
export const StyledRange = styled(RangeWithTooltip)`
  ${props => SliderStyles(props.theme.inputStyles.colors)};
`;
