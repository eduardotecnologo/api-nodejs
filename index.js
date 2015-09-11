// frameworks packages
var Hapi = require('hapi');
var Good = require('good');

// configurations app
var viewsConfig = require('./config/view');
var consoleConfig = require('./config/console');
mongoose = require('./config/database'); 
// server
var server = new Hapi.Server();
server.connection({ port: 3000 });
server.log(['error', 'database', 'read']);

//registers
viewsConfig(server,function(server){
    // routes
    server.route(require('./routes/products'));
    server.route(require('./routes/categories'));
});

consoleConfig(Good, server,function(server){
    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});