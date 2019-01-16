import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Island extends Component {
  render() {
    return (
      <div className="boss-page-main__isle">
        <section className="boss-details">
          <p className="boss-details__pointer">
            <span className="boss-details__pointer-text">
              {this.props.index}
            </span>
          </p>
          <div className="boss-details__content">
            <h3 className="boss-details__title">{this.props.garbageName}</h3>
            <ul className="boss-details__list">
              {Object.entries(this.props.garbage).map(([key, value], index) => {
                let newValue;
                if (key === 'Day Preference') {
                  newValue = value.join(' / ');
                } else if (key === 'Application Password') {
                  newValue = `Set at ${value}`;
                } else if (key === 'ID Scanner App Guid') {
                  newValue = (
                    <img
                      src={require('./../../../imgs/qr.png')}
                      alt="qr code preview"
                      className="boss-details__qr"
                    />
                  );
                } else if (key === 'Address') {
                  newValue = Object.values(value).map((item, i) => {
                    return (
                      <span key={i} className="boss-details__value-line">
                        {item}
                      </span>
                    );
                  });
                } else if (
                  ['Some App', 'Other App', 'Another App'].includes(key)
                ) {
                  newValue = (
                    <>
                      <span className="boss-details__value-line">
                        <Link
                          to={value.link}
                          className="boss-details__value-action"
                        >
                          Send download email
                        </Link>
                      </span>
                      <span className="boss-details__value-line">
                        Last sent at {value.lastSentDateTime}
                      </span>
                    </>
                  );
                } else if (key === 'viewHistory') {
                  return (
                    <li key={index} className="boss-details__item">
                      <button className="boss-button boss-button_role_view-history boss-button_type_small">
                        View History
                      </button>
                    </li>
                  );
                } else {
                  newValue = value;
                }
                return (
                  <li key={index} className="boss-details__item">
                    <p className="boss-details__label">{key}</p>
                    <p className="boss-details__value">{newValue}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

Island.propTypes = {
  index: PropTypes.number.isRequired,
  garbageName: PropTypes.string.isRequired,
  garbage: PropTypes.object.isRequired
};

export default Island;
