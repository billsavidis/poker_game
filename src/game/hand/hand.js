import React from 'react';
import { Card } from './card';
import { Component } from 'react';
var _ = require('lodash');

let keyId = 0;
class Hand extends Component {
  render() {
    const { hand, visible, canChangeCards } = this.props;
    const { store } = this.context;
    return (
      <div className="playingCards simpleCards">
        {hand.map(({rank, suit, weight}) => (
          <Card rank={rank} suit={suit} weight={weight} key={`Hand-id-${keyId++}`}
            visible={visible} canChangeCards={canChangeCards} selected={_.find(store.getState().cardsToChange, {rank, suit, weight})} />
        ))}
      </div>
    )
  }
}
Hand.contextTypes = {
  store: React.PropTypes.object
}

export {
  Hand,
};
