import React, { Component } from 'react';
import Dashboard from './features/profile/components/Dashboard';
import Content from './features/profile/components/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          title: 'Employment Details',
          chapter: 'employment'
        },
        {
          title: 'Personal Details',
          chapter: 'personal'
        },
        {
          title: 'Contact Details',
          chapter: 'contact'
        }
      ]
    };
  }

  render() {
    return (
      <>
        <main className="boss-page-main">
          <Dashboard />
          <Content links={this.state.links} />
        </main>
        {/* <div className="react-datepicker__portal" /> */}
      </>
    );
  }
}

export default App;
