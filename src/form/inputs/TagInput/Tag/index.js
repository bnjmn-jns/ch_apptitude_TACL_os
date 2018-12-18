import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Icon from '../../../../components/Icon/';
import { TagButton, PositionedText } from '../styles';

import Theme from 'assets/theme';

const Tag = ({ className, value, inInput, onClick, theme, theme: { inputStyles: { colors, fontSize } } }) => {
  return (
    <TagButton
      background="transparent"
      hoverBackground="transparent"
      borderColor={colors.border}
      fontColor={colors.labelText}
      hoverBorderColor={colors.icon}
      onClick={onClick}
      spacing={theme.inputStyles.spacing}
      className={className}
    >
      <IconComponent inInput={inInput} colors={colors} />
      <PositionedText tag="p" message={value} size={fontSize.labelText} spacing={theme.inputStyles.spacing} />
    </TagButton>
  );
};

const IconComponent = ({ inInput, colors }) => {
  const iconProps = inInput ? { path: 'x', color: colors.error } : { path: 'plus', color: colors.success };

  return <Icon {...iconProps} size={16} strokeWidth={2} />;
};

Tag.propTypes = {
  inInput: PropTypes.bool,
  value: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  theme: PropTypes.object,
};
Tag.defaultProps = {
  theme: Theme,
};

IconComponent.propTypes = {
  inInput: PropTypes.bool,
  colors: PropTypes.object,
};

export default withTheme(Tag);
