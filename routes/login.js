const login  = require('express').Router();

module.exports = (db) => {

  login.get('/', (req, res) => {
    if ( req.session.user ) {
        res.redirect(301, '/');
        return;
    }

    let userEmail = req.body.email;
    let userPass = req.body.password;

    db.locateUserByEmail( email, (res) => {
        // If user exists....
        if ( res.user ) {
          console.log(res);
          bcrypt.compare(userPass, res.hash).then( (res) => {
              // res == true user is authenticated
              req.session.user = res.id
              res.send('Logged In');
              return; 
          });
        }
    });
  });
  return login;
}