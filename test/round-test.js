import chai from 'chai';
const expect = chai.expect;

import Round from '../src/scripts/Round.js';
import Player from '../src/scripts/Player.js';
import Survey from '../src/scripts/Survey.js';

// round is declared outside of describe due to being 'undefined' when declared within describe.  Not sure why this is occurring.


describe('Round', () => {
  let data
  let round
  let survey
  let turn
  let player1
  let player2
  let playerGuess
  beforeEach(() => {
    data = {
        surveys: [{
          id: 1,
          question: 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?'
        }, ],
        answers: [{
            answer: 'Beer',
            respondents: 67,
            surveyId: 1
          },
          {
            answer: 'Bowling Ball',
            respondents: 5,
            surveyId: 1
          },
          {
            answer: 'Donuts',
            respondents: 24,
            surveyId: 1
          },
        ]
      };

    survey = new Survey(data);
    round = new Round(survey);
    player1 = new Player('Lenny', 1);
    player2 = new Player('Tom', 2);
  });

  it('Should be a function', () => {
    expect(Round).to.be.a('function');
  });
  describe('Default Values:', () => {
    it('Should take in one survey', () => {
      expect(round.survey).to.be.an('string');
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
      expect(round.guessFlag).to.eql(undefined);
    });
  })

  describe('Method Values:', () => {
    it('A player should be able to take a turn on their turn only', () => {
      playerGuess = 'Beer';
      turn = survey.checkGuess(playerGuess);
      expect(round.takeTurn(player1, turn)).to.eql(false);
    });
  })
})
