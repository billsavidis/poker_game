import React from 'react';
import { Hand } from './hand';
import { evaluateHand, Evaluation } from './pokerlogic';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
  margin: 12,
  padding: 5,
};

let NextHandButton = (props) => {
  const { evaluated, updateHands } = props;
  return evaluated ? <RaisedButton label="Deal next hand" onClick={() => updateHands()} style={buttonStyle} /> :
    <RaisedButton label="Deal next hand" disabled={true} />
};

let Game = (props) => {
  const { updatedHostHand, updatedVisitorHand, changeCards,
    visitorHandVisibility, hostHandVisibility,
    toggleVisibility, showEvaluation, showEvaluationBox, evaluate } = props;
  let hostHandEval = evaluateHand(updatedHostHand);
  let visitorHandEval = evaluateHand(updatedVisitorHand);
  let winner = hostHandEval[1] > visitorHandEval[1] ?
    "Host wins this hand!" : "Visitor wins this hand!";

  return (
    <div>
      <h3>Visitor Hand</h3>
      <Hand hand={updatedVisitorHand} visible={visitorHandVisibility} canChangeCards={false} />
      <h3>Host Hand</h3>
      <Hand hand={updatedHostHand} visible={hostHandVisibility} canChangeCards={true} />
      <RaisedButton label="Evaluate" onClick={() => evaluate(toggleVisibility, showEvaluationBox)} style={buttonStyle} />
      <NextHandButton />
      <RaisedButton label="Change cards" onClick={() => changeCards()} style={buttonStyle} />
      <Evaluation host={hostHandEval[0]} visitor={visitorHandEval[0]} winner={winner} showEvaluation={showEvaluation} />
    </div>
  )
};

const mapStateToProps = ({
  hands: [
    updatedHostHand,
    updatedVisitorHand
  ],
  visitorHandVisibility,
  hostHandVisibility,
  showEvaluation,
}) => ({
  updatedVisitorHand,
  updatedHostHand,
  visitorHandVisibility,
  hostHandVisibility,
  showEvaluation,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeCards: () => dispatch({type: 'CHANGE_CARDS'}),
    evaluate: () => dispatch({type: 'EVALUATE'})
  };
};

Game = connect(mapStateToProps, mapDispatchToProps)(Game);

NextHandButton = connect(
  ((state) => ({
    evaluated: state.evaluated,
  })),
  (dispatch) => ({
    updateHands: () => dispatch({type: 'ADD_HAND'}),
  })
)(NextHandButton);

export {
  Game,
};
