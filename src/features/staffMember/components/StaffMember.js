import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Dashboard from './Dashboard';
import Content from '../../Content';
import PageProfile from './PageProfile';
import PageHolidays from './PageHolidays';
import PageOwedHours from './PageOwedHours';
import PageAccessories from './PageAccessories';
import PageShifts from './PageShifts';
import PagePayments from './PagePayments';

class StaffMember extends Component {
  componentDidMount() {
    this.props.loadStaffMember(this.props.match.params.id);
  }

  render() {
    return (
      !this.props.staffMember.isLoading && (
        <>
          <Dashboard
            staffMember={this.props.staffMember.data}
            staffTypes={this.props.staffTypes.data}
            venues={this.props.venues.data}
            payRates={this.props.payRates.data}
            genderValues={this.props.genderValues.data}
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
            </Switch>
          </Content>
        </>
      )
    );
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
