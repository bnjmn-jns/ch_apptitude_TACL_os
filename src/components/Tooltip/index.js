import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import RCTooltip from 'rc-tooltip';
import Text from '../Text';
import { tooltipStyles } from './style';

import Theme from 'assets/theme';

const Tooltip = props => {
  const { trigger, offsetX, offsetY, enterDelay, leaveDelay, placement, children, theme, className } = props;

  let { content } = props;
  if ((typeof content === 'object' && content.defaultMessage) || typeof content === 'string') {
    content = <Text tag="span" message={content} color="white" />;
  }

  return (
    <RCTooltip
      placement={placement}
      mouseEnterDelay={enterDelay}
      mouseLeaveDelay={leaveDelay}
      destroyTooltipOnHide
      trigger={trigger}
      overlayClassName={className}
      overlay={content}
      arrowClass="rc-tooltip-arrow"
      align={{
        offset: [offsetX, offsetY],
      }}
    >
      <span>{children}</span>
    </RCTooltip>
  );
};

const StyledToolTip = styled(Tooltip)`
  ${({ theme }) => tooltipStyles(theme)};
`;

Tooltip.propTypes = {
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  trigger: PropTypes.oneOf(['hover', 'focus', 'click']),
  offsetX: PropTypes.number,
  offsetY: PropTypes.number,
  placement: PropTypes.oneOf([
    'left',
    'right',
    'top',
    'bottom',
    'topLeft',
    'leftTop',
    'topRight',
    'rightTop',
    'bottomRight',
    'rightBottom',
    'bottomLeft',
    'leftBottom',
  ]),
  enterDelay: PropTypes.number,
  leaveDelay: PropTypes.number,
  className: PropTypes.string,
  theme: PropTypes.object,
};

Tooltip.defaultProps = {
  trigger: 'hover',
  offsetX: 0,
  offsetY: -5,
  enterDelay: 0,
  leaveDelay: 0,
  placement: 'top',
  theme: Theme,
};

export default withTheme(StyledToolTip);
