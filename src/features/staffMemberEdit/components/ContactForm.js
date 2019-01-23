import React, { Component } from 'react';
import { Form } from 'react-final-form';
import FormField from './../../FormField';

function onSubmit(values) {
  console.log(values);
}

class ContactForm extends Component {
  render() {
    return (
      <article className="boss-content-switcher__chapter boss-content-switcher__chapter_state_visible">
        <header className="boss-content-switcher__header">
          <h2 className="boss-content-switcher__title">Contact Details</h2>
        </header>
        <div className="boss-content-switcher__content">
          <Form
            initialValues={this.props.staffMember.data}
            onSubmit={onSubmit}
            render={({ handleSubmit, pristine, invalid }) => (
              <form
                className="boss-form boss-form_page_profile-edit"
                onSubmit={handleSubmit}
              >
                <FormField name="email" label="Email" />
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
