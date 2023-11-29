const express = require('express');
const { 
    userRegisterCtrl,
    userLoginCtrl,
    getAllBuyer,
    updateActiveBuyer
} = require('../../controller/userController/UserController');

const userRoutes = express.Router();

userRoutes.post('/register', userRegisterCtrl);

userRoutes.post('/login', userLoginCtrl);

userRoutes.get('/get-all-buyers', getAllBuyer);

userRoutes.post('/update-active-buyer/:id', updateActiveBuyer);



module.exports = userRoutes;