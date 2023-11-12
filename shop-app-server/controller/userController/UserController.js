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
            password: req?.body?.password
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
            return successTemplate(res, existedUser, "Login user successfully!", 200)
        } else{
            throw new Error('Password not correct!')
        }

    }catch(error){
        return errorTemplate(res, error.message)
    }
}


module.exports = {
    userLoginCtrl,
    userRegisterCtrl
}