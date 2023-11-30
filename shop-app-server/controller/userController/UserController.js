const User = require("../../model/user/User")
const successTemplate = require('../../templates/succesTemplate');
const errorTemplate = require("../../templates/errorTemplate");
const validationId = require("../../utils/validationId");

const userRegisterCtrl = async (req, res) => {
    try {
        const existedUsser = await User.findOne({ phoneNumber: req?.body?.phoneNumber });
        if (existedUsser) throw new Error('User readly existed. Please log in!');
        if (req?.body?.password !== req?.body?.repassword) throw new Error('Retype password have to match with password');

        const user = await User.create({
            fullName: req?.body?.fullName,
            phoneNumber: req?.body?.phoneNumber,
            email: req?.body?.email,
            password: req?.body?.password
        })
        return successTemplate(res, user, "Register user successfully!", 201)
    } catch (error) {
        return errorTemplate(res, error.message)
    }
}

const userLoginCtrl = async (req, res) => {
    try {
        const existedUser = await User.findOne({ phoneNumber: req?.body?.phoneNumber });
        if (!existedUser || existedUser.role !== req?.body?.role) throw new Error('User not existed. Please sign up or check role!');
        if (await existedUser.checkPassword(req?.body?.password)) {
            return successTemplate(res, existedUser, "Login user successfully!", 200)
        } else {
            throw new Error('Password not correct!')
        }

    } catch (error) {
        return errorTemplate(res, error.message)
    }
}
const getAllBuyer = async (req, res) => {
    try {
        const buyers = await User.find({ role: 'Buyer' }).populate('vouchers');
        return successTemplate(res, buyers, "Lấy tất cả khách hàng thành công!", 200)
    } catch (error) {
        return errorTemplate(res, error.message)
    }
}
const updateActiveBuyer = async (req, res) => {
    try {
        const id = req.params.id;
        validationId(id)
        const existedUser = await User.findById(id);
        if (!existedUser) throw new Error('User id không tồn tại. Hãy thử lại!')
        const updUser = await User.findByIdAndUpdate(id, {
            isActive: !existedUser.isActive
        })
        return successTemplate(res, updUser, "Lấy tất cả khách hàng thành công!", 200)

    } catch (error) {
        return errorTemplate(res, error.message)
    }
}
const saveVoucherBuyer = async(req, res)=>{
    try {
        const user = await User.findByIdAndUpdate(req?.body?.id, {
            $push: { vouchers: req?.body?.voucherId}
        }, {new: true})
        return successTemplate(res, user, "Lưu mã voucher thành công!", 200)

    } catch (error) {
        return errorTemplate(res, error.message)
    }
}
module.exports = {
    userLoginCtrl,
    userRegisterCtrl,
    getAllBuyer,
    updateActiveBuyer,
    saveVoucherBuyer
}