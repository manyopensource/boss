import React, { Component } from 'react';
import { Field } from 'react-final-form';
import PropTypes from 'prop-types';
import FormErrorMessage from './FormErrorMessage';

class FormField extends Component {
  render() {
    return (
      <Field
        name={this.props.name}
        render={({ input, meta }) => (
          <div className="boss-form__field">
            <label className="boss-form__label">
              <span className="boss-form__label-text">{this.props.label}{this.props.required ? '*' : null}</span>
              <input {...input} type="text" className="boss-form__input" />
            </label>
            {meta.touched &&
              meta.error && <FormErrorMessage errorMessage={meta.error} />}
          </div>
        )}
      />
    );
  }
}

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool
}

export default FormField;
