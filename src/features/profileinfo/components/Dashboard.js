import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <div className="boss-page-main__dashboard">
        <div className="boss-page-main__inner">
          <div className="boss-page-dashboard boss-page-dashboard_updated boss-page-dashboard_page_profile">
            <div className="boss-page-dashboard__group">
              <div className="boss-page-dashboard__user-summary">
                <div className="boss-user-summary">
                  <div className="boss-user-summary__side">
                    <div className="boss-user-summary__avatar">
                      <div className="boss-user-summary__avatar-inner">
                        <img
                          src={require('./../../../imgs/default.jpeg')}
                          alt={this.props.membersData.fullname}
                          className="boss-user-summary__pic"
                        />
                      </div>
                      <Link
                        to=""
                        className="boss-user-summary__avatar-icon boss-user-summary__avatar-icon_role_edit"
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                  <div className="boss-user-summary__content">
                    <div className="boss-user-summary__header">
                      <h2 className="boss-user-summary__name">
                        {this.props.membersData.fullname}
                      </h2>
                      <span
                        className="boss-button boss-button_type_small boss-button_type_no-behavior boss-user-summary__label"
                        style={{ backgroundColor: '#f0af84' }}
                      >
                        Floor Staff
                      </span>
                    </div>
                    <div className="boss-user-summary__contacts">
                      <a
                        href={`mailto:${this.props.membersData.email}`}
                        className="boss-user-summary__link boss-user-summary__link_role_email"
                      >
                        {this.props.membersData.email}
                      </a>
                      <a
                        href={`tel:${this.props.membersData.phone}`}
                        className="boss-user-summary__link boss-user-summary__link_role_phone"
                      >
                        {this.props.membersData.phone}
                      </a>
                    </div>
                    <ul className="boss-user-summary__review-list">
                      <li className="boss-user-summary__review-item boss-user-summary__review-item_role_venue">
                        <span className="boss-user-summary__review-marked">
                          {this.props.membersData.venue}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="boss-page-dashboard__buttons-group">
                <Link
                  to=""
                  className="boss-button boss-button_role_edit boss-page-dashboard__button"
                >
                  Edit Profile
                </Link>
                <Link
                  to=""
                  className="boss-button boss-button_role_block boss-page-dashboard__button"
                >
                  Disable Staff Member
                </Link>
              </div>
            </div>

            <div className="boss-page-dashboard__switches">
              <Link
                to=""
                className="boss-button boss-button_type_small boss-button_role_profile boss-button_state_active boss-page-dashboard__switch"
              >
                Profile
              </Link>
              <Link
                to=""
                className="boss-button boss-button_type_small boss-button_role_holidays boss-page-dashboard__switch"
              >
                Holidays
              </Link>
              <Link
                to=""
                className="boss-button boss-button_type_small boss-button_role_timelog boss-page-dashboard__switch"
              >
                Owed hours
              </Link>
              <Link
                to=""
                className="boss-button boss-button_type_small boss-button_role_accessories boss-page-dashboard__switch"
              >
                Accessories
              </Link>
              <Link
                to=""
                className="boss-button boss-button_type_small boss-button_role_shifts boss-page-dashboard__switch"
              >
                Shifts
              </Link>
              <Link
                to=""
                className="boss-button boss-button_type_small boss-button_role_payments boss-page-dashboard__switch"
              >
                Payments
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
