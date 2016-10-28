import React from 'react';
import './App.css';
import { Game } from './game';

const App = () => {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Wonderful Poker!</h2>
        </div>
        <div className="Hands">
          <Game />
        </div>
      </div>
    );
}

export default App;
