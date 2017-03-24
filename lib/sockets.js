const fnio = require('./iofun');

module.exports = (server) => {
  const io = require('socket.io')(server);
  const ioarray = [];
  io.on('connection', (socket) => {
    console.log('a user connected');

    // Incoming data from a client
    socket.on('new room', (data) => {
        socket.join(data.room);
        // check client type
      //fnio.clientTypeCheck(data);
    });

      socket.on('dynamic room number', (data) => {

      })

      socket.on('leave room', (data) => {
        socket.leave(data.room);
      });

    socket.on('disconnect', () => {
      console.log('a user disconnected');
    });
  });
  return io;
};
