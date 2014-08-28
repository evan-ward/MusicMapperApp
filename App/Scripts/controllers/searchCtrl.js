var app = angular.module('mapperApp');

app.controller('searchCtrl', function($scope, lastfmService){
	$scope.data = {}; 

	$scope.search = function(){
		lastfmService.search($scope.data.artist, $scope.data.myLocation).then(function(res){
			$scope.results = res;
		})
	}

	// $scope.search = function(){
	// 	pollStarService.search($scope.data.tourdates).then(function(res){
			// $scope.results = res;
		// })
	// }
})