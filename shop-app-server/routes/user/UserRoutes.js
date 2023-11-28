const express = require('express');
const { 
    getAllUser,
    addAddressCtrl,
    deleteUser
} = require('../../controller/userController/UserController');
const verify = require('../../middlewares/auth/verify');

const userRoutes = express.Router();

userRoutes.get('/', verify.verifyToken, getAllUser);

userRoutes.delete('/:id', verify.verifyTokenAndAdmin, deleteUser);

userRoutes.put('/addresses/addAddress/:id', addAddressCtrl);

module.exports = userRoutes;