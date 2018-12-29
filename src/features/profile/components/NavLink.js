import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavLink extends Component {
  render() {
    return (
      <a
        className="boss-content-switcher__nav-link"
        data-chapter={this.props.link.chapter}
      >
        {this.props.link.title}
      </a>
    );
  }
}

NavLink.propTypes = {
  link: PropTypes.object.isRequired
};

export default NavLink;
