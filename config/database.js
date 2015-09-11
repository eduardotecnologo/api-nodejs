var mongoose = require('mongoose')
	.connect('mongodb://localhost/fastorder');
var dbEvents = mongoose.connection;

dbEvents.on('error', function(err){
    console.log('Erro de conexao.', err);
    /*
{ [MongoError: connect ECONNREFUSED] name: 'MongoError', message: 'connect ECONNREFUSED' }
    */
});
dbEvents.on('open', function () {
  console.log('Conexão aberta.')
});
dbEvents.on('connected', function(err){
    console.log('Conectado')
});
dbEvents.on('disconnected', function(err){
    console.log('Desconectado')
});

dbEvents.on('error',function (err) {
  console.log('Erro de padrão de conexão do Mongoose: ' + err);
});

process.on ('SIGINT', function () {
  dbEvents.close (function () {
    console.log ('conexão Mongoose desconectada através de término do node CRTL + C');
    process.exit(0);
  });
});

module.exports = dbEvents;