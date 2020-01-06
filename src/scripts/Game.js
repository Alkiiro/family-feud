import $ from 'jquery';
import Round from './Round.js';


class Game {
  constructor(surveys) {
    this.surveys = surveys;
    this.usedSurveyIds = [];
  }
  startRound() {
    let surveyObject = {
      survey: foundSurvey,
      answers: foundAnswers
    }
    if (this.usedSurveyIds.length === 2) {
      startPanicRound(surveyObject);
    } else {
      let round = new Round(surveyObject);
    }
    this.usedSurveyIds.push(randomId);
  }
  startPanicRound(surveyObject) {
    let panicRound = new PanicRound(surveyObject);
  }
  endGame() {
    // Invoke display endGame function to Display the winner on the DOM.

    // Send the winners score to high scores api.
    // fetch('http://fe-apps.herokuapp.com/api/v1/gametime/leaderboard', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(someDataToSend),
    // })

    // Update DOM leaderboard?
  }
  restartGame() {
    // possibly rename this to just 'StartGame'
    // should set this.currentRound to 1 upon game instantiation.
  }
  quitGame() {

  }
}

export default Game;
