const express = require('express');
const { 
    userRegisterCtrl,
    userLoginCtrl,
    logout
} = require('../../controller/userController/UserController');

const userRoutes = express.Router();

userRoutes.post('/register', userRegisterCtrl);

userRoutes.post('/login', userLoginCtrl);

userRoutes.get('/logout', logout);

userRoutes.put('/addresses/addAddress/:id', logout);

module.exports = userRoutes;