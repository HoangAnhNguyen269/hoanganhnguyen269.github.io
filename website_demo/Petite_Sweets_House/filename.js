//Menu navibar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  //For contact Form
  var modal1 = document.getElementById("myModal");

  // Get the button that opens the modal
  var contactBtn = document.getElementById("contactBtn");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on the button, open the modal
  contactBtn.onclick = () => {
    modal1.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = () => {
    modal1.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = (event) => {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }
