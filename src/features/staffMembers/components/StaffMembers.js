import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Content from './../../Content';
import Table from './Table';
import TableRow from './TableRow';
import { http } from './../../../utils/HttpService';

class StaffMembers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      staffMembers: null,
      staffTypes: null,
      venues: null
    };
  }

  componentDidMount() {
    http.getStaffMembers().then((result) => {
      this.setState({
        isLoaded: true,
        staffMembers: result.data.staffMembers,
        staffTypes: result.data.staffTypes,
        venues: result.data.venues
      });
    });
  }

  render() {
    return (
      <>
        <Dashboard />
        <Content>
          <Table>
            <TableRow isHeader={true} />
            {this.state.isLoaded ? this.state.staffMembers.map(member => {
              member.staffType = this.state.staffTypes.find(type => type.id === member.staffTypeId);
              member.masterVenue = this.state.venues.find(venue => venue.id === member.masterVenueId);
              return <TableRow key={member.id} member={member} />;
            }) : ' Loading'}
          </Table>
        </Content>
      </>
    );
  }
}

export default StaffMembers;
