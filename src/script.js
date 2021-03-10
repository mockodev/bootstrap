

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
  content.style.height = container.offsetHeight + 'px';
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


