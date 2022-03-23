const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  const turn = new Turn();
  expect(Turn).to.be.a('function');
})

it('Should take a users guess', () => {
  const turn = new Turn(guess);

  expect(turn.guess).to.equal(guess)
});

it('Turn should have a card', () => {
  const turn = new Turn(guess, card);

  expect(turn.card).to.equal(card);
});

it('should return a guess', () => {
  const turn = new Turn(guess, card);

  turn.returnGuess();

  expect(turn.returnGuess()).to.equal(guess)
});

it('should return a card', () => {
  const turn = new Turn(guess, card);

  turn.returnCard();

  expect(turn.returnCard()).to.equal(card)
});

it('should return if the answer is true', () => {
  const turn = new Turn(guess, card);
  const turn2 = new Turn(guess, card;)

  turn.evaluateGuess();
  turn2.evaluateGuess();

  expect(turn.evaluate()).to.equal(true);
  expect(turn2.evaluate()).to.equal(false)
});

it('shoud give feedback', () => {
  const turn = new Turn(guess, card);
  const turn2 = new Turn(guess, card);

  turn.giveFeedback();
  turn2.giveFeedback();

  expect(turn.giveFeedback).to.equal('correct!');
  expect(turn2.giveFeedback).to.equal('incorrect')
})
