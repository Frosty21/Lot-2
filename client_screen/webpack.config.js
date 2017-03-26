const config = require('../webpack.config.js');
console.log(config.toString());

module.exports = config('./client_screen');
