import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { depricate } from '../../helpers';

import Text from '../Text';

import Theme from 'assets/theme';

const Round = styled(Text)`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  lineheight: ${props => props.size}px;
  fontsize: ${props => props.size * (2 / 3)}px;
  padding-left: 0;
  text-align: center;
  border-radius: 50%;
  box-sizing: content-box !important;
  border: 1px solid ${props => props.color} !important;
  margin: -1px 0 0 -1px;
`;

const InitialsBadge = ({ first, last, size, className, color }) => {
  let imageText = first.length > 1 ? first.slice(0, 1) : first;
  imageText += last.length > 1 ? last.slice(0, 1) : last;
  depricate('InitialsBadge', 1);

  return <Round tag="p" color={color} size={size} className={className} message={imageText} />;
};

InitialsBadge.propTypes = {
  first: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number.isRequired,
};

InitialsBadge.defaultProps = {
  color: Theme.Colors.primary,
};

export default InitialsBadge;
