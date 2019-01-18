import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class InfoAccountDetails extends Component {
  render() {
    const dateFormat = 'ddd MM/DD/YYYY';
    const dateFormat2 = 'hh:mm ddd MM/DD/YYYY';

    let createdAt = moment(this.props.staffMember.createdAt, moment.ISO_8601);
    if (createdAt.isValid()) {
      createdAt = createdAt.format(dateFormat);
    } else {
      createdAt = 'N / A';
    }

    let passwordSetAt = moment(
      this.props.staffMember.passwordSetAt,
      moment.ISO_8601
    );
    if (passwordSetAt.isValid()) {
      passwordSetAt = passwordSetAt.format(dateFormat2);
    } else {
      passwordSetAt = 'N / A';
    }

    return (
      <div className="boss-page-main__isle">
        <section className="boss-details">
          <p className="boss-details__pointer">
            <span className="boss-details__pointer-text">2</span>
          </p>
          <div className="boss-details__content">
            <h3 className="boss-details__title">Account Details</h3>
            <ul className="boss-details__list">
              <li className="boss-details__item">
                <p className="boss-details__label">Created</p>
                <p className="boss-details__value">{createdAt}</p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label">Status</p>
                <p className="boss-details__value">
                  {this.props.staffMember.isDisabled ? 'Inactive' : 'Active'}
                </p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label">User</p>
                <p className="boss-details__value">
                  {this.props.staffMember.hasUser
                    ? 'Has Associated User'
                    : 'No Associated User'}
                </p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label">Application Password</p>
                <p className="boss-details__value">Set at {passwordSetAt}</p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label">ID Scanner App Guid</p>
                <p className="boss-details__value">
                  <img
                    src={require('./../../../imgs/qr.png')}
                    alt="qr code preview"
                    className="boss-details__qr"
                  />
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

InfoAccountDetails.propTypes = {
  staffMember: PropTypes.object.isRequired,
  staffTypes: PropTypes.array.isRequired,
  venues: PropTypes.array.isRequired,
  payRates: PropTypes.array.isRequired,
  genderValues: PropTypes.array.isRequired
};

export default InfoAccountDetails;
