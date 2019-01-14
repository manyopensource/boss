import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import FormErrorMessage from './FormErrorMessage';
import FormFieldRadio from './FormFieldRadio';

class PollBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  onChangeCheckedState = bool => {
    console.log('changeCheckedState');
    this.setState({
      checked: bool
    });
  };

  render() {
    return (
      <Field
        type="radio"
        name={this.props.name}
        options={this.props.options}
        render={({ input, options, meta }) => (
          <div className="boss-form__field">
            <div className="boss-choice-list">
              <div className="boss-choice-list__header">
                <h3 className="boss-choice-list__title">
                  {this.props.boxTitle}
                </h3>
              </div>
              <div className="boss-choice-list__content">
                <p className="boss-choice-list__text">{this.props.pollTitle}</p>
                <div className="boss-choice-list__controls">
                  {options.map((option, index) => (
                    <FormFieldRadio
                      key={option.value}
                      input={input}
                      option={option}
                    />
                  ))}
                </div>
              </div>
            </div>
            {meta.touched &&
              meta.error && <FormErrorMessage errorMessage={meta.error} />}
          </div>
        )}
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
