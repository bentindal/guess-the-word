function createBoard(wordLength, guessesAllowed){
  var array = [];
  start = document.getElementById("wordCanvas")
  for(var y=0; y<guessesAllowed; y++){
    // Add divider class=word_game
    start.appendChild(document.createElement("div"));
    var rowArray = [];
    for(var x=0; x<wordLength; x++){
      // Add 5 canvas elements
      rowArray.push(document.createElement("CANVAS"));
      start.appendChild(rowArray[x]);
      rowArray[x].setAttribute("id","canv-"+y+x)
      rowArray[x].setAttribute("width","400px")
      rowArray[x].setAttribute("height","400px")
    }
    array.push(rowArray);
  }
  return array
}

function drawWord(canvas, letter) {
  canvas.font = "bold 400px Arial";
  canvas.fillStyle = "rgb(34, 85, 112)";
  canvas.fillText(letter, 40, 350);
}

function drawGuess(theGuess){
  var array = wordToArray(theGuess)
  for(var i=0; i<word.length; i++){
    drawWord(document.getElementById("canv-"+rowPointer+i).getContext("2d"), array[i])
  }
}

function wordToArray(word){
  var array = [];
  array.push(word.substring(0,1))
  array.push(word.substring(1,2))
  array.push(word.substring(2,3))
  array.push(word.substring(3,4))
  array.push(word.substring(4,5))
  return array
}

function makeGuess(){
  console.log("makeGuess")
  var inputbox = document.getElementById('letter_guess')
  var guess = inputbox.value
  guess = guess.toUpperCase()
  console.log("Guess: " + guess, " Word: " + word)
  // Check if VALID guess
  drawGuess(guess);
  checkIfCorrect(wordToArray(guess), correctArray);
  rowPointer += 1
}

function checkIfCorrect(guessArray, wordArray){
  console.log("checkifcorrect")
  var x = 0;
  for(var y=0; y<wordArray.length; y++){
    for(x=0; x<wordArray.length; x++){
      if (guessArray[y] == wordArray[x]){
        console.log(guessArray[y] +" yellow")
        document.getElementById("canv-"+rowPointer+y).classList.add("orange");
      }
    }
  }
  for(x=0; x<wordArray.length; x++){
    if (guessArray[x] == wordArray[x]){
      console.log(guessArray[x] +" green")
      document.getElementById("canv-"+rowPointer+x).classList.add("green");
    }
  }
}


// Main ------------------------->
var canvasArray = createBoard(5, 6);
var rowPointer = 0;
const correctArray = wordToArray(word); // Array of the word to guess