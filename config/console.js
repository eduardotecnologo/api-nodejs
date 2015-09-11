module.exports = function(Good, server,serverInitializerCallback){
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
            serverInitializerCallback(server);
    });
}