import React, { Component } from 'react';
import logo from '../images/logo.svg';

const Header = (props) => {
  return (
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
  )
}

export default Header;
