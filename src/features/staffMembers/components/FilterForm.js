import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form } from 'react-final-form';
import FormField from './../../FormField';
import FormFieldSelect from './../../FormFieldSelect';
import FormFieldSelectCheckbox from './FormFieldSelectCheckbox';

class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterVenueOnly: false
    };
  }

  handleSubmit = values => {
    console.log(values);
    this.props.history.push({
      // pathname: '/search',
      search: '?' + new URLSearchParams(values).toString()
    });
  };

  onToggleMasterVenueOnly = bool => {
    this.setState({
      masterVenueOnly: bool
    });
  };

  render() {
    const searchParams = new URLSearchParams(this.props.location.search);
    let initialValues = {};
    let i = 0;
    searchParams.get('firstName') ? initialValues.firstName = searchParams.get('firstName') : i++;
    searchParams.get('email') ? initialValues.email = searchParams.get('email') : i++;
    searchParams.get('status') ? initialValues.status = searchParams.get('status') : i++;
    searchParams.get('venue') ? initialValues.venue = searchParams.get('venue') : i++;
    searchParams.get('staffType') ? initialValues.staffType = searchParams.get('staffType') : i++;
    const options = [
      { value: 'enabled', label: 'Enabled' },
      { value: 'disabled', label: 'Disabled' }
    ];
    const options2 = [
      { value: 'watermelon', label: 'Watermelon' },
      { value: 'orange', label: 'Orange' },
      { value: 'kiwifruit', label: 'Kiwifruit' }
    ];
    return (
      <Form
        initialValues={initialValues}
        onSubmit={this.handleSubmit}
        render={({ handleSubmit, meta, pristine, invalid }) => (
          <form className="boss-form" onSubmit={handleSubmit}>
            <div className="boss-form__row boss-form__row_position_last">
              <div className="boss-form__group boss-form__group_layout_half">
                <FormField name="firstName" label="Name" />
                <FormField name="email" label="Email" />
                <FormFieldSelect
                  name="status"
                  label="Status"
                  options={options}
                />
              </div>
              <div className="boss-form__group boss-form__group_layout_half">
                <FormFieldSelectCheckbox
                  name="venue"
                  label="Venue"
                  options={
                    this.state.masterVenueOnly
                      ? options2
                      : this.props.venuesForSelect
                  }
                  masterVenueOnly={this.state.masterVenueOnly}
                  toggleMasterVenueOnly={this.onToggleMasterVenueOnly}
                />
                <FormFieldSelect
                  name="staffType"
                  label="Staff Type"
                  options={this.props.staffTypesForSelect}
                />
                <div className="boss-form__field boss-form__field_justify_end boss-form__field_no-label">
                  <button
                    className="boss-button boss-form__submit boss-form__submit_adjust_single"
                    type="submit"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      />
    );
  }
}

export default withRouter(FilterForm);
