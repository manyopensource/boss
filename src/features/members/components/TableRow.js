import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Dates from './../../../utils/dates';

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
              <Link to="" className="boss-table__link">
                <div className="boss-avatar boss-avatar_type_combined">
                  <img
                    src={require('./../../../imgs/' + this.props.member.pic)}
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
                <Link to="" className="boss-table__link">
                  {this.props.member.name}
                </Link>
              </p>
            </div>
          </div>
          <div className="boss-table__cell">
            <div className="boss-table__info">
              <p className="boss-table__label">Modified</p>
              <p className="boss-table__text">
                <Link to="" className="boss-table__link">
                  {moment(this.props.member.modifiedAt).format(
                    Dates.commonDateFormat
                  )}
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
                    this.props.member.status === 'Enabled'
                      ? ' boss-button_role_enabled'
                      : this.props.member.status === 'Disabled'
                      ? ' boss-button_role_disabled'
                      : null
                  }`}
                >
                  {this.props.member.status}
                </button>
              </p>
            </div>
          </div>
          <div className="boss-table__cell">
            <div className="boss-table__info">
              <p className="boss-table__label">Type</p>
              <p className="boss-table__text">
                <Link to="" className="boss-table__link">
                  {this.props.member.type}
                </Link>
              </p>
            </div>
          </div>
          <div className="boss-table__cell">
            <div className="boss-table__info">
              <p className="boss-table__label">Master Venue</p>
              <p className="boss-table__text">
                <Link to="" className="boss-table__link">
                  {this.props.member.masterVenue}
                </Link>
              </p>
            </div>
          </div>
          <div className="boss-table__cell">
            <div className="boss-table__info">
              <p className="boss-table__label">Work Venues</p>
              <p className="boss-table__text">
                <Link to="" className="boss-table__link">
                  {this.props.member.workVenues.join(', ')}
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
  member: PropTypes.object.isRequired,
  isHeader: PropTypes.bool
};

export default TableRow;
