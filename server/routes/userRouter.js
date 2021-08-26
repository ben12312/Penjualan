const Controller = require('../controller/user');
const userRouter = require('express').Router();

userRouter.post('/login', Controller.login);
userRouter.post('/register', Controller.register);

module.exports = userRouter