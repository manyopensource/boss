import React, { Component } from 'react';
import Dashboard from './features/profile/components/Dashboard';
import Content from './features/profile/components/Content';
import ContentLeft from './features/profile/components/ContentLeft';
import ContentMain from './features/profile/components/ContentMain';
import Nav from './features/profile/components/Nav';

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
          <Content>
            <ContentLeft>
              <Nav links={this.state.links} />
            </ContentLeft>
            <ContentMain />
          </Content>
        </main>
        {/* <div className="react-datepicker__portal" /> */}
      </>
    );
  }
}

export default App;
