import { createHands } from '../poker';

const initialState = {
  hands: createHands(),
  hostHandVisibility: true,
  visitorHandVisibility: false,
  cardsToChange: [],
  showEvaluation: false
};

export {
  initialState,
};
