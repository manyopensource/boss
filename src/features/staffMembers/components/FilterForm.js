import React, { Component } from 'react';
import { Form } from 'react-final-form';
import FormField from './../../FormField';
import FormFieldSelect from './../../FormFieldSelect';
import FormFieldSelectCheckbox from './FormFieldSelectCheckbox';

function onSubmit(values) {
  console.log(values);
}

class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterVenueOnly: false
    };
  }

  onToggleMasterVenueOnly = bool => {
    this.setState({
      masterVenueOnly: bool
    });
  };

  render() {
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ];
    const options2 = [
      { value: 'watermelon', label: 'Watermelon' },
      { value: 'orange', label: 'Orange' },
      { value: 'kiwifruit', label: 'Kiwifruit' }
    ];
    return (
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, pristine, invalid }) => (
          <form className="boss-form" onSubmit={handleSubmit}>
            <div className="boss-form__row boss-form__row_position_last">
              <div className="boss-form__group boss-form__group_layout_half">
                <FormField name="name" label="Name" />
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
                  options={this.state.masterVenueOnly ? options2 : options}
                  masterVenueOnly={this.state.masterVenueOnly}
                  toggleMasterVenueOnly={this.onToggleMasterVenueOnly}
                />
                <FormFieldSelect
                  name="staffType"
                  label="Staff Type"
                  options={options}
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

export default FilterForm;
