const User = require("../../model/user/User")
const successTemplate = require('../../templates/succesTemplate');
const errorTemplate = require("../../templates/errorTemplate");

const userRegisterCtrl = async (req, res) => {
    try {
        const existedUsser = await User.findOne({ phoneNumber: req?.body?.phoneNumber });
        if (existedUsser) throw new Error('User readly existed. Please log in!');
        if (req?.body?.password !== req?.body?.repassword) throw new Error('Retype password have to match with password');

        const user = await User.create({
            fullName: req?.body?.fullName,
            phoneNumber: req?.body?.phoneNumber,
            email: req?.body?.email,
            password: req?.body?.password,
            address: req?.body?.address
        })

        return successTemplate(res, user, "Register user successfully!", 201)
    } catch (error) {
        return errorTemplate(res, error.message)
    }
}

const userLoginCtrl = async (req, res) => {
    try{
        const existedUser = await User.findOne({ phoneNumber: req?.body?.phoneNumber });
        if (!existedUser || existedUser.role !== req?.body?.role) throw new Error('User not existed. Please sign up or check role!');
        if(await existedUser.checkPassword(req?.body?.password)){
            generateToken(existedUser, 200, res)        
        } else{
            throw new Error('Password not correct!')
        }

    }catch(error){
        return errorTemplate(res, error.message)
    }
}

const generateToken = async function(user, statusCode, res){
    const token = await user.generateTokenJWT()

    const options = {
        httpOnly: true,
        expires: new Date(Date.now() + 1*60*60*1000)
    }

    res.status(statusCode)
    .cookie('token', token, options)
    .json({success: true, token: token})
}

const logout = function(req, res, next) {
    res.clearCookie('token')
    res.status(200).json({
        success: true,
        message: 'Logged out'
    })
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


module.exports = {
    userLoginCtrl,
    userRegisterCtrl,
    logout,
    addAddressCtrl
}