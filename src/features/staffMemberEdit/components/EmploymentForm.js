import React, { Component } from 'react';
import { Form } from 'react-final-form';
import moment from 'moment';
import Dates from './../../../utils/dates';
import FormField from './../../FormField';
import FormFieldSelect from './../../FormFieldSelect';
import PollBox from './PollBox';
import FormFieldDate from './FormFieldDate';

function onSubmit(values) {
  if (values.startsAt) {
    values.startsAt = values.startsAt.format(Dates.commonDateFormat);
  }
  console.log(values);
}

class EmploymentForm extends Component {
  render() {
    const venues = this.props.venues.data.map(item => ({
      label: item.name,
      value: item.id
    }));

    const staffTypes = this.props.staffTypes.data.map(item => ({
      label: item.name,
      value: item.id
    }));

    const payRates = this.props.payRates.data.map(item => ({
      label: item.name,
      value: item.id
    }));

    const options2 = [
      {
        label: 'I have supplied my P45 from my previous employer',
        value: 1
      },
      {
        label:
          'This is my first job since the 6th of April. I have not been receiving taxable jobseekers allowance, Incapacity benefits or a state/occupational pernsion',
        value: 2
      },
      {
        label:
          'This is now my only job. Since the 6th of April I have had another jobs received taxable jobseekers allowance, Incapacity benefit. I don’t receivea state/occupational pension',
        value: 3
      },
      {
        label: 'I have another job or receive a state/occupational pernsion',
        value: 4
      },
      {
        label:
          'I left a course of higher education before the 6th of April & receive my first student loan instalmen on or after the 1st of September 1998 & I have not fully repaid my student loan',
        value: 5
      }
    ];

    let startsAt = moment(
      this.props.staffMember.data.startsAt,
      Dates.commonDateFormat
    );
    startsAt = startsAt.isValid() ? startsAt : null;

    return (
      <article className="boss-content-switcher__chapter boss-content-switcher__chapter_state_visible">
        <header className="boss-content-switcher__header">
          <h2 className="boss-content-switcher__title">Employment Details</h2>
        </header>
        <div className="boss-content-switcher__content">
          <Form
            initialValues={{
              ...this.props.staffMember.data,
              startsAt: startsAt
            }}
            onSubmit={onSubmit}
            validate={values => {
              const errors = {};
              if (!values.stuffType) {
                errors.stuffType = 'Required';
              }
              if (!values.startsAt) {
                errors.startsAt = 'Required';
              }
              if (!values.payRate) {
                errors.payRate = 'Required';
              }
              return errors;
            }}
            render={({ handleSubmit, pristine, invalid }) => (
              <form
                className="boss-form boss-form_page_profile-edit"
                onSubmit={handleSubmit}
              >
                <FormFieldSelect
                  name="masterVenueId"
                  label="Main Venue"
                  options={venues}
                />
                <FormFieldSelect
                  name="otherVenueIds"
                  label="Other Venues"
                  options={venues}
                  multi
                  removeSelected
                  required
                />
                <FormFieldSelect
                  name="staffTypeId"
                  label="Stuff Type"
                  options={staffTypes}
                  required
                />
                <FormFieldDate name="startsAt" label="Starts at" required />
                <FormFieldSelect
                  name="payRateId"
                  label="Pay rate"
                  options={payRates}
                  required
                />
                <FormField name="dayPreferenceNote" label="Day Preference" />
                <FormField name="hoursPreferenceNote" label="Hours Preference" />
                <FormField
                  name="nationalInsuranceNumber"
                  label="National Insurance Number"
                />
                <FormField name="sageId" label="Sage ID" />
                <PollBox
                  boxTitle="Starter Employement Status Statement"
                  pollTitle="Tick one that applies"
                  name="employmentStatus"
                  options={options2}
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

export default EmploymentForm;
