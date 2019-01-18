import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class TableRow extends Component {
  render() {
    if (this.props.isHeader) {
      return (
        <div className="boss-table__row">
          <div className="boss-table__cell boss-table__cell_role_header" />
          <div className="boss-table__cell boss-table__cell_role_header">
            Name
          </div>
          <div className="boss-table__cell boss-table__cell_role_header">
            Modified
          </div>
          <div className="boss-table__cell boss-table__cell_role_header">
            Status
          </div>
          <div className="boss-table__cell boss-table__cell_role_header">
            Type
          </div>
          <div className="boss-table__cell boss-table__cell_role_header">
            Master Venue
          </div>
          <div className="boss-table__cell boss-table__cell_role_header">
            Work Venues
          </div>
        </div>
      );
    } else {
      return (
        <div className="boss-table__row">
          <div className="boss-table__cell">
            <div className="boss-table__image">
              <Link
                to={`/staff-member/${this.props.member.id}`}
                className="boss-table__link"
              >
                <div className="boss-avatar boss-avatar_type_combined">
                  <img
                    src={'https://purrweb-internship.herokuapp.com' + this.props.member.avatarUrl}
                    className="boss-avatar__image"
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="boss-table__cell">
            <div className="boss-table__info">
              <p className="boss-table__label">Name</p>
              <p className="boss-table__text">
                <Link
                  to={`/staff-member/${this.props.member.id}`}
                  className="boss-table__link"
                >
                  {this.props.member.firstName +
                    ' ' +
                    this.props.member.surname}
                </Link>
              </p>
            </div>
          </div>
          <div className="boss-table__cell">
            <div className="boss-table__info">
              <p className="boss-table__label">Modified</p>
              <p className="boss-table__text">
                <Link
                  to={`/staff-member/${this.props.member.id}`}
                  className="boss-table__link"
                >
                  N / A
                </Link>
              </p>
            </div>
          </div>
          <div className="boss-table__cell">
            <div className="boss-table__info">
              <p className="boss-table__label">Status</p>
              <p className="boss-table__text">
                <button
                  className={`boss-button boss-button_type_small boss-button_type_no-behavior${
                    this.props.member.status === 'enabled'
                      ? ' boss-button_role_enabled'
                      : this.props.member.status === 'disabled'
                      ? ' boss-button_role_disabled'
                      : null
                  }`}
                >
                  {this.props.member.status === 'enabled'
                    ? 'Enabled'
                    : this.props.member.status === 'disabled'
                    ? 'Disabled'
                    : null}
                </button>
              </p>
            </div>
          </div>
          <div className="boss-table__cell">
            <div className="boss-table__info">
              <p className="boss-table__label">Type</p>
              <p className="boss-table__text">
                <Link
                  to={`/staff-member/${this.props.member.id}`}
                  className="boss-table__link"
                >
                  {this.props.member.staffType.name}
                </Link>
              </p>
            </div>
          </div>
          <div className="boss-table__cell">
            <div className="boss-table__info">
              <p className="boss-table__label">Master Venue</p>
              <p className="boss-table__text">
                <Link
                  to={`/staff-member/${this.props.member.id}`}
                  className="boss-table__link"
                >
                  {this.props.member.masterVenue
                    ? this.props.member.masterVenue.name
                    : 'N / A'}
                </Link>
              </p>
            </div>
          </div>
          <div className="boss-table__cell">
            <div className="boss-table__info">
              <p className="boss-table__label">Work Venues</p>
              <p className="boss-table__text">
                <Link
                  to={`/staff-member/${this.props.member.id}`}
                  className="boss-table__link"
                >
                  N / A
                </Link>
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
}

TableRow.propTypes = {
  member: PropTypes.object,
  isHeader: PropTypes.bool
};

export default TableRow;
