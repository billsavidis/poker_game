import React, { Component }  from 'react';
import './cards.css';

class Card extends Component {
  render() {
    const { store } = this.context;
    const { rank, suit, weight, visible } = this.props;
    const card = visible ? `card rank-${rank.toLowerCase()} ${suit}`: `card back`;
    return (
      <span className={card} onClick={() => store.dispatch({type: 'SELECT_CARD', rank: rank, suit: suit, weight: weight})}>
        <span className="rank">{rank}</span>
        <span className="suit" dangerouslySetInnerHTML={{__html: `&${suit};`}}></span>
      </span>
    );
  }
}
Card.contextTypes = {
  store: React.PropTypes.object
}

export {
  Card,
};
