import React from 'react';
import Header from './header/component';

export default class App extends React.Component {

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Welcome to Coupon App</h1>
        </header>
      </div>
    );
  }
}