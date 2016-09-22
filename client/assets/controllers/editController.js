app.controller('editController', function($scope, $routeParams, friendsFactory){

	var show = function(){
		var id = $routeParams.id;
		friendsFactory.show(id, function(returnedData){
			$scope.friend = returnedData;
			console.log($scope.friend)
			// console.log($routeParams.id);
		});
	};
	show();

	$scope.update = function(){
		// console.log('update hit');
		var id = $routeParams.id;
		console.log('oldFriend: ', $scope.childTail().oldFriend);
		// console.log(id);
		var oldFriend = $scope.$$childTail.oldFriend;
		friendsFactory.update(id, oldFriend, function(returnedData){
			console.log('edit controller: ', returnedData);
		});
		window.location="#/";
	}
});