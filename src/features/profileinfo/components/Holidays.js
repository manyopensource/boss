import React, { Component } from 'react';

class Holidays extends Component {
  render() {
    console.log('holidays : ', this.props.match.params.id)
    return (
      <section className="boss-board">
        <header className="boss-board__header">
          <h2 className="boss-board__title">Holidays and holiday requests</h2>
          <div className="boss-board__button-group">
            <p className="boss-button boss-button_role_add">Add Holiday</p>
          </div>
        </header>
      </section>
    );
  }
}

export default Holidays;
