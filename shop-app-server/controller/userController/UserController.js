const bcrypt = require('bcrypt');
const User = require("../../model/user/User")
const successTemplate = require('../../templates/succesTemplate');
const errorTemplate = require("../../templates/errorTemplate");
const validationId = require("../../utils/validationId");
const OrderItem = require('../../model/orderItem/OrderItem');
const Order = require('../../model/order/Order');
const Review = require('../../model/review/Review');

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

const getAllUser = async(req, res) => {
    try{
        const user = await User.find();
        return res.status(200).json(user)
    }
    catch(err){
        return res.status(500).json(err)
    }
}

const getUserInfo = async(req, res) => {
    try{
        const user = await User.findById(req?.params?.id);

        return res.status(200).json(user)
    }
    catch(err){
        return res.status(500).json(err)
    }
}

const updateUserInfo = async(req, res) => {
    try{
        const id = req?.params?.id;

        validationId(id)

        const existedUser = await User.findById(id);

        if (!existedUser) throw new Error('User id không tồn tại. Hãy thử lại!')

        let updatObj = {...req?.body}

        if(updatObj?.password) {
            const validPassword = bcrypt.compareSync(
                updatObj.password,
                existedUser.password
            )
            if(validPassword){
                const salt = bcrypt.genSaltSync(10);
                const hashed = bcrypt.hashSync(updatObj?.newPassword, salt)
                delete updatObj["newPassword"]
                updatObj = {...updatObj, password: hashed}
            }
            else{
                return res.status(401).json("Mật khẩu không đúng")
            }
        }

        const updUser = await User.findByIdAndUpdate(id, updatObj, {new: true})
        return successTemplate(res, updUser, "Cập nhật thành công!", 200)
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

// manage address

const addAddressCtrl = async (req, res) => {
    try {
        const userId = req?.params?.id;

        validationId(userId)

        const user = await User.findById(userId)

        if(!user){
            throw new Error('User is not existed. Please log in!');
        }
        const addresses = user.address
        addresses.push({...req?.body})
        
        const updateAddress = await User.findByIdAndUpdate(userId, {
            address: addresses
        }, {new: true})
        return successTemplate(res, updateAddress, "Create address successfully!", 200)

    } catch (error) {
        return errorTemplate(res, error.message)
    }
}

const updateAddressCtrl = async (req, res) => {
    try {
        const userId = req?.params?.id;

        validationId(userId)

        const user = await User.findById(userId)

        if(!user){
            throw new Error('User is not existed. Please log in!');
        }
        const addressesNew = user.address.map(ad => ad.id.toString() === req?.params?.addressId ? {...req.body} : {...ad})
        
        const updateAddress = await User.findByIdAndUpdate(userId, {
            address: addressesNew
        }, {new: true})
        return successTemplate(res, updateAddress, "Update address successfully!", 200)


    } catch (error) {
        return errorTemplate(res, error.message)
    }
}

const getAllAddresssCtrl = async (req, res) => {
    try {
        const userId = req?.params?.id;

        validationId(userId)

        const user = await User.findById(userId)

        if(!user){
            throw new Error('User is not existed. Please log in!');
        }

        return successTemplate(res, user.address, "Lấy tất cả địa chỉ thành công!", 200)
    } catch (error) {
        return errorTemplate(res, error.message)
    }
}

const deleteAddressCtrl = async (req, res) => {
    try {
        const userId = req?.params?.id;

        validationId(userId)

        const user = await User.findById(userId)

        if(!user){
            throw new Error('User is not existed. Please log in!');
        }
        const addressesNew = user.address.filter(ad => ad.id.toString() !== req?.params?.addressId)
        
        const updateAddress = await User.findByIdAndUpdate(userId, {
            address: addressesNew
        }, {new: true})

        return successTemplate(res, updateAddress, "Delete address successfully!", 200)
    } catch (error) {
        return errorTemplate(res, error.message)
    }
}

// manage order

const getAllOrderCtrl = async (req, res) => {
    try {
        const userId = req?.params?.id;

        validationId(userId)

        const user = await User.findOne({_id: userId}).populate({
            path: "orders",
            populate: {
                path: "orderItem"
            }
       })

        

        if(!user){
            throw new Error('User is not existed. Please log in!');
        }

        return res.status(200).json(user.orders)
        
        // return successTemplate(res, updateAddress, "Create address successfully!", 200)

    } catch (error) {
        return errorTemplate(res, error.message)
    }
}

const updateOrderItem  = async (id, data) => {
    try {

        const user = await User.findById(id)

        if(!user){
            throw new Error('User is not existed. Please log in!');
        }

        const orderIds = user.orders

        return successTemplate(res, orderIds, "Lấy tất cả địa chỉ thành công!", 200)
    }
    catch(err){
        throw new Error(err);
    }
}

const createOrderCtrl = async (req, res) => {
    try {
        const userId = req?.params?.id;

        validationId(userId)

        const user = await User.findById(userId)

        if(!user){
            throw new Error('User is not existed. Please log in!');
        }
        const {orderItem, ...other} = req?.body
        const order = await Order.create({
            ...other
        })

        const orderIds = user.orders
        orderIds ? orderIds.push(order.id): orderIds = []
        await User.findByIdAndUpdate(userId, {orders: orderIds})

        const promise = (item) => new Promise(async resolve => {
            const orderItem = await OrderItem.create({
                "productName": item.productName,
                "image": item.image,
                "size": item.size,
                "color": item.color,
                "quanlity": item.quantity,
                "price": item.price,
                "discountPerc": item.discountPerc
            })
            
            resolve(orderItem.id)
        });

        let p = promise(req?.body?.orderItem[0])

        for (let i = 1; i < req?.body?.orderItem.length; i++) {
            p = p.then(async (data) => {
                
                await updateOrderItem(order.id,data)
                console.log(["i"], data)
                return promise(req?.body?.orderItem[i]);
            })
        }

        p.then(async data => {
            await await updateOrderItem(order.id,data)
            console.log(["i"], data)
        })

        return successTemplate(res, "listOrderId", "Create address successfully!", 200)

    } catch (error) {
        return errorTemplate(res, error.message)
    }
}

const cancelOrderCtrl = async (req, res) => {
    try {
        const orderId = req?.params?.orderId;

        validationId(orderId)

        const order = await Order.findByIdAndUpdate(orderId, {
            status: "Cancelled"
        }, {new: true})

        return successTemplate(res, order, "Create address successfully!", 200)

    } catch (error) {
        return errorTemplate(res, error.message)
    }
}

//review 
const getAllReviewCtrl = async (req, res) => {
    try {
        const userId = req?.params?.id;

        validationId(userId)

        const user = await User.findOne({_id: userId}).populate({
            path: "orders",
            populate: {
                path: "orderItem",
                populate: {
                    path: "review"
                }
            }
        })

        if(!user){
            throw new Error('User is not existed. Please log in!');
        }

        return successTemplate(res, user, "Create address successfully!", 200)


    } catch (error) {
        return errorTemplate(res, error.message)
    }
}

const createReviewCtrl = async (req, res) => {
    try {
        const userId = req?.params?.id;
        validationId(userId)

        
        const review = await Review.create({
            user: userId,
            star: req?.body?.star,
            orderItem: req?.params?.orderItemId,
            content: req?.body?.content, 
            reviewDate: new Date(), 
            imagesRv: req?.body?.imagesRv, 
            isResponsed: false
        })

        await User.findByIdAndUpdate(userId, {
            $push: {
                reviews: review.id,
            },
        })

        await OrderItem.findByIdAndUpdate(req?.params?.orderItemId, {
            review: review.id
        })

        return successTemplate(res, review, "Create address successfully!", 200)

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
    deleteUser,
    getUserInfo,
    updateUserInfo,
    updateAddressCtrl,
    getAllAddresssCtrl,
    deleteAddressCtrl,
    getAllOrderCtrl,
    createOrderCtrl,
    cancelOrderCtrl,
    getAllReviewCtrl,
    createReviewCtrl
}