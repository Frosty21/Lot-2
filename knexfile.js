module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'lot',
      user: 'lot',
      password: 'LoTProD990909123kj3k4j34kj3'
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
