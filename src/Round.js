class Round {
  constructor(deck) {
    this.deck = deck,
    this.currentCard = undefined
    this.turns = 0
  }
  returnCurrentCard() {
    this.currentCard = this.deck.cards.shift();
    return this.currentCard
  }
  takeTurn(guess) {
    this.turns++
    const turn = new Turn(guess, this.currentCard);
    turn.evaluateGuess()
    return turn.giveFeedback()
  }
}

module.exports = Round
const Turn = require('../src/Turn');
