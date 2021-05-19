/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "100%";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }


/*Go to top function */

mybutton = document.getElementById("#myButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {scrollFunction()};

function scrollFunction() {
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function goToTopFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  
}