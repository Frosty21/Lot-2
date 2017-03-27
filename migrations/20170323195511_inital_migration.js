exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', (table) => {
      table.increments();
      table.string('email', 128).notNullable();
      table.string('first_name', 128).notNullable();
      table.string('last_name', 128).notNullable();
      table.string('username', 128).notNullable();
      table.string('password', 512).notNullable();
      table.date('register_date');
    }),
    knex.schema.createTable('games', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.integer('question_id').references('id').inTable('questions');
      table.integer('timer_length').notNullable();
    }),
    knex.schema.createTable('questions', function(table) {
      table.increments();
      table.string('question', 1024).notNullable();
      table.string('correct_answer', 512).notNullable();
      table.string('wrong_answer_1', 512).notNullable();
      table.string('wrong_answer_2', 512).notNullable();
      table.string('wrong_answer_3', 512).notNullable();
    }),
    knex.schema.createTable('games_questions', function(table) {
      table.increments();
      table.integer('question_id').references('id').inTable('questions');
      table.integer('game_id').references('id').inTable('games');
    }),
    knex.schema.createTable('games_played', function(table) {
      table.increments();
      table.integer('start_time').notNullable();
      table.integer('ended_time').notNullable();
      table.integer('game_id').references('id').inTable('games');
      table.integer('played_scores_id').references('id').inTable('played_scores');
      table.integer('played_users_id').references('id').inTable('played_users');
    }),
    knex.schema.createTable('played_users', function(table) {
      table.increments();
      table.integer('user_id').references('id').inTable('users');
      table.integer('games_played_id').references('id').inTable('games_played');
    }),
    knex.schema.createTable('played_scores', function(table) {
      table.increments();
      table.integer('score').notNullable();
      table.integer('user_id').references('id').inTable('users');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('games'),
    knex.schema.dropTable('questions'),
    knex.schema.dropTable('games_questions'),
    knex.schema.dropTable('games_played'),
    knex.schema.dropTable('played_users'),
    knex.schema.dropTable('played_scores')
  ]);
};