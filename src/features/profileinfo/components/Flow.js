import React, { Component } from 'react';

class Flow extends Component {
  render() {
    return <div className="boss-page-main__flow">{this.props.children}</div>;
  }
}

export default Flow;
