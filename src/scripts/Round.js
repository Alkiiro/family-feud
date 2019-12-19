import $ from 'jquery';
import Player from './scripts/Player.js';
import Survey from './scripts/Survey.js';


class Round {
  constructor(survey, answer) {
    this.survey = survey;
    this.answers = answer
    this.points = {player1: 0, player2: 0}
    this.currentPlayer = 1;
    this.guessFlag = true;
  }
  takeTurn() {
    // based upon evaluation of player.checkGuess(), reassign this.guessFlag
    if (this.currentPlayer === 1) {
      // allow player1 to t
    };
  }
  startRound() {

  }
}

export default Round;
