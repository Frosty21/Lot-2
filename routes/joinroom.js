const joinroom  = require('express').Router();
const jwt = require('jsonwebtoken');

const jwtSecret = 'f5baaf169e93e37212cfce26de6b983df2342e9a736a16f92a3390844c721af5d08b106bca60c9c803209e2bf85046b90237cb4da981a02272cc86f3d42ab6aa';

module.exports = joinroom;

  joinroom.post('/', (req, res) => {
    console.log('Enter Join Room', req.body);

    // TODO: if req.body.screen || req.body.email don't exist, do something?

    if ( req.body.room && req.session.type) {

      // const token = jwt.sign(screenProfile, jwtSecret, { expiresIn: 60*12 });
      res.json({ room: req.body.room });
      return;
    }
  });
