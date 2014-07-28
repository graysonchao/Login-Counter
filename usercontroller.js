exports.findUser = function(request, reply) {
  
};

exports.default_page = function(request, reply) {
  var context = {
    title: 'Login Page',
    message: 'Please Log in'
  };
  reply.view('loginPage', context);
};

