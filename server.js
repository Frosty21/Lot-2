const path = require('path');
const express = require('express');
const db = require('./lib/functions.js');
const morgan = require('morgan');
const app = express();

const server = app.listen(3001);
const io = require('./lib/sockets')(server);
console.log('Server listening on port 3001');

app.use(express.static(path.join(__dirname, 'client_screen/build')));
app.use(morgan('dev'));

const login = require('./routes/login')(db);
const register = require('./routes/register')(db);

app.use('/api/login', login);
app.use('/api/register', register);



/*
const sendComments = (socket) => {
  fs.readFile('_comments.json', 'utf8', (err, comments) => {
    comments = JSON.parse(comments);
    socket.emit('comments', comments);
  });
};

// API Routes
const tmpRoute = require('./routes/tmproute')(db);
app.use('/tmproute', tmpRoute);
// API ROUTE

// socket.io example code
io.on('connection', (socket) => {
  console.log('New client connected!');

  socket.on('fetchComments', () => {
    sendComments(socket);
  });

  socket.on('newComment', (comment, callback) => {
    fs.readFile('_comments.json', 'utf8', (err, comments) => {
      comments = JSON.parse(comments);
      comments.push(comment);
      fs.writeFile('_comments.json', JSON.stringify(comments, null, 4), (err) => {
        io.emit('comments', comments);
        callback(err);
      });
    });
  });
});
*/
