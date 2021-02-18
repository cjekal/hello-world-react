import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppService from './shared/app-service';

class App extends Component {
  constructor(props) {
    super(props);
    this.appService = new AppService();
    this.state = {};
  }

  componentDidMount() {
    this.getMessage();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>{this.state.message}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

  getMessage() {
    this.appService.getMessage().then(message => {
      this.setState({ message: message });
    })
  }
}

export default App;
