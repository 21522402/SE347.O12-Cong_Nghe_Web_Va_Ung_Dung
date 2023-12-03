const express = require('express');
const importProductController = require('../../controller/importProductController/ImportProductController')
const router = express.Router();




router.post('/getProductsByKey',importProductController.getProductsByKey)
router.post('/addImport',importProductController.addImport)
router.get('/', (req, res) => {
    res.send('Welcome to product!')
})

module.exports = router;
