import { createHands } from '../components/game/pokerlogic';

const initialState = {
  hands: createHands(),
  hostHandVisibility: true,
  visitorHandVisibility: false,
  cardsToChange: [],
  showEvaluation: false,
  emptyBoard: true,
  evaluated: false,
};

export {
  initialState,
};
