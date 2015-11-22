var Hapi = require('hapi');
var Glue = require('glue');
var manifest = {
	server:{
		},
	connections: [
			{
				host:'192.168.1.7',
				port:'8080',
				labels:['api']
			}

			],
	plugins: [
			{
				'./plugins/cookie_auth': [
						{
							select:['api'],
							options:{
								}
						}
					]
			},
			{
				'./routes/product_query': [
						{
							select:['api'],
							options:{
								}
						}
					]
					

			}
			
		]
		};
var options = {
		relativeTo: __dirname
		};

Glue.compose(manifest,options,function(err,server){
		if(err) {
				throw err;
			}
		server.start(function(){
			console.log('Hapi Days');
				});
	});
