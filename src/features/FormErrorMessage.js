import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormErrorMessage extends Component {
  errorLine = (message, index) => (
    <span key={index} className="boss-form__error-line">
      {this.firstLetterUppercase(message)}
    </span>
  );

  firstLetterUppercase = str => {
    return str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
  };

  render() {
    return (
      <div className="boss-form__error">
        <p className="boss-form__error-text">
          {typeof this.props.errorMessage === 'object'
            ? this.props.errorMessage.map((message, index) =>
                this.errorLine(message, index)
              )
            : this.errorLine(this.props.errorMessage)}
        </p>
      </div>
    );
  }
}

FormErrorMessage.propTypes = {
  errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
    .isRequired
};

export default FormErrorMessage;
