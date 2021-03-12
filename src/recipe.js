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
  content.style.height = container.offsetHeight + 'px';
}


// share toast
function recipeShareFunction() {
  // Get the recipeShareSocial DIV
  var x = document.getElementById("recipeShareSocial");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}