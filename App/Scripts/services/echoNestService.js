var app = angular.module('mapperApp');

function replaceSpaceWithPlus(string) {
	var reAnyWhiteSpaceCharacter = /\s+/g;
	return string.replace(reAnyWhiteSpaceCharacter,"+");
}

app.service('echoNestService', function($http){
	this.search = function(genre, artistLocation){
		var url = "http://developer.echonest.com/api/v4/artist/search?api_key=LOQIHJKEYHYXJT1EG&format=json&artist_end_year_after=present&results=100"
		if (genre) {
			url += "&genre="+replaceSpaceWithPlus(genre);
		}

		if (artistLocation) {
			url += "&artist_location="+replaceSpaceWithPlus(artistLocation)+"&bucket=artist_location";
		}

		return $http.get(url).then(function(res){
			console.log(res);
			return res.data.response.artists;
		})
	}
})

