class Round {
  constructor(deck) {
    this.deck = deck,
    this.currentCard = undefined,
    this.turns = 0,
    this.incorrectGuesses = []
  }
  returnCurrentCard() {
    this.currentCard = this.deck.cards.shift();
    return this.currentCard
  }
  takeTurn(guess) {
    this.turns++;

    const turn = new Turn(guess, this.currentCard);

    if(guess !== this.currentCard.correctAnswer) {
      this.incorrectGuesses.push(this.currentCard.id)
    };
  
    turn.evaluateGuess();

    return turn.giveFeedback()
  }
}

module.exports = Round
const Turn = require('../src/Turn');
