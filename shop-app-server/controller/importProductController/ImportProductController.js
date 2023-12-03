const ImportProduct = require('../../model/importProduct/ImportProduct')
const Product = require('../../model/product/Product')

const getProductsByKey = async (req, res) => {
    try {

        const { key } = req.body
        const listProducts = await Product.find(
            {

                $or: [
                    {
                        productName: new RegExp(`.*${key}.*`, "i")
                    },
                    {
                        productCode: new RegExp(`.*${key}.*`, "i")
                    }
                ]
            }


        ).exec();
        debugger
        res.status(200).json({
            message: 'Get all product categories successfully',
            data: listProducts
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const addImport = async (req, res) => {
    try {
        const importProduct = await ImportProduct.create({
            ...req.body,
            date: new Date()
        })
        res.status(200).json({
            message: 'Import goods successfully',
            data: importProduct
        })
    } catch (error) {
        res.status(400).json({
            message: 'Import goods failed'
        })
    }
}
module.exports = {
    getProductsByKey,
    addImport
}