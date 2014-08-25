var app = angular.module('mapperApp');

app.controller('searchCtrl', function($scope, echoNestService){
	$scope.data = {}; 

	$scope.search = function(){
		echoNestService.search($scope.data.genre, $scope.data.artistLocation).then(function(res){
			$scope.results = res;
		})
	}

	// $scope.search = function(){
	// 	pollStarService.search($scope.data.tourdates).then(function(res){
			// $scope.results = res;
		// })
	// }
})