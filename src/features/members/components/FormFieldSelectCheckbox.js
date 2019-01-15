import React, { Component } from 'react';
import Select from 'react-select';
import { Field } from 'react-final-form';
import PropTypes from 'prop-types';
import FormErrorMessage from './../../FormErrorMessage';

class FormFieldSelectCheckbox extends Component {
  handleChangeMasterVenueOnly = () => {
    this.props.toggleMasterVenueOnly(!this.props.masterVenueOnly);
  }
  render() {
    return (
      <Field
        name={this.props.name}
        render={({ input, meta }) => (
          <div className="boss-form__field">
            <div className="boss-form__label-group">
              <p className="boss-form__label">
                <span className="boss-form__label-text">
                  {this.props.label}
                  {this.props.required ? '*' : null}
                </span>
              </p>
              <label className="boss-form__checkbox-label boss-form__checkbox-label_context_label-group">
                <input
                  name="masterVenueOnly"
                  value="true"
                  type="checkbox"
                  className="boss-form__checkbox-input"
                  onChange={this.handleChangeMasterVenueOnly}
                //   checked={true}
                />
                <span className="boss-form__checkbox-label-text">
                  Master venue only
                </span>
              </label>
            </div>
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
                onChange={option => {
                  input.onChange(option.value);
                }}
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

FormFieldSelectCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  toggleMasterVenueOnly: PropTypes.func.isRequired,
  masterVenueOnly: PropTypes.bool.isRequired,
  required: PropTypes.bool
};

export default FormFieldSelectCheckbox;
