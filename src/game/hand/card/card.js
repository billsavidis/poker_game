import React, { Component }  from 'react';
import './cards.css';

class Card extends Component {
  render() {
    const { store } = this.context;
    const { rank, suit, weight, visible, canChangeCards } = this.props;
    const card = visible ? `card rank-${rank.toLowerCase()} ${suit}`: `card back`;
    const changeCards = canChangeCards ? () => store.dispatch({type: 'SELECT_CARD', rank, suit, weight}) : () => { };
    return (
      <span className={card} onClick={changeCards}>
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
