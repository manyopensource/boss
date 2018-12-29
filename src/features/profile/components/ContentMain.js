import React, { Component } from 'react';
import Chapter from './Chapter';

class ContentMain extends Component {
  render() {
    return (
      <section className="boss-content-switcher__chapters">
        <Chapter />
      </section>
    );
  }
}

export default ContentMain;
