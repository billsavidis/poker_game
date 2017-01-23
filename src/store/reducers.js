var _ = require('lodash');
import { createHands } from '../components/game/pokerlogic';
import { initialState } from './initialstate';

const addCard = (state, action) => {
  const { rank, suit, weight } = action;
  const cardsToChange = state.cardsToChange;
  if (!_.find(cardsToChange, { rank, suit, weight } )){
    return [...cardsToChange, { rank, suit, weight }];
  }
  else {
    return _.differenceBy(cardsToChange, [{ rank, suit, weight }], {rank, suit, weight});
  }
}

const changeHand = (state) => {
  let newHand = [];
  newHand[1] = state.hands[1];
  newHand[0] = _.differenceWith(state.hands[0], state.cardsToChange, _.isEqual);
  newHand[0] = _.concat(newHand[0], _.slice(state.hands[2], 0, 5-newHand[0].length));
  return newHand;
}

const handControl = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_HAND':
    return {
      ...initialState,
      hands: createHands(),
      emptyBoard: false,
    };
    case 'SELECT_CARD':
      return {
        ...state,
        cardsToChange: addCard(state, action)
      }
    case 'CHANGE_CARDS':
      return {
        ...state,
        hands: changeHand(state)
      }
    case 'EVALUATE':
      return {
        ...state,
        visitorHandVisibility: true,
        showEvaluation: !state.showEvaluation,
        evaluated: true,
      }
    case 'DEAL_HAND':
      return {
        ...state,
        emptyBoard: false,
      }
    default:
      return state;
  }
}

export {
  handControl,
}
