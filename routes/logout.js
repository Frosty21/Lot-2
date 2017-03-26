const logout  = require('express').Router();

module.exports = () => {

  logout.get('/', (req, res) => {
    console.log('logout');
    // delete token?
  });
  return logout;
}