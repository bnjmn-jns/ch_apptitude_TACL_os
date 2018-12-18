import { css } from 'styled-components';
import 'rc-tooltip/assets/bootstrap_white.css';

const generateTooltipCSS = (side, backgroundColor) => {
  if (side === 'top' || side === 'bottom') {
    return `
      .rc-tooltip-placement-${side} .rc-tooltip-arrow,
      .rc-tooltip-placement-${side}Left .rc-tooltip-arrow,
      .rc-tooltip-placement-${side}Right .rc-tooltip-arrow {
          border-${side}-color: ${backgroundColor};
      }
    `;
  }

  return `
    .rc-tooltip-placement-${side} .rc-tooltip-arrow,
    .rc-tooltip-placement-${side}Top .rc-tooltip-arrow,
    .rc-tooltip-placement-${side}Bottom .rc-tooltip-arrow {
      border-${side}-color:${backgroundColor}
    }
  `;
};

export const tooltipStyles = theme => {
  const bgColor = theme.base.colors.darkerGrey;

  return css`
    background-color: ${theme.base.colors.background} !important;

    ${generateTooltipCSS('top', bgColor)}
    ${generateTooltipCSS('right', bgColor)}
    ${generateTooltipCSS('bottom', bgColor)}
    ${generateTooltipCSS('left', bgColor)}

    .rc-tooltip-inner {
      border: none;
      border-radius: 5px;
      padding: 8px 16px;
      background-color: ${bgColor};
      display: flex;
      align-items: center;
    }

    .rc-tooltip {
      opacity: 1;
      box-shadow: ${theme.uiStyles.boxShadow};
    }

    .rc-tooltip-arrow.rc-tooltip-arrow {
      border-top-color: ${bgColor};      
    }
  `;
};
