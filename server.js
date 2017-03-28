const path = require('path');
const express = require('express');
const db = require('./lib/database.js');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

// const config = require('./config');
const app = express();

console.log('[*Server*] listening on port 3002');

const server = app.listen(3002, 'localhost');
const io = require('./lib/sockets')(server);

app.use(express.static(path.join(__dirname, 'client_screen/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

const login = require('./routes/login')(db);
const register = require('./routes/register')(db);
const logout = require('./routes/logout');
const joinroom = require('./routes/joinroom');

app.use('/login', login);
app.use('/register', register);
app.use('/logout', logout);
app.use('/joinroom', joinroom);
