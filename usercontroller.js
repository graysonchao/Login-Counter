var userModel = require('./usermodel.js');

exports.find_user = function(request, reply) {
  var pass = request.payload['password'];
  var usr = request.payload['user'];
  userModel.findUser(usr, pass, function(error, obj) {
    if (error) {
      reply('This is a problem');
    } else {
      rely.view('userpage');
    }
  });
};

exports.default_page = function(request, reply) {
  reply.view('loginPage');
};
