import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import StaffMembers from './features/staffMembers/containers/StaffMembers';
import StaffMember from './features/staffMember/containers/StaffMember';
import NotFound from './features/NotFound';

class App extends Component {
  render() {
    return (
      <main className="boss-page-main">
        <Switch>
          <Route exact path="/staff-members" component={StaffMembers} />
          <Route strict path="/staff-member/:id" component={StaffMember} />
          <Redirect exact from="/" to="/staff-members" />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default App;
