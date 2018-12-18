import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Text from '../Text';

import Theme from 'assets/theme';
import { StyledPop, StyledIcon } from './styles';
import { messageShape } from '../../propTypes';
import { rtlHelper } from 'assets/theme/helpers';

class FormHelper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.defaultOpen,
    };
  }

  toggleOpen = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  };

  setOpen = () => {
    this.setState({ open: true });
  };

  setClosed = () => {
    this.setState({ open: false });
  };

  handleDropdownKeyPress = e => {
    if (e.keyCode === 32 || e.keyCode === 13) {
      e.preventDefault();
      this.toggleOpen();
    }
  };

  render() {
    const { content, trigger, className, theme, theme: { rtl } } = this.props;

    const helperContent = React.isValidElement(content) ? (
      content
    ) : (
      <Text tag="p" size={theme.base.font.size.md} color={theme.inputStyles.colors.labelText} message={content} />
    );

    return (
      <StyledPop
        className={className}
        open={this.state.open}
        content={helperContent}
        position={rtlHelper(theme.rtl, 'right')}
        theme={theme}
      >
        <StyledIcon
          path="questionMarkInCircle"
          color={theme.inputStyles.colors.icon}
          hoverColor={theme.inputStyles.colors.highlight}
          iconType="fill"
          size={20}
          onClick={() => trigger === 'click' && this.toggleOpen()}
          onKeyDown={e => trigger === 'click' && this.handleDropdownKeyPress(e)}
          onMouseEnter={() => trigger === 'hover' && this.setOpen()}
          onMouseLeave={() => trigger === 'hover' && this.setClosed()}
          onFocus={() => trigger === 'hover' && this.setOpen()}
          onBlur={() => trigger === 'hover' && this.setClosed()}
          rtl={rtl}
          theme={theme}
          tabbable
        />
      </StyledPop>
    );
  }
}

FormHelper.propTypes = {
  defaultOpen: PropTypes.bool,
  className: PropTypes.string,
  trigger: PropTypes.oneOf(['click', 'hover', 'focus']),
  content: PropTypes.oneOfType([PropTypes.node, messageShape]),
  theme: PropTypes.object,
};
FormHelper.defaultProps = {
  trigger: 'click',
  theme: Theme,
};

export default withTheme(FormHelper);
