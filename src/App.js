import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import StaffMembers from './features/staffMembers/containers/StaffMembers';
import StaffMember from './features/staffMember/containers/StaffMember';
import StaffMemberEdit from './features/staffMemberEdit/components/StaffMemberEdit';
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
            component={StaffMemberEdit}
          />
          <Route exact path="/staff-members" component={StaffMembers} />
          <Route exact path="/staff-member/:id" component={StaffMember} />
          <Route exact path="/staff-member/:id/:page" component={StaffMember} />
          <Redirect exact from="/" to="/staff-members" />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default App;
