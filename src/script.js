toastr.success("<button type='button' class='btn'>Yes</button>", "Share recipe ?");




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
      setTimeout(function(){ document.getElementById("myOverlay").style.display = "block"; }, 700)
    }
 }

// close full screen search box
function closeSearch() {
  setTimeout(function(){ document.getElementById("myOverlay").style.display = "none"; }, 500)
  
}



// footer, subscription button - Josh
const subscrForm = document.getElementById("subscribe");
const subscrInput = document.getElementById("userEmail");

const subscrFormSubmit = (event) => {
  event.preventDefault();
  !subscrInput.value
    ? alert("Empty! Please fill out the form")
    : alert("Thanks for your subscribing!")
};

subscrForm.addEventListener("submit", subscrFormSubmit);
