export const formatBytes = ({ bytes, decimals = 0, bitUnits = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] }) => {
  if (bytes === 0) return '0 Bytes';
  const multiplier = 1024;
  const fileSize = Math.floor(Math.log(bytes) / Math.log(multiplier));
  return `${parseFloat((bytes / (multiplier ** fileSize)).toFixed(decimals))} ${bitUnits[fileSize]}`; // prettier-ignore
};

export const FileTypeIsImage = file => file.type && file.type.startsWith('image/');
