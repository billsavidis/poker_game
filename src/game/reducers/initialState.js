import { createHands } from '../poker';

const initialState = {
  hands: createHands(),
  hostHandVisibility: true,
  visitorHandVisibility: false,
  cardsToChange: []
};

export {
  initialState,
};
