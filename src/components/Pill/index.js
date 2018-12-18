import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { Spinner } from '../Loader';
import Icon, { iconPropTypes } from '../Icon';
import Text from '../Text';

import { Wrapper, Left, Right } from './styles';

import Theme from 'assets/theme'; // eslint-disable-line

const processContent = contentIn => {
  let content = contentIn;
  if ((typeof content === 'object' && content.id) || typeof content === 'string') {
    content = <Text tag="span" message={content} size="inherit" color="inherit" />;
  }
  return content;
};

const Pill = props => {
  const { theme, className, onClick, disabled, tabbable, leftClick, children, rightClick, rightKeyPress, icon, loading } = props;
  return (
    <Wrapper className={className} onClick={onClick} disabled={disabled} {...props} tabIndex={tabbable ? 0 : -1}>
      <Left className="left" onClick={leftClick} tabIndex={-1} disabled={disabled} theme={theme}>
        {processContent(children)}
      </Left>
      <Right className="right" tabIndex={-1} onClick={rightClick} onKeyPress={rightKeyPress} disabled={disabled} theme={theme}>
        {loading ? (
          <Spinner rate={700} color={theme.inputStyles.colors.icon} size={22} />
        ) : (
          <Icon path={icon.path} color={icon.color || theme.inputStyles.colors.icon} size={16} />
        )}
      </Right>
    </Wrapper>
  );
};

Pill.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  leftClick: PropTypes.func,
  rightClick: PropTypes.func,
  rightKeyPress: PropTypes.func,
  loading: PropTypes.bool,
  tabbable: PropTypes.bool,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      ...iconPropTypes,
    }),
  ]),
  theme: PropTypes.object,
};

Pill.defaultProps = {
  theme: Theme,
  leftClick: null,
  rightClick: null,
};

export default withTheme(Pill);
