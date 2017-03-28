const login  = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// TODO: change to ENV
const jwtSecret = 'f5baaf169e93e37212cfce26de6b983df2342e9a736a16f92a3390844c721af5d08b106bca60c9c803209e2bf85046b90237cb4da981a02272cc86f3d42ab6aa';

module.exports = (db) => {

  login.post('/', (req, res) => {
    console.log('being login', req.body);
    if ( req.session ) {
        res.redirect(301, '/');
        return;
    }

    // TODO: if req.body.screen || req.body.email don't exist, do something?
    if ( req.body.screen ) {
      console.log('Screen login start: ', req.body);
      // This is a screen, supply token with room ID
      // TODO: Ensure the ROOM ID does not exist yet
      const screenProfile = {
        room: req.body.screen,
        type: 'screen',
      }
      const token = jwt.sign(screenProfile, jwtSecret, { expiresIn: 60*12 });
      res.json({ token: token });
      return;
    } else if ( req.body.email ) {
      let userEmail = req.body.email;
      let userPass = req.body.password;
      console.log(userEmail);
      console.log(userPass);
      db.locateUserByEmail( userEmail, (ret) => {
        console.log(ret[0]);
        if ( ret[0].username ) {

          const userProfile = {
            username: ret.username,
            type: 'user',
          };

          bcrypt.compare(userPass, ret[0].password).then( (rest) => {
            console.log('user authenticated', rest);
            // rest == true user is authenticated
            const token = jwt.sign(userProfile, jwtSecret, { expiresIn: 60*12 });
            res.json({ token: token });
            return;
          }).catch( (err) => {
            console.log(err);
          });
        }
      });
    }
  });
  return login;
}