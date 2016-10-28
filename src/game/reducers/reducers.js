import { createHands } from '../poker';

const handControl = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_HAND':
      return {
        hands: createHands(),
        hostHandVisibility: true,
        visitorHandVisibility: false,
      }
    case 'TOGGLE_HAND_VISIBILITY':
      return {
        hands: state.hands,
        hostHandVisibility: state.hostHandVisibility,
        visitorHandVisibility: !state.visitorHandVisibility,
      }
    default:
      return state;
  }
}

export {
  handControl,
}
