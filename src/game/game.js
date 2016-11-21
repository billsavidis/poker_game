import React, { Component }  from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Hand } from './hand';
import { evaluateHand } from './poker';
import { evaluate } from './evaluation';
import { handControl } from './reducers';

const store = createStore(handControl);

const updateHands = () => {
  store.dispatch({type: 'ADD_HAND'});
};
updateHands(); //generate first hand

const changeCards = () => {
  store.dispatch({type: 'CHANGE_CARDS'});
}

class Game extends Component {

  dealNextHand() {
    ReactDom.unmountComponentAtNode(document.getElementById('evaluation'));
    updateHands();
  }

  render() {
    let updatedHostHand = store.getState().hands[0];
    let updatedVisitorHand = store.getState().hands[1];
    let hostHandEval = evaluateHand(updatedHostHand);
    let visitorHandEval = evaluateHand(updatedVisitorHand);

    return (
      <div>
        <h3>Visitor Hand</h3>
        <Hand hand={updatedVisitorHand} visible={store.getState().visitorHandVisibility} canChangeCards={false} />
        <h3>Host Hand</h3>
        <Hand hand={updatedHostHand} visible={store.getState().hostHandVisibility} canChangeCards={true} />
        <button onClick={() => evaluate(hostHandEval, visitorHandEval)}>
          Evaluate!
        </button>
        <button onClick={() => this.dealNextHand()}>
          Deal next hand!
        </button>
        <button onClick={() => changeCards()}>
          Change cards!
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
