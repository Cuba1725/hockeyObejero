const apiKey = 'AIzaSyDZmdoYvTRl_dkaDH39x6KGvuxNwXAr82o';

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.4091422, lng: -58.7707166 },
    zoom: 17,
  });

  var pin = new google.maps.Marker({
      position: new google.maps.LatLng( -34.4091422, -58.7707166),
      map: map,
      title: "Obejero Unido"
  });
  
}
