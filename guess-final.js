//Guess Game by Wyatt
//Guess Game start
var correct = false;
var turns = 0;
//Create a random number for the answer
var answer = Math.round(Math.random()*100);
//shows answer when testing
console.log(answer);
// Set turns to 1
turns++;
// loop while correct is equal to false
while (correct==false) {
  // ask player to give a guess for what the think the answer might be (between 0 & 100).
  var guess = prompt("Guess an integer (between 0 & 100)!");
  // if guess is equal to answer then
  if (guess == answer) {
    // tell the player that they guess correctly in the number of turns it took to get the correct answer
    alert("Correct! you guessed it in "+turns+" turns.");
    // set correct to true
    correct = true;
  } //end loop
  // if guess is higher than answer then
  else if (guess > answer) {
    // tell player that they guessed too high and to try again
    alert("You guessed to high try again!");
  }
  // if guess is lower than answer then
  else if (guess < answer) {
    // tell player that they guessed too low and to try again
    alert("You guessed to low try again!");
  }
  // add 1 to turns
  turns++;
}
//tell player Thanks for playing and end game
alert("Thank you for playing");
