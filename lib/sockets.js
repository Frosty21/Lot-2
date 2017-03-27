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
    
    // Screen Client
    if ( socket.decoded_token.type === 'screen' ) {

      console.log('Screen Connected: ', socket.decoded_token);

      const roomId = socket.decoded_token.room;      
      
      socket.on('join', (data) => {
        socket.join(data.room);
        console.log('Client joined room: ', data.room);
      });

      // This is our screen logic
      socket.emit(roomId, 'This is a bcast to this Game Screen');

      socket.on(roomId, (data) => {
        console.log('Data coming back to room: ', roomId);
      });

      socket.on('leave room', (data) => {
        socket.leave(data.room);
      });
    }

    // User Client....

    // Incoming data from a client


    socket.on('disconnect', () => {
      console.log('a user disconnected');
    });
  });
  return io;
};