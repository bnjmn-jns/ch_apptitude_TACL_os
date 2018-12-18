import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import Text from '../Text';
import { StyledA, StyledLink } from './styles';

// eslint-disable-next-line import/no-unresolved
import Theme from 'assets/theme';

const LinkComponent = ({ message, values, href, linkTo, query, className, children, block, size, theme, ...etc }) => {
  let content = message;
  if ((typeof content === 'object' && content.defaultMessage) || typeof content === 'string') {
    content = <Text tag="span" className={className} message={content} values={values} size={size} color="inherit" />;
  }
  const toParams = {
    pathname: linkTo,
    query: { ...query },
  };

  if (href) {
    return (
      <StyledA href={href} className={className} block={block} size={size} theme={theme}>
        {content}
      </StyledA>
    );
  }
  return (
    <StyledLink to={toParams} activeClassName="active" className={className} size={size} theme={theme} {...etc}>
      {content}
    </StyledLink>
  );
};

LinkComponent.propTypes = {
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      defaultMessage: PropTypes.string.isRequired,
    }),
  ]),
  values: PropTypes.object,
  href: PropTypes.string,
  linkTo: PropTypes.string,
  query: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  block: PropTypes.bool,
  size: PropTypes.number,
  theme: PropTypes.object,
};

LinkComponent.defaultProps = {
  theme: Theme,
};

const TextLink = withTheme(LinkComponent);

export default TextLink;
