import React, { Component }  from 'react';

import './game.css';

import { Hand } from './hand';
import { createHands, evaluateHand } from './poker';

class Game extends Component {

  dealNextHand() {
    this.forceUpdate();
    console.log("------------");
  }

  evaluate(playerHandEval, computerHandEval) {
    console.log("Player has", playerHandEval[0]);
    console.log("Computer has", computerHandEval[0]);
    playerHandEval[1] > computerHandEval[1] ? ( console.log("Player wins this hand!") ) : ( console.log("Computer wins this hand!") );
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
        <button onClick={() => this.evaluate(playerHandEval, computerHandEval)}>
          Evaluate!
        </button>
        <button onClick={this.dealNextHand.bind(this)}>
          Deal next hand!
        </button>
      </div>
    )
  }
};

export {
  Game,
};
