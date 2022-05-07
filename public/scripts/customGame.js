function updateLink(){
  console.log('updating link')
  var linkElement = document.getElementById("customLink")
  if (cID.length == 5){
    linkElement.innerText = "www.btindal.uk/game?id="+cID
    linkElement.setAttribute("href", "game?id="+cID)
  }
  if (cID == 1){
    linkElement.innerText = "word must be 5 characters long"
  }
}
