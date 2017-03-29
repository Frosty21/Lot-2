const path = require('path');
const express = require('express');
const db = require('./lib/database.js');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cs = require('cookie-session')

const app = express();

console.log('[*Server*] listening on port 3002');

const server = app.listen(3002, 'localhost');
const io = require('./lib/sockets')(server);

app.use(express.static(path.join(__dirname, 'client_screen/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(cs({
  name: 'session',
  keys: ['84b42bd82c6141cbcf6f52e43cbed4d057f84902c86080563251b0aedd71bc68ea8dc1080656e41f2c6c2531ecc84e594278e93654b4f30ae1d3c8466c842a22'],
  maxAge: 24 * 60 * 60 * 1000
}));

const login = require('./routes/login')(db);
const register = require('./routes/register')(db);
const logout = require('./routes/logout');
const joinroom = require('./routes/joinroom')(cs);

app.use('/login', login);
app.use('/register', register);
app.use('/logout', logout);
app.use('/joinroom', joinroom);
