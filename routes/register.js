const register = require('express').Router();
const bcrypt = require('bcrypt');

module.exports = (db) => {

  register.post('/', (req, res) => {
    console.log('register');
    // TODO: Check if user is already logged in

    // saltrounds = 10;
    bcrypt.hash(req.body.password, 10).then( (hash) => {
      console.log(req.body);
      let userPack = {
        'email': req.body.email,
        'first_name': req.body.first_name,
        'last_name': req.body.last_name,
        'username': req.body.username,
        'hash': hash,
        'date': new Date
      }
      db.createNewUser(userPack, (ret) => {
        console.log('db return: ',ret);
        res.send('true');
        return;
      });
    });

  });
  return register;
}