import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import dates from '../../../utils/dates';

class InfoPersonalDetails extends Component {
  render() {
    const dateFormat = 'ddd MM/DD/YYYY';

    let dateOfBirth;
    if (this.props.staffMember.dateOfBirth) {
      dateOfBirth = moment(
        this.props.staffMember.dateOfBirth,
        dates.commonDateFormat
      );
      if (dateOfBirth.isValid()) {
        dateOfBirth = dateOfBirth.format(dateFormat);
      } else {
        dateOfBirth = 'N / A';
      }
    } else {
      dateOfBirth = 'N / A';
    }

    return (
      <div className="boss-page-main__isle">
        <section className="boss-details">
          <p className="boss-details__pointer">
            <span className="boss-details__pointer-text">3</span>
          </p>
          <div className="boss-details__content">
            <h3 className="boss-details__title">Personal Details</h3>
            <ul className="boss-details__list">
              <li className="boss-details__item">
                <p className="boss-details__label">Name</p>
                <p className="boss-details__value">
                  {this.props.staffMember.firstName +
                    ' ' +
                    this.props.staffMember.surname}
                </p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label">Gender</p>
                <p className="boss-details__value">
                  {this.props.staffMember.gender}
                </p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label">Date of Birth</p>
                <p className="boss-details__value">{dateOfBirth}</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

InfoPersonalDetails.propTypes = {
  staffMember: PropTypes.object.isRequired,
  staffTypes: PropTypes.array.isRequired,
  venues: PropTypes.array.isRequired,
  payRates: PropTypes.array.isRequired,
  genderValues: PropTypes.array.isRequired
};

export default InfoPersonalDetails;
