var HapiJsonView = require('hapi-json-view');
var Path = require('path');
var Vision = require('vision');

module.exports = function(server, routesCallbackInitializer){
	server.register(Vision, function (err) {

		if (err) {
			throw err;
		}
		server.views({
			engines: {
				js: {
					module: HapiJsonView.create(),
					compileMode: 'async',
					contentType: 'application/json'
				}
			},
			path: Path.join(__dirname, '../templates')
		});

		routesCallbackInitializer(server);
	});
}