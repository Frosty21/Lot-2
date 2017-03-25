exports.create = (req, res) => {
    req.body.password = Common.encrypt(req.body.password);
    User.saveUser(req.body, (err, user) => {
        if (!err) {
            let tokenData = {
                username: user.username,
                id: user._id
            }
            Common.sentMailVerificationLink(user, Jwt.sign(tokenData, privetKey));
            return res.send(Boom.forbidden("Thanks for registering!"));
        } else {
            if (11000 === err.code || 11001 === err.code ) {
                return res.send(Boom.forbidden("Please provide another user email"));
            } else {
                return res.send(Boom.forbidden(err));
            }
        }
    })
}
