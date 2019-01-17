import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Content from './../../Content';
import Flow from './Flow';
import Holidays from './Holidays';
import OwedHours from './OwedHours';
import Accessories from './Accessories';
import Shifts from './Shifts';
import Payments from './Payments';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      membersData: {
        id: 1,
        fullname: 'John Doe',
        email: 'johndoe@my.com',
        phone: '+123 342 342',
        venue: 'Some Venue Name',
        employmentDetails: {
          'Main Venue': "McCoolay's",
          'Other Venues': 'N / A',
          'Job Type': 'Floor Staff',
          'Start Date': 'Tue 11/15/2018',
          'Pay Rate': 'Age 18-20',
          'Hour Preference': '20 - 25',
          'Day Preference': ['Thursday', 'Saturday', 'Sunday'],
          'National Insurance Number': 'PE630024B',
          'Sage ID': 260,
          'Status Statement': 'A'
        },
        accountDetails: {
          Created: 'Mon 11/14/2018',
          Status: 'Active',
          User: 'No Associated User',
          'Application Password': '10:30 Mon 11/15/2018',
          'ID Scanner App Guid': 'qr.png'
        },
        personalDetails: {
          Name: 'John Doe',
          Gender: 'Female',
          'Date of Birth': '23 April 1999'
        },
        contactDetails: {
          'Email Address': 'johndoe@my.com',
          'Phone Number': '+123 342 342',
          Address: {
            street: '907 Charisse Junction',
            city: 'New Jersey',
            country: 'Monaco',
            postCode: '42448'
          }
        },
        mobileApps: {
          'Some App': {
            link: 'some-app',
            lastSentDateTime: '10:30 Mon 11/15/2018'
          },
          'Other App': {
            link: 'other-app',
            lastSentDateTime: '10:30 Mon 11/15/2018'
          },
          'Another App': {
            link: 'another-app',
            lastSentDateTime: '10:30 Mon 11/15/2018'
          }
        },
        revisionsHistory: {
          viewHistory: 'view-history'
        }
      }
    };
  }

  render() {
    return (
      <>
        <Dashboard membersData={this.state.membersData} memberId={this.props.match.params.id} />
        <Content>
          <Switch>
            <Route exact path="/staff-member/:id" render={() => <Flow membersData={this.state.membersData} />} />
            <Route exact path="/staff-member/:id/holidays" component={Holidays} />
            <Route exact path="/staff-member/:id/owed-hours" component={OwedHours} />
            <Route exact path="/staff-member/:id/accessories" component={Accessories} />
            <Route exact path="/staff-member/:id/shifts" component={Shifts} />
            <Route exact path="/staff-member/:id/payments" component={Payments} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default Profile;
