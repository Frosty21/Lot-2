exports.seed = function(knex, Promise) {
  return knex('users')
    .then(function() {
      return Promise.all([
        knex('users').insert({ first_name: 'ermis', last_name: 'cat', email: 'ermis@user.com', username: 'ermis', password: 'encryptedpassword', register_date: new Date }),
        knex('users').insert({ first_name: 'nate', last_name: 'frose', email: 'nate@user.com', username: 'nate', password: 'encryptedpassword', register_date: new Date }),
        knex('users').insert({ first_name: 'robert', last_name: 'thechamp', email: 'robert@user.com', username: 'robert', password: 'encryptedpassword', register_date: new Date }),
        knex('users').insert({ first_name: 'joel', last_name: 'shizzer', email: 'joel@user.com', username: 'joel', password: 'encryptedpassword', register_date: new Date })
      ]);
    });
};