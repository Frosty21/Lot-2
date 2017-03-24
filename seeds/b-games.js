exports.seed = function(knex, Promise) {
  return knex('games').del()
    .then(function() {
      return Promise.all([
        knex('games').insert({ name: 'Trivia-101', timer_length: 10 }),
        knex('games').insert({ name: 'Jeopardy', timer_length: 10 }),
        knex('games').insert({ name: 'Pictionary', timer_length: 10 }),
      ]);
    });
};