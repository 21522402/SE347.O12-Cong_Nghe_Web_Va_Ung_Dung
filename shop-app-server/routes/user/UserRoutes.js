const express = require('express');
const { 
    userRegisterCtrl,
    userLoginCtrl,
    getAllBuyer,
    updateActiveBuyer,
    saveVoucherBuyer
} = require('../../controller/userController/UserController');

const userRoutes = express.Router();

userRoutes.post('/register', userRegisterCtrl);

userRoutes.post('/login', userLoginCtrl);

userRoutes.get('/get-all-buyers', getAllBuyer);

userRoutes.post('/update-active-buyer/:id', updateActiveBuyer);

userRoutes.post('/save-voucher-buyer', saveVoucherBuyer);


module.exports = userRoutes;