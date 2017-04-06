exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function() {
      // Inserts seed entries
      return Promise.all([
        knex('questions').insert({ question: 'Which Character says “If you’re not first you’re last”', correct_answer: 'Ricky Bobby', wrong_answer_1: 'Cal Norton Jr.', wrong_answer_2: 'Cole Trickle', wrong_answer_3: 'Randall Raines' }),
        knex('questions').insert({ question: 'Who says “I just stole fifty cars in one night! I’m a little tired, little wired, and I think I deserve a little appreciation!”', correct_answer: 'Memphis', wrong_answer_1: 'Donny', wrong_answer_2: 'Tumbler', wrong_answer_3: 'Sphinx' }),
        knex('questions').insert({ question: 'What colour were the slippers in the origin Wizard of Oz', correct_answer: 'Silver', wrong_answer_1: 'Red', wrong_answer_2: 'Gold', wrong_answer_3: 'Blue' }),
        knex('questions').insert({ question: 'What film was the last sequel to win a best picture award?', correct_answer: 'Silence of the lambs', wrong_answer_1: 'Two Towers', wrong_answer_2: 'Batman Forever', wrong_answer_3: 'Young Guns' }),
        knex('questions').insert({ question: 'Bruce Willis played a time travelling criminal in what movie?', correct_answer: 'Twelve Monkies', wrong_answer_1: 'Looper', wrong_answer_2: 'American Psycho', wrong_answer_3: 'Maleficent' }),knex('questions').insert({ question: 'The first move ever given the title “Blockbuster” was which movie?', correct_answer: 'Jaws', wrong_answer_1: 'E.T.', wrong_answer_2: 'Indiana Jones', wrong_answer_3: 'Twister' }),
        knex('questions').insert({ question: 'What actor refused an Oscar?', correct_answer: 'Marlon Brando', wrong_answer_1: 'Charlton Heston', wrong_answer_2: 'Woody Allen', wrong_answer_3: 'Anthony Quinn' }),
        knex('questions').insert({ question: 'What movie earned Tom Hanks his third straight Oscar Nomination in 1996?', correct_answer: 'Apollo 13', wrong_answer_1: 'Forrest Gump', wrong_answer_2: 'BIG', wrong_answer_3: 'Toy Story' }),
        knex('questions').insert({ question: 'Who played the character Edward Scissorhands?', correct_answer: 'Johnny Depp', wrong_answer_1: 'George Clooney', wrong_answer_2: 'Brad Pitt', wrong_answer_3: 'Matt Damon' }),
        knex('questions').insert({ question: 'What was the name of the boy in the Jungle Book?', correct_answer: 'Mowgli', wrong_answer_1: 'Baloo', wrong_answer_2: 'Bagheera', wrong_answer_3: 'Winifred' }),
        knex('questions').insert({ question: 'Which Bond movie did Daniel Craig first star in?', correct_answer: 'Casino Royale', wrong_answer_1: 'Never Say Never Again', wrong_answer_2: 'Quantum of Solace', wrong_answer_3: 'Die Another Day' }),
        knex('questions').insert({ question: 'How many "Rocky" films did Sylvester Stallone star in?', correct_answer: '6', wrong_answer_1: '3', wrong_answer_2: '5', wrong_answer_3: '8' }),
        knex('questions').insert({ question: 'Who played James Bond in "Live and Let Die"?', correct_answer: 'Roger Moore', wrong_answer_1: 'Daniel Craig', wrong_answer_2: 'Pierce Brosnan', wrong_answer_3: 'Timothy Dalton' }),
        knex('questions').insert({ question: 'What is Bill Murray’s occupation in Groundhog Day?', correct_answer: 'Meteorologist', wrong_answer_1: 'Schoolteacher', wrong_answer_2: 'Dentist', wrong_answer_3: 'Dentist' }),
        knex('questions').insert({ question: 'What is Napoleon Dynamite’s favorite sport?', correct_answer: 'Tetherball', wrong_answer_1: 'Bocce Ball', wrong_answer_2: 'Racquetball', wrong_answer_3: 'Volleyball' }),
        knex('questions').insert({ question: 'In “Wedding Crashers,” what does Will Ferrell’s character crash?', correct_answer: 'Funerals', wrong_answer_1: 'Bar Mitzvahs', wrong_answer_2: 'Graduation parties', wrong_answer_3: 'Baby showers' }),
        knex('questions').insert({ question: '“Brothers don’t shake hands. Brothers gotta hug!"', correct_answer: 'Wedding Crashers', wrong_answer_1: 'Dumb & Dumber', wrong_answer_2: 'Tommy Boy', wrong_answer_3: 'Trading Places' }),
        knex('questions').insert({ question: 'Which actor was the star of the movie"The Six Sense"?', correct_answer: 'Bruce Willis', wrong_answer_1: 'Mark Wahlberg', wrong_answer_2: 'Toni Collette', wrong_answer_3: 'Haley Joel Osment' })

      ]);
    });
};