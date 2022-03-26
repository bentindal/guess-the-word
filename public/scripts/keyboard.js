function generateKeyboard(rowOne, rowTwo, rowThree){
  start = document.getElementById("guessDiv")
  var button = null;
  for(var x=0; x<rowOne.length; x++){
    button = document.createElement("button")
    button.setAttribute("onClick", "addToGuess('"+ rowOne[x] + "')")
    button.innerText = rowOne[x]
    start.appendChild(button);
  }
  start.appendChild(document.createElement("div"));
  for(var y=0; y<rowTwo.length; y++){
    button = document.createElement("button")
    button.setAttribute("onClick", "addToGuess('"+ rowTwo[y] + "')")
    button.innerText = rowTwo[y]
    start.appendChild(button);
  }
  start.appendChild(document.createElement("div"));
  for(var z=0; z<rowThree.length; z++){
    button = document.createElement("button")
    button.setAttribute("onClick", "addToGuess('"+ rowThree[z] + "')")
    button.innerText = rowThree[z]
    start.appendChild(button);
  }
}

function addToGuess(letter){
  if (letterGuess.length < 5){
    letterGuess += letter
    drawGuess(letterGuess)
    console.log(letterGuess)
  }
}

function removeLetterFromGuess(){
  letterGuess = letterGuess.substring(0,letterGuess.length - 1)
  drawGuess(letterGuess)
}

// Main ------------------------->
const ROW1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
const ROW2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
const ROW3 = ["Z", "X", "C", "V", "B", "N", "M"]
generateKeyboard(ROW1, ROW2, ROW3);
var letterGuess = ""