
const successTemplate = require('../../templates/succesTemplate');
const errorTemplate = require("../../templates/errorTemplate");
const Voucher = require('../../model/voucher/Voucher');
const validationId = require('../../utils/validationId');

const addVoucherCtrl = async (req, res) => {
    try {
        const existedVoucher = await Voucher.findOne({ voucherCode: req?.body?.voucherCode })
        const currentDate = new Date()
        if (existedVoucher && existedVoucher.expiredDate > currentDate) throw new Error('Voucher code is existed and launched. Please try again!')
        const voucher = await Voucher.create({
            ...req?.body
        })
        return successTemplate(res, voucher, "Add new voucher successfully!", 200)
    } catch (error) {
        return errorTemplate(res, error.message)
    }
}
const updateVoucherCtrl = async (req, res) => {
    try {
        const updVoucherId = req?.params?.id;
        validationId(updVoucherId)
        const updateVoucher = await Voucher.findByIdAndUpdate(updVoucherId, {
            ...req?.body
        })
        return successTemplate(res, updateVoucher, "Update voucher successfully!", 200)
    } catch (error) {
        return errorTemplate(res, error.message)
    }
}
const getAllVouchersCtrl = async (req, res) => {
    try {
        const vouchers = await Voucher.find({});
        return successTemplate(res, vouchers, "Get all voucherss successfully!", 200)
    } catch (error) {
        return errorTemplate(res, error.message)
    }
}
const deleteVoucherCtrl = async (req, res) => {
    try {
        const dltVoucherId = req?.params?.id;
        validationId(dltVoucherId)
        const dltVoucher = await Voucher.findByIdAndDelete(dltVoucherId)
        return successTemplate(res, dltVoucher, "Delete voucher successfully!", 200)
    } catch (error) {
        return errorTemplate(res, error.message)
    }
}

module.exports = {
    addVoucherCtrl,
    updateVoucherCtrl,
    getAllVouchersCtrl,
    deleteVoucherCtrl
}