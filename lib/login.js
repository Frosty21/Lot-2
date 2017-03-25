exports.login = (req, res) => {
    User.findUser(req.body.username function(err, user) {
        if (!err) {
            console.log(user);
            if (user === null) {
                return res.send(Boom.forbidden("invalid username or password"));
            }

            if (req.body.password === Common.decrypt(user.password)){
                if(!user.isVerified){
                    return res.send(Boom.forbidden("Your email address is not verified"));
                }
                else {
                    let tokenData = {
                        username: user.username,
                        scope: [user.scope],
                        id: user_id
                    };
                    let result = {
                        username: user.username,
                        scope: user.scope,
                        token: Jwt.sign(tokenData, privateKey)
                    };
                    return res.json(result);

                }
            } else {
                return res.send(Boom.forbidden("Invalid username or password"));
            }
        } else {
            if (11000 === err.code || 11001 === err.code) {
                return res.send(Boom.forbidden("Please provide another user email"));
            } else {
                console.error(err);
                return res.send(Boom.badImplementation(err));
            }
        }
    })
}

