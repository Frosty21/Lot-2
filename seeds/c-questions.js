exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function() {
      // Inserts seed entries
      return Promise.all([
        knex('questions').insert({ question: 'The worlds best-selling album ever is Michael Jacksons Thriller. What is number two?', correct_answer: 'Back in Black, AC/DC ', wrong_answer_1: 'The Dark Side of the Moon, Pink Floyd', wrong_answer_2: 'Bat out of Hell, Meat Loaf', wrong_answer_3: 'Their Greatest Hits (1971-1975), The Eagles' }),
        knex('questions').insert({ question: 'The 1968 title track of the album "In-A-Gadda-Da-Vida" was a hit for which band?', correct_answer: 'Iron Butterfly', wrong_answer_1: 'Joan Baez', wrong_answer_2: 'Santana', wrong_answer_3: 'Grateful Dead' }),
        knex('questions').insert({ question: 'The Rhythm and Vines music festival is held near which city? ', correct_answer: 'Gisborne', wrong_answer_1: 'Palmerston North', wrong_answer_2: 'Nelson', wrong_answer_3: 'New Plymouth' }),
        knex('questions').insert({ question: 'The tribute band "No Way Sis" had a top 40 single in 1996. Which band do they cover?', correct_answer: 'Oasis', wrong_answer_1: 'Twisted Sister', wrong_answer_2: 'System of a down', wrong_answer_3: 'INXS' }),
        knex('questions').insert({ question: 'Pearl Jams drummer, Matt Cameron, was also drummer for which band?', correct_answer: 'Sound Garden', wrong_answer_1: 'Stone Temple Pilots', wrong_answer_2: 'Red Hot Chilli Peppers', wrong_answer_3: 'Alice in Chains' })
      ]);
    });
};