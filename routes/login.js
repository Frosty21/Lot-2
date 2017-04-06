const login  = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// TODO: change to ENV
const jwtSecret = 'f5baaf169e93e37212cfce26de6b983df2342e9a736a16f92a3390844c721af5d08b106bca60c9c803209e2bf85046b90237cb4da981a02272cc86f3d42ab6aa';

module.exports = (db) => {

  login.post('/', (req, res) => {
    console.log('/login: ', req.body);
    if (req.body.token) {
      console.log('authenticating token');
      const token = req.body.token;
      jwt.verify(token, jwtSecret, (err, decoded) => {
        if(err){
          res.json({ isLoggedIn: false , username: '' });
        } else {
          res.json({ isLoggedIn: true, username: decoded.username });
        }
      });
    }

    // TODO: if req.body.screen || req.body.email don't exist, do something?
    if ( req.body.type === 'screen' ) {
      console.log('/login: Screen login start: ', req.body);
      // This is a screen, supply token with room ID
      // TODO: Ensure the ROOM ID does not exist yet
      const screenProfile = {
        type: req.body.type,
      }

      const token = jwt.sign(screenProfile, jwtSecret, { expiresIn: 60*12 });
      res.json({ token: token });
      return;

    } else if ( req.body.email ) {

      let userEmail = req.body.email;
      let userPass = req.body.password;
      db.locateUserByEmail( userEmail, (ret) => {
        if ( ret[0].username ) {
          const retUsername = ret[0].username
          const retPassword = ret[0].password

          const userProfile = {
            username: retUsername,
            type: 'user',
          };

          bcrypt.compare(userPass, retPassword).then( (rest) => {
            console.log('user authenticated', rest);
            if (rest === true) {
              const token = jwt.sign(userProfile, jwtSecret, { expiresIn: 60*12 });
              res.json({ token: token, username: retUsername });
              return;
            }
          }).catch( (err) => {
            console.log(err);
          });
        }
      });
    }
  });
  return login;
}
