
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('email');
    table.date('register_date');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', (table) => {
    table.increments();
    table.integer('user_id').references('id').inTable('users');
    table.integer('post_id').references('id').inTable('posts');
    table.string('content');
    table.string('url_ref');
    table.date('post_date');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};

exports.up = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.string('handle');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users').dropColumn('handle');
};


exports.up = function(knex, Promise) {
  return knex.raw('ALTER TABLE posts RENAME COLUMN url_ref TO url;');
};

exports.down = function(knex, Promise) {
  return knex.raw('ALTER TABLE posts RENAME COLUMN url TO url_ref;');
};