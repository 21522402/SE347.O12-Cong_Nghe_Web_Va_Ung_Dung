const express = require('express');
const { 
    getAllUser,
    addAddressCtrl,
    deleteUser,
    getAllBuyer,
    updateActiveBuyer,
    updateUserInfo,
    getUserInfo,
    saveVoucherBuyer,
    updateAddressCtrl,
    getAllAddresssCtrl,
    deleteAddressCtrl,
    getAllOrderCtrl,
    createOrderCtrl,
    cancelOrderCtrl,
    getAllReviewCtrl,
    createReviewCtrl
} = require('../../controller/userController/UserController');

const verify = require('../../middlewares/auth/verify');

const userRoutes = express.Router();

userRoutes.get('/', verify.verifyToken, getAllUser);

userRoutes.delete('/:id', verify.verifyTokenAndAdmin, deleteUser);

userRoutes.put('/addresses/addAddress/:id', addAddressCtrl);

userRoutes.put('/addresses/updateAddress/:id/:addressId', updateAddressCtrl);

userRoutes.get('/addresses/:id', getAllAddresssCtrl);

userRoutes.delete('/addresses/deleteAddress/:id/:addressId', deleteAddressCtrl);

userRoutes.get('/get-all-buyers', getAllBuyer);

userRoutes.post('/update-active-buyer/:id', updateActiveBuyer);

userRoutes.get('/:id', getUserInfo);

userRoutes.post('/updateUser/:id', updateUserInfo);

userRoutes.post('/save-voucher-buyer', saveVoucherBuyer);
userRoutes.get('/getAllOrders/:id', getAllOrderCtrl);

userRoutes.post('/createOrder/:id', createOrderCtrl);

userRoutes.put('/cancelOrder/:orderId', cancelOrderCtrl);

//review

userRoutes.get('/reviews/:id', getAllReviewCtrl);

userRoutes.post('/reviews/createReview/:id/:orderItemId', createReviewCtrl);



module.exports = userRoutes;