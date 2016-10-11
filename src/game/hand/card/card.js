import React, { Component }  from 'react';
import './cards.css';

class Card extends Component {
  render() {
    const { rank, suit, show } = this.props;
    const card = (show) ? `card rank-${rank.toLowerCase()} ${suit}` : `card back`;
    return (
      <div className={card}>
        <span className="rank">{rank}</span>
        <span className="suit" dangerouslySetInnerHTML={{__html: `&${suit};`}}></span>
      </div>
    );
  }
}


export {
  Card,
};
