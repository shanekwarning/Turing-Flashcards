const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {

beforeEach(() => {
   card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
   card2 = new Card(2, 'What is Jill\'s favorite animal', ['lion', 'tiger', 'bear'], 'lion');
   turn = new Turn('sea otter', card);
   turn2 = new Turn('bear', card2);
})


it('Should take a users guess', () => {

  expect(turn.guess).to.equal('sea otter')
});

it('Turn should have a card', () => {

  expect(turn.card).to.equal(card);
});

it('should return a guess', () => {

  expect(turn.returnGuess()).to.equal('sea otter')
});

it('should return a card', () => {

  expect(turn.returnCard()).to.equal(card)
});

it('should return if the answer is true', () => {

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
  expect(turn2.giveFeedback()).to.equal('incorrect!')
})
})
