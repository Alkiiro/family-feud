import $ from 'jquery';

class Round {
  constructor(survey, answer) {
    this.survey = survey;
    this.answers = answer
    this.points = {player1: 0, player2: 0}
    this.currentPlayer = 1;
    this.guessFlag = true;
  }
  takeTurn() {
    // based upon evaluation of survey.checkGuess(), reassign this.guessFlag
    if (this.currentPlayer === 1) {
      // allow player1 to to take a turn
    };
  }
  startRound() {

  }
}

export default Round;
