app.controller('newController', function($scope, $http, friendsFactory){

	var index = function(){
		friendsFactory.index(function(returnedData){
			$scope.friends = returnedData;
			// console.log($scope.friends);
		});
	};
	index();
	$scope.create = function(){
		console.log($scope.newFriend);
		var person = $scope.newFriend;
		$http.post('/friends', person).then(function(data){
			console.log('create controller ',data);
		})
		$scope.newFriend = {};
		window.location="#/";
	};

	$scope.delete = function(id){
		// console.log(id);
		friendsFactory.delete(id);
		index();
	}
});