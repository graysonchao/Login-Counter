var Hapi = require('hapi');
var UserController = require('./userController.js').UserController;
var userController = new UserController();
var serverOptions = {
  views: {
    engines: { html: require('handlebars') },
    path: __dirname + '/templates'
  }
};

var server = new Hapi.Server('0.0.0.0', 8080, serverOptions);

server.route({
  method: 'GET',
  path: '/',
  handler: userController.defaultPage
});

server.route({
  method: 'POST',
  path: '/users',
  handler: userController.requestLogin
});

server.start(function () {
  console.log('Server runing at port 8080');
});
