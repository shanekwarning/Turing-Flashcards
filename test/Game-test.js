const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

let game = new Game();
game.start();

describe('Game', () => {

it('should be a function', () => {
  const game = new Game;

  expect(game).to.be.an.instanceof(Game)
})

it('should be a Round', () => {

  expect(game.currentRound).to.be.an.instanceof(Round);
})

})
