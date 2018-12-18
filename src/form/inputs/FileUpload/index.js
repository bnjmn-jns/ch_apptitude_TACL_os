import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import Icon from '../../../components/Icon/';
import paths from '../../../components/Icon/paths';
import Text from '../../../components/Text';
import { Drop, DropContents, TextWithMargin } from './styles';
import { formatBytes } from './helpers';

import Theme from 'assets/theme';

class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.state = {
      droppedFiles: [],
    };
  }

  handleRemove(fileClicked) {
    const filesList = this.state.droppedFiles;
    this.setState({ droppedFiles: filesList.filter(file => file.preview !== fileClicked.preview) });
  }

  onDrop(accepted, rejected) {
    if (accepted.length) {
      this.setState(prevState => ({ droppedFiles: [...prevState.droppedFiles, ...accepted] }));
      this.props.onChange(accepted);
    } else {
      this.props.onDropError(rejected);
    }
  }

  renderDropZoneContents(isDragActive, isDragReject) {
    const { accept, maxFileSize, messages, theme } = this.props;
    const acceptedFormatMessage = messages.acceptedFormat;
    const uptoMessage = messages.upto;
    const { inputStyles } = theme;

    if (isDragActive && !isDragReject) {
      return (
        <DropContents dragOver theme={theme}>
          <Icon path="arrowDown" color={theme.base.colors.success} size={50} />
          <Text
            tag="p"
            color={theme.base.colors.success}
            message={messages.compatibleFormatDrop}
            size={theme.base.font.size.lg}
            align="center"
          />
        </DropContents>
      );
    }
    if (isDragReject) {
      return (
        <DropContents dragOver reject theme={theme}>
          <Icon path={paths.alertIcons.warning} color={theme.base.colors.error} iconType="fill" />
          <Text tag="p" color={theme.base.colors.error} message={messages.incompatibleFormatDrop} align="center" />
          <TextWithMargin
            tag="p"
            color={inputStyles.colors.placeholderText}
            message={`${acceptedFormatMessage} : ${messages.acceptedFilesDisplayText || accept || acceptDefaults}`}
            align="center"
          />
          <TextWithMargin
            tag="p"
            size={inputStyles.fontSize.validationText}
            color={inputStyles.colors.placeholderText}
            message={`${uptoMessage} : ${formatBytes({ bytes: maxFileSize, bitUnits: messages.bitUnits })}`}
            align="center"
          />
        </DropContents>
      );
    }
    return (
      <DropContents theme={theme}>
        <Icon path="uploadCloud" color={inputStyles.colors.highlight} />
        <Text tag="p" color={inputStyles.colors.highlight} message={messages.dropNewFile} align="center" />
        <TextWithMargin
          tag="p"
          color={inputStyles.colors.placeholderText}
          message={`${acceptedFormatMessage} : ${messages.acceptedFilesDisplayText || accept || acceptDefaults}`}
          align="center"
        />
        <TextWithMargin
          tag="p"
          size={inputStyles.fontSize.validationText}
          color={inputStyles.colors.placeholderText}
          message={`${uptoMessage} : ${formatBytes({ bytes: maxFileSize, bitUnits: messages.bitUnits })}`}
          align="center"
        />
      </DropContents>
    );
  }

  render() {
    const { className, maxFileSize, render } = this.props;
    return (
      <Drop key={this.state.key} onDrop={this.onDrop} maxSize={maxFileSize} className={className} accept={this.props.accept}>
        {({ isDragActive, isDragReject }) => {
          if (!render) {
            return null;
          }
          return this.renderDropZoneContents(isDragActive, isDragReject);
        }}
      </Drop>
    );
  }
}

FileUpload.propTypes = {
  render: PropTypes.bool.isRequired,
  accept: PropTypes.string.isRequired,
  maxFileSize: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onDropError: PropTypes.func.isRequired,
  messages: PropTypes.shape({
    acceptedFormat: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    upto: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    compatibleFormatDrop: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    incompatibleFormatDrop: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    acceptedFilesDisplayText: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    dropNewFile: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    bitUnits: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  className: PropTypes.string,
  theme: PropTypes.object,
};

const acceptDefaults = 'image/*, application/pdf';

FileUpload.defaultProps = {
  render: true,
  accept: acceptDefaults,
  maxFileSize: 10485760,
  acceptDropMessage: 'Drop here!',
  messages: {
    acceptedFormat: 'Formats acceptés',
    upto: "Jusqu'à",
    compatibleFormatDrop: 'Glissez ici!',
    incompatibleFormatDrop: 'Formats acceptés',
    acceptedFilesDisplayText: acceptDefaults,
    dropNewFile: 'Glissez un nouveau document',
  },
  theme: Theme,
};

export default withTheme(FileUpload);
