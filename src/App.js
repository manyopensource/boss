import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import EditProfile from './features/staffMemberEdit/components/EditProfile';
import StaffMembers from './features/staffMembers/components/StaffMembers';
import Profile from './features/staffMember/components/Profile';
import NotFound from './features/NotFound';

class App extends Component {
  render() {
    return (
      <main className="boss-page-main">
        <Switch>
          <Route
            exact
            path="/staff-member/:id/edit"
            render={props => (
              <Redirect
                to={`/staff-member/${props.match.params.id}/edit/employment`}
              />
            )}
          />
          <Route
            exact
            path="/staff-member/:id/edit/:page"
            component={EditProfile}
          />
          <Route exact path="/staff-members" component={StaffMembers} />
          <Route exact path="/staff-member/:id" component={Profile} />
          <Route exact path="/staff-member/:id/:page" component={Profile} />
          <Redirect exact from="/" to="/staff-members" />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default App;
