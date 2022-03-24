const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {

  it('should be a function', function() {
    const round = new Round();
  expect(round).to.be.an.instanceof(Round)
});

it('should be able to have a Deck of Cards', () => {
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

  const deck = new Deck([card1, card2, card3]);

  const round = new Round(deck);

  expect(round.deck).to.equal(deck)
});

it('should be able to return the current Card', () =>{
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

  const deck = new Deck([card1, card2, card3]);

  const round = new Round(deck);
  expect(round.returnCurrentCard()).to.equal(card1)
});

it('should start a new Turn when a guess is made', () => {
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

  const deck = new Deck([card1, card2, card3]);
  const deck2 = new Deck([card1, card2, card3]);

  const round = new Round(deck);
  const round2 = new Round(deck2);

  round.returnCurrentCard()
  round2.returnCurrentCard()

  expect(round.takeTurn('sea otter')).to.be.a('string').to.equal('correct!');
  expect(round2.takeTurn('pug')).to.be.a('string').to.equal('incorrect!')

  expect(round.turns).to.equal(1)
});

it('should keep track of incorrect guesses', () => {
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

  const deck = new Deck([card1, card2, card3]);
  const deck2 = new Deck([card1, card2, card3]);

  const round = new Round(deck);
  const round2 = new Round(deck2);

  round.returnCurrentCard();
  round2.returnCurrentCard();

  round.takeTurn('sea otter');
  round2.takeTurn('pug');

  expect(round.incorrectGuesses).to.be.an('array').to.deep.equal([]);
  expect(round2.incorrectGuesses).to.be.an('array').to.deep.equal([1])
  });

  it('should be able to calculate the percent of corect answers', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    round.returnCurrentCard();
    round.takeTurn('sea otter');
    round.returnCurrentCard();
    round.takeTurn('spleen');

    expect(round.calculatePercentCorrect()).to.equal(50);
  })
});
