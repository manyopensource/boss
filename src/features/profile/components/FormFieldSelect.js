import React, { Component } from 'react';
import Select from 'react-select';
import { Field } from 'react-final-form';
import PropTypes from 'prop-types';
import FormErrorMessage from './../../FormErrorMessage';

class FormFieldSelect extends Component {
  render() {
    return (
      <Field
        name={this.props.name}
        render={({ input, meta }) => (
          <div className="boss-form__field">
            <label htmlFor="select-staff-type" className="boss-form__label">
              <span className="boss-form__label-text">{this.props.label}{this.props.required ? '*' : null}</span>
            </label>
            <div
              className={
                meta.touched && meta.error
                  ? 'boss-form__select boss-form__select_state_error'
                  : 'boss-form__select'
              }
            >
              <Select
                name={this.props.name}
                disabled={false}
                loading={false}
                clearable={false}
                rtl={false}
                onChange={(option) => {input.onChange(option.value)}}
                value={input.value}
                searchable={false}
                options={this.props.options}
              />
            </div>
            {meta.touched &&
              meta.error && <FormErrorMessage errorMessage={meta.error} />}
          </div>
        )}
      />
    );
  }
}

FormFieldSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  required: PropTypes.bool
}

export default FormFieldSelect;
