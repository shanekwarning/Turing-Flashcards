const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  let round;
  let round2;
  let card1;
  let card2;
  let card3;
  let deck;
  let deck2;

  beforeEach(() => {
     card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
     card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
     card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

     deck = new Deck([card1, card2, card3]);
     deck2 = new Deck([card1, card2, card3]);

     round = new Round(deck);
     round2 = new Round(deck2);
  });

  it('should be a function', function() {
    // const round = new Round();
  expect(round).to.be.an.instanceof(Round)
});

it('should be able to have a Deck of Cards', () => {

  expect(round.deck).to.equal(deck)
});

it('should be able to return the current Card', () =>{

  expect(round.returnCurrentCard()).to.equal(card1)
});

it('should start a new Turn when a guess is made', () => {

  round.returnCurrentCard()
  round2.returnCurrentCard()

  expect(round.takeTurn('sea otter')).to.be.a('string').to.equal('correct!');
  expect(round2.takeTurn('pug')).to.be.a('string').to.equal('incorrect!')

  expect(round.turns).to.equal(1)
});

it('should keep track of incorrect guesses', () => {

  round.returnCurrentCard();
  round2.returnCurrentCard();

  round.takeTurn('sea otter');
  round2.takeTurn('pug');

  expect(round.incorrectGuesses).to.be.an('array').to.deep.equal([]);
  expect(round2.incorrectGuesses).to.be.an('array').to.deep.equal([1])
  });

  it('should be able to calculate the percent of corect answers', () => {
  
    round.returnCurrentCard();
    round.takeTurn('sea otter');
    round.returnCurrentCard();
    round.takeTurn('spleen');

    expect(round.calculatePercentCorrect()).to.equal(50);
  })
});
