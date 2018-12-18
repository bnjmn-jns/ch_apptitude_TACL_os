import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import Icon from '../../../components/Icon/';
import Text from '../../../components/Text';
import Progress from '../../../components/Progress/LineProgress';

import { formatBytes, FileTypeIsImage } from './helpers';
import {
  PreviewList,
  ImageFilePreview,
  DocumentFilePreview,
  FilePreviewContainer,
  FilePreviewContainerRight,
  RemoveFileIcon,
} from './styles';

import Theme from 'assets/theme'; // eslint-disable-line

const FilePreview = ({ droppedFiles, handleRemove, bitUnits, className, theme }) => (
  <PreviewList className={className}>
    {droppedFiles.map(file => (
      <FilePreviewSingleItem file={file} key={file.preview} handleRemove={handleRemove} bitUnits={bitUnits} theme={theme} />
    ))}
  </PreviewList>
);

const FileCirclePreview = ({ file, theme, theme: { inputStyles } }) =>
  FileTypeIsImage(file) ? (
    <ImageFilePreview imagePreview={file.preview} key={file.preview} theme={theme} />
  ) : (
    <DocumentFilePreview key={file.preview} theme={theme}>
      <Icon path="fileText" color={inputStyles.colors.highlight} size={36} strokeWidth={1} />
    </DocumentFilePreview>
  );

const FilePreviewSingleItem = ({ file, handleRemove, bitUnits, className, theme }) => {
  const displayStatus = file.hasStatus && file.hasStatus !== 'inProgress';
  const showErrorMessage = displayStatus && file.hasStatus.message;
  return (
    <FilePreviewContainer className={className}>
      <FileCirclePreview file={file} theme={theme} />
      <FilePreviewContainerRight>
        <Text tag="p" color={theme.inputStyles.colors.icon} size={theme.inputStyles.fontSize.validationText} noSelect>
          {file.name}
        </Text>
        <Progress percentage={file.uploadPercentage || 0} hasStatus={displayStatus && file.hasStatus} />
        <Text
          tag="p"
          color={showErrorMessage ? theme.base.colors[file.hasStatus.type] : theme.inputStyles.colors.icon}
          size={theme.inputStyles.fontSize.validationText}
          noSelect
        >
          {showErrorMessage ? file.hasStatus.message : formatBytes({ bytes: file.size, bitUnits })}
        </Text>
      </FilePreviewContainerRight>
      <RemoveFileIcon
        path="crossInCircle"
        color={theme.inputStyles.colors.icon}
        iconType="fill"
        size={20}
        onClick={() => handleRemove(file)}
        theme={theme}
      />
    </FilePreviewContainer>
  );
};

const fileProps = PropTypes.shape({
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  uploadPercentage: PropTypes.number,
  hasStatus: PropTypes.shape({
    message: PropTypes.oneOfType([
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        defaultMessage: PropTypes.string.isRequired,
      }),
      PropTypes.string,
    ]),
    type: PropTypes.oneOf(['success', 'error', 'warning', 'inProgress', null]),
  }),
  bitUnits: PropTypes.arrayOf(PropTypes.string),
});

FilePreview.propTypes = {
  droppedFiles: PropTypes.array,
  handleRemove: PropTypes.func,
  bitUnits: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  theme: PropTypes.object,
};

FileCirclePreview.propTypes = {
  file: fileProps,
  theme: PropTypes.object,
};

FilePreviewSingleItem.propTypes = {
  file: fileProps,
  handleRemove: PropTypes.func,
  className: PropTypes.string,
  bitUnits: PropTypes.arrayOf(PropTypes.string),
  theme: PropTypes.object,
};

FilePreview.defaultProps = {
  theme: Theme,
};

const FilePreviewItem = withTheme(FilePreviewSingleItem);

FilePreviewItem.defaultProps = {
  theme: Theme,
};
export { FilePreviewItem };
export default withTheme(FilePreview);
