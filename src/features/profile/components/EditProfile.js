import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Content from './../../Content';
import Switcher from './Switcher';
import ContentLeft from './ContentLeft';
import Nav from './Nav';
import ContentMain from './ContentMain';

class EditProfile extends Component {
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
      <>
        <Dashboard />
        <Content>
          <Switcher>
            <ContentLeft>
              <Nav
                links={this.state.links}
                activeChapter={this.state.activeChapter}
                setActiveChapter={this.onSetActiveChapter}
              />
            </ContentLeft>
            <ContentMain chapter={this.state.activeChapter} />
          </Switcher>
        </Content>
      </>
    );
  }
}

export default EditProfile;
