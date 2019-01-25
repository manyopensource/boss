import React, { Component } from 'react';
import { Form } from 'react-final-form';
import moment from 'moment';
import Dates from './../../../utils/dates';
import FormField from './../../FormField';
import FormFieldSelect from './../../FormFieldSelect';
import PollBox from './PollBox';
import FormFieldDate from './FormFieldDate';

class EmploymentForm extends Component {
  handleSubmit = values => {
    if (values.startsAt && typeof values.startsAt === 'object') {
      values.startsAt = values.startsAt.format(Dates.commonDateFormat);
    }
    return this.props
      .updateStaffMemberEmploymentDetails(this.props.match.params.id, values)
      .catch(error => {
        if (error.response.status === 422) {
          return error.response.data.errors;
        }
      });
  };

  render() {
    const employmentStatusOptions = [
      {
        label: 'I have supplied my P45 from my previous employer',
        value: 'employment_status_p45_supplied'
      },
      {
        label:
          'This is my first job since the 6th of April. I have not been receiving taxable jobseekers allowance, Incapacity benefits or a state/occupational pernsion',
        value: 'employment_status_a'
      },
      {
        label:
          'This is now my only job. Since the 6th of April I have had another jobs received taxable jobseekers allowance, Incapacity benefit. I don’t receivea state/occupational pension',
        value: 'employment_status_b'
      },
      {
        label: 'I have another job or receive a state/occupational pernsion',
        value: 'employment_status_c'
      },
      {
        label:
          'I left a course of higher education before the 6th of April & receive my first student loan instalmen on or after the 1st of September 1998 & I have not fully repaid my student loan',
        value: 'employment_status_d'
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
              nationalInsuranceNumber: this.props.staffMember.data
                .nationalInsuranceNumber,
              sageId: this.props.staffMember.data.sageId,
              hoursPreferenceNote: this.props.staffMember.data
                .hoursPreferenceNote,
              dayPreferenceNote: this.props.staffMember.data.dayPreferenceNote,
              startsAt: startsAt,
              employmentStatus: this.props.staffMember.data.statusStatement,
              payRateId: this.props.staffMember.data.payRateId,
              masterVenue: this.props.staffMember.data.masterVenueId,
              otherVenues: this.props.staffMember.data.otherVenueIds,
              staffType: this.props.staffMember.data.staffTypeId,
              siaBadgeNumber: this.props.staffMember.data.siaBadgeNumber,
              siaBadgeExpiryDate: this.props.staffMember.data.siaBadgeExpiryDate
            }}
            onSubmit={this.handleSubmit}
            // validate={values => {
            //   const errors = {};
            //   if (!values.stuffType) {
            //     errors.stuffType = 'Required';
            //   }
            //   if (!values.startsAt) {
            //     errors.startsAt = 'Required';
            //   }
            //   if (!values.payRate) {
            //     errors.payRate = 'Required';
            //   }
            //   return errors;
            // }}
            render={({ handleSubmit, pristine, invalid }) => (
              <form
                className="boss-form boss-form_page_profile-edit"
                onSubmit={handleSubmit}
              >
                <FormFieldSelect
                  name="masterVenue"
                  label="Main Venue"
                  options={this.props.venuesForSelect}
                />
                <FormFieldSelect
                  name="otherVenues"
                  label="Other Venues"
                  options={this.props.venuesForSelect}
                  multi
                  removeSelected
                  required
                />
                <FormFieldSelect
                  name="staffType"
                  label="Stuff Type"
                  options={this.props.staffTypesForSelect}
                  required
                />
                <FormFieldDate name="startsAt" label="Starts at" required />
                <FormFieldSelect
                  name="payRateId"
                  label="Pay rate"
                  options={this.props.payRatesForSelect}
                  required
                />
                <FormField name="dayPreferenceNote" label="Day Preference" />
                <FormField
                  name="hoursPreferenceNote"
                  label="Hours Preference"
                />
                <FormField
                  name="nationalInsuranceNumber"
                  label="National Insurance Number"
                />
                <FormField name="sageId" label="Sage ID" />
                <PollBox
                  boxTitle="Starter Employement Status Statement"
                  pollTitle="Tick one that applies"
                  name="employmentStatus"
                  options={employmentStatusOptions}
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
