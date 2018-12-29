import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import Switcher from './components/Switcher';

class App extends Component {
  render() {
    return (
      <>
        <main className="boss-page-main">
          <Dashboard />
          <div className="boss-page-main__content">
            <div className="boss-page-main__inner">
              <div className="boss-content-switcher">
                <div className="boss-content-switcher__inner">
                  <Switcher />
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* <div className="react-datepicker__portal" /> */}
      </>
    );
  }
}

export default App;
