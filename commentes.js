// puick a number bettwe ) and 1 and then you round up becase thir is no 0 in it 
var Answer = Math.round(Math.random()*100);
// set to 0 
var Turns=0;
// set turn var correct, set val to false 
var Correct=false;
// adds 1 to the varible turns 
Turns++;
// 
while (Correct==false) {
    var Guess = prompt("Guess my integer (between 0 and 100)!");
    if (Guess == Answer) {
        alert("CORRECT! You guessed it in "+Turns+" turns.");
        Correct = true;
    }
    else if (Guess > Answer) {
        alert("Hint: Try a lower number!");
    }
    else if (Guess < Answer) {
        alert("Hint: Try a higher number!");
    }
    Turns++;
}
alert("Thank you for playing.");
