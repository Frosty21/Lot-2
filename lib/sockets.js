const iofuncs = require('./iofun');
const jwtio = require('socketio-jwt');
const jwtSecret = 'f5baaf169e93e37212cfce26de6b983df2342e9a736a16f92a3390844c721af5d08b106bca60c9c803209e2bf85046b90237cb4da981a02272cc86f3d42ab6aa';

const handlers = {
  message: (socket, room) => {
    socket.on('message', data => {
      console.log('on message', room);
    });
  },
  leave: (socket, room) => {
    socket.on('leave', data => {
      console.log('leaving room', room);
      socket.leave(room);
    });
  }
}

module.exports = (server) => {
  
  const io = require('socket.io')(server);

    io.use(jwtio.authorize({
      secret: jwtSecret,
      handshake: true
    }));

    io.on('connection', (socket) => {
      console.log('socket io entry...');

      socket.on('join', data => {
        const room = data.room;

        socket.join(room);        
        console.log('socket joined room: ', room);
        socket.emit(room, `BROADCAST> user has joined ${room}`);
        
        Object.keys(handlers).forEach(key => {
          handlers[key](socket, room);
        });
      });

    socket.on('disconnect', () => {
      console.log('a user disconnected');
    });
  });
  return io;
};