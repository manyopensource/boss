import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Dashboard from './Dashboard';
import Content from '../../Content';
import PageProfile from './PageProfile';
import PageHolidays from './PageHolidays';
import PageOwedHours from './PageOwedHours';
import PageAccessories from './PageAccessories';
import PageShifts from './PageShifts';
import PagePayments from './PagePayments';
import StaffMemberEdit from './../../staffMemberEdit/components/StaffMemberEdit';
import NotFound from './../../NotFound';

class StaffMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  componentDidMount() {
    this.props.loadStaffMember(this.props.match.params.id).then(() => {
      this.setState({ isLoaded: true });
    });
  }

  render() {
    return this.state.isLoaded ? (
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
        <>
          <Dashboard
            staffMember={this.props.staffMember.data}
            venues={this.props.venues.data}
          />
          <Content>
            <Switch>
              <Route
                exact
                path="/staff-member/:id"
                render={() => (
                  <PageProfile
                    staffMember={this.props.staffMember.data}
                    staffTypes={this.props.staffTypes.data}
                    venues={this.props.venues.data}
                    payRates={this.props.payRates.data}
                    genderValues={this.props.genderValues.data}
                  />
                )}
              />
              <Route
                exact
                path="/staff-member/:id/holidays"
                component={PageHolidays}
              />
              <Route
                exact
                path="/staff-member/:id/owed-hours"
                component={PageOwedHours}
              />
              <Route
                exact
                path="/staff-member/:id/accessories"
                component={PageAccessories}
              />
              <Route
                exact
                path="/staff-member/:id/shifts"
                component={PageShifts}
              />
              <Route
                exact
                path="/staff-member/:id/payments"
                component={PagePayments}
              />
              <Route path="*" component={NotFound} />
            </Switch>
          </Content>
        </>
      </Switch>
    ) : null;
  }
}

StaffMember.propTypes = {
  loadStaffMember: PropTypes.func.isRequired,
  staffMember: PropTypes.shape({
    data: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired
  }),
  staffTypes: PropTypes.shape({
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
  }),
  venues: PropTypes.shape({
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
  }),
  payRates: PropTypes.shape({
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
  }),
  genderValues: PropTypes.shape({
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
  })
};

export default StaffMember;
