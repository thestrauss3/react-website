import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import ProjectsContainer from './containers/ProjectsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-body">
          <About />
          <ProjectsContainer />
        </div>
      </div>
    );
  }
}

export default App;
