import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import EditProfile from './features/profile/components/EditProfile';
import StaffMembers from './features/members/components/StaffMembers';
import Profile from './features/profileinfo/components/Profile';

class App extends Component {
  render() {
    return (
      <main className="boss-page-main">
        <Route exact path="/edit-profile" render={() => <Redirect to="/edit-profile/employment" />} />
        <Route exact path="/edit-profile/:page" component={EditProfile} />
        <Route exact path="/staff-members" component={StaffMembers} />
        <Route exact path="/profile/:id" component={Profile} />
      </main>
    );
  }
}

export default App;
