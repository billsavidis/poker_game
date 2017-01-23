import React from 'react';
import './App.css';

import { Board, Menu } from './components';

import AppBar from 'material-ui/AppBar';

const App = () => {
    return (
      <div className="App">
        <AppBar title="Welcome to Wonderful Poker!"
          style={{backgroundColor: '#152'}}
          iconElementLeft={<Menu />}
        />
        <div className="Hands">
          <Board />
        </div>
      </div>
    );
}

export default App;
