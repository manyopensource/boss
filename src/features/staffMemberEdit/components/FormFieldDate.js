import React, { Component } from 'react';
import { Field } from 'react-final-form';
import PropTypes from 'prop-types';
import BossDatePicker from './../../datepicker/components/BossDatePicker';
import FormErrorMessage from './../../FormErrorMessage';

class FormFieldDate extends Component {
  render() {
    return (
      <Field
        name={this.props.name}
        type="text"
        render={({ input, meta }) => (
          <div className="boss-form__field">
            <p className="boss-form__label">
              <span className="boss-form__label-text">
                {this.props.label}
                {this.props.required ? '*' : null}
              </span>
            </p>
            <div className="date-picker-input date-picker-input_type_icon">
              <BossDatePicker
                date={input.value}
                {...input}
                onApply={momentObj => input.onChange(momentObj)}
              />
            </div>
            {meta.touched && (meta.error || meta.submitError) && (
              <FormErrorMessage errorMessage={meta.error || meta.submitError} />
            )}
          </div>
        )}
      />
    );
  }
}

FormFieldDate.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool
};

export default FormFieldDate;
