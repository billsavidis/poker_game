import React from 'react';
import { connect } from 'react-redux';
import { Game } from './game';

import RaisedButton from 'material-ui/RaisedButton';

let Board = (props) => {
  const { emptyBoard, dealHand } = props;
  return emptyBoard ?
    <div>
      <RaisedButton label="Deal hand" onClick={() => dealHand()} />
    </div> : <Game />
}

const mapStateToProps = (store) => {
  return {
    emptyBoard: store.emptyBoard,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dealHand: () => dispatch({type: 'DEAL_HAND'}),
  };
};

Board = connect(mapStateToProps, mapDispatchToProps)(Board);

export {
  Board,
};
