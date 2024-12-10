const express = require('express')

const router = express.Router()
const salesController = require('../controllers/salesController')

router.post('/sales', salesController.createSale)
router.get('/sales', salesController.getSales)
router.patch('/sales/:saleId', salesController.updateOneSale)
router.delete('/sales/:saleId', salesController.softDeleteOneSale)
router.delete('/sales/destroy/:saleId', salesController.destroyOneSale)
module.exports = router
