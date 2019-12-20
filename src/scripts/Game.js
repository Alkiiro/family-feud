import $ from 'jquery';

class Game {
  constructor() {
    this.surveys;
    this.usedSurveyIds;
    this.currentRound;
  }
  startRound() {
    // round.startRound(this.currentRound)
  }
  startPanicRound() {

  }
  endGame() {

  }
  restartGame() {
    // possibly rename this to just 'StartGame'
    // should set this.currentRound to 1 upon game instantiation.
  }
  quitGame() {

  }
}

export default Game;
