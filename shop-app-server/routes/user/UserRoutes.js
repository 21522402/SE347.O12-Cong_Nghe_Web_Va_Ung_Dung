const express = require('express');
const { 
    userRegisterCtrl,
    userLoginCtrl
} = require('../../controller/userController/UserController');

const userRoutes = express.Router();

userRoutes.post('/register', userRegisterCtrl);

userRoutes.post('/login', userLoginCtrl);

module.exports = userRoutes;