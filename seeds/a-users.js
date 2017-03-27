exports.seed = function(knex, Promise) {
  return knex('users')
    .then(function() {
      return Promise.all([
        knex('users').insert({ first_name: 'ermis', last_name: 'cat', email: 'ermis@user.com', username: 'ermis', password: '2a$10$KGcRy1UsDiBWPG02yUOSx.85ZIRjTB5a0YKzPFxF0mv/YQ1eXQZJq', register_date: new Date }),
        knex('users').insert({ first_name: 'nate', last_name: 'frose', email: 'nate@user.com', username: 'nate', password: '2a$10$KGcRy1UsDiBWPG02yUOSx.85ZIRjTB5a0YKzPFxF0mv/YQ1eXQZJq', register_date: new Date }),
        knex('users').insert({ first_name: 'robert', last_name: 'thechamp', email: 'robert@user.com', username: 'robert', password: '2a$10$KGcRy1UsDiBWPG02yUOSx.85ZIRjTB5a0YKzPFxF0mv/YQ1eXQZJq', register_date: new Date }),
        knex('users').insert({ first_name: 'joel', last_name: 'shizzer', email: 'joel@user.com', username: 'joel', password: '2a$10$KGcRy1UsDiBWPG02yUOSx.85ZIRjTB5a0YKzPFxF0mv/YQ1eXQZJq', register_date: new Date })
      ]);
    });
};