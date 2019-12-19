import chai from 'chai';
const expect = chai.expect;

import Round from '../src/scripts/Round.js';
import Player from '../src/scripts/Player.js';

let survey = {
  id: 1,
  question: "If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?"
};

let answer = [{
answer: "Beer",
respondents: 67,
surveyId: 1
},
{
answer: "Bowling Ball",
respondents: 5,
surveyId: 1
},
{
answer: "Donuts",
respondents: 24,
surveyId: 1
}]

let round

describe('Round', () => {
  beforeEach(() => {
    round = new Round(survey, answer)
  });

  it('Should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('Should take in one survey object', () => {
    expect(round.survey).to.be.an('object');
  });

  it('Should take in an array of answers', () => {
    expect(round.answers).to.be.an('array');
  });

  it('Should default the player/s points to 0', () => {
    expect(round.points.player1).to.eql(0);
  });

  it('Should default its currentPlayer to player1', () => {
    expect(round.currentPlayer).to.eql(1);
  });

  it('Should default its guessFlag to true', () => {
    expect(round.guessFlag).to.eql(true);
  });

  it('A player should be able to takeTurn only on their turn', () => {
    let player = new Player()
    expect(round.takeTurn()).to.eql(???);
  });
})
