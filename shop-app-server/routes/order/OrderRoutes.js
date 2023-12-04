const express = require('express');
const OrderController = require('../../controller/orderController/OrderController');
const verify = require('../../middlewares/auth/verify');

const orderRoutes = express.Router();

orderRoutes.get('/adminGetAllOrder',OrderController.adminGetAllOrder)





module.exports = orderRoutes;