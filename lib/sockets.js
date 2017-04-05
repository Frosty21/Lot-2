const iofuncs = require('./iofun');
const jwtio = require('socketio-jwt');
const jwtSecret = 'f5baaf169e93e37212cfce26de6b983df2342e9a736a16f92a3390844c721af5d08b106bca60c9c803209e2bf85046b90237cb4da981a02272cc86f3d42ab6aa';
const settings = require('./knexsettings.json');
const knex = require('knex')(settings);

const handlers = {
  leave: (socket, room) => {
    socket.on('leave', data => {
      const index = gameEvents.users.indexOf(data.username);
      if (index >= 0){
        gameEvents.users.splice(index, 1);
      }
      console.log(`${data.username} left, users remain: ${gameEvents.users}`);
      socket.leave(room);
    });
  },
  answer: (socket, room) => {
    socket.on('answer', data => {
      // TODO: socket.id or username from localstorage on Client
      // write function to check if answer is correct.
      gameEvents.roundAnswer = data;
      gameEvents.roundAnswer["round"] = gameEvents.roundLeft;
      gameEvents.correctAnswer();
      console.log(gameEvents.roundAnswer);
      console.log('answer', data);

    });
  },
  gameStart: (socket, room) => {
    socket.on('gameStart', data => {
      gameEvents.gameStart(socket, room);
    })
  }
}

const gameEvents = {
  roundLeft: 0,
  roundTimer: 0,
  roundInterval: 0,
  roundAnswer: {},
  roundScores: {},
  gameScores: [],
  gameQuestion: {},
  gameQRandomized: {},
  socket: {},
  room: 0,
  users: [],

  correctAnswer: () => {
    // TODO: Randomize answers as they are sent to Screen.
    if (gameEvents.roundAnswer.answer === 'a' || gameEvents.roundAnswer.answer === 'A')
    return gameEvents.roundScores = gameEvents.roundAnswer;
  },
  roundTally: () => {
    gameEvents.gameScores.push(gameEvents.roundScores);
    gameEvents.roundScores = {};
    gameEvents.roundAnswer = {};
  },
  roundChange: () => {

    const socket = gameEvents.socket;
    const room = gameEvents.room;

    knex('questions').where({id: gameEvents.roundLeft}).then(res => {
      gameEvents.gameQuestion = res[0];
      socket.to(room).emit('roundChange', { roundNumber: gameEvents.roundLeft, gameQuestion: gameEvents.gameQuestion });

      // gameEvents.roundIntervalTimer();
      console.log('RoundChange, gameQuestion: ', gameEvents.gameQuestion);
      console.log('roundAnswer', gameEvents.roundAnswer);
      if (gameEvents.roundLeft >= 0) {
        gameEvents.roundLeft = gameEvents.roundLeft - 1;
        gameEvents.roundTally();
        console.log(gameEvents.roundScores);
        setTimeout(gameEvents.roundChange, gameEvents.roundTimer);
        console.log('after tout');
        console.log('game Scores', gameEvents.gameScores);
      } else {
        gameEvents.gameEnded(socket);
      }
    });
  },
  gameStart: (socket, room) => {
    // TODO: User pressed START BUTTON & Change roundtimer to 10 secs in production.
    gameEvents.roundLeft = 5;
    gameEvents.roundTimer = 5000;
    gameEvents.roundInterval = gameEvents.roundTimer / 1000;
    gameEvents.socket = socket;
    gameEvents.room = room;
    console.log('something')
    // socket.emit(room, 'gameStarted');
    socket.to(room).emit('gameStarted', {gameId: 'x01'});
    gameEvents.roundChange();
  },
  gameEnded: () => {
    gameEvents.socket.to(gameEvents.room).emit('gameEnded', 'TODO: game ending screen, etc')
  },
  roundIntervalTimer: () => {
    const socket = gameEvents.socket;
    const room = gameEvents.room;
    socket.emit('interval-timer', gameEvents.roundInterval)
    gameEvents.roundInterval = gameEvents.roundInterval - 1;
    if(gameEvents.roundInterval > 0){
      setInterval(gameEvents.roundIntervalTimer, gameEvents.roundTimer)
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

        const room = data.room;
        const username = data.username || 'screen';
        if(username !== 'screen'){
          gameEvents.users.push(username);
        }

        socket.join(room);
        console.log(`${username} has joined room: ${room}`);

        socket.to(room).emit('users', gameEvents.users);

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
