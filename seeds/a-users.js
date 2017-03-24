exports.seed = function(knex, Promise) {
  return knex('users')
    .then(function () {
      return Promise.all([
        knex('users').insert({ firstname: 'ermis', lastname: 'cat', email: 'ermis@user.com', username: 'ermis', password: "encryptedpassword", registerdate: new Date }),
        knex('users').insert({ firstname: 'nate', lastname: 'frose', email: 'nate@user.com', username: 'nate', password: "encryptedpassword", registerdate: new Date }),
        knex('users').insert({ firstname: 'robert', lastname: 'thechamp', email: 'robert@user.com', username: 'robert', password: "encryptedpassword", registerdate: new Date })
      ]);
    });
};