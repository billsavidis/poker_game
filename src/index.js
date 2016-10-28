import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { store } from './game';

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
