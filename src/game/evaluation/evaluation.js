import React, { Component }  from 'react';
import ReactDom from 'react-dom';

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

let evaluate = (playerHandEval, computerHandEval) => {
  let winner = playerHandEval[1] > computerHandEval[1] ?
    "Player wins this hand!" : "Computer wins this hand!";
  ReactDom.render(<Evaluation player={playerHandEval[0]}
    computer={computerHandEval[0]}
    winner={winner}
     />, document.getElementById('evaluation'));
}

export {
  evaluate,
}
