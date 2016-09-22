console.log('Friends Factory');

app.factory('friendsFactory', function($http){

	function FriendsFactory(){
		var _this = this;
		this.create = function(newfriend,callback){
			$http.post('/friends', newfriend).then(function(returned_data){
				console.log(returned_data.data);
				if(typeof(callback) == 'function'){
					callback(returned_data.data);
				}
			});
		}
		this.update = function(id, oldFriend, callback){
			console.log('friends factory: ', id, oldFriend);
			$http.put(('/friends/'+id), oldFriend)
			.success(function(returned_data, oldFriend){
				// console.log(returned_data.data);
				// var friend = returned_data;
				// console.log('factory update hit', returned_data);
				callback(returned_data);
				// console.log(friend);
			})
			.error(function(){
				console.log('error in factory update')
			});
		};
		this.index = function(callback){
			$http.get('/friends').then(function(returned_data){
				// console.log(returned_data.data);
				var friends = returned_data.data;
				callback(friends);
			});
		};
		this.delete = function(id){
			// console.log('friend factory: ', id)
			$http.delete('/friends/'+id)
			.success(function(){
				console.log('successful delete!');
			})
			.error(function(){
				console.log('error in delete');
			})
		};
		this.show = function(id, callback){
			console.log(id);
			$http.get('/friends/'+id).then(function(returned_data){
				// console.log(returned_data.data);
				var friend = returned_data.data;
				callback(friend);
				// console.log(friend);
			});
		};
	}
	// console.log(new FriendsFactory());
	return new FriendsFactory();
})