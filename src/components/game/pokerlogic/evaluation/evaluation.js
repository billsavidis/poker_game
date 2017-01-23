import React, { Component }  from 'react';

import CircularProgress from 'material-ui/CircularProgress';

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
      <div>
        <CircularProgress thickness={6} />
      </div>
    )
  }
};

export {
  Evaluation,
}
