import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InfoMobileApps extends Component {
  render() {
    return (
      <div className="boss-page-main__isle">
        <section className="boss-details">
          <p className="boss-details__pointer">
            <span className="boss-details__pointer-text">5</span>
          </p>
          <div className="boss-details__content">
            <h3 className="boss-details__title">Mobile Apps</h3>
            <ul className="boss-details__list">
              <li className="boss-details__item">
                <p className="boss-details__label">Some App</p>
                <p className="boss-details__value">
                  <span className="boss-details__value-line">
                    <a
                      className="boss-details__value-action"
                      href="/staff-member/some-app"
                    >
                      Send download email
                    </a>
                  </span>
                  <span className="boss-details__value-line">
                    Last sent at 10:30 Mon 11/15/2018
                  </span>
                </p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label">Other App</p>
                <p className="boss-details__value">
                  <span className="boss-details__value-line">
                    <a
                      className="boss-details__value-action"
                      href="/staff-member/other-app"
                    >
                      Send download email
                    </a>
                  </span>
                  <span className="boss-details__value-line">
                    Last sent at 10:30 Mon 11/15/2018
                  </span>
                </p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label">Another App</p>
                <p className="boss-details__value">
                  <span className="boss-details__value-line">
                    <a
                      className="boss-details__value-action"
                      href="/staff-member/another-app"
                    >
                      Send download email
                    </a>
                  </span>
                  <span className="boss-details__value-line">
                    Last sent at 10:30 Mon 11/15/2018
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

InfoMobileApps.propTypes = {
  staffMember: PropTypes.object.isRequired,
  staffTypes: PropTypes.array.isRequired,
  venues: PropTypes.array.isRequired,
  payRates: PropTypes.array.isRequired,
  genderValues: PropTypes.array.isRequired
};

export default InfoMobileApps;
