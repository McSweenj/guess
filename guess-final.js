// Guessing Game by Joe McSweeney, Burlington Tech Center Student 
//start code 
// initialize variables 
// add var's to start off the program and to set the values and use math.it will make it easyer 
// var correct boolean, set to false
var correctAnswer=false;
// var turns integer, set to 0
var turns=0;
// var answer integer, Picks number between (1-100).
var answer = Math.round(Math.random()*100)+1;
//Gives answer for the console for testing
console.log(answer);
  //whight a code that has the computer pick a random num 1 - 100 using a while statement and tell the user how meny turns it took them to get it right and asked for the users guess 
while (correctAnswer==false) {
    guess = prompt("Enter a guess (1-100)");
  // tell the code that you guess is = to the answer
    if (guess == answer) correctAnswer = true;
  // tell the user that the sholud guess a lower number 
    if (guess > answer) alert("Try a lower number!");
  // tells the user that the should guess a higher number 
    if (guess < answer) alert("Try a higher number!");
  // addeds a turn to the count every time the user inputs a guess 
    turns++;
}
// thell the user that they guesses it right and telles them how meant turns it took them 
alert("You guessed it in "+turns+" turns.");
// end code 
