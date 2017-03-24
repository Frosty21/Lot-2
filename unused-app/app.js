'use strict';

// Basic express setup:

const PORT          = 8080;
const express       = require('express');
const bodyParser    = require('body-parser');
const app           = express();
const compass       = require('compass');
const cookieSession  = require('cookie-session');

app.use(compass());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(cookieSession({
  name: 'session',
  keys: ["eec666442edbb434c822db6fdfe204d004c3d7b1"],
  maxAge: 246060100
}));

const db = require('./lib/functions.js');

const tmpRoute = require('./routes/tmproute')(db);

app.use('/tmproute', tmpRoute);

app.post("/logout", (req, res) => {
  req.session = null;
  res.clearCookie('loggedin');
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log('Example app listening on port ' + PORT);
});