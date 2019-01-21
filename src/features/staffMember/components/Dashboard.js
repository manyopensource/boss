import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    const avatarUrl = this.props.staffMember.avatarUrl
      ? 'https://purrweb-internship.herokuapp.com' +
        this.props.staffMember.avatarUrl
      : null;
    const otherVenues = this.props.venues.filter(venue =>
      this.props.staffMember.otherVenueIds.includes(venue.id)
    );
    const otherVenuesNames = otherVenues.map(venue => venue.name);
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
                          src={avatarUrl}
                          alt={
                            this.props.staffMember.firstName +
                            ' ' +
                            this.props.staffMember.surname
                          }
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
                        {this.props.staffMember.firstName +
                          ' ' +
                          this.props.staffMember.surname}
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
                        href={`mailto:${this.props.staffMember.email}`}
                        className="boss-user-summary__link boss-user-summary__link_role_email"
                      >
                        {this.props.staffMember.email}
                      </a>
                      <a
                        href={`tel:${this.props.staffMember.phoneNumber}`}
                        className="boss-user-summary__link boss-user-summary__link_role_phone"
                      >
                        {this.props.staffMember.phoneNumber}
                      </a>
                    </div>
                    <ul className="boss-user-summary__review-list">
                      <li className="boss-user-summary__review-item boss-user-summary__review-item_role_venue">
                        <span className="boss-user-summary__review-marked">
                          {otherVenuesNames.slice(0, 4).join(', ')}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="boss-page-dashboard__buttons-group">
                <Link
                  to={`/staff-member/${this.props.staffMember.id}/edit`}
                  className="boss-button boss-button_role_edit boss-page-dashboard__button"
                >
                  Edit Profile
                </Link>
                <Link
                  to={`/staff-member/${
                    this.props.staffMember.id
                  }/disable-staff-member`}
                  className="boss-button boss-button_role_block boss-page-dashboard__button"
                >
                  Disable Staff Member
                </Link>
              </div>
            </div>
            <div className="boss-page-dashboard__switches">
              <NavLink
                exact
                to={`/staff-member/${this.props.staffMember.id}`}
                className="boss-button boss-button_type_small boss-button_role_profile boss-page-dashboard__switch"
                activeClassName="boss-button_state_active"
              >
                Profile
              </NavLink>
              <NavLink
                exact
                to={`/staff-member/${this.props.staffMember.id}/holidays`}
                className="boss-button boss-button_type_small boss-button_role_holidays boss-page-dashboard__switch"
                activeClassName="boss-button_state_active"
              >
                Holidays
              </NavLink>
              <NavLink
                exact
                to={`/staff-member/${this.props.staffMember.id}/owed-hours`}
                className="boss-button boss-button_type_small boss-button_role_timelog boss-page-dashboard__switch"
                activeClassName="boss-button_state_active"
              >
                Owed hours
              </NavLink>
              <NavLink
                exact
                to={`/staff-member/${this.props.staffMember.id}/accessories`}
                className="boss-button boss-button_type_small boss-button_role_accessories boss-page-dashboard__switch"
                activeClassName="boss-button_state_active"
              >
                Accessories
              </NavLink>
              <NavLink
                exact
                to={`/staff-member/${this.props.staffMember.id}/shifts`}
                className="boss-button boss-button_type_small boss-button_role_shifts boss-page-dashboard__switch"
                activeClassName="boss-button_state_active"
              >
                Shifts
              </NavLink>
              <NavLink
                exact
                to={`/staff-member/${this.props.staffMember.id}/payments`}
                className="boss-button boss-button_type_small boss-button_role_payments boss-page-dashboard__switch"
                activeClassName="boss-button_state_active"
              >
                Payments
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  staffMember: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    surname: PropTypes.string,
    avatarUrl: PropTypes.string,
    phoneNumber: PropTypes.string,
    email: PropTypes.string,
    otherVenueIds: PropTypes.array
  }),
  venues: PropTypes.array.isRequired
};

export default Dashboard;
