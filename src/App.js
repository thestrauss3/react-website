import React, { Component } from 'react';
import './App.css';

import Data from './data.json';

import Header from './components/Header';
import About from './components/About';
import ProjectsContainer from './containers/ProjectsContainer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    this.setState({ projects: Data["data"]["projects"]})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-body">
          <About />
          <ProjectsContainer projects={this.state.projects}/>
        </div>
      </div>
    );
  }
}

export default App;
