const logout  = require('express').Router();

module.exports = (db) => {

  logout.get('/', (req, res) => {
    console.log('logout');
    req.session = null;
  });
  return logout;
}