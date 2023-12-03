const Order = require('../../model/order/Order');
const validationId = require('../../utils/validationId');
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
            }, {new: true})

            return successTemplate(res, { ...req?.body }, "Cập nhật Order thành công!", 200)
        
        } catch (error) {
            return errorTemplate(res, error.message)
        }
    },
}

module.exports = orderController;