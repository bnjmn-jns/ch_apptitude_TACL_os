import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import { Wrapper, PillShape, DropdownContents, DropdownItem } from './styles';
import Theme from 'assets/theme'; // eslint-disable-line 
import { withTheme } from 'styled-components';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      selectedOption: null,
      contentWidth: 0,
      pillWidth: 0,
    };
  }

  /* eslint-disable */
  componentDidMount() {
    this.setState({
      open: false,
    });

    const contentWidth = this.dropDownContentsUl.clientWidth;
    const pillWidth = this.wrapper.clientWidth;

    if (contentWidth !== this.state.contentWidth || pillWidth !== this.state.pillWidth) {
      this.setState({
        contentWidth,
        pillWidth,
      });
    }
  }
  /* eslint-enable */

  toggleOpen = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  };

  close = () => this.setState({ open: false });

  handleDropdownClick = () => {
    if (!this.state.open) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    if (this.props.disabled) {
      return;
    }
    this.toggleOpen();
  };

  handleDropdownKeyPress = e => {
    if (e.keyCode === 32 || e.keyCode === 13) {
      e.preventDefault();
      this.handleDropdownClick();
    }
  };

  handleItemKeyPress = (e, item) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.handleItemClick(item);
    }
  };

  handleOutsideClick = e => {
    if (this.wrapper && this.wrapper.contains(e.target)) {
      return;
    }
    this.handleDropdownClick();
  };

  handleItemClick = item => {
    if (this.props.contentClickSelectsItem) {
      const selectedOption = item.value ? item.label : null;
      this.setState({ selectedOption });
      if (this.props.onChange) {
        this.props.onChange(item.value);
      }
      this.close();
      document.removeEventListener('click', this.handleOutsideClick, false);
    } else if (this.props.onChange) {
      this.props.onChange(item.value || item);
    }
  };

  getItemRender = contentSend => {
    let content = contentSend;
    if ((typeof content === 'object' && content.defaultMessage) || typeof content === 'string') {
      content = <Text tag="span" message={content} color={'inherit'} />;
    }
    return content;
  };

  renderItem = (contents, theme) =>
    contents.map(item => {
      const contentIsReactComponent = React.isValidElement(item.label);
      const content = this.getItemRender(item.label);

      return (
        <DropdownItem
          contentIsReactComponent={contentIsReactComponent}
          onMouseUp={() => this.handleItemClick(item)}
          onKeyDown={e => this.handleItemKeyPress(e, item)}
          key={item.value}
          theme={theme}
          tabIndex={0}
        >
          {content}
        </DropdownItem>
      );
    });

  render() {
    const { contents, disabled, className, placeholder, minWidthIsContentWidth, maxHeight, theme } = this.props;
    const { selectedOption, open, contentWidth, pillWidth } = this.state;
    const rightWidth = 31;

    const width = Math.max(contentWidth + rightWidth, pillWidth) + 3;

    return (
      <Wrapper
        innerRef={node => {
          this.wrapper = node;
        }}
        className={className}
        tabIndex={-1}
        contentWidth={minWidthIsContentWidth && width}
        theme={theme}
      >
        <PillShape
          onMouseDown={this.handleDropdownClick}
          onKeyDown={this.handleDropdownKeyPress}
          disabled={disabled}
          icon={{ path: open ? 'chevronUp' : 'chevronDown' }}
          selectedOption={selectedOption}
          theme={theme}
          tabbable
        >
          {this.getItemRender(selectedOption || placeholder)}
        </PillShape>

        {open && (
          <DropdownContents
            innerRef={node => {
              this.dropDownContentsUl = node;
            }}
            theme={theme}
            maxHeight={maxHeight}
          >
            {contents && contents.length && this.renderItem(contents, theme)}
          </DropdownContents>
        )}
      </Wrapper>
    );
  }
}

Dropdown.propTypes = {
  placeholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      defaultMessage: PropTypes.string.isRequired,
    }),
    PropTypes.node,
  ]),
  disabled: PropTypes.bool,
  minWidthIsContentWidth: PropTypes.bool,
  contentClickSelectsItem: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          defaultMessage: PropTypes.string.isRequired,
        }),
        PropTypes.node,
      ]).isRequired,
    }),
  ),
  maxHeight: PropTypes.number,
  theme: PropTypes.object,
};

Dropdown.defaultProps = {
  open: false,
  minWidthIsContentWidth: true,
  contentClickSelectsItem: true,
  maxHeight: 350,
  theme: Theme,
};

export default withTheme(Dropdown);
