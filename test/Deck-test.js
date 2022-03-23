cont chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Deck', () => {
  const deck = new Deck();

  expect(deck).to.be.an.instanceof(Deck)
});

it.skip('should have an array of Cards', () => {
  const deck = new Deck();

  expect(deck.cards).to.equal([])
});

it.skip('should be able to collect Cards', () => {
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

  const deck = new Deck([card1, card2, card3]);

expect(deck.cards).to.equal([card1, card2, card3])
});

it.skip('should be able to count Cards', () => {
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

  const deck = new Deck([card1, card2, card3]);

  deck.countCards();

  expect(deck.countCards()).to.equal(3)
})
