// puts the nav on the header of the index
$.get('../../components/header.html', function(response) {
  $("#nav").html(response);
});

$("#weather-info").css("display", "none");


$("#search_weather").submit( event => {
  event.preventDefault();
  var searchTerm = $("#city_search").val();
  console.log(searchTerm);

  var url = 'http://api.openweathermap.org/data/2.5/weather';
  var data = {
    q: searchTerm,
    APPID: '90ccb8ff3d7861d602b981bddaf5cc36'
  };

  function showWeather(response) {
    $("#city").text(response.name + ', ' + response.sys.country);
    $("#high").text(response.main.temp_max + 'K');
    $("#low").text(response.main.temp_min + 'K');
    $("#forecast").text(response.weather[0].description);
    $("#humidity").text(response.main.humidity + "%");

    $("#weather-info").css("display", "block");


    // console.log(response);
  }

  $.get(url, data, showWeather);

});
