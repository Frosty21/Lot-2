const settings = require('./knexsettings.json');
const knex = require('knex')(settings);

module.exports = db = {
  locateUserByUsername: (user, done) => {
    knex.select('id').from('users').where({
      username: user
    }).then(done);
  },
  locateUserById: (id, done) => {
    knex.select().from('users').where({
      id: id
    }).then(done);
  },
  locateUserbyEmail: (email, done) => {
    knex.select().from('users').where({
      email: email
    }).then(done);
  },
  createNewUser: (userPack, done) => {
    knex.insert({
      'email': userPack.email,
      'first_name': userPack.first_name,
      'last_name': userPack.last_name,
      'username': userPack.username,
      'password': userPack.hash,
      'register_date': userPack.date
    }).into('users').then(done);
  }
}