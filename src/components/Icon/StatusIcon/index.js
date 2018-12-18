import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Icon from '../';
import Theme from 'assets/theme';

import { statusTypeShape } from '../../../propTypes';
import { deprecateFeatureOrProp } from '../../../helpers';

const StatusIcon = ({ hasStatus, className, size, tabbable, type: oldType, theme }) => {
  if (oldType) {
    deprecateFeatureOrProp('type', 'prop', 'StatusIcon', '1.0', "'hasStatus' prop");
  }

  const type = hasStatus ? hasStatus.type : oldType;

  return (
    <Icon
      path={getIconPath(type)}
      className={className}
      color={getIconColor(type, theme.base.colors)}
      iconType="fill"
      size={size}
      tabbable={tabbable}
    />
  );
};

const getIconPath = status => {
  const firstLetterUpperCase = str => str.charAt(0).toUpperCase() + str.slice(1);
  const iconName = firstLetterUpperCase(status === 'error' ? 'warning' : status);
  const pathName = `alert${iconName}`;
  return pathName;
};

const getIconColor = (type, colors) => (type === 'info' ? colors.secondary : colors[type]);

StatusIcon.propTypes = {
  hasStatus: statusTypeShape,
  type: PropTypes.oneOf(['info', 'warning', 'error', 'success', '']),
  size: PropTypes.number,
  className: PropTypes.string,
  tabbable: PropTypes.bool,
  theme: PropTypes.object,
};

StatusIcon.defaultProps = {
  theme: Theme,
  size: 15,
};

export default withTheme(StatusIcon);
