import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormErrorMessage extends Component {
  render() {
    return (
      <div className="boss-form__error">
        <p className="boss-form__error-text">
          <span className="boss-form__error-line">
            {this.props.errorMessage}
          </span>
        </p>
      </div>
    );
  }
}

FormErrorMessage.propTypes = {
  errorMessage: PropTypes.string.isRequired
};

export default FormErrorMessage;
