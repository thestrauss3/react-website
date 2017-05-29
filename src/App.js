import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="top">
      </div>
        <header className="App-header">
          <img alt="bg" src="homeslider.jpg" id="bg-cover" />
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-title">
            <h3>Joseph Strauss</h3>
            <h4>Full Stack Developer</h4>
          </div>

          <div className="App-nav">

          </div>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      </div>
    );
  }
}

export default App;
