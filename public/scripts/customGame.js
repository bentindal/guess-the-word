function copyToClipboard() {
    /* Get the text field */
    var copyText = document.getElementById("customLink");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.innerText);
  
    /* Alert the copied text */
    alert("Link Copied to Clipboard");
  }

function updateLink(){
  console.log('updating link')
  var linkElement = document.getElementById("customLink")
  if (cID != ""){
    linkElement.innerText = "www.btindal.uk/custom-game/"+cID
    linkElement.setAttribute("href", "custom-game/"+cID)
  }
  copyToClipboard()
}
