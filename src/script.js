



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
