var Hapi = require('hapi');
var userController = require('./userController.js');

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
  handler: userController.default_page
});

server.route({
  method: 'POST',
  path: '/users',
  config: {
    handler: userController.find_user,
    payload: {
      maxBytes: 209715200,
      output: 'stream',
      parse: true
    }
  }
});

server.start(function () {
  console.log('Server runing at port 8080');
});
