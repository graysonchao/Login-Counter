var userModel = require('./usermodel.js');

UserController = function(){};

UserController.prototype.requestLogin = function(request, reply) {
  var user = request.payload['user']
  var password = request.payload['password']
  if (request.payload['new'] == "") {
    userModel.findUser(user, function(error, logins) {
    if (!logins) {
      userModel.addLogin(user, password, function(error, login) {
        if (error) {
          reply("There was a problem adding this login.");
        } else {
          reply('loggedInPage');
        }
      });
    } else {
      reply("This login already exists.");
    }});
    
  } else {
    userModel.findUser(user, function(error, obj) {
      if (error) {
        console.log(error);
        reply('This login does not exist yet. Please register.');
      } else {
        userModel.loginUser(user, password, function(err, logins) {
          if (err) {
            reply("There was an error logging in");
          } else {
            reply(logins);
          }
        });
      }
    });
  }
};

UserController.prototype.defaultPage = function(request, reply) {
  reply.view('loginPage');
};

exports.UserController = UserController;
