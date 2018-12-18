import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import paths from './paths';
import { Wrapper } from './styles';

import Theme from 'assets/theme';
import { deprecateFeatureOrProp } from '../../helpers';

const Icon = props => {
  const {
    path,
    strokeWidth,
    color,
    className,
    iconType,
    size,
    hoverColor,
    onClick,
    onMouseDown,
    onMouseLeave,
    onMouseEnter,
    onFocus,
    onBlur,
    onKeyDown,
    tabbable,
    clickThrough,
    theme,
  } = props;

  if (typeof props.iconColor !== 'undefined' || props.iconColor === null) {
    console.log(props.iconColor);
    console.log(path);
    deprecateFeatureOrProp('iconColor', 'prop', 'Icon', '1.0', "'color' prop");
  }

  if (props.hoverIconColor) {
    deprecateFeatureOrProp('hoverIconColor', 'prop', 'Icon', '1.0', "'hoverColor' prop");
  }

  const iconColor = color || props.iconColor || theme.base.colors.primary;

  const iconInner = React.isValidElement(path) ? path : paths[path];

  return (
    <Wrapper
      size={size}
      className={className}
      hoverColor={hoverColor}
      iconType={iconType}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      onBlur={onBlur}
      tabIndex={tabbable ? 0 : -1}
      clickThrough={clickThrough}
    >
      <svg
        height={size}
        width={size}
        viewBox="0 0 24 24"
        fill={iconFill(iconColor, iconType, theme)}
        stroke={iconStroke(iconColor, iconType, theme)}
        strokeWidth={strokeWidth || theme.uiStyles.iconStrokeWidth}
        version="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {iconInner}
      </svg>
    </Wrapper>
  );
};

const iconFill = (color, iconType, theme) => (iconType === 'fill' ? color || theme.base.colors.primary : 'transparent');

const iconStroke = (color, iconType, theme) => (iconType === 'fill' ? 'none' : color || theme.base.colors.primary);

export const iconPropTypes = {
  path: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  tabbable: PropTypes.bool,
  strokeWidth: PropTypes.number,
  iconColor: PropTypes.string,
  color: PropTypes.string,
  iconType: PropTypes.oneOf(['stroke', 'fill']),
  size: PropTypes.number,
  hoverColor: PropTypes.string,
  hoverIconColor: PropTypes.string,
  onMouseDown: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  clickThrough: PropTypes.bool,
  theme: PropTypes.object,
};

Icon.propTypes = iconPropTypes;

Icon.defaultProps = {
  theme: Theme,
  size: 24,
  iconType: 'stroke',
};

export default withTheme(Icon);
