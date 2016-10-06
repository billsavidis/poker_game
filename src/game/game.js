import React, { Component }  from 'react';

import './game.css';

import { Hand, Card } from './hand';
import { createHands, evaluateHand } from './poker';

class Game extends Component {

  dealNextHand() {
    this.forceUpdate();
  }

  evaluate(playerHandEval, computerHandEval) {
    console.log("Player has", playerHandEval);
    console.log("Computer has", computerHandEval);
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

        <div className="playingCards">
          <Card rank="7" suit="spades"  />
          <Card rank="J" suit="spades"  />
        </div>


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
