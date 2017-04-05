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
      socket.to(room).emit('users', gameEvents.users);
      socket.leave(room);
    });
  },

  answer: (socket, room) => {
    socket.on('answer', data => {
      gameEvents.checkAnswer(data.username, data.answer);
      console.log(`Server _Answer: ${data.username} answered: ${data.answer}`);
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
  gameQuestion: '',
  gameAnswers: [],
  correctAnswer: '',
  answerIndex: 0,
  answerKey: {a: 0, b: 1, c: 2, d: 3},
  gameQRandomized: {},
  socket: {},
  room: 0,
  users: [],
  usersScores: {},

  setupTrivia: (qa) => {
    gameEvents.gameQuestion = qa[0].question;
    gameEvents.gameAnswers.push(qa[0].correct_answer);
    gameEvents.correctAnswer = qa[0].correct_answer;
    gameEvents.gameAnswers.push(qa[0].wrong_answer_1);
    gameEvents.gameAnswers.push(qa[0].wrong_answer_2);
    gameEvents.gameAnswers.push(qa[0].wrong_answer_3);
  },

  shuffleTrivia: (array) => {
    let j = 0,
        i = 0,
        tmp = null;

    for ( i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      tmp = array[i];
      array[i] = array[j];
      array[j] = tmp;
    }
    gameEvents.gameAnswers = array;
  },

  setIndex: () => {
    gameEvents.answerIndex =  gameEvents.gameAnswers.indexOf(gameEvents.correctAnswer);
  },

  checkAnswer: (username, userAnswer) => {
    if (gameEvents.answerKey[userAnswer] === gameEvents.answerIndex) {
      gameEvents.setPoints(username);
    }
    console.log(`Server _UsersScores: ${gameEvents.usersScores}`);
  },

  setPoints: (username) => {
    gameEvents.usersScores[username] += 125;
  },

  roundTally: () => {
    gameEvents.gameScores.push(gameEvents.roundScores);
    gameEvents.roundScores = {};
    gameEvents.roundAnswer = {};
  },

  roundChange: () => {

    const socket = gameEvents.socket,
          room = gameEvents.room;

    knex('questions').where({id: gameEvents.roundLeft}).then(res => {

      if (gameEvents.roundLeft > 0) {
        gameEvents.setupTrivia(res);
        gameEvents.shuffleTrivia(gameEvents.gameAnswers);
        gameEvents.setIndex();
        console.log(`Question: ${gameEvents.gameQuestion} Possible Answers: ${gameEvents.gameAnswers}`);
        socket.to(room).emit('roundChange', { roundNumber: gameEvents.roundLeft, gameQuestion: gameEvents.gameQuestion, gameAnswers: gameEvents.gameAnswers });
        // gameEvents.roundIntervalTimer();
        gameEvents.roundLeft = gameEvents.roundLeft - 1;
        gameEvents.roundTally();
        setTimeout(gameEvents.roundChange, gameEvents.roundTimer);
      } else {
        gameEvents.gameEnded();
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
    socket.to(room).emit('gameStarted', {gameId: 'x01'});
    gameEvents.roundChange();
  },

  gameEnded: () => {
    gameEvents.socket.to(gameEvents.room).emit('gameEnded', { usersScores: gameEvents.usersScores });
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
