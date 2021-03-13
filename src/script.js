// Toast notification

function shareRecipe(){
   toastr.info("<button type='button' onclick='doShare()' class='btn btn-sm btn-outline-primary'>Yes</button><button type='button' onclick='dontShare()' class='btn btn-sm btn-outline-primary'>No</button>", "Share recipe ?");}

   function dontShare(){
    toastr.error("Maybee next time...", "Sorry to hear that !");}

    function doShare(){
      toastr.success("Have a good day.", "Thanks for sharing !");}

// Enable tooltips 

 $(function () {
   $('[data-toggle="tooltip"]').tooltip()
 }
 )

// Enable popovers

 $(function () {
  $('.example-popover').popover({
    container: 'body'
  })
})
 

// get datetime and render greeting
 function greeting()  {
  const hour = new Date().getHours()
if (hour > 22 && hour < 6) { 
    
}
 }





// open full screen search box -Adam
  function checkEnterClick(e){
    if(e.keyCode == 13){
      setTimeout(function(){ document.getElementById("myOverlay").style.display = "block"; }, 200)
    }
 }

// close full screen search box -Adam
function closeSearch() {
  setTimeout(function(){ document.getElementById("myOverlay").style.display = "none"; }, 300)
  
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
