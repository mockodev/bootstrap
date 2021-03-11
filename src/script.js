
// script for recipe

// First call
ScrollHeight();

// Redraw when viewport is modified
window.addEventListener('resize', function(event){
  ScrollHeight();
});


function ScrollHeight() {
  var content = document.querySelector('#parchment');
  var container = document.querySelector('#contain');

  // SVG feTurbulence can modify all others elements, that's why it's in absolute
  // so for a better effect, absolute height is defined by his content.
  // content.style.height = container.offsetHeight + 'px'; // >> We need to fix it out, or comment out. <<
}



// turn tooltips on
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


// Ask Adam
// open full screen search box
  function checkEnterClick(e){
    if(e.keyCode == 13){
      document.getElementById("myOverlay").style.display = "block";
    }
 }

// close full screen search box
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}



// footer, subscription button - Josh
const subscrForm = document.getElementById("subscribe");
const subscrInput = document.getElementById("userEmail");

const subscrFormSubmit = (event) => {
  event.preventDefault();
  !subscrInput.value
    ? alert("empty! please fill out the form")
    : toastr["success"]("Thanks for your subscribing.", "Success")
};

subscrForm.addEventListener("submit", subscrFormSubmit);
