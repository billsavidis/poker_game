import React, { Component }  from 'react';
import ReactDom from 'react-dom';

class Evaluation extends Component {

  render() {
    const { host, visitor, winner } = this.props;
    return (
      <div>
        <h2>Evaluation</h2>
        Host has {host} <br></br>
        Visitor has {visitor} <br></br>
        {winner}
      </div>
    )
  }
};

let evaluate = (hostHandEval, visitorHandEval, toggleVisibility) => {
  toggleVisibility();
  let winner = hostHandEval[1] > visitorHandEval[1] ?
    "Host wins this hand!" : "Visitor wins this hand!";
  ReactDom.render(<Evaluation host={hostHandEval[0]}
    visitor={visitorHandEval[0]}
    winner={winner}
     />, document.getElementById('evaluation'));
}

export {
  evaluate,
}
