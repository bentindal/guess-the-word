var r1letter1 = document.getElementById('row1letter1')
var r1l1 = r1letter1.getContext("2d");
var r1letter2 = document.getElementById('row1letter2')
var r1l2 = r1letter2.getContext("2d");
var r1letter3 = document.getElementById('row1letter3')
var r1l3 = r1letter3.getContext("2d");
var r1letter4 = document.getElementById('row1letter4')
var r1l4 = r1letter4.getContext("2d");
var r1letter5 = document.getElementById('row1letter5')
var r1l5 = r1letter5.getContext("2d");

var r2letter1 = document.getElementById('row2letter1')
var r2l1 = r2letter1.getContext("2d");
var r2letter2 = document.getElementById('row2letter2')
var r2l2 = r2letter2.getContext("2d");
var r2letter3 = document.getElementById('row2letter3')
var r2l3 = r2letter3.getContext("2d");
var r2letter4 = document.getElementById('row2letter4')
var r2l4 = r2letter4.getContext("2d");
var r2letter5 = document.getElementById('row2letter5')
var r2l5 = r2letter5.getContext("2d");

var r3letter1 = document.getElementById('row3letter1')
var r3l1 = r3letter1.getContext("2d");
var r3letter2 = document.getElementById('row3letter2')
var r3l2 = r3letter2.getContext("2d");
var r3letter3 = document.getElementById('row3letter3')
var r3l3 = r3letter3.getContext("2d");
var r3letter4 = document.getElementById('row3letter4')
var r3l4 = r3letter4.getContext("2d");
var r3letter5 = document.getElementById('row3letter5')
var r3l5 = r3letter5.getContext("2d");

var r4letter1 = document.getElementById('row4letter1')
var r4l1 = r4letter1.getContext("2d");
var r4letter2 = document.getElementById('row4letter2')
var r4l2 = r4letter2.getContext("2d");
var r4letter3 = document.getElementById('row4letter3')
var r4l3 = r4letter3.getContext("2d");
var r4letter4 = document.getElementById('row4letter4')
var r4l4 = r4letter4.getContext("2d");
var r4letter5 = document.getElementById('row4letter5')
var r4l5 = r4letter5.getContext("2d");

var r5letter1 = document.getElementById('row5letter1')
var r5l1 = r5letter1.getContext("2d");
var r5letter2 = document.getElementById('row5letter2')
var r5l2 = r5letter2.getContext("2d");
var r5letter3 = document.getElementById('row5letter3')
var r5l3 = r5letter3.getContext("2d");
var r5letter4 = document.getElementById('row5letter4')
var r5l4 = r5letter4.getContext("2d");
var r5letter5 = document.getElementById('row5letter5')
var r5l5 = r5letter5.getContext("2d");

var r6letter1 = document.getElementById('row6letter1')
var r6l1 = r6letter1.getContext("2d");
var r6letter2 = document.getElementById('row6letter2')
var r6l2 = r6letter2.getContext("2d");
var r6letter3 = document.getElementById('row6letter3')
var r6l3 = r6letter3.getContext("2d");
var r6letter4 = document.getElementById('row6letter4')
var r6l4 = r6letter4.getContext("2d");
var r6letter5 = document.getElementById('row6letter5')
var r6l5 = r6letter5.getContext("2d");





// Get each CORRECT letter and assign it to variables
console.log(word)
const correctLetter1 = word.substring(0,1)
const correctLetter2 = word.substring(1,2)
const correctLetter3 = word.substring(2,3)
const correctLetter4 = word.substring(3,4)
const correctLetter5 = word.substring(4,5)
const correctArray = [correctLetter1, correctLetter2, correctLetter3, correctLetter4, correctLetter5]

var theLetter1 = "_"
var theLetter2 = "_"
var theLetter3 = "_"
var theLetter4 = "_"
var theLetter5 = "_"

function drawWord(canvas, letter) {
  canvas.font = "400px Arial";
  canvas.fillText(letter, 50, 350);
}
// Iteration 1

// Dislay Blanks
drawWord(r1l1, theLetter1)
drawWord(r1l2, theLetter2)
drawWord(r1l3, theLetter3)
drawWord(r1l4, theLetter4)
drawWord(r1l5, theLetter5)

// Wait for user's guess
var attempt = 0;

function makeGuess(){
  var inputbox = document.getElementById('letter_guess')
  var guess = inputbox.value
  guess = guess.toUpperCase()
  console.log("Guess: " + guess)
  attempt += 1
  // Draw guess
  if (attempt == 1){
    drawWord(r1l1, guess.substring(0,1))
    drawWord(r1l2, guess.substring(1,2))
    drawWord(r1l3, guess.substring(2,3))
    drawWord(r1l4, guess.substring(3,4))
    drawWord(r1l5, guess.substring(4,5))

    // check if ORANGE
    for (let i=0; i<5; i++){
      if (correctArray[i] == guess.substring(0,1)){r1letter1.classList.add("orange");}
      if (correctArray[i] == guess.substring(1,2)){r1letter2.classList.add("orange");}
      if (correctArray[i] == guess.substring(2,3)){r1letter3.classList.add("orange");}
      if (correctArray[i] == guess.substring(3,4)){r1letter4.classList.add("orange");}
      if (correctArray[i] == guess.substring(4,5)){r1letter5.classList.add("orange");}
    }

    // check if GREEN
    if (guess.substring(0,1) == correctLetter1){
      r1letter1.classList.add("green");
    }
    if (guess.substring(1,2) == correctLetter2){
      r1letter2.classList.add("green");
    }
    if (guess.substring(2,3) == correctLetter3){
      r1letter3.classList.add("green");
    }
    if (guess.substring(3,4) == correctLetter4){
      r1letter4.classList.add("green");
    }
    if (guess.substring(4,5) == correctLetter5){
      r1letter5.classList.add("green");
    }
    
  }
  if (attempt == 2){
    drawWord(r2l1, guess.substring(0,1))
    drawWord(r2l2, guess.substring(1,2))
    drawWord(r2l3, guess.substring(2,3))
    drawWord(r2l4, guess.substring(3,4))
    drawWord(r2l5, guess.substring(4,5))

    // check if ORANGE
    for (let i=0; i<5; i++){
      if (correctArray[i] == guess.substring(0,1)){r2letter1.classList.add("orange");}
      if (correctArray[i] == guess.substring(1,2)){r2letter2.classList.add("orange");}
      if (correctArray[i] == guess.substring(2,3)){r2letter3.classList.add("orange");}
      if (correctArray[i] == guess.substring(3,4)){r2letter4.classList.add("orange");}
      if (correctArray[i] == guess.substring(4,5)){r2letter5.classList.add("orange");}
    }

    // check if GREEN
    if (guess.substring(0,1) == correctLetter1){
      r2letter1.classList.add("green");
    }
    if (guess.substring(1,2) == correctLetter2){
      r2letter2.classList.add("green");
    }
    if (guess.substring(2,3) == correctLetter3){
      r2letter3.classList.add("green");
    }
    if (guess.substring(3,4) == correctLetter4){
      r2letter4.classList.add("green");
    }
    if (guess.substring(4,5) == correctLetter5){
      r2letter5.classList.add("green");
    }
  }
  if (attempt == 3){
    drawWord(r3l1, guess.substring(0,1))
    drawWord(r3l2, guess.substring(1,2))
    drawWord(r3l3, guess.substring(2,3))
    drawWord(r3l4, guess.substring(3,4))
    drawWord(r3l5, guess.substring(4,5))

    // check if ORANGE
    for (let i=0; i<5; i++){
      if (correctArray[i] == guess.substring(0,1)){r3letter1.classList.add("orange");}
      if (correctArray[i] == guess.substring(1,2)){r3letter2.classList.add("orange");}
      if (correctArray[i] == guess.substring(2,3)){r3letter3.classList.add("orange");}
      if (correctArray[i] == guess.substring(3,4)){r3letter4.classList.add("orange");}
      if (correctArray[i] == guess.substring(4,5)){r3letter5.classList.add("orange");}
    }

    // check if GREEN
    if (guess.substring(0,1) == correctLetter1){
      r3letter1.classList.add("green");
    }
    if (guess.substring(1,2) == correctLetter2){
      r3letter2.classList.add("green");
    }
    if (guess.substring(2,3) == correctLetter3){
      r3letter3.classList.add("green");
    }
    if (guess.substring(3,4) == correctLetter4){
      r3letter4.classList.add("green");
    }
    if (guess.substring(4,5) == correctLetter5){
      r3letter5.classList.add("green");
    }
  }
  if (attempt == 4){
    drawWord(r4l1, guess.substring(0,1))
    drawWord(r4l2, guess.substring(1,2))
    drawWord(r4l3, guess.substring(2,3))
    drawWord(r4l4, guess.substring(3,4))
    drawWord(r4l5, guess.substring(4,5))

    // check if ORANGE
    for (let i=0; i<5; i++){
      if (correctArray[i] == guess.substring(0,1)){r4letter1.classList.add("orange");}
      if (correctArray[i] == guess.substring(1,2)){r4letter2.classList.add("orange");}
      if (correctArray[i] == guess.substring(2,3)){r4letter3.classList.add("orange");}
      if (correctArray[i] == guess.substring(3,4)){r4letter4.classList.add("orange");}
      if (correctArray[i] == guess.substring(4,5)){r4letter5.classList.add("orange");}
    }

    // check if GREEN
    if (guess.substring(0,1) == correctLetter1){
      r4letter1.classList.add("green");
    }
    if (guess.substring(1,2) == correctLetter2){
      r4letter2.classList.add("green");
    }
    if (guess.substring(2,3) == correctLetter3){
      r4letter3.classList.add("green");
    }
    if (guess.substring(3,4) == correctLetter4){
      r4letter4.classList.add("green");
    }
    if (guess.substring(4,5) == correctLetter5){
      r4letter5.classList.add("green");
    }
  }
  if (attempt == 5){
    drawWord(r5l1, guess.substring(0,1))
    drawWord(r5l2, guess.substring(1,2))
    drawWord(r5l3, guess.substring(2,3))
    drawWord(r5l4, guess.substring(3,4))
    drawWord(r5l5, guess.substring(4,5))

    // check if ORANGE
    for (let i=0; i<5; i++){
      if (correctArray[i] == guess.substring(0,1)){r5letter1.classList.add("orange");}
      if (correctArray[i] == guess.substring(1,2)){r5letter2.classList.add("orange");}
      if (correctArray[i] == guess.substring(2,3)){r5letter3.classList.add("orange");}
      if (correctArray[i] == guess.substring(3,4)){r5letter4.classList.add("orange");}
      if (correctArray[i] == guess.substring(4,5)){r5letter5.classList.add("orange");}
    }

    // check if GREEN
    if (guess.substring(0,1) == correctLetter1){
      r5letter1.classList.add("green");
    }
    if (guess.substring(1,2) == correctLetter2){
      r5letter2.classList.add("green");
    }
    if (guess.substring(2,3) == correctLetter3){
      r5letter3.classList.add("green");
    }
    if (guess.substring(3,4) == correctLetter4){
      r5letter4.classList.add("green");
    }
    if (guess.substring(4,5) == correctLetter5){
      r5letter5.classList.add("green");
    }
  }
  if (attempt == 6){
    drawWord(r6l1, guess.substring(0,1))
    drawWord(r6l2, guess.substring(1,2))
    drawWord(r6l3, guess.substring(2,3))
    drawWord(r6l4, guess.substring(3,4))
    drawWord(r6l5, guess.substring(4,5))

    // check if ORANGE
    for (let i=0; i<5; i++){
      if (correctArray[i] == guess.substring(0,1)){r6letter1.classList.add("orange");}
      if (correctArray[i] == guess.substring(1,2)){r6letter2.classList.add("orange");}
      if (correctArray[i] == guess.substring(2,3)){r6letter3.classList.add("orange");}
      if (correctArray[i] == guess.substring(3,4)){r6letter4.classList.add("orange");}
      if (correctArray[i] == guess.substring(4,5)){r6letter5.classList.add("orange");}
    }

    // check if GREEN
    if (guess.substring(0,1) == correctLetter1){
      r6letter1.classList.add("green");
    }
    if (guess.substring(1,2) == correctLetter2){
      r6letter2.classList.add("green");
    }
    if (guess.substring(2,3) == correctLetter3){
      r6letter3.classList.add("green");
    }
    if (guess.substring(3,4) == correctLetter4){
      r6letter4.classList.add("green");
    }
    if (guess.substring(4,5) == correctLetter5){
      r6letter5.classList.add("green");
    }
  }
}
// Compare first letter to all the others, 
// if it is the same as the one in the same place set background to GREEN
// if it is the same as ANY of the letters then background ORANGE
