import React, { Component }  from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';

import { Hand } from './hand';
import { createHands, evaluateHand } from './poker';
import { evaluate } from './evaluation';

const testReducer = (state = 0, action) => {
  let newHands = createHands();
  switch (action.type) {
    case 'ADD_HAND':
      return newHands;
    default:
      return state;
  }
}

const store = createStore(testReducer);

const updateHands = () => {
  store.dispatch({type: 'ADD_HAND'});
};
updateHands();

class Game extends Component {

  dealNextHand() {
    ReactDom.unmountComponentAtNode(document.getElementById('evaluation'));
    updateHands();
  }

  render() {
    let updatedPlayerHand = store.getState()[0];
    let updatedComputerHand = store.getState()[1];
    let playerHandEval = evaluateHand(updatedPlayerHand);
    let computerHandEval = evaluateHand(updatedComputerHand);

    return (
      <div>
        <h3>Computer Hand</h3>
        <Hand hand={updatedComputerHand} />
        <h3>Your Hand</h3>
        <Hand hand={updatedPlayerHand} />
        <button onClick={() => evaluate(playerHandEval, computerHandEval)}>
          Evaluate!
        </button>
        <button onClick={() => this.dealNextHand()}>
          Deal next hand!
        </button>
        <div id="evaluation"></div>
      </div>
    )
  }
};

export {
  Game,
  store,
};
