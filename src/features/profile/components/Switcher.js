import React, { Component } from 'react';

class Switcher extends Component {
  render() {
    return (
      <div className="boss-content-switcher">
        <div className="boss-content-switcher__inner">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Switcher;
