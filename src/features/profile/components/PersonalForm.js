import React, { Component } from 'react';
import { Form } from 'react-final-form';
import Dates from './../../../utils/dates';
import FormField from './../../FormField';
import FormFieldSelect from './FormFieldSelect';
import FormFieldDate from './FormFieldDate';

function onSubmit(values) {
  if (values.dateOfBirth) {
    values.dateOfBirth = values.dateOfBirth.format(Dates.commonDateFormat);
  }
  console.log(values);
}

class PersonalForm extends Component {
  render() {
    const options = [
      { value: 'm', label: 'Masculine' },
      { value: 'f', label: 'Feminine' },
      { value: 'lgbt', label: 'LGBT' }
    ];

    return (
      <article
        className="boss-content-switcher__chapter boss-content-switcher__chapter_state_visible"
      >
        <header className="boss-content-switcher__header">
          <h2 className="boss-content-switcher__title">Personal Details</h2>
        </header>
        <div className="boss-content-switcher__content">
          <Form
            onSubmit={onSubmit}
            validate={values => {
              const errors = {};
              if (!values.firstName) {
                errors.firstName = 'Required';
              }
              if (!values.surname) {
                errors.surname = 'Required';
              }
              if (!values.gender) {
                errors.gender = 'Required';
              }
              if (!values.dateOfBirth) {
                errors.dateOfBirth = 'Required';
              }
              return errors;
            }}
            render={({ handleSubmit, pristine, invalid }) => (
              <form
                className="boss-form boss-form_page_profile-edit"
                onSubmit={handleSubmit}
              >
                <FormField name="firstName" label="First Name" required />
                <FormField name="surname" label="Surname" required />
                <FormFieldSelect
                  name="gender"
                  label="Gender"
                  options={options}
                  required
                />
                <FormFieldDate
                  name="dateOfBirth"
                  label="Date of birth"
                  required
                />
                <div className="boss-form__field boss-form__field_justify_end">
                  <button
                    className="boss-button boss-form__submit boss-form__submit_adjust_single"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            )}
          />
        </div>
      </article>
    );
  }
}

export default PersonalForm;
