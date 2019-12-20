import $ from 'jquery';

class Round {
  constructor(survey, players) {
    this.survey = survey.question;
    this.answers = survey.answers;
    this.points = {player1: 0, player2: 0}
    this.currentPlayer = 1;
    this.players = players;
    this.guessFlag = false;
    this.numTurns = 0;
  }

  takeTurn(guessResult) {
    let player = this.players.filter(player => {
      return player.playerNum !== this.currentPlayer
    })
    if (guessResult) {
      this.guessFlag = true;
    } else {
      this.guessFlag = false;
      this.currentPlayer = player[0].playerNum;
    }
    this.numTurns++
  }

  startRound() {
    // setStartingPlayer() sets this.currentPlayer to the game's round counter.
  }
}

export default Round;
