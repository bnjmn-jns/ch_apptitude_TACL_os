import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';

import Icon from '../../src/components/Icon';
import Text from '../../src/components/Text';

import { colors } from '../assets/theme';
import { codeColors } from './styles';

class CopyToClipboardButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
  }

  handleChange = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 3000);
    });
  };

  render() {
    const { copied } = this.state;
    return (
      <CopyToClipboard text={this.props.copyText} onCopy={this.handleChange}>
        <Wrapper>
          <Icon path={copied ? 'check' : 'paperclip'} color={copied ? colors.success : codeColors.icon} />
          {copied && <Text message="you got it!" size={10} color={codeColors.code} align="center" />}
        </Wrapper>
      </CopyToClipboard>
    );
  }
}

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  box-shadow: ${codeColors.boxShadow};
  border: ${codeColors.border};
  border-bottom-right-radius: 5px;
  border-radius: 5px;
  background: ${codeColors.bg};
  margin: 0px;
  cursor: pointer;
  padding: 0 16px;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  right: 0;
  min-height: 57px;
`;

CopyToClipboardButton.propTypes = {
  Text: PropTypes.string,
};

export default CopyToClipboardButton;
