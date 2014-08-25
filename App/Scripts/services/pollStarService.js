var app = angular.module('mapperApp');

app.service('pollStarService', function($http){
	this.search = function(genre, artistLocation){
		return $http.get("http://developer.echonest.com/api/v4/artist/search?api_key=LOQIHJKEYHYXJT1EG&format=json&genre="+genre+"&artist_location="+artistLocation+"&results=50").then(function(res){
			console.log(res);
			return res.data.response.artists;
		})
	}
})

