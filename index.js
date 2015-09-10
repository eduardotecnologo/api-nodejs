var Hapi = require('hapi');
var Good = require('good');

// server
var server = new Hapi.Server();
server.connection({ port: 3000 });

// routes require
var products = require('./routes/products');


// routes 

server.route(products);

server.register({
    register: Good,
    options: {
        reporters: [{
            reporter: require('good-console'),
            events: {
                response: '*',
                log: '*'
            }
        }]
    }
}, function (err) {
    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});