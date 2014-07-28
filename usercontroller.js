var userModel = require('./usermodel.js');

exports.find_user = function(request, reply) {
  reply.view('userpage');
};

exports.default_page = function(request, reply) {
  reply.view('loginPage');
};
