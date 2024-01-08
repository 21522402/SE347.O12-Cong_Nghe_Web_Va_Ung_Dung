const successTemplate = require('../../templates/succesTemplate');
const errorTemplate = require("../../templates/errorTemplate");
const OrderItem = require('../../model/orderItem/OrderItem');
const Order = require('../../model/order/Order');


const updateOrderItem  = async (id, data) => {
    try {

        const order = await Order.findById(id)

        if(!order){
            throw new Error('Order is not existed. Please log in!');
        }

        const orderItemIds = order.orderItem

        orderItemIds ? orderItemIds.push(data): orderItemIds = []

        await Order.findByIdAndUpdate(id, {orderItem: orderItemIds}, {new: true})
    }
    catch(err){
        throw new Error(err);
    }
}

const createOrderNonUserCtrl = async (req, res) => {
    try {
        console.log("1")
        const {orderItem, ...other} = req?.body
        const order = await Order.create({
            ...other,
            orderDate: new Date()
        })
        console.log("2")


        const promise = (item) => new Promise(async resolve => {
            const orderItem = await OrderItem.create({
                "productId": item.productId,
                "productName": item?.productName,
                "image": item?.image,
                "size": item?.size,
                "color": item?.color,
                "quantity": item?.quantity,
                "price": item?.price,
                "discountPerc": item?.discountPerc
            })
            
            resolve(orderItem.id)
        });
        console.log("3")


        let p = promise(req?.body?.orderItem[0])

        for (let i = 1; i < req?.body?.orderItem.length; i++) {
            p = p.then(async (data) => {
                await updateOrderItem(order.id,data)
                return promise(req?.body?.orderItem[i]);
            })
        }

        p.then(async data => {
            await updateOrderItem(order.id,data)
        })
        console.log("4")

        return successTemplate(res, "Something", "Create order successfully!", 200)

    } catch (error) {
        return errorTemplate(res, error.message)
    }
}

module.exports = {
    createOrderNonUserCtrl,
}