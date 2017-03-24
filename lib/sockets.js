const fnio = require('./iofun');

module.exports = (server) => {
  const io = require('socket.io')(server);
  const ioarray = [];
  io.on('connection', (socket) => {
    console.log('a user connected');

    // Incoming data from a client
    socket.on('data', (data) => {
      // check client type
      fnio.clientTypeCheck(data);
    });

    socket.on('disconnect', () => {
      console.log('a user disconnected');
    });
  });
  return io;
};