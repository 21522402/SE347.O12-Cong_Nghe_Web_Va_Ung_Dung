const Product = require('../../model/product/Product')
const cloudinaryCustom = require('../../utils/cloudinaryCustom.js')
const getNewItemCode = (prefix, lastCode, lengthCode) => {
    const lastedNum = Number(lastCode.substring(prefix.length));
    let newNumStr = "" + (lastedNum + 1);
    debugger
    while (newNumStr.length < lengthCode - prefix.length) {
        newNumStr = '0' + newNumStr

    }

    return prefix + newNumStr;

}


const getAllProducts = async (req, res) => {
    try {
        const listProducts = await Product.find({})
            .select('productCode productName productType productCategory importPrice exportPrice discountPerc quantitySold quantity status colors description')
            .exec();
        res.status(200).json({
            message: 'Get all products successfully',
            data: listProducts
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}
const addProduct = async (req, res) => {
    try {
        let productCode = '';
        const isExists = await Product.findOne().exec();
        if (isExists) {
            const lastCode = (await Product.findOne().sort({ created_at: -1 }).exec()).productCode;
            productCode = getNewItemCode('MH', lastCode, 6)
        }
        else productCode = 'MH0001'

        const product = await Product.create({
            ...req.body,
            productCode
        })
        res.status(200).json({
            message: 'Add product successfully',
            data: product
        })
    } catch (error) {
        res.status(400).json({
            message: 'Add product failed',
        })
    }
}
const editProduct = async (req, res) => {
    const { productCode,
        productName,
        productType,
        productCategory,
        importPrice,
        exportPrice,
        description,
        discountPerc,
        colors } = req.body
    try {
        for (let i = 0; i < colors.length; i++) {
            const imageBuffer = [];
            const color = colors[i];
            if (color.changeImage) {
                for (let j = 0; j < color.images.length; j++) {
                    const imgBase64 = color.images[j]
                    const result = await cloudinaryCustom.uploader.upload(imgBase64, {
                        folder: 'public/images/products'
                    })
                    imageBuffer.push(result.secure_url)
                }
                colors[i].images = [...imageBuffer]
            }
            
        }
        const id = req.body._id;
        const product = await Product.findById(id).exec();
        product.productName = productName
        product.productType = productType
        product.productCategory = productCategory
        product.importPrice = importPrice
        product.exportPrice = exportPrice
        product.discountPerc = discountPerc
        product.description = description
        product.colors = [...colors].map((item,index) => {
            if (item.changeImage){
                return {...colors[index]}
            }
            else {
                return {...item,
                    colorCode: colors[index].colorCode,
                    colorName: colors[index].colorName,
                    sizes: colors[index].sizes,
                }
            }
        })

        await product.save();

        res.status(200).json({
            message: 'Update product successfully',

            data: product
        })
    } catch (error) {
        debugger
        res.status(400).json({
            message: 'Update product failed',
        })
    }
}
const editProductByType = async (req, res) => {
    const { id, productTypeName } = req.body
    try {
        const product = await Product.findById(id).exec();
        product.productType = productTypeName;
        await product.save();

        res.status(200).json({
            message: 'Update product by product type successfully',

            data: product
        })
    } catch (error) {
        debugger
        res.status(400).json({
            message: 'Update product by product type failed',
        })
    }
}

module.exports = {
    addProduct,
    getAllProducts,
    editProduct,
    editProductByType
}