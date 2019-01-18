import React, { Component } from 'react';

class PageOwedHours extends Component {
  render() {
    return (
      <section className="boss-board">
        <header className="boss-board__header">
          <h2 className="boss-board__title">Owed Hours</h2>
          <div className="boss-board__button-group">
            <p className="boss-button boss-button_role_add">Add Hours</p>
          </div>
        </header>
      </section>
    );
  }
}

export default PageOwedHours;
