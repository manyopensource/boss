import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import EmploymentForm from './EmploymentForm';
import PersonalForm from './PersonalForm';
import ContactForm from './ContactForm';

class ContentMain extends Component {
  render() {
    return (
      <section className="boss-content-switcher__chapters">
        <Switch>
          <Route exact path="/edit-profile/employment" component={EmploymentForm} />
          <Route exact path="/edit-profile/personal" component={PersonalForm} />
          <Route exact path="/edit-profile/contact" component={ContactForm} />
        </Switch>
      </section>
    );
  }
}

export default ContentMain;
