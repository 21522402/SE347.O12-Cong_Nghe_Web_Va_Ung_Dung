const Order = require('../../model/order/Order');
const Product = require('../../model/product/Product');
const OrderItem = require('../../model/orderItem/OrderItem');
const validationId = require('../../utils/validationId');
const successTemplate = require("../../templates/succesTemplate");
const errorTemplate = require("../../templates/errorTemplate");
const orderController = {
    createOrder: async (req, res) => {
        try {
            const currentDate = new Date();

            const order = await Order.create({
                ...req?.body, orderDate: currentDate, status: "Processing"
            })
            return successTemplate(res, order, "Thêm đơn hàng mới thành công!", 200)
        } catch (error) {
            return errorTemplate(res, error.message)
        }
    },

    getAllOrder: async (req, res) => {
        try {
            const orders = await Order.find({});
            return successTemplate(res, orders, "Lấy tất cả orders thành công!", 200)
        } catch (error) {
            return errorTemplate(res, error.message)
        }
    },

    cancelOrder: async (req, res) => {
        try {
            const updOrderId = req?.params?.id;
            validationId(updOrderId)
            const existedOrder = await Order.findById(updOrderId);
            if (!existedOrder) throw new Error('Đơn hàng không tồn tại');
            const updUser = await Order.findByIdAndUpdate(updOrderId, {
                status: "Cancelled",
            }, { new: true })

            return successTemplate(res, { ...req?.body }, "Cập nhật Order thành công!", 200)

        } catch (error) {
            return errorTemplate(res, error.message)
        }
    },



    // admin
    adminGetAllOrder: async (req, res) => {
        try {
            const orders = await Order.find({}).populate([
                {
                    path: 'orderItem',
                    model: 'OrderItem',
                    populate: {
                        path: 'productId',
                        model: 'Product'
                    }
                }
            ]).exec();
            res.status(200).json({
                message: "Lấy tất cả orders thành công!",
                data: orders
            })
        } catch (error) {
            return errorTemplate(res, error.message)
        }
      
        
    },
    adminEditStatus: async (req, res) => {
        try {
            const { id, status } = req.body
            const order = await Order.findById(id).exec();
            order.status = status;
            await order.save();
            if (order.status === 'Đang giao hàng') {
                const orer2 = await Order.findById(id)
                    .populate('orderItem')
                    .exec();
                const orderItemsGroup = await OrderItem.aggregate([
                    {
                        $match: {
                            _id: { $in: orer2.orderItem.map(item => item._id) }
                        }
                    },
                    {
                        $group: {
                            _id: '$productId',
                            orderItems: { $push: '$$ROOT' } // Lưu trữ tất cả các orderItem của mỗi productId
                        }
                    }
                ]).exec()
                for (let i = 0; i < orderItemsGroup.length; i++) {
                    const productId = orderItemsGroup[i]._id
                    const quantity = orderItemsGroup[i].orderItems.reduce((acc, orderItem) => {
                        return acc + orderItem.quantity
                    }, 0)
                    const product = await Product.findById(productId).exec();
                    product.quantitySold = product.quantitySold + quantity
                    await product.save()

                }

            }
            res.status(200).json({
                message: "Thay đổi trạng thái thành công!",
                data: order
            })

        } catch (error) {
            return errorTemplate(res, error.message)
        }
    }
}

module.exports = orderController;