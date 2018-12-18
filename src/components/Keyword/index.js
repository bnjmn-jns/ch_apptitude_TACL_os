import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Text from '../Text';
import { Box, PositionedIcon } from './styles';
import { messageShape } from 'propTypes'; // eslint-disable-line

const Keyword = ({ backgroundColor, backgroundHoverColor, textColor, message, onClick, size, className, icon, theme }) => (
  <Box
    backgroundColor={backgroundColor || theme.base.colors.secondary}
    backgroundHoverColor={backgroundHoverColor}
    onClick={onClick}
    size={size}
    className={className}
  >
    {icon && <PositionedIcon size={theme.base.font.size[size]} color={textColor || 'white'} {...icon} />}
    <Text tag="p" size={theme.base.font.size[size]} message={message} color={textColor || 'white'} align="center" noSelect />
  </Box>
);

const { string, func, oneOf, object } = PropTypes;

Keyword.propTypes = {
  backgroundColor: string,
  backgroundHoverColor: string,
  textColor: string,
  className: string,
  message: messageShape.isRequired,
  onClick: func,
  size: oneOf(['sm', 'md', 'lg']),
  theme: object,
};

Keyword.defaultProps = {
  size: 'sm',
};

export default withTheme(Keyword);
