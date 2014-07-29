var knex = require('knex')({
  client: 'pg',
  connection: {
    host	: "127.0.0.1",
    user	: 'christopherwirick',
    database	: 'login_counter'
  }
});

exports.findUser = function(id, password, callback) {
  var logins = knex.select(id, password).from('login_counter');
  if (logins.length == 0) {
    callback(error);
  } else {
    callback(null, logins);
  }
}

exports.addLogin = function(uid, passwrd, callback) {
  var logins = knex.select(uid, passwrd).from('login_counter');
  if (logins.length < 0) {
    callback(error);
  } else {
    knex('login_counter').insert({id: uid, password: passwrd, logins: '0'});
    callback(null, '0');
  }
}


