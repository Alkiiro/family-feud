import $ from 'jquery';

class Round {
  constructor(survey) {
    this.survey = survey.question;
    this.answers = survey.answers;
    this.points = {player1: 0, player2: 0}
    this.currentPlayer = 1;
    this.guessFlag = undefined;
    this.numTurns = 0;
  }

  takeTurn(currentPlayer, turn) {
    // takes in a currentPlayer
    // based upon evaluation of survey.checkGuess(), reassign this.guessFlag
    // non-currentPlayer/s input is unavailable via DOM manipulation
    // possible if block (this.currentPlayer === currentPlayer.playerNum)
    if () {
      // allow player1 to to take a turn
      // currentPlayer/s input is available

      this.guessFlag = true;
      this.numTurns++

    }
  }

  startRound(currentPlayer) {
    takeTurn(currentPlayer);
  }
}

export default Round;
