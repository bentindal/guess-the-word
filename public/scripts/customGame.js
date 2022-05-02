function updateLink(){
  console.log('updating link')
  var linkElement = document.getElementById("customLink")
  if (cID != ""){
    linkElement.innerText = "www.btindal.uk/custom-game/"+cID
    linkElement.setAttribute("href", "custom-game/"+cID)
  }
}
