import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import ReactPopover from 'react-popover';

import Text from '../Text';
import Theme from 'assets/theme';

class Popover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popoverIsOpen: this.props.open,
    };
  }

  componentDidMount() {
    if (this.props.getApi) {
      this.props.getApi({ togglePopover: this.togglePopover });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.popoverIsOpen) {
      this.setState({ popoverIsOpen: nextProps.open });
    }
  }

  togglePopover = toState => {
    const popoverIsOpen = typeof toState === 'boolean' ? toState : !this.state.popoverIsOpen;
    this.setState({
      popoverIsOpen,
    });
  };

  render() {
    const { position, children, tipColor, className, theme } = this.props;

    let { content } = this.props;
    if ((typeof content === 'object' && content.defaultMessage) || typeof content === 'string') {
      content = <Text tag="span" message={content} size="inherit" color="inherit" />;
    }

    const preferedPosition = position === 'top' ? 'above' : position === 'bottom' ? 'below' : position; // es-lint-disable-line

    const targetElement = <span onClick={this.togglePopover}>{children}</span>;

    return (
      <StyledPop
        isOpen={this.state.popoverIsOpen}
        body={content}
        tipSize={10}
        preferPlace={preferedPosition}
        onOuterAction={() => this.togglePopover(false)}
        tipColor={tipColor}
        className={className}
        theme={theme}
      >
        {targetElement}
      </StyledPop>
    );
  }
}

const StyledPop = styled(ReactPopover)`
  ${({ theme: { base, base: { colors } }, theme: { uiStyles } }) => css`
      .Popover-body {
        display: inline-flex;
        flex-direction: column;
        padding: ${base.spacing.padding.md}px;
        background: ${colors.background};
        color: ${colors.primary};
        border-radius: 4px;
        box-shadow: ${uiStyles.boxShadow};
      }
      .Popover-tipShape {
        fill: ${props => props.tipColor};
      }
      }
    `};
`;

Popover.propTypes = {
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  open: PropTypes.bool,
  position: PropTypes.oneOf(['above', 'right', 'below', 'left', 'top', 'bottom']),
  tipColor: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.object,
};

Popover.defaultProps = {
  tipColor: 'white',
  theme: Theme,
};

export default withTheme(Popover);
