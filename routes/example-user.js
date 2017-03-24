const loginRoute  = require('express').Router();

module.exports = function(fn) {

  loginRoute.post('/', (req, res) => {
    if(req.session.userID){
      res.redirect(301, '/');
      return;
    }
    let user = req.body.handle.toLowerCase();
    fn.findUser(user, (id) => {
      if(0 < id.length){
        req.session.userID = id;
        res.cookie('loggedin', user);
        res.send('True');
        return;
      } else {
        res.send();
        return;
      }
    });
  });
  return loginRoute;
};

