import React from 'react';
import './cards.css';
import { connect } from 'react-redux';

const CardBody = ({ rank, suit }) => {
  return (
  <a>
    <span className="rank">{rank}</span>
    <span className="suit" dangerouslySetInnerHTML={{__html: `&${suit};`}}></span>
  </a>
  );
};

const CardSimple = ({ rank, suit, weight, visible, canChangeCards, selectCard }) => {
  const card = visible ? `card rank-${rank.toLowerCase()} ${suit}`: `card back`;
  return canChangeCards ? (
    <span className={card} onClick={() => selectCard(rank, suit, weight)}>
      <CardBody rank={rank} suit={suit} />
    </span>
  ) :
  (
    <span className={card} onClick={() => {}}>
      <CardBody rank={rank} suit={suit} />
    </span>
  )
};

const Card = (props) => {
  const { selected } = props;
  const card = <CardSimple {...props} />;
  return selected ? <strong>{card}</strong> : card;
};

export default connect(
  null,
  (dispatch) => ({
    selectCard: (rank, suit, weight) => dispatch({
        type: 'SELECT_CARD', rank, suit, weight
      }
    )})
)(Card);
