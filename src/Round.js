class Round {
  constructor(deck) {
    this.deck = deck,
    this.currentCard = undefined,
    this.turns = 0,
    this.incorrectGuesses = [],
    this.correctPercent = 100
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
  calculatePercentCorrect() {
    const incorrectPercent = 100*(this.turns - this.incorrectGuesses.length);

    this.correctPercent = incorrectPercent/this.turns;

    return this.correctPercent
  }
  endRound() {
    console.log(`**Round over!** You answered ${this.correctPercent}% of the questions correctly!`)
  }
}

module.exports = Round
const Turn = require('../src/Turn');
