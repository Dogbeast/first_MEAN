app.controller('friendsController', function($scope, $routeParams, friendsFactory){

	var show = function(){
		var id = $routeParams.id
		friendsFactory.show(id, function(returnedData){
			$scope.friend = returnedData;
			// console.log($routeParams.id);
		});
	};
	show();

});