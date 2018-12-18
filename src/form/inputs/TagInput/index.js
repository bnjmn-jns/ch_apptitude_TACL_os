import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Icon from '../../../components/Icon/';
import Tag from './Tag';

import { InputWrapper, StyledInput, IconContainer, TagsContainer } from './styles';

import Theme from 'assets/theme';

class TagInput extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
  }

  handleInputKeypress = e => {
    const { inputValue } = this.state;

    if (e.keyCode === 13) {
      e.preventDefault();
      this.onEnter(inputValue);
    }
    if (e.keyCode === 8 && !inputValue) {
      e.preventDefault();
      this.deleteLast();
    }
  };

  handleInputChange = e => {
    const inputValue = e.target.value;
    this.setState({ inputValue });
  };

  onEnter = value => {
    if (value) {
      this.props.onEnter(value);
      this.setState({
        inputValue: '',
        isFocused: false,
      });
    }
  };

  onDelete = i => {
    this.props.onDelete(i);
  };

  deleteLast = () => {
    const { onDelete, tags } = this.props;
    onDelete(tags.length - 1);
  };

  renderTag = (textValue, index, theme) => <Tag value={textValue} key={index} onClick={() => this.props.onDelete(index)} inInput theme={theme} />;

  render() {
    const { state, handleInputKeypress, handleInputChange, onEnter } = this;
    const { className, tags, placeholder, theme } = this.props;

    const { inputStyles, inputStyles: { spacing } } = theme;

    return (
      <InputWrapper className={className} onClick={() => this.input.focus()} focused={this.state.isFocused} theme={theme}>
        <TagsContainer spacing={spacing}>
          {tags && tags.map((tag, index) => this.renderTag(tag, index, theme))}
          <StyledInput
            placeholder={placeholder}
            type="text"
            onChange={handleInputChange}
            onKeyDown={handleInputKeypress}
            value={state.inputValue}
            onFocus={() => this.setState({ isFocused: true })}
            onBlur={() => this.setState({ isFocused: false })}
            innerRef={x => {
              this.input = x;
            }}
            spacing={spacing}
          />
        </TagsContainer>
        <IconContainer onClick={() => onEnter(state.inputValue)} spacing={spacing}>
          <Icon path="cornerDownLeft" color={state.inputValue ? inputStyles.colors.success : inputStyles.colors.border} />
        </IconContainer>
      </InputWrapper>
    );
  }
}

TagInput.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  onEnter: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  placeholder: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      defaultMessage: PropTypes.string.isRequired,
    }),
  ]),
  className: PropTypes.string,
  theme: PropTypes.object,
};

TagInput.defaultProps = {
  tags: [],
  theme: Theme,
};

export default withTheme(TagInput);
