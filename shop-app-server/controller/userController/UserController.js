const User = require("../../model/user/User")
const successTemplate = require('../../templates/succesTemplate');
const errorTemplate = require("../../templates/errorTemplate");

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

module.exports = {
    getAllUser,
    addAddressCtrl,
    deleteUser
}