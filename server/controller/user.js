const { Login } = require('../models');
const { verifyPassword } = require('../helper/bcrypt');
const { createToken } = require('../helper/jwt');

class Controller {
    static login(req, res, next) {
        const { user, password } = req.body
        let foundUser
        Login.findOne({
            where: { user: user }
        })
            .then(login => {
                foundUser = login
                if (login) {
                    return verifyPassword(password, login.password)
                } else {
                    res.status(400).json('Invalid name or password')
                }
            })
            .then(hashResult => {
                if (hashResult) {
                    const access_token = createToken({
                        id: foundUser.id,
                        user: foundUser.user
                    });
                    res.status(200).json({
                        id: foundUser.id,
                        user: foundUser.user,
                        access_token
                    })
                } else {
                    res.status(400).json('Invalid name or password')
                }
            })
            .catch(err => { res.status(400).json('Fail login') })
    }

    static register(req, res, next) {
        let newUser = {
            user: req.body.user,
            password: req.body.password
        }
        Login.findOne({
            where: { user: req.body.user }
        })
            .then(login => {
                if (login) {
                    res.status(400).json('User already exist')
                } else {
                    return Login.create(newUser)
                }
            })
            .then(login => {
                res.status(201).json({
                    id: login.id,
                    user: login.user
                })
            })
            .catch(err => { res.status(400).json('Fail registration') })
    }
}

module.exports = Controller