var _ = require('underscore');

function evaluateHand (unsortedHand) {

  let hand = _.sortBy(unsortedHand,"weight");
  //Initialise ranking
  let straightFlush = false;
  let flush = false;
  let straight = false;
  let fourOfAKind = false;
  let fullHouse = false;
  let threeOfAKind = false;
  let twoPairs = false;
  let onePair = false;
  let highCard = false;

  let flushSuit = "";
  let straightTop = 0;
  let foursRank = 0;
  let fullPairs = undefined;
  let threesRank = 0;
  let pairsRank = undefined;
  let pairRank = 0;
  let highCardRank = 0;

  let handStrength = 0;

  //Search for hand ranking

  //Check for flush
  flush = (hand[0].suit === hand[1].suit &&
  	hand[1].suit === hand[2].suit &&
  	hand[2].suit === hand[3].suit &&
  	hand[3].suit === hand[4].suit);
  if (flush){
  	flushSuit = hand[0].suit;
    handStrength = 6000 + hand[4].weight;
  }

  //Check for straight
  straight = ((hand[0].weight === hand[1].weight-1 ||
  		hand[0].weight === hand[1].weight-9)
  		 &&
  		(hand[1].weight === hand[2].weight-1 &&
  		hand[2].weight === hand[3].weight-1)
  		&&
  		(hand[3].weight === hand[4].weight-1 ||
  		hand[4].weight === hand[3].weight-12));

  if (straight){
  	straightTop = (hand[0].weight === 1 && hand[4].weight === 13)
  	 ? hand[0].rank : hand[4].rank;
     handStrength = (hand[0].weight === 1 && hand[4].weight === 13)
     ? ( 6000 + hand[0].weight ) : ( 6000 + hand[4].weight );
  }

  //Check for straight flush
  if (straight && flush){
    straightFlush = true;
    handStrength = 10000 + hand[4].weight;
  }

  //Check for four of a kind
  if (hand[0].weight === hand[3].weight ||
  		hand[1].weight === hand[4].weight){
  	fourOfAKind = true;
  	foursRank = hand[2].rank;
    handStrength = 8000 + hand[2].weight;
  }
  //Check for full house
  else if ((hand[0].weight === hand[2].weight &&
  		hand[3].weight === hand[4].weight) ||
  	(hand[0].weight === hand[1].weight &&
  		hand[2].weight === hand[4].weight)){
  	fullHouse = true;
  	fullPairs = [hand[0].rank, hand[4].rank];
    handStrength = 7000 + hand[4].weight * 20 + hand[0].weight;
  }
  //Check for three of a kind
  else if (hand[0].weight === hand[2].weight ||
  		hand[1].weight === hand[3].weight ||
  		hand[2].weight === hand[4].weight){
  	threeOfAKind = true;
  	threesRank = hand[2].rank;
    handStrength = 4000 + hand[2].weight;
  }
  //Check for two pairs
  else if ((hand[0].weight === hand[1].weight &&
  		(hand[2].weight === hand[3].weight ||
  		hand[3].weight === hand[4].weight)) ||
  	(hand[1].weight === hand[2].weight &&
  		hand[3].weight === hand[4].weight)){
  	twoPairs = true;
  	pairsRank = [hand[1].rank, hand[3].rank];
    handStrength = 3000 + hand[3].weight * 20 + hand[1].weight;
  }
  //Check for one pair
  else if (hand[0].weight === hand[1].weight ||
  		hand[1].weight === hand[2].weight ||
  		hand[2].weight === hand[3].weight ||
  		hand[3].weight === hand[4].weight){
  	onePair = true;
  	if (hand[0].weight === hand[1].weight){
  		pairRank = hand[0].rank;
      handStrength = 2000 + hand[0].weight;
  	}
  	else if (hand[1].weight === hand[2].weight){
  		pairRank = hand[1].rank;
      handStrength = 2000 + hand[1].weight;
  	}
  	else if (hand[2].weight === hand[3].weight){
  		pairRank = hand[2].rank;
      handStrength = 2000 + hand[2].weight;
  	}
  	else{
  		pairRank = hand[3].rank;
      handStrength = 2000 + hand[3].weight;
  	}
  }
  //Just a high card
  else {
  	highCard = true;
  	highCardRank = hand[0].weight === 1 ? hand[0].rank : hand[4].rank;
    handStrength = hand[0].weight === 1 ? ( 1000 + hand[0].weight )
      : ( 1000 + hand[4].weight );
  }

  if (straightFlush){
//	   console.log("Straight Flush on: ", flushSuit + straightTop);
     return [(`Straight Flush of: ${flushSuit} on ${straightTop}`), handStrength];
  }
  if (flush){
//  	console.log("Flush with: ", flushSuit);
    return [(`Flush of: ${flushSuit}`), handStrength];
  }
  if (straight){
//  	console.log("Straight on: ", straightTop);
    return [(`Straight on: ${straightTop}`), handStrength];
  }
  if (fourOfAKind){
//  	console.log("Four of a kind of: ", foursRank);
    return [(`Four of a Kind: ${foursRank}`), handStrength];
  }
  if (fullHouse){
//  	console.log("Full house of: ", fullPairs);
    return [(`Full House: ${fullPairs}`), handStrength];
  }
  if (threeOfAKind){
//  	console.log("Three of a kind of: ", threesRank);
    return [(`Three of a Kind: ${threesRank}`), handStrength];
  }
  if (twoPairs){
//  	console.log("Two pairs: ", pairsRank);
    return [(`Two Pairs: ${pairsRank}`), handStrength];
  }
  if (onePair){
//  	console.log("One pair: ", pairRank);
    return [(`One Pair: ${pairRank}`), handStrength];
  }
  if (highCard){
//  	console.log("High card: ", highCardRank);
    return [(`High Card: ${highCardRank}`), handStrength];
  }
}

export {
  evaluateHand,
};
