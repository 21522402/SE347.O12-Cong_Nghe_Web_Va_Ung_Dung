const express = require('express');
const { 
    getAllVouchersCtrl,
    addVoucherCtrl,
    updateVoucherCtrl,
    deleteVoucherCtrl
} = require('../../controller/voucherController/VoucherController');

const voucherRoutes = express.Router();

voucherRoutes.get('/', getAllVouchersCtrl);

voucherRoutes.post('/addVoucher',addVoucherCtrl );

voucherRoutes.put('/updateVoucher/:id', updateVoucherCtrl)

voucherRoutes.delete('/deleteVoucher/:id', deleteVoucherCtrl)


module.exports = voucherRoutes;