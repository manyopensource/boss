import React, { Component } from 'react';
import Island from './Island';

class Flow extends Component {
  render() {
    return (
      <div className="boss-page-main__flow">
        <Island
          index={1}
          garbageName="Employment Details"
          garbage={this.props.membersData.employmentDetails}
        />
        <Island
          index={2}
          garbageName="Account Details"
          garbage={this.props.membersData.accountDetails}
        />
        <Island
          index={3}
          garbageName="Personal Details"
          garbage={this.props.membersData.personalDetails}
        />
        <Island
          index={4}
          garbageName="Contact Details"
          garbage={this.props.membersData.contactDetails}
        />
        <Island
          index={5}
          garbageName="Mobile Apps"
          garbage={this.props.membersData.mobileApps}
        />
        <Island
          index={6}
          garbageName="Revisions History"
          garbage={this.props.membersData.revisionsHistory}
        />
      </div>
    );
  }
}

export default Flow;
