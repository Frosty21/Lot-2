const iofuncs = require('./iofun');
const jwtio = require('socketio-jwt');
const jwtSecret = 'f5baaf169e93e37212cfce26de6b983df2342e9a736a16f92a3390844c721af5d08b106bca60c9c803209e2bf85046b90237cb4da981a02272cc86f3d42ab6aa';

const handlers = {
  message: (socket, room) => {
    socket.on('message', data => {
      console.log('on message: ', data, room);
    });
  },
  leave: (socket, room) => {
    socket.on('leave', data => {
      console.log('leaving room', room);
      socket.leave(room);
    });
  },
  answer: (socket, room) => {
    socket.on('answer', data => {
      console.log('answer', data);
    });
  },
  gameStart: (socket, room) => {
    socket.on('gameStart', data => {
      gameEvents.gameStart(socket);
    })
  }
}

const gameEvents = {
  roundLeft: 0,
  roundTimer: 0,
  roundInterval: 0,
  roundChange: (socket) => {
    socket.emit('roundChange', { roundNumber: this.roundLeft, gameQuestion: ['How much wood can a woodchuck chuck?', 'A big woody Log', 'No wood Bruh!', 'Hes on Vacation', 'WRONG, Woodchucks use chainsaws!']});
    this.roundIntervalTimer(socket);
    if (!this.roundLeft) {
      this.roundLeft = this.roundLeft - 1;
      setTimeout(this.roundChange, this.roundTimer);
    } else {
      this.gameEnded(socket);
    }
  },
  gameStart: (socket) => {
    // TODO: User pressed START BUTTON
    this.roundLeft = 5;
    this.roundTimer = 10000;
    this.roundInterval = this.roundTimer / 1000;
    socket.emit('gameStarted', {gameId: '555AB-989BB-A68F4-FF1A1A'});
    this.roundChange(socket);
  },
  gameEnded: (socket) => {
    socket.emit('gameEnded', 'TODO: game ending screen, etc')
  },
  roundIntervalTimer: (socket) => {
    socket.emit('interval-timer', this.roundInterval)
    this.roundInterval = this.roundInterval - 1;
    if(this.roundInterval){
      setInterval(this.roundIntervalTimer, this.roundTimer)
    }
  }
}

module.exports = (server) => {

  const io = require('socket.io')(server);

    io.use(jwtio.authorize({
      secret: jwtSecret,
      handshake: true
    }));

    io.on('connection', (socket) => {

      console.log('Client/Screen Connected');

      socket.on( 'join', (data) => {
        let answersList = [];

        console.log( 'data: ', data );
        const room = data.room;
        console.log('room: ', room);

        socket.join(room);
        console.log('socket joined room: ', room);
        socket.emit(room, `BROADCAST> user has joined ${room}`);

        Object.keys(handlers).forEach(key => {
          handlers[key](socket, room);
        });
      });

      socket.on('reconnect_failed', () => {
        console.log('connection failed');
      } );

    socket.on('disconnect', () => {
      console.log('a user disconnected');
    });
  })
  return io;
};
