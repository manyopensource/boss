import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';

class ContentLeft extends Component {
  render() {
    return (
      <aside className="boss-content-switcher__side">
        <Nav links={this.props.links} />
      </aside>
    );
  }
}

ContentLeft.propTypes = {
  links: PropTypes.array.isRequired
};

export default ContentLeft;
