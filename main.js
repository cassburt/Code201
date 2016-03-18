
var questions = ["Did I once steal a candy bar at the age of 5?", "Did I once laugh at a friend that slipped and fell trying to catch the streetcar?", "Would I drink my roommate's last beer?", "Guess a number 1 through 10."];

var answers = ["YES", "YES", "NO", "5"];

var answersShorthand = ["Y", "Y", "N"];

var guessNumber = false;

var myGuessNumber = "6";

var guessCorrect = 0;

var username = prompt("First off, what's your name?")

function guessingGame() {
  for (i=0; i<questions.length;i++) {
    var userAnswer = prompt(questions[i]);

    if (userAnswer.toUpperCase() == answers[i] || userAnswer.toUpperCase() == answersShorthand[i]) {
      document.getElementById("userResponse").innerHTML = "You are correct!";
      guessCorrect++;
    }
    else {
      document.getElementById("userResponse").innerHTML = "You are wrong and terrible.";
    }

  }

  document.getElementById("correctGuess").innerHTML = "You got "+guessCorrect+" questions correct.";
}
guessingGame();

while (guessNumber == false) {
  var userNumber = parseInt(prompt("Guess a number 1 through 10."));

  if (userNumber == 6) {
    guessNumber = true;
    document.getElementById("highOrLow").innerHTML = "You are correct.";
  }
  else if (userNumber > 6) {
    document.getElementById("highOrLow").innerHTML = "You guessed too high. Guess again.";
  }
  else {
    document.getElementById("highOrLow").innerHTML = "You guessed too low. Guess again.";
  }

}
