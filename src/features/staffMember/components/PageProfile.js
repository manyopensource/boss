import React, { Component } from 'react';
import InfoEmploymentDetails from './InfoEmploymentDetails';
import InfoAccountDetails from './InfoAccountDetails';
import InfoPersonalDetails from './InfoPersonalDetails';
import InfoContactDetails from './InfoContactDetails';
import InfoMobileApps from './InfoMobileApps';
import InfoRevisionsHistory from './InfoRevisionsHistory';

class PageProfile extends Component {
  render() {
    return (
      <div className="boss-page-main__flow">
        <InfoEmploymentDetails
          staffMember={this.props.staffMember}
          staffTypes={this.props.staffTypes}
          venues={this.props.venues}
          payRates={this.props.payRates}
          genderValues={this.props.genderValues}
        />
        <InfoAccountDetails
          staffMember={this.props.staffMember}
          staffTypes={this.props.staffTypes}
          venues={this.props.venues}
          payRates={this.props.payRates}
          genderValues={this.props.genderValues}
        />
        <InfoPersonalDetails
          staffMember={this.props.staffMember}
          staffTypes={this.props.staffTypes}
          venues={this.props.venues}
          payRates={this.props.payRates}
          genderValues={this.props.genderValues}
        />
        <InfoContactDetails
          staffMember={this.props.staffMember}
          staffTypes={this.props.staffTypes}
          venues={this.props.venues}
          payRates={this.props.payRates}
          genderValues={this.props.genderValues}
        />
        <InfoMobileApps
          staffMember={this.props.staffMember}
          staffTypes={this.props.staffTypes}
          venues={this.props.venues}
          payRates={this.props.payRates}
          genderValues={this.props.genderValues}
        />
        <InfoRevisionsHistory
          staffMember={this.props.staffMember}
          staffTypes={this.props.staffTypes}
          venues={this.props.venues}
          payRates={this.props.payRates}
          genderValues={this.props.genderValues}
        />
      </div>
    );
  }
}

export default PageProfile;
