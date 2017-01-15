// init project
var express = require('express');
var axios = require('axios');
var app = express();

// Please change; everything is based on the city Den Haag right now
var city = 'Den Haag';

/**
  * Example Open Weather API
  * 
  * /api/weather
  * Create a new Weather app at http://openweathermap.org and copy and paste the API key 
  * 
/*/
app.get("/api/weather", function (request, response) {
  
  // Make a request to the Open Weather Map API
  axios.get('http://api.openweathermap.org/data/2.5/weather?&units=metric&q='+ city +',nl&APPID='+ process.env.WEATHER_API_KEY)
    .then(function (weather) {
      response.send(weather.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  
});

/**
  * Example Huizenzoeker API
  * 
  * /api/houses
  * Create a new Huizenzoeker app at http://www.huizenzoeker.nl/api/ and copy and paste the API key 
  * 
/*/
app.get("/api/houses", function (request, response) {
  
  // Make a request to the Huizenzoeker API
  axios.get('http://www.huizenzoeker.nl/api?q='+ city +'&apisleutel='+ process.env.HOUSES_API_KEY)
    .then(function (houses) {
      response.send(houses.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  
});

/**
  * Example RDW API
  * 
  * /api/cars
  * Create a new RDW app at https://opendata.rdw.nl/login / http://www.huizenzoeker.nl/api/ and copy and paste the API key 
  * 
/*/
app.get("/api/cars", function (request, response) {
  
  // Make a request to the RDW API
  axios.get('https://opendata.rdw.nl/resource/m9d7-ebf2.json?app_token='+ process.env.RDW_API_KEY)
    .then(function (rdw) {
      response.send(rdw.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  
});

/**
  * TODO: Soundcloud 
  * https://developers.soundcloud.com/docs/api/guide#authentication
**/

/**
  * TODO: Hackersnews
  * https://hn.algolia.com/api
**/

/**
  * TODO: Twitter
  * https://apps.twitter.com
**/


/**
  * Basic settings and define root view
/*/
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
