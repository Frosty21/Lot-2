const settings = require('./knexsettings.json');
const knex = require('knex')(settings);

module.exports = db = {
  locateUserByUsername: (user, done) => {
    knex.select('id').from('users').where({
      username: user
    }).then(done);
  },
  locateUserById: (id, done) => {
    knex.select().from('users').where({
      id: id
    }).then(done);
  },
  locateUserByEmail: (email, done) => {
    knex.select().from('users').where({
      email: email
    }).then(done);
  },
  createNewUser: (userPack, done) => {
    knex.insert({
      'email': userPack.email,
      'first_name': userPack.first_name,
      'last_name': userPack.last_name,
      'username': userPack.username,
      'password': userPack.hash,
      'register_date': userPack.date
    }).into('users').then(done);
  },
  questionInfo: (done) => {
    knex.select('question', 'correct_answer', 'wrong_answer1', 'wrong_answer2', 'wrong_answer3').from('question').innerJoin('games_quesitons','games_quesitons.question_id','question.id').innerJoin('games','games_question.game_id','game.id').then(done);
  }
}

// // knex raw query for questionInfo
// knex.raw('SELECT "question", "correct_answer", "wrong_answer_1", "wrong_answer_2", "wrong_answer_3" FROM "questions" LEFT JOIN "games_questions" ON "games_questions"."question_id" = "questions"."id" LEFT JOIN "games" ON "games_questions"."game_id" = "games"."id"').then(done);