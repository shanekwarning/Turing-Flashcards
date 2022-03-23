const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  const turn = new Turn();
  expect(Turn).to.be.a('function');
})

it('Should take a users guess', () => {
  const turn = new Turn('pug');

  expect(turn.guess).to.equal('pug')
});

it('Turn should have a card', () => {
  const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const turn = new Turn('pug', card);

  expect(turn.card).to.equal(card);
});

it('should return a guess', () => {
  const turn = new Turn('pug');

  expect(turn.returnGuess()).to.equal('pug')
});

it('should return a card', () => {
  const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const turn = new Turn('pug', card);

  expect(turn.returnCard()).to.equal(card)
});

it('should return if the answer is true', () => {
  const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(2, 'What is Jill\'s favorite animal', ['lion', 'tiger', 'bear'], 'lion');
  const turn = new Turn('sea otter', card);
  const turn2 = new Turn('bear', card2);
  turn.evaluateGuess();
  turn2.evaluateGuess();

  expect(turn.evaluateGuess()).to.equal(true);
  expect(turn2.evaluateGuess()).to.equal(false)
});

it('shoud give feedback', () => {
  const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(2, 'What is Jill\'s favorite animal', ['lion', 'tiger', 'bear'], 'lion');
  const turn = new Turn('sea otter', card);
  const turn2 = new Turn('bear', card2);

  turn.evaluateGuess();
  turn.giveFeedback();
  turn2.evaluateGuess();
  turn2.giveFeedback();

  expect(turn.giveFeedback()).to.equal('correct!');
  expect(turn2.giveFeedback()).to.equal('incorrect')
})
