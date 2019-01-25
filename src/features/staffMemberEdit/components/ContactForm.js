import React, { Component } from 'react';
import { Form } from 'react-final-form';
import Dates from './../../../utils/dates';
import FormField from './../../FormField';

class ContactForm extends Component {
  handleSubmit = values => {
    if (values.startsAt && typeof values.startsAt === 'object') {
      values.startsAt = values.startsAt.format(Dates.commonDateFormat);
    }
    return this.props
      .updateStaffMemberContactDetails(this.props.match.params.id, values)
      .catch(error => {
        if (error.response.status === 422) {
          return error.response.data.errors;
        }
      });
  };

  render() {
    return (
      <article className="boss-content-switcher__chapter boss-content-switcher__chapter_state_visible">
        <header className="boss-content-switcher__header">
          <h2 className="boss-content-switcher__title">Contact Details</h2>
        </header>
        <div className="boss-content-switcher__content">
          <Form
            initialValues={{
              phoneNumber: this.props.staffMember.data.phoneNumber,
              address: this.props.staffMember.data.address,
              postcode: this.props.staffMember.data.postcode,
              country: this.props.staffMember.data.country,
              county: this.props.staffMember.data.county,
              emailAddress: this.props.staffMember.data.email
            }}
            onSubmit={this.handleSubmit}
            render={({ handleSubmit, pristine, invalid }) => (
              <form
                className="boss-form boss-form_page_profile-edit"
                onSubmit={handleSubmit}
              >
                <FormField name="emailAddress" label="Email" />
                <FormField name="phoneNumber" label="Phone number" />
                <FormField name="address" label="Address" />
                <FormField name="postcode" label="Postcode" />
                <FormField name="country" label="Country" />
                <FormField name="county" label="County" />
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

export default ContactForm;
