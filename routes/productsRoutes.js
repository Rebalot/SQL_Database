const express = require('express')

const router = express.Router()
const productsController = require('../controllers/productsController')

router.post('/products', productsController.createProduct)
router.get('/products', productsController.getProducts)
router.patch('/products/:productId', productsController.updateOneProduct)
router.delete('/products/:productId', productsController.softDeleteOneProduct)
router.delete('/products/destroy/:productId', productsController.destroyOneProduct)
module.exports = router
