import React, { Component } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
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
      ],
      activeChapter: 'employment'
    };
  }

  onSetActiveChapter = chapter => {
    this.setState({
      activeChapter: chapter
    });
  };

  render() {
    return (
      <main className="boss-page-main">
        <Dashboard />
        <Content>
          <ContentLeft>
            <Nav
              links={this.state.links}
              activeChapter={this.state.activeChapter}
              setActiveChapter={this.onSetActiveChapter}
            />
          </ContentLeft>
          <ContentMain chapter={this.state.activeChapter} />
        </Content>
      </main>
    );
  }
}

export default App;
