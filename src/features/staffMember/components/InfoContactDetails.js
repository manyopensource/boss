import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InfoContactDetails extends Component {
  render() {
    return (
      <div className="boss-page-main__isle">
        <section className="boss-details">
          <p className="boss-details__pointer">
            <span className="boss-details__pointer-text">4</span>
          </p>
          <div className="boss-details__content">
            <h3 className="boss-details__title">Contact Details</h3>
            <ul className="boss-details__list">
              <li className="boss-details__item">
                <p className="boss-details__label">Email Address</p>
                <p className="boss-details__value">
                  {this.props.staffMember.email}
                </p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label">Phone Number</p>
                <p className="boss-details__value">
                  {this.props.staffMember.phoneNumber}
                </p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label">Address</p>
                <p className="boss-details__value">
                  <span className="boss-details__value-line">
                    {this.props.staffMember.address}
                  </span>
                  <span className="boss-details__value-line">
                    {this.props.staffMember.county}
                  </span>
                  <span className="boss-details__value-line">
                    {this.props.staffMember.country}
                  </span>
                  <span className="boss-details__value-line">
                    {this.props.staffMember.postcode}
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

InfoContactDetails.propTypes = {
  staffMember: PropTypes.object.isRequired,
  staffTypes: PropTypes.array.isRequired,
  venues: PropTypes.array.isRequired,
  payRates: PropTypes.array.isRequired,
  genderValues: PropTypes.array.isRequired
};

export default InfoContactDetails;
