exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games_questions').del()
    .then(function() {
      // Inserts seed entries
      return Promise.all([
        knex('games_questions').insert({ question_id: 1, game_id: 1 }),
        knex('games_questions').insert({ question_id: 2, game_id: 1 }),
        knex('games_questions').insert({ question_id: 3, game_id: 1 }),
        knex('games_questions').insert({ question_id: 4, game_id: 1 }),
        knex('games_questions').insert({ question_id: 5, game_id: 1 })
      ]);
    });
};