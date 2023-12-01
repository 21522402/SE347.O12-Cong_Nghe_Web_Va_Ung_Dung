const Product = require('../../model/product/Product');

const productController = {
  searchProducts: async (req, res) => {
    const { query } = req.query;

    try {
      const results = await Product.find({
        $or: [
          { name: { $regex: query, $options: 'i' } },
          { description: { $regex: query, $options: 'i' } },
        ],
      });

      res.json(results);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },
};

module.exports = productController;
