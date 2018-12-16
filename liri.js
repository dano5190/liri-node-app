require("dotenv").config();
var moment = require('moment');
var axios = require("axios");
var keys = require("./keys");
var Spotify = require("node-spotify-api");
var fs = require("fs");


var spot = new Spotify(keys.spotify);

var om = keys.omdb;

var b = keys.bit;

var command = process.argv[2];

var info = (process.argv.slice(3).join(" ")).toString();


var song = function () {
    if (!info) {

        spot
            .request('https://api.spotify.com/v1/tracks/0hrBpAOgrt8RXigk83LLNE')
            .then(function (response) {

                console.log("Artist Name: " + response.album.artists[0].name +
                    "\nSong Name: " + response.name +
                    "\n30 Second Preview: " + response.album.artists[0].external_urls.spotify +
                    "\nAlbum Name: " + response.album.name);
            })
            .catch(function (err) {
                console.error('Error occurred: ' + err);
            });
    } else {
        spot
            .search({ type: 'track', query: info })
            .then(function (response) {

                console.log("Artist Name: " + response.tracks.items[0].artists[0].name +
                    "\nSong Name: " + response.tracks.items[0].name +
                    "\n30 Second Preview: " + response.tracks.items[0].artists[0].external_urls.spotify +
                    "\nAlbum Name: " + response.tracks.items[0].album.name);
            })
            .catch(function (err) {
                console.log(err);
            });
    }
};


var movie = function () {
    if (!info) {
        info = "Mr. Nobody";
    }

    axios.get("http://www.omdbapi.com/?t=" + info + "&y=&plot=short&apikey=" + om.api).then(
        function (response) {

            console.log("Movie Title: " + response.data.Title + "\nYear of Release: " + response.data.Year + "\nIMDB rating: " + response.data.imdbRating + "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\nCountry of Production: " + response.data.Country + "\nLanguage of Movie: " + response.data.Language + "\nPlot: " + response.data.Plot + "\nActors: " + response.data.Actors);
        }
    );
};



var concert = function () {
    axios.get("https://rest.bandsintown.com/artists/" + info + "/events?app_id=" + b.api + "&date=upcoming").then(
        function (response) {
            
            for (var i = 0; i < response.data.length; i++) {
                console.log("Venue Name: " + response.data[i].venue.name + "\nVenue Location: " + response.data[i].venue.city + " " + response.data[i].venue.region + " " + response.data[i].venue.country + "\nDate of Event: " + moment(response.data[i].datetime).format("MM/DD/YYYY") +"\n");
            }

        }
    );
};

if (command === "spotify-this-song") {
    song();

}

if (command === "movie-this") {
    movie();
}

if (command === "concert-this") {
    concert();
}


if (command === "do-what-it-says") {
    fs.readFile("random.txt", function (err, data) {
        if (err) {
           return console.error(err);
        }
        
        var items = data.toString().split(",");
        var temp = (items.slice(1).join(" ")).toString();
        var subject = temp.split('"');
        info = subject[1];
        if(items[0] === "spotify-this-song"){
            
            song();
        }
        if(items[0] === "movie-this"){
            movie();
        }
        if(items[0] === "concert-this"){
            concert();
        }
        
     });
}