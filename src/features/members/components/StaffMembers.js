import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Content from './../../Content';
import Table from './Table';
import TableRow from './TableRow';

class StaffMembers extends Component {
  render() {
    const members = [
      {
        id: 1,
        pic: 'default.jpeg',
        name: 'John Doe',
        modifiedAt: '01/15/2019',
        status: 'Enabled',
        type: 'Manager',
        masterVenue: 'Black',
        workVenues: ['Mint Green', "McCooley's"]
      },
      {
        id: 2,
        pic: 'default.jpeg',
        name: 'Brian Smith',
        modifiedAt: '01/15/2019',
        status: 'Disabled',
        type: 'Manager',
        masterVenue: 'Brooklyn Mixer',
        workVenues: ['Black', "McCooley's"]
      }
    ];
    return (
      <>
        <Dashboard />
        <Content>
          <Table>
            <TableRow isHeader={true} />
            {members.map(member => {
              return <TableRow key={member.id} member={member} />;
            })}
          </Table>
        </Content>
      </>
    );
  }
}

export default StaffMembers;
