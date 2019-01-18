import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Dashboard extends Component {
  handleOnClick = () => {
    this.props.history.push(`/staff-member/${this.props.memberID}`);
  };

  render() {
    return (
      <div className="boss-page-main__dashboard">
        <div className="boss-page-main__inner">
          <div className="boss-page-dashboard boss-page-dashboard_updated boss-page-dashboard_page_profile-edit">
            <div className="boss-page-dashboard__group">
              <h1 className="boss-page-dashboard__title">Edit Profile</h1>
              <div className="boss-page-dashboard__buttons-group boss-page-dashboard__buttons-group_position_last">
                <div
                  className="boss-button boss-button_role_cancel boss-page-dashboard__button"
                  onClick={this.handleOnClick}
                >
                  Cancel Editing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
