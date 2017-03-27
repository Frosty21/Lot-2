const register = require('express').Router();

module.exports = (db) => {

  register.post('/', (req, res) => {
    console.log('register');
    if ( req.session.user ) {
      res.redirect(200, '/');
      return;
    }
    // saltrounds = 10;
    bcrypt.hash(req.body.password, 10).then( (hash) => {
      let userPack = {
        'email': req.body.email,
        'firstname': req.body.firstname,
        'lastname': req.body.lastname,
        'username': req.body.username,
        'password': hash,
        'date': new Date
      }
      db.createNewUser(userPack, (res) => {
        // user registered, 
        return;
      });
    });

  });
  return register;
}