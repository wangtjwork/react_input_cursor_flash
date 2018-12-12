import React, { Component } from 'react';
import './App.css';

import JumpingInput from './components/JumpingInput';
import SlowerJumpingInput from './components/SlowerJumpingInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <label htmlFor="jumping-input">Jumping Input:</label>
          <JumpingInput id="jumping-input" />
          <br/>
          <label htmlFor="slow-jumping-input">Slower Jumping Input:</label>
          <SlowerJumpingInput id="slow-jumping-input" />
          <br/>
          <br/>
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
}

export default App;
