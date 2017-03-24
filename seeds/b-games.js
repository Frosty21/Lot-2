exports.seed = function(knex, Promise) {
  return knex('games')
    .then(function () {
      return Promise.all([
        knex('games').insert({ value: "key" }),
        knex('games').insert({ value: "key" })
      ]);
    });
};