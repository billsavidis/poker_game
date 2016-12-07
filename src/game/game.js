import React from 'react';
import ReactDom from 'react-dom';
import { Hand } from './hand';
import { evaluateHand } from './poker';
import { evaluate } from './evaluation';
import { connect } from 'react-redux';

const dealNextHand = (updateHands) => {
  ReactDom.unmountComponentAtNode(document.getElementById('evaluation'));
  updateHands();
}

let Game = (props) => {

  const { updatedHostHand, updatedVisitorHand, changeCards,
    visitorHandVisibility, hostHandVisibility, updateHands,
    toggleVisibility } = props;
  let hostHandEval = evaluateHand(updatedHostHand);
  let visitorHandEval = evaluateHand(updatedVisitorHand);

  return (
    <div>
      <h3>Visitor Hand</h3>
      <Hand hand={updatedVisitorHand} visible={visitorHandVisibility} canChangeCards={false} />
      <h3>Host Hand</h3>
      <Hand hand={updatedHostHand} visible={hostHandVisibility} canChangeCards={true} />
      <button onClick={() => evaluate(hostHandEval, visitorHandEval, toggleVisibility)}>
        Evaluate!
      </button>
      <button onClick={() => dealNextHand(updateHands)}>
        Deal next hand!
      </button>
      <button onClick={() => changeCards()}>
        Change cards!
      </button>
      <div id="evaluation"></div>
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
}) => ({
  updatedVisitorHand,
  updatedHostHand,
  visitorHandVisibility,
  hostHandVisibility,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeCards: () => dispatch({type: 'CHANGE_CARDS'}),
    updateHands: () => dispatch({type: 'ADD_HAND'}),
    toggleVisibility: () => dispatch({type: "TOGGLE_HAND_VISIBILITY"})
  };
};

Game = connect(mapStateToProps, mapDispatchToProps)(Game);

export {
  Game,
};
