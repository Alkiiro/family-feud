import $ from 'jquery';
import Round from './Round.js';
import Survey from './Survey.js';



class Game {
  constructor(surveys) {
    this.surveys = surveys;
    this.usedSurveyIds = [];
    this.players = [];
    this.currentRound;
    this.currentSurvey;
  }
  createSurvey() {
    let foundSurvey;
    let foundAnswers = [];
    let randomId = Math.floor(Math.random() * 15) + 1;
    this.surveys.surveys.find(survey => {
      if (survey.id === randomId) {
        foundSurvey = survey;
      }
    })
    this.surveys.answers.filter(answer => {
      if (answer.surveyId === randomId) {
        foundAnswers.push(answer);
      }
    })
    let surveyObject = {
      survey: foundSurvey,
      answers: foundAnswers
    }
    this.currentSurvey = new Survey(surveyObject);
  }
    startRound() {
    if (this.usedSurveyIds.length === 2) {
      startPanicRound(this.currentSurvey);
    } else {
      this.currentRound = new Round(this.currentSurvey, this.players);
    }
    this.usedSurveyIds.push(this.currentSurvey.id);
  }
  startPanicRound(surveyObject) {
    let panicRound = new PanicRound(this.currentSurvey);
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

  }
  quitGame() {

  }
}

export default Game;
