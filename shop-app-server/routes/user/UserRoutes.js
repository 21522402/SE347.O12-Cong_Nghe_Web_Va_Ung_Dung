const express = require('express');
const { 
    getAllUser,
    addAddressCtrl,
    deleteUser,
    getAllBuyer,
    updateActiveBuyer,
    updateUserInfo,
    getUserInfo,
    updateAddressCtrl,
    getAllAddresssCtrl,
    deleteAddressCtrl,
    getAllOrderCtrl,
    createOrderCtrl,
    cancelOrderCtrl,
    getAllReviewCtrl,
    createReviewCtrl,
    getForuProductCtrl,
    increaseQuantityCartItem,
    decreaseQuantityCartItem,
    createCartItem,
    deleteCartItem,
    getAllCartItem,
    getDefaultAddress,
    checkVoucherDiscountCode
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

userRoutes.get('/getAllOrders/:id', getAllOrderCtrl);

userRoutes.post('/createOrder/:id', createOrderCtrl);

userRoutes.put('/cancelOrder/:orderId', cancelOrderCtrl);

//review

userRoutes.get('/reviews/:id', getAllReviewCtrl);

userRoutes.post('/reviews/createReview/:id/:orderItemId', createReviewCtrl);

//cart

userRoutes.get('/cart/getForUProduct', getForuProductCtrl);

userRoutes.put('/cart/increateCartItem/:id/:cartItemId', increaseQuantityCartItem);

userRoutes.put('/cart/deceaseCartItem/:id/:cartItemId', decreaseQuantityCartItem);

userRoutes.post('/cart/createCartItem/:id', createCartItem);

userRoutes.put('/cart/deleteCartItem/:id/:cartItemId', deleteCartItem);

userRoutes.get('/cart/:id', getAllCartItem);

userRoutes.get('/cart/defaultAddress/:id', getDefaultAddress);

userRoutes.get('/cart/checkVoucherDiscountCode', checkVoucherDiscountCode)

module.exports = userRoutes;