import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormFieldRadio extends Component {
  render() {
    return (
      <label className="boss-choice-list__radio-label">
        <input
          className="boss-choice-list__radio-button"
          type="radio"
          name={this.props.input.name}
          value={this.props.option.value}
          onChange={(e) => this.props.input.onChange(e)}
          defaultChecked={false}
        />
        <span className="boss-choice-list__radio-label-text">
          {this.props.option.label}
        </span>
      </label>
    );
  }
}

FormFieldRadio.propTypes = {
  input: PropTypes.object.isRequired,
  option: PropTypes.object.isRequired
};

export default FormFieldRadio;
