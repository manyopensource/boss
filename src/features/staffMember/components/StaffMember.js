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
import { http } from '../../../utils/HttpService';

class StaffMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      staffMember: null,
      staffTypes: null,
      venues: null,
      payRates: null,
      genderValues: null
    };
  }

  componentDidMount() {
    http.getStaffMember(this.props.match.params.id).then(result => {
      this.setState(
        {
          isLoaded: true,
          staffMember: result.data.staffMember,
          staffTypes: result.data.staffTypes,
          venues: result.data.venues,
          payRates: result.data.payRates,
          genderValues: result.data.genderValues
        },
        () => {
          this.props.initData(result.data);
        }
      );
    });
  }

  render() {
    return (
      this.state.isLoaded && (
        <>
          <Dashboard
            staffMember={this.state.staffMember}
            staffTypes={this.state.staffTypes}
            venues={this.state.venues}
            payRates={this.state.payRates}
            genderValues={this.state.genderValues}
          />
          <Content>
            <Switch>
              <Route
                exact
                path="/staff-member/:id"
                render={() => (
                  <PageProfile
                    staffMember={this.props.staffMember}
                    staffTypes={this.props.staffTypes}
                    venues={this.props.venues}
                    payRates={this.props.payRates}
                    genderValues={this.props.genderValues}
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
  initData: PropTypes.func.isRequired,
  staffMember: PropTypes.object.isRequired,
  staffTypes: PropTypes.array.isRequired,
  venues: PropTypes.array.isRequired,
  payRates: PropTypes.array.isRequired,
  genderValues: PropTypes.array.isRequired
};

export default StaffMember;
