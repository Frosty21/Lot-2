module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'trivia101',
      user: 'development',
      password: 'development'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
