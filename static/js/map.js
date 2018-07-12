



$("#search_location").submit( event => {
  event.preventDefault();
  var searchTerm = $("#location_search").val();
  showMap(searchTerm);
});

function showMap(searchTerm="Boston") {
  var map;
  function initMap(response) {
    map = new
    google.maps.Map(document.getElementById('map'), {
      center: {lat: response.coord.lat, lng: response.coord.lon},
      zoom: 8
    });
  }

  // need to call initMap function to show map
  var url = 'http://api.openweathermap.org/data/2.5/weather';
  var data = {
    q: searchTerm,
    APPID: '90ccb8ff3d7861d602b981bddaf5cc36'
  };
  $.get(url, data, initMap);
  };




setTimeout(function(){
  $("#home_link").removeClass("active");
  $("#map_link").addClass("active");
}, 1);
