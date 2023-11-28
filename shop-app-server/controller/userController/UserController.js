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
const addAddressCtrl = async (req, res) => {
    try {
        const updAddressId = req?.params?.id;
        // if (existedVoucher && existedVoucher.expiredDate > currentDate) throw new Error('Voucher code is existed and launched. Please try again!');
        // const localPath = `public/images/vouchers/${req.file.filename}`;
        // const imgUpload = await cloudinaryUploadImage(localPath)
        const updateAddress = await User.findByIdAndUpdate(updAddressId, {
            ...req?.body
        })
        return successTemplate(res, updateAddress, "Update voucher successfully!", 200)
    } catch (error) {
        return errorTemplate(res, error.message)
    }
}

const getAllUser = async(req, res) => {
    try{
        const user = await User.find();
        return res.status(200).json(user)
    }
    catch(err){
        return res.status(500).json(err)
    }
}

const deleteUser = async(req, res) => {
    try{
        const user = await User.findById(req.params.id);

        if(!user){
            return res.status(404).json("Don't have user in database")
        }

        return res.status(200).json("Delete successfully!")
    }
    catch(err){
        return res.status(500).json(err)
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
        const buyers = await User.find({ role: 'Buyer' });
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

module.exports = {
    userLoginCtrl,
    userRegisterCtrl,
    getAllBuyer,
    updateActiveBuyer,
    getAllUser,
    addAddressCtrl,
    deleteUser
}