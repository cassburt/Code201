
var sampleAnswer1 = "YES";
var sampleAnswer2 = "YES";
var sampleAnswer3 = "NO";
var sampleAnswer4 = "5";
var guessCorrect = 0;
var username = prompt("First off, what's your name?")

console.log("Did I once steal a candy bar at the age of 5?");
var guess1 = prompt ("Would you believe that I once stole a candy bar at age 5?");

console.log ("Compare the yes/no response to ours.");
if (sampleAnswer1 == guess1.toUpperCase()) {
  alert("You guessed correctly, " + username + "!" + " Now you know of my sordid past!");
  guessCorrect += 1;
} else {
  var guess1 = prompt("You clearly don't know me at all... Let's try again, shall we?");
  if (guess1.toUpperCase() == sampleAnswer1) {
    alert("Finally!");
  }
}

console.log("Did I once laugh at a friend that slipped and fell trying to catch the streetcar?");
var guess2 = prompt ("Did I once laugh at a friend that slipped and fell trying to catch the streetcar?");

console.log ("Compare the yes/no response to ours.");
if (sampleAnswer2 == guess2.toUpperCase()) {
  alert(username + "!" + " 2 for 2, you sly fox!");
  guessCorrect += 1;
} else {
  var guess2 = prompt("Sigh, I'm becoming disappointed... Try to answer correctly this time!");
  if (guess2.toUpperCase() == sampleAnswer2) {
    alert("About time.");
  }
}

console.log("Would I drink my roommate's last beer?");
var guess3 = prompt ("Would I drink my roommate's last bear?");

console.log ("Compare the yes/no response to ours.");
if (sampleAnswer3 !== guess3.toUpperCase()) {
  alert("What kind of monster do you take me for?! Even I have limits!");
  var guess3 = prompt("You owe me another try!");
  if(sampleAnswer3 == guess3.toUpperCase()) {
    alert("Yup! Beer is sacred!");
  }
} else {
  alert("Right? How messed up would that have been?");
  guessCorrect += 1;
}





var randomNumber = function() {
  console.log(Math.floor(Math.random() * 10) + 1);
}



console.log("Compare if a user's guess is too high or too low.");
var guess4 = parseInt(prompt("Please enter a number 1-10"));

if(guess4 == sampleAnswer4) {
  alert("You guessed correctly!");
  guessCorrect += 1;
} else if(guess4 > sampleAnswer4) {
  guess4 = alert("You guessed too high!");
} else {
  alert("Your guess was too low!");
}

console.log("Comepare to see if initial guesses were correct.");
if (guessCorrect == 4) {
  alert("Congrats, " + username + "! " + "You know the limits of my evilness AND you guessed the number on your first try! 4 for 4!");
} else if (guessCorrect == 3) {
  alert("3 for 4, " + username + ". Not terrible... I suppose.");
} else if (guessCorrect == 2) {
  alert("2 for 4, " + username + ". I am less than impresssed.");
} else {
  alert("You got less than one intitially correct; clearly know nothing about me. #thatisall");
}
