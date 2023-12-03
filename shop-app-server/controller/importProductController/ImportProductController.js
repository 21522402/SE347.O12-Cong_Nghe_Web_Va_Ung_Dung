const ImportProduct = require('../../model/importProduct/ImportProduct')
const Product = require('../../model/product/Product')


const getProductsByKey = async (req, res) => {
    try {
        const {key} =  req.body
        const listProducts1 = await Product.find({ productName:key}).exec();
        const listProducts2 = await Product.find({ productCode:key}).exec();
        res.status(200).json({
            message: 'Get all product categories successfully',
            data: listProducts1.concat(listProducts2)
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}



module.exports = {
    getProductsByKey
}