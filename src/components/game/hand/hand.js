import React from 'react';
import { Card } from './card';
var _ = require('lodash');
import { connect } from 'react-redux';

let keyId = 0;
const Hand = (props) => {
  const { hand, visible, canChangeCards, cardsToChange } = props;
  return (
    <div className="playingCards simpleCards">
      {hand.map(({rank, suit, weight}) => (
        <Card rank={rank} suit={suit} weight={weight} key={`Hand-id-${keyId++}`}
          visible={visible} canChangeCards={canChangeCards} selected={_.find(cardsToChange, {rank, suit, weight})} />
      ))}
    </div>
  )
}

export default connect(
  (state) => ({
    cardsToChange: state.cardsToChange
  })
)(Hand);
