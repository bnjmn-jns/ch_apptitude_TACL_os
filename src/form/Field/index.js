import React, { PureComponent } from 'react';

import InputWrapper from '../inputs/InputWrapper';
import TextInput from '../inputs/TextInput';
import NumberInput from '../inputs/NumberInput';
import TextArea from '../inputs/TextArea';
import Select from '../inputs/Select';
import CheckboxGroup from '../inputs/CheckboxGroup';
import RadioGroup from '../inputs/RadioGroup';
import Slider, { Range } from '../inputs/Slider';
import Switch from '../inputs/Switch';
import FileUpload from '../inputs/FileUpload';
import DatePicker from '../inputs/DatePicker';
import PhoneNumber from '../inputs/PhoneNumberInput';
import Toggle from '../inputs/Toggle';

import fieldPropTypes from './propTypes';

class Field extends PureComponent {
  onChange = value => {
    const { type, onChange } = this.props;

    let newValue = value;
    if (type === 'email' || type === 'password' || type === 'text') {
      newValue = value.replace(/(\s?)/, '');
      if (type === 'email') {
        newValue = value.replace(/(\s+)/, '');
      }
    }

    return onChange(newValue);
  };

  getInput() {
    const {
      type,
      placeholder,
      defaultValue,
      value,
      disabled,
      required,
      name,
      options,
      hasStatus,
      unit,
      units,
      unitPosition,
      accept,
      maxFileSize,
      acceptedFilesPrettyNames,
      onDropError,
      min,
      max,
      messages,
      returnRawValue,
      regionSelectable,
      allowedDateRange,
      locale,
      displayFormat,
      withCalendar,
      mask,
      displayValidationBorderColor,
      iconProps,
    } = this.props;

    const inputProps = {
      name,
      value,
      defaultValue,
      placeholder,

      hasStatus,
      required,
      disabled,
      displayValidationBorderColor,

      onChange: this.onChange,
      onBlur: this.props.onBlur,
    };

    if (['text', 'email', 'password', 'hidden'].includes(type)) {
      return {
        render: <TextInput type={type} returnRawValue={returnRawValue} iconProps={iconProps} mask={mask} {...inputProps} />,
        props: {
          showClearIcon: true,
        },
      };
    } else if (type === 'number') {
      const showClearIcon = units && units.options && !units.options.length && !units.position === 'end';
      return {
        render: <NumberInput type="number" units={units} iconProps={iconProps} {...inputProps} />,
        props: {
          showClearIcon,
        },
      };
    } else if (type === 'phoneNumber') {
      return {
        render: <PhoneNumber returnRawValue={returnRawValue} regionSelectable={regionSelectable} {...inputProps} />,
        props: {
          showClearIcon: true,
          stopPropagation: true,
        },
      };
    } else if (type === 'textArea') {
      return {
        render: <TextArea {...inputProps} />,
        props: {
          showClearIcon: true,
          labelAtTop: true,
        },
      };
    } else if (type === 'select') {
      return {
        render: <Select options={options} {...inputProps} />,
        props: {},
      };
    } else if (type === 'checkbox') {
      return {
        render: <CheckboxGroup options={options} {...inputProps} />,
        props: {
          labelAtTop: true,
        },
      };
    } else if (type === 'radio') {
      return {
        render: <RadioGroup options={options} {...inputProps} />,
        props: {
          labelAtTop: true,
        },
      };
    } else if (type === 'slider') {
      return {
        render: <Slider min={min} max={max} units={units} {...inputProps} />,
        props: {},
      };
    } else if (type === 'range') {
      return {
        render: <Range min={min} max={max} units={units} {...inputProps} />,
        props: {},
      };
    } else if (type === 'switch') {
      return {
        render: <Switch {...inputProps} />,
        props: {},
      };
    } else if (type === 'file') {
      return {
        render: (
          <FileUpload
            accept={accept}
            maxFileSize={maxFileSize}
            acceptedFilesPrettyNames={acceptedFilesPrettyNames}
            onDropError={onDropError}
            messages={messages}
            {...inputProps}
          />
        ),
        props: {},
      };
    } else if (type === 'calendar' || type === 'datePicker') {
      return {
        render: (
          <DatePicker
            allowedDateRange={allowedDateRange}
            locale={locale}
            displayFormat={displayFormat}
            withCalendar={withCalendar}
            {...inputProps}
          />
        ),
        props: {
          showClearIcon: true,
        },
      };
    } else if (type === 'toggle') {
      return {
        render: <Toggle options={options} {...inputProps} />,
        props: {},
      };
    }
    throw new Error('Field type not found! Implement input field here!');
  }

  render() {
    const input = this.getInput();

    const {
      label,
      required,
      hasStatus,
      value,
      disabled,
      className,
      noValidation,
      displayValidationMessage,
      formHelper,
      inputWrapperProps,
      labelPosition,
      description,
    } = this.props;

    const wrapperProps = {
      ...input.props,
      onChange: this.onChange,
      labelText: label,
      disabled,
      hasStatus,
      required,
      className,
      noValidation,
      displayValidationMessage,
      formHelper,
      labelPosition,
      description,
      ...inputWrapperProps,
    };

    if (value) {
      wrapperProps.value = value;
    }

    if (this.props.type === 'hidden') {
      return input.render;
    }

    return <InputWrapper {...wrapperProps}>{input.render}</InputWrapper>;
  }
}

Field.propTypes = fieldPropTypes;

export default Field;
