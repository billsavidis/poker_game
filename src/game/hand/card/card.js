import React, { Component }  from 'react';
import './cards.css';

class Card extends Component {
  render() {
    const { rank, suit } = this.props;
    const card = `card rank-${rank.toLowerCase()} ${suit}`;
    return (
      <span className={card}>
        <span className="rank">{rank}</span>
        <span className="suit" dangerouslySetInnerHTML={{__html: `&${suit};`}}></span>
      </span>
    );
  }
}

export {
  Card,
};
