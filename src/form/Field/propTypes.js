import PropTypes from 'prop-types';
import { messageShape } from '../../propTypes';
import reactMomentProptypes from 'react-moment-proptypes';

const { shape, oneOfType, oneOf, string, number, object, bool, func, arrayOf, element, node, array } = PropTypes;
const { momentObj } = reactMomentProptypes;

export default {
  onChange: func.isRequired,
  onBlur: func,
  type: oneOf([
    'text',
    'textArea',
    'number',
    'email',
    'password',
    'hidden',
    'select',
    'checkbox',
    'radio',
    'slider',
    'range',
    'switch',
    'calendar',
    'file',
    'phoneNumber',
    'toggle',
  ]).isRequired,

  // WrapperProp

  hasStatus: shape({
    message: oneOfType([
      shape({
        id: string.isRequired,
        defaultMessage: string.isRequired,
      }),
      string,
    ]),
    type: oneOf(['success', 'error', 'warning']),
  }),
  label: oneOfType([
    shape({
      id: string.isRequired,
      defaultMessage: string.isRequired,
    }),
    string,
  ]),
  formHelper: shape({
    content: messageShape.isRequired,
    trigger: oneOf(['hover', 'click']),
  }),
  disabled: bool,
  value: oneOfType([string, number, object, bool]),
  className: string,
  displayValidationMessage: bool,
  noValidation: bool,
  required: bool,
  description: messageShape,
  labelPosition: oneOf(['top', 'left1']),

  // Generic InputProps

  placeholder: oneOfType([
    shape({
      id: string.isRequired,
      defaultMessage: string.isRequired,
    }),
    string,
  ]),
  displayValidationBorderColor: bool,

  mask: string,

  options: arrayOf(
    oneOfType([
      shape({
        value: oneOfType([element, node, string, number, bool]).isRequired,
        label: oneOfType([
          shape({
            id: string.isRequired,
            defaultMessage: string.isRequired,
          }),
          string,
        ]),
        disabled: bool,
      }),
      string,
      number,
    ]),
  ),

  defaultValue: oneOfType([
    bool,
    string,
    number,
    array,
    shape({
      countryCode: string,
      phoneNumber: string,
    }),
    shape({
      min: number.isRequired,
      max: number.isRequired,
    }),
  ]),
  name: messageShape,
  returnRawValue: bool,

  // NumberInput
  unit: oneOfType([
    number,
    string,
    shape({
      id: string.isRequired,
      defaultMessage: string.isRequired,
    }),
  ]),
  unitPosition: oneOf(['start', 'end']),

  accept: string,
  maxFileSize: number,
  acceptedFilesPrettyNames: string,
  onDropError: func,

  min: number,
  max: number,

  // Slider + Range
  units: shape({
    before: string,
    after: string,
  }),

  // FileUpload ~ FileManager ~ FilePreview

  messages: shape({
    name: messageShape,
    docType: messageShape,
    fileTooBig: messageShape,
    placeholder: messageShape,
    syncdMessage: messageShape,
    bitUnits: arrayOf(string),
  }),

  // PhoneNumberInput

  regionSelectable: bool,
  regionPlaceholder: messageShape,

  // Calendar
  locale: string,
  allowedDateRange: oneOfType([
    func,
    shape({
      start: oneOfType([string, momentObj]),
      end: oneOfType([string, momentObj]),
    }),
  ]),
  displayFormat: string,
  withCalendar: bool,

  inputWrapperProps: object,
};
