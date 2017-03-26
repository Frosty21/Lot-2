const iofuncs = require('./iofun');
const jwtio = require('socketio-jwt');
const jwtSecret = 'f5baaf169e93e37212cfce26de6b983df2342e9a736a16f92a3390844c721af5d08b106bca60c9c803209e2bf85046b90237cb4da981a02272cc86f3d42ab6aa';

module.exports = (server) => {
  
  const io = require('socket.io')(server);
  const ioarray = [];

  io.use(jwtio.authorize({
    secret: jwtSecret,
    handshake: true
  }));

  io.on('connection', (socket) => {
    console.log(socket.decoded_token, 'connected');

    // Incoming data from a client
    socket.on('new room', (data) => {
        socket.join(data.room);
        // check client type
      //iofuncs.clientTypeCheck(data);
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
