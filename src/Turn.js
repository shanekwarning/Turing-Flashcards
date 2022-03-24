class Turn {
  constructor(guess, card) {
  this.guess = guess,
  this.card = card,
  this.correct = undefined
  }
  returnGuess() {
    return this.guess
  };
  returnCard() {
    return this.card
  };
  evaluateGuess() {
    if(this.guess === this.card.correctAnswer) {
      this.correct = true
      return true
    } else{
      this.correct = false
      return false
    }
  }
  giveFeedback() {
    if(this.correct === true){
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }
}

module.exports = Turn
