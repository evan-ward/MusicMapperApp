var app = angular.module('mapperApp');

app.service('lastfmService', function($http, $q){

	var deferred = $q.defer();

	var searchLocations = function(myLocation) {

		if (myLocation) {
		var myLocationUrl = "http://ws.audioscrobbler.com/2.0/?method=geo.getevents&location="+myLocation+"&api_key=c172959585e074ab3a45cf3496bd24f3&format=json";

			return $http.get(myLocationUrl).then(function(res){
				console.log(res.data.events.event);
				return res.data.events.event;
			})

		}
	}

	var searchSimilarArtists = function(artist) {
		
		if (artist) {
		var simArtistUrl = "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist="+artist+"&api_key=c172959585e074ab3a45cf3496bd24f3&format=json";

			return $http.get(simArtistUrl).then(function(res){
				console.log(res);
				return res.data.similarartists.artist;
			})

		}
	}

	this.search = function(artist, myLocation){
		
		searchLocations(myLocation).then(function(res){
			searchSimilarArtists(artist);
		});



	};
});