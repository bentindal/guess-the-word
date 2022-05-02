function updateLink(){
  console.log('updating link')
  var linkElement = document.getElementById("customLink")
  if (cID.length == 5){
    linkElement.innerText = "www.btindal.uk/custom-game/"+cID
    linkElement.setAttribute("href", "custom-game/"+cID)
  }
  if (cID == 1){
    linkElement.innerText = "word must be 5 characters long"
  }
}
