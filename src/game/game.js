import React, { Component }  from 'react';
import ReactDom from 'react-dom';

import { Hand } from './hand';
import { createHands, evaluateHand } from './poker';

class Game extends Component {

  dealNextHand() {
    ReactDom.unmountComponentAtNode(document.getElementById('evaluation'));
    this.forceUpdate();
  }

  evaluate(playerHandEval, computerHandEval) {
    let winner = playerHandEval[1] > computerHandEval[1] ?
      "Player wins this hand!" : "Computer wins this hand!";
    ReactDom.render(<Evaluation player={playerHandEval[0]}
      computer={computerHandEval[0]}
      winner={winner}
       />, document.getElementById('evaluation'));
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
        <div id="evaluation"></div>
      </div>
    )
  }
};

class Evaluation extends Component {
  render() {
    const { player, computer, winner } = this.props;
    return (
      <div>
        <h2>Evaluation</h2>
        Player has {player} <br></br>
        Computer has {computer} <br></br>
        {winner}
      </div>
    )
  }
};

export {
  Game,
};
