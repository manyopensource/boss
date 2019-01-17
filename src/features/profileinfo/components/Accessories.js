import React, { Component } from 'react';

class Accessories extends Component {
  render() {
    return (
      <section className="boss-board">
        <header className="boss-board__header">
          <h2 className="boss-board__title">Accessories</h2>
          <div className="boss-board__button-group">
            <p className="boss-button boss-button_role_add">Add Request</p>
          </div>
        </header>
      </section>
    );
  }
}

export default Accessories;
