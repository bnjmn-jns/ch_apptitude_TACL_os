import styled, { css } from 'styled-components';
import { rtlHelper } from 'assets/theme/helpers';

import Popover from '../Popover';
import Icon from '../Icon';
import Text from '../Text';

export const StyledPop = styled(Popover)`
  ${({ theme: { inputStyles } }) => css`
    max-width: 350px;

    .Popover-body {
      border-radius: ${inputStyles.metrics.borderRadius};
      box-shadow: none;
      border: 1px solid ${inputStyles.colors.border};
    }
    &.Popover-above .Popover-tip {
      margin-top: -1px;
      right: -4px;
    }
    &.Popover-below .Popover-tip {
      margin-bottom: -1px;
      right: -4px;
    }
    &.Popover-right .Popover-tip {
      margin-right: -1px;
    }
    &.Popover-left .Popover-tip {
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
  `};
`;

export const StyledText = styled(Text)`
  max-width: 20em;
`;

export const StyledIcon = styled(Icon)`
  margin-${props => `${rtlHelper(props.rtl, 'left')}: ${props.theme.inputStyles.spacing.padding.sm}px`};
`;
