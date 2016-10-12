import React, { Component }  from 'react';
import ReactDom from 'react-dom';

import { Hand } from './hand';
import { createHands, evaluateHand } from './poker';
import { evaluate } from './evaluation';


class Game extends Component {

  dealNextHand() {
    ReactDom.unmountComponentAtNode(document.getElementById('evaluation'));
    this.forceUpdate();
  }

  render() {
    let hands = createHands();
    let playerHand = hands[0];
    let computerHand = hands[1];
    let playerHandEval = evaluateHand(hands[0]);
    let computerHandEval = evaluateHand(hands[1]);
    return (
      <div>
        <h3>Computer Hand</h3>
        <Hand hand={computerHand} />
        <h3>Your Hand</h3>
        <Hand hand={playerHand} />
        <button onClick={() => evaluate(playerHandEval, computerHandEval)}>
          Evaluate!
        </button>
        <button onClick={this.dealNextHand.bind(this)}>
          Deal next hand!
        </button>
        <div id="evaluation"></div>
      </div>
    )
  }
};

export {
  Game,
};
