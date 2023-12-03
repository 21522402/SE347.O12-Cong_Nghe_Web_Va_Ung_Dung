const express = require('express');
const importProductController = require('../../controller/importProductController/ImportProductController')
const router = express.Router();




router.get('/getProductsByKey',importProductController.getProductsByKey)
router.get('/', (req, res) => {
    res.send('Welcome to product!')
})

module.exports = router;
