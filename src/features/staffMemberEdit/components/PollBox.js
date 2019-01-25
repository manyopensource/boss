import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import FormErrorMessage from './../../FormErrorMessage';

class PollBox extends Component {
  render() {
    return (
      <Field
        type="radio"
        name={this.props.name}
        options={this.props.options}
        render={({ input, options, meta }) => {
          return (
            <div className="boss-form__field">
              <div className="boss-choice-list">
                <div className="boss-choice-list__header">
                  <h3 className="boss-choice-list__title">
                    {this.props.boxTitle}
                  </h3>
                </div>
                <div className="boss-choice-list__content">
                  <p className="boss-choice-list__text">
                    {this.props.pollTitle}
                  </p>
                  <div className="boss-choice-list__controls">
                    {options.map((option, index) => (
                      <label
                        key={index}
                        className="boss-choice-list__radio-label"
                      >
                        <input
                          className="boss-choice-list__radio-button"
                          type="radio"
                          ref={input => (this.input = input)}
                          name={input.name}
                          value={option.value}
                          onChange={e => {
                            input.onChange(option.value);
                          }}
                          checked={
                            option.value === (input.value || meta.initial)
                          }
                        />
                        <span className="boss-choice-list__radio-label-text">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              {meta.touched && (meta.error || meta.submitError) && (
                <FormErrorMessage
                  errorMessage={meta.error || meta.submitError}
                />
              )}
            </div>
          );
        }}
      />
    );
  }
}

PollBox.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  boxTitle: PropTypes.string.isRequired,
  pollTitle: PropTypes.string.isRequired
};

export default PollBox;
