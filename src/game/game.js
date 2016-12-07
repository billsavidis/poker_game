import React from 'react';
import { Hand } from './hand';
import { evaluateHand } from './poker';
import { Evaluation } from './evaluation';
import { connect } from 'react-redux';

const evaluate = (toggleVisibility, showEvaluationBox) => {
  toggleVisibility();
  showEvaluationBox();
}

let Game = (props) => {

  const { updatedHostHand, updatedVisitorHand, changeCards,
    visitorHandVisibility, hostHandVisibility, updateHands,
    toggleVisibility, showEvaluation, showEvaluationBox } = props;
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
      <button onClick={() => evaluate(toggleVisibility, showEvaluationBox)}>
        Evaluate!
      </button>
      <button onClick={() => updateHands()}>
        Deal next hand!
      </button>
      <button onClick={() => changeCards()}>
        Change cards!
      </button>
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
    updateHands: () => dispatch({type: 'ADD_HAND'}),
    toggleVisibility: () => dispatch({type: 'TOGGLE_HAND_VISIBILITY'}),
    showEvaluationBox: () => dispatch({type: 'TOGGLE_EVALUATION'})
  };
};

Game = connect(mapStateToProps, mapDispatchToProps)(Game);

export {
  Game,
};
