var knex = require('knex')({
  client: 'pg',
  connection: {
    host	: "127.0.0.1",
    user	: 'christopherwirick',
    database	: 'login_counter'
  }
});

exports.loginUser = function(id, password, callback) {
  exports.findUser(id, function (err, user) {
    if (err) {
      return callback(err);
    }
    knex('user_info')
      .where('id', id)
      .andWhere('password', password)
      .increment('logins', 1)
      .then(function(logins) {
        callback(null, logins);
      })
      .catch(function(error) {
        callback(error); 
      });
  })
}

exports.findUser = function(id, callback) {
  knex('user_info').where('id', id)
    .select('logins')
    .then(function (rows) {
      if (rows.length == 0) {
        callback(null, false);
      } else {
        callback(null, true);
      } 
    })
    .catch(function(error) {
      callback(error);
    });
}

exports.addLogin = function(id, password, callback) {
  knex('user_info').insert({id: id, password: password, logins: 1})
    .then(function () {
      callback(null, 1);
    })
    .catch(function(error) {
      callback(error);
    });
}

