import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { store } from './game';
import { Provider } from 'react-redux';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
