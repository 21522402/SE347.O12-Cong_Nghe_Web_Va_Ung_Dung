// const Product = require('../../model/product/Product');

// const productController = {
//   searchProducts: async (req, res) => {
//     const { query } = req.query;

//     try {
//       const results = await Product.find({
//         $or: [
//           { name: { $regex: query, $options: 'i' } },
//           { description: { $regex: query, $options: 'i' } },
//         ],
//       });

//       res.json(results);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Internal Server Error');
//     }
//   },
// };

// module.exports = productController;
// controllers/productController.js

const Product = require('../../model/product')

const productController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  getProductById: async (req, res) => {
    const productId = req.params.id;

    try {
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  // Other controller methods...
};

module.exports = productController;
