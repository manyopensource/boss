import React, { Component } from 'react';
import Filter from './Filter';

class Dashboard extends Component {
  render() {
    return (
      <div className="boss-page-main__dashboard">
        <div className="boss-page-main__inner">
          <div className="boss-page-dashboard boss-page-dashboard_updated boss-page-dashboard_page_staff-members-index">
            <div className="boss-page-dashboard__group">
              <h1 className="boss-page-dashboard__title">
                <span className="boss-page-dashboard__title-text">
                  Staff Members
                </span>
                <span className="boss-page-dashboard__title-info">+695</span>
              </h1>

              <div className="boss-page-dashboard__buttons-group">
                <a
                  href="#"
                  className="boss-button boss-button_role_add boss-page-dashboard__button"
                >
                  Add Staff Members
                </a>
              </div>
            </div>

            <div className="boss-page-dashboard__filter">
              <Filter />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
