console.log('friends controller');
var mongoose = require('mongoose');
var Friend = mongoose.model('Friends');
function FriendsController(){

	this.index = function(req, res){
		// res.json([{placeholder:'index'}]);
		Friend.find({}, function(err, friends){
			if(err){
				res.json('No friends in list');
			} else {
				res.json(friends);
			}
		})

	};
	this.create = function(req, res){
		// console.log(req.body);
		var person = new Friend(req.body);
		// console.log(person);
		person.save(function(err, person){
			if(err){
				res.json("create didn't work");
			} else {
				res.json(person);
			}
		})
		// res.json({placeholder:'create'});
	};
	this.update = function(req, res){
		console.log('server update hit');
		// res.json({placeholder:'update'});
		console.log('req.body: ', req.body)
		console.log(req.params.id);
		var id = req.params.id;
		Friend.findOneAndUpdate({_id: id}, req.body, {upsert:true}, function(err, friend){
			if(err){
				res.json("couldn't find the person");
			} else {
				res.json(friend);
			}
		})
	};
	this.delete = function(req, res){
		// res.json({placeholder:'delete'});
		// console.log('deleted!', req.params.id)
		Friend.remove({_id: req.params.id}, function(err, success){
			if(err){
				console.log("couldn't delete record");
			}
		});
	};
	this.show = function(req, res){
		// res.json({placeholder:'show'});
		console.log(req.params.id);
		var id = req.params.id;
		Friend.findOne({_id: id}, function(err, friend){
			if(err){
				res.json("couldn't find the person");
			} else {
				res.json(friend);
			}
		})
	};
}

module.exports = new FriendsController();