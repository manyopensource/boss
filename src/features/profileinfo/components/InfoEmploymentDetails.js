import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import dates from '../../../utils/dates';

class InfoEmploymentDetails extends Component {
  render() {
    const dateFormat = 'ddd MM/DD/YYYY';

    const mainVenue = this.props.venues.find(
      venue => venue.id === this.props.staffMember.masterVenueId
    );

    const otherVenues = this.props.venues.filter(venue =>
      this.props.staffMember.otherVenueIds.includes(venue.id)
    );

    const otherVenuesNames = otherVenues.map(venue => venue.name);

    const jobType = this.props.staffTypes.find(
      type => type.id === this.props.staffMember.staffTypeId
    );

    let startsAt = moment(
      this.props.staffMember.startsAt,
      dates.commonDateFormat
    );
    if (startsAt.isValid()) {
      startsAt = startsAt.format(dateFormat);
    } else {
      startsAt = 'N / A';
    }

    const payRate = this.props.payRates.find(
      rate => rate.id === this.props.staffMember.payRateId
    );

    return (
      <div className="boss-page-main__isle">
        <section className="boss-details">
          <p className="boss-details__pointer">
            <span className="boss-details__pointer-text">1</span>
          </p>
          <div className="boss-details__content">
            <h3 className="boss-details__title">Employment Details</h3>
            <ul className="boss-details__list">
              <li className="boss-details__item">
                <p className="boss-details__label">Main Venue</p>
                <p className="boss-details__value">
                  {mainVenue ? mainVenue.name : 'N / A'}
                </p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label">Other Venues</p>
                <p className="boss-details__value">
                  {otherVenuesNames.length
                    ? otherVenuesNames.join(', ')
                    : 'N / A'}
                </p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label">Job Type</p>
                <p className="boss-details__value">
                  {jobType ? jobType.name : 'N / A'}
                </p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label">Start Date</p>
                <p className="boss-details__value">{startsAt}</p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label">Pay Rate</p>
                <p className="boss-details__value">
                  {payRate ? payRate.name : 'N / A'}
                </p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label">Hour Preference</p>
                <p className="boss-details__value">
                  {this.props.staffMember.hoursPreferenceNote
                    ? this.props.staffMember.hoursPreferenceNote
                    : 'N / A'}
                </p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label">Day Preference</p>
                <p className="boss-details__value">
                  {this.props.staffMember.dayPreferenceNote
                    ? this.props.staffMember.dayPreferenceNote
                    : 'N / A'}
                </p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label">National Insurance Number</p>
                <p className="boss-details__value">
                  {this.props.staffMember.nationalInsuranceNumber
                    ? this.props.staffMember.nationalInsuranceNumber
                    : 'N / A'}
                </p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label">Sage ID</p>
                <p className="boss-details__value">
                  {this.props.staffMember.sageId
                    ? this.props.staffMember.sageId
                    : 'N / A'}
                </p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label">Status Statement</p>
                <p className="boss-details__value">
                  {this.props.staffMember.statusStatement
                    ? this.props.staffMember.statusStatement
                    : 'N / A'}
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

InfoEmploymentDetails.propTypes = {
  staffMember: PropTypes.object.isRequired,
  staffTypes: PropTypes.array.isRequired,
  venues: PropTypes.array.isRequired,
  payRates: PropTypes.array.isRequired,
  genderValues: PropTypes.array.isRequired
};

export default InfoEmploymentDetails;
