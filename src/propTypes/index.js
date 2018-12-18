import PropTypes from 'prop-types';

export const messageShape = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    defaultMessage: PropTypes.string.isRequired,
  }),
]);

export const statusTypeShape = PropTypes.shape({
  type: PropTypes.oneOf(['error', 'success', 'warning', 'info', 'loading']).isRequired,
  message: messageShape,
});
