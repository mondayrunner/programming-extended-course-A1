// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {

  $.get('/api/weather', function(weather) {
    console.log(weather);
    $('#output').html('Temp: '+ weather.main.temp + '<br>Max temp: ' + weather.main.temp_max +'<br>Min temp: '+ weather.main.temp_min);
    
  });

});
