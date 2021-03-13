
// my google API key, we should put it in a different file and add an entry to the gitignore list.
//    AIzaSyDRdZ75Vgu7kEqFnd1ebuZUw24OxQibLFg

// get your coordinates here: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_geo_coordinates

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.5407872, lng: 7.457996799999999 },
    zoom: 8,
  });
}