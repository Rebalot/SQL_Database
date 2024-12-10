const express = require('express')

const router = express.Router()
const stockController = require('../controllers/stockController')

router.post('/stock', stockController.createStock)
router.get('/stock', stockController.getStock)
router.patch('/stock/:stockId', stockController.updateOneStock)
router.delete('/stock/:stockId', stockController.softDeleteOneStock)
router.delete('/stock/destroy/:stockId', stockController.destroyOneStock)
module.exports = router
