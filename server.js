const path = require('path');
const express = require('express');
const db = require('./lib/database.js');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();

const whitelist = [ 'http://0.0.0.0:80', 'http://localhost:80' ];

const corsOptions = {
	origin: (origin, callback) => {
	    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
	    callback(null, originIsWhitelisted);
	},
	credentials: true
};

console.log('[*Server*] listening on port 80');

const server = app.listen(80, '0.0.0.0');
const io = require('./lib/sockets')(server);

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'client_screen/build')));
app.use('/client', express.static(path.join(__dirname, 'client_mobile/build')));
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
