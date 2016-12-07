import React, { Component }  from 'react';

class Evaluation extends Component {

  render() {
    const { host, visitor, winner, showEvaluation } = this.props;
    return showEvaluation ? (
      <div>
        <h2>Evaluation</h2>
        Host has {host} <br></br>
        Visitor has {visitor} <br></br>
        {winner}
      </div>
    ) :
    (
      <div>Who will win?</div>
    )
  }
};

export {
  Evaluation,
}
