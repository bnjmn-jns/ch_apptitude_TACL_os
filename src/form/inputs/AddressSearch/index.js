import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';

import InputWrapper from '../InputWrapper';
import { Wrapper, Footer, Suggestion, SearchIcon } from './styles';
import { messageShape } from '../../../propTypes';

import Theme from 'assets/theme';

class AddressSearch extends React.Component {
  handleSelectPlace = place => {
    const { onChange, onError } = this.props;
    geocodeByAddress(place)
      .then(results => {
        if (onChange) {
          onChange(results[0]);
        }
      })
      .catch(error => {
        if (onError) {
          onError(error);
        }
      });
  };

  cleanValueProp = value => (value && typeof value === 'object' ? value.formatted_address : value);

  render() {
    const cssClasses = {
      autocompleteContainer: 'results-container',
    };
    const {
      value,
      onChange,
      onBlur,
      onFocus,
      autoFocus,
      placeholder,
      onError,
      renderFooter,
      messages,
      className,
      theme,
    } = this.props;
    const inputValue = this.cleanValueProp(value);
    const inputProps = {
      value: inputValue,
      type: 'text',
      onChange,
      placeholder,
      onBlur,
      onFocus,
      autoFocus,
    };

    return (
      <InputWrapper
        displayValidationMessage={false}
        displayStatusIcon={false}
        displayFormHelper={false}
        showClearIcon
        value={value}
        onChange={onChange}
        className={className}
      >
        <Wrapper theme={theme}>
          <SearchIcon theme={theme} />
          <PlacesAutocomplete
            inputProps={inputProps}
            onSelect={this.handleSelectPlace}
            classNames={cssClasses}
            renderFooter={props => (renderFooter ? <Footer poweredBy={messages.poweredBy} theme={theme} {...props} /> : null)}
            renderSuggestion={props => <Suggestion renderFooter={renderFooter} theme={theme} {...props} />}
            onEnterKeyDown={this.handleSelect}
            onError={onError}
          />
        </Wrapper>
      </InputWrapper>
    );
  }
}

AddressSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  autoFocus: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.object, // See comment below for shape - Nested shapes seem to be causing trouble
    //   PropTypes.shape({
    //     address_components: PropTypes.array,
    //     formatted_address: PropTypes.string,
    //     geometry: PropTypes.shape({
    //       location: PropTypes.shape({
    //         lat: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    //         lng: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    //       }),
    //       location_type: PropTypes.string,
    //       viewport: PropTypes.any,
    //     }),
    //     place_id: PropTypes.string,
    //     types: PropTypes.array,
    //   }),
    PropTypes.string,
  ]),
  onError: PropTypes.func,
  placeholder: messageShape,
  renderFooter: PropTypes.bool,
  className: PropTypes.string,
  messages: PropTypes.shape({
    poweredBy: messageShape,
  }),
  theme: PropTypes.object,
};

AddressSearch.defaultProps = {
  renderFooter: true,
  messages: {
    poweredBy: 'Powered by',
  },
  theme: Theme,
};

export default withTheme(AddressSearch);
