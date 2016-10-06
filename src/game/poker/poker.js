var _ = require('underscore');

const Ranks = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
const Suits = [ 'hearts', 'clubs', 'diams', 'spades' ];

export class Deck {
  constructor() {
    const cards = [];
    for (const [ weight, rank ] of Ranks.entries()) {
      for (const suit of Suits) {
        cards.push({ suit, rank, weight: weight + 1 });
      }
    }
    this.cards = _.shuffle(cards);
		return this.cards;
  }
}

function createHands () {
  let newDeck = new Deck();
  let hands = [];
  hands[0] = newDeck.splice(0,5);
  hands[1] = newDeck.splice(0,5);
  return hands;
}

export {
	createHands,
};
