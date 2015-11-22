
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/zeroqdb');
var db = mongoose.connection;
db.once('open',function(callback){
	console.log("Connected to database");
	});

var product_schema = mongoose.Schema({
		"title":String,
		"price":Number,
		"tag_Id":Number
		});
var product_model = mongoose.model('PD',product_schema,'ProductList_2');
/*
var p1 = new product_model({"title":"Apples","price":50,"tag_Id":4758652});
p1.save(function(err,p1){
	});

*/
exports.register = function(server,options,next){
			server.route({
					method:'GET',
					path:'/tag',
					handler: function(request,reply){							


						product_model.findOne({ 'tag_Id':request.query.id  }, 'title', function (err,PD) {
  							if (err) return reply('Not found');
  								reply(PD.title); 
								})
							}
					});

			next();
		};

exports.register.attributes={
			name:'productquery',
			version:'0.0.0'
				};
