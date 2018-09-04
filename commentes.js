// puick a number bettwe ) and 1 and then you round up becase thir is no 0 in it 
var Answer = Math.round(Math.random()*100);
// set to 0 
var Turns=0;
// set turn var correct, set val to false 
var Correct=false;
// adds 1 to the varible turns 
Turns++;
// keep looping till it is set to true 
while (Correct==false) {
    // anishlizing guess set val to user imput tellinguser to imput 
    var Guess = prompt("Guess my integer (between 0 and 100)!");
    // cheking to see if guess it = to anser 
    if (Guess == Answer) {
        // corret and num turnes 
        alert("CORRECT! You guessed it in "+Turns+" turns.");
        // set eqal to true to get out of "wile loop "
        Correct = true;
    }
    // chek to see if its the same as anser  
    else if (Guess > Answer) {
        // the guess it the same as the anser
        alert("Hint: Try a lower number!");
        // tell you to guess lower num
    }
    else if (Guess < Answer)
        // not eqal to the anser 
        alert("Hint: Try a higher number!");
    // tell you to guess higher num
    }
    Turns++;
// tells you the num of turns you took 
}
alert("Thank you for playing.");
// thanks you for playing after you guess the right anser 
