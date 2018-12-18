import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { PillShape, Input } from './styles';
import Theme from 'assets/theme';

class SearchInput extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      searchValue: null,
      focused: false,
    };
  }

  searchSubmit = () => {
    if (this.state.searchValue && this.props.searchSubmit) {
      this.props.searchSubmit(this.state.searchValue);
    }
  };

  handleKeyPress = e => {
    const code = e.keyCode ? e.keyCode : e.which;
    if (code === 13) {
      this.searchSubmit();
    }
  };

  handleChange = e => {
    const searchValue = e.target.value || null;
    this.setState({ searchValue });
    if (this.props.onChange) {
      this.props.onChange(searchValue);
    }
  };

  handleBlur = () => {
    if (this.props.onBlur) {
      this.props.onBlur();
    }
    this.setState({ focused: false });
  };

  handleFocus = () => {
    if (this.props.onFocus) {
      this.props.onFocus();
    }
    this.setState({ focused: true });
  };

  render() {
    const { handleChange, handleKeyPress, searchSubmit, handleBlur, handleFocus, state } = this;
    const { placeholder, className, theme } = this.props;

    return (
      <PillShape
        icon={{ path: 'search' }}
        rightClick={searchSubmit}
        loading={this.props.loading}
        rightKeyPress={handleKeyPress}
        onClick={() => this.input.focus()}
        focused={state.focused}
        theme={theme}
        className={className}
      >
        <Input
          placeholder={placeholder}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          innerRef={x => {
            this.input = x;
          }}
          onBlur={handleBlur}
          onFocus={handleFocus}
          theme={theme}
        />
      </PillShape>
    );
  }
}

SearchInput.propTypes = {
  searchSubmit: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  loading: PropTypes.bool,
  placeholder: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      defaultMessage: PropTypes.string.isRequired,
    }),
    PropTypes.string,
  ]),
  className: PropTypes.string,
  theme: PropTypes.object,
};

SearchInput.defaultProps = {
  theme: Theme,
};

export default withTheme(SearchInput);
