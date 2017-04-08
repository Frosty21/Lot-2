# LoT
### Legends of Triva

Want to test your movie trivia skills with other friends, family or coworkers? Then have a try at Legends of Trivia! 

## Overview
A trivia game app with client screen and mobile to play an interactive questionare app within a game room.

Mobile can be played on any device and needs a screen to display the answers.
Screen dsiplays the questions and selctions also showing the results at the end of the game.

## Play Online
1. Visit **legendsoftrivia.com** on your main sceen for mates to see and **http://legendsoftrivia.com/client** from your device (iphone) to answer the quesitons on the screen. (links legendsoftrivia.com may be put offline)
2. Click to resgister then login on the mobile
3. Once verified enter the room# you wish to enter
4. Enter the room# on the main screen and hit enter.
5. Once all users have entered hit start on your mobile devices
6. This supports any amount of players.

## Local play
1. Fork and clone this repo
2. In the terminal within your root dir type **npm install**
3. In current tab install postgres db and create database lot
4. Then in current tab exit out of postrges and type **knex migrate: latest** bo set the tables within postgres db
5. Then type **knex seed: run** to insert data within the db tables of lot
6. In three terminal tabs type **npm start**, **npm run start-mobile** and **npm run start-screen**
7. Have two internet browsers open and type **localhost:3000** and in the other **localhost:3001**
8. Now you have a running game. To add different devices youll need to open your port on your db device in order for them to connect (errors on logging more than one player locally). 

## Future Improvements:
### Mobile
. fix once registered to auto login
. display error of email already used
. have an enter button for game room so andriod phone can be used (no return button like iphones)
. change layout of start button
. add a chat bar for communication to other players
. a add function for users to invite other players
### Screen
. fix count timer so it correctly counts down at the right speed
. show active users entering the room
. show users and current scores for each round
. button at gameEnd to main screen

### Other future addons
. utilizing questionare API setting categories, number of questions, question time/ random time, difficulty
. able to add their own questions and categories
. addition of jepordary game link (like **[potentpotables.io](http://potentpotables.io)** built from **[jservice.io](http://jservice.io/)**)
. addition of card against humanity
. addition of kings cup
. addition of beer pong
. addition of a phaser 2d game (example worms, mario kart, golden eye)

## Developer Documentation

### Tools Used:
* [React](https://facebook.github.io/react/)
* [Socket.io](http://socket.io/)
* [Node](https://nodejs.org/en/)
* [Express](http://expressjs.com/)
* [Postgres](https://www.postgresql.org/)

### Front-End(React, Socket.io)

#### Server
The server is built using Node.js and Express. The Express server is created first and then passed into Socket.io as parameter. When the application is started the listen() function activates both the Express and socket server.

#### Sockets
Rooms in Socket.io don't have to be created, one is created when a socket joins it. The first socket that joins it is the main display(the gameboard). Whenever a code is validated, a client joins that same room on the server side.

### The Developers
* [E da man](https://github.com/opt1x)
* [Nathan Froese](https://github.com/Frosty21)
* [Robert Canas](https://github.com/RobertCanas)
