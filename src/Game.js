const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = 0
  }
  start() {
    const deckOfCards = [];

    prototypeQuestions.forEach((element) => {
      const card = new Card(element.id, element.question, element.answers, element.correctAnswer)
      deckOfCards.push(card)
    });

    const deck = new Deck(deckOfCards);
    const round = new Round (deck);
    this.currentRound = round

    this.printMessage(deck, round);
    this.printQuestion(round)
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
