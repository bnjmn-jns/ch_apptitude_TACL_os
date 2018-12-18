import { createElement } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { textStyles } from './styles';
import { deprecateFeatureOrProp } from '../../helpers';

import Theme from 'assets/theme'; // eslint-disable-line

const Text = ({
  tag,
  className, // extend className
  children,
  onClick,
  message,
  type,
}) => {
  let content = children;
  if (message) {
    content = message;
  }

  // the 'type' prop is deprecated (scheduled for removal in v1.0) and it is recommended you use the hasStatus prop with a type property in it's place.
  if (type) {
    deprecateFeatureOrProp('type', 'prop', 'Text', '1.0', 'hasStatus prop');
  }

  return createElement(tag, { className, onClick }, content);
};

const StyledText = styled(Text)`
  ${props => textStyles(props)};
`;

StyledText.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['inherit'])]),
  color: PropTypes.string,
  weight: PropTypes.oneOf(['lighter', 'normal', 'bold', 100, 200, 300, 400, 500, 600, 700, 800, 900]),
  align: PropTypes.oneOf(['left', 'center', 'right', 'inherit']),
  children: PropTypes.node,
  message: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      defaultMessage: PropTypes.string.isRequired,
    }),
  ]),
  onClick: PropTypes.func,

  tag: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'sup',
    'blackquote',
    'sub',
    'address',
    'abbr',
    'acronym',
    'b',
    'big',
    'caption',
    'cite',
    'code',
    'em',
    'i',
    'label',
    'legend',
    'span',
    'div',
    'a',
  ]).isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['info', 'error', 'danger', 'warning', 'success']),

  theme: PropTypes.object,
};

StyledText.defaultProps = {
  tag: 'span',
  size: 13,
  weight: 'normal',
  align: 'left',
  theme: Theme,
};

export default withTheme(StyledText);
