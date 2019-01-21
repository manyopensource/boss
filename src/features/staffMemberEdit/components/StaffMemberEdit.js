import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Dashboard from './Dashboard';
import Content from '../../Content';
import Switcher from './Switcher';
import ContentLeft from './ContentLeft';
import ContentMain from './ContentMain';

class StaffMemberEdit extends Component {
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

  render() {
    return (
      <>
        <Dashboard memberID={this.props.match.params.id} />
        <Content>
          <Switcher>
            <ContentLeft>
              <nav className="boss-content-switcher__nav">
                {this.state.links.map((link, index) => {
                  return (
                    <NavLink
                      key={index}
                      exact
                      to={`/staff-member/${this.props.match.params.id}/edit/${link.chapter}`}
                      activeClassName="boss-content-switcher__nav-link_state_active"
                      className="boss-content-switcher__nav-link"
                    >
                      {link.title}
                    </NavLink>
                  );
                })}
              </nav>
            </ContentLeft>
            <ContentMain chapter={this.state.activeChapter} />
          </Switcher>
        </Content>
      </>
    );
  }
}

export default StaffMemberEdit;