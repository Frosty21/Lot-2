const path = require('path');
const express = require('express');
const db = require('./lib/database.js');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');

// const config = require('./config');
const app = express();

console.log('Server listening on port 3001');

const server = app.listen(3001, 'localhost');
const io = require('./lib/sockets')(server);
app.use(express.static(path.join(__dirname, 'client_screen/build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

const login = require('./routes/login')(db);
const register = require('./routes/register')(db);
const logout = require('./routes/logout')(db);

app.use('/login', login);
app.use('/register', register);
app.use('/logout', logout);


app.use(cookieSession({
    name: 'session',
    keys: [ 'cf48aedcc9d24467381ca90ca1a81f690971035a'],
    maxAge: 2466000
}));
