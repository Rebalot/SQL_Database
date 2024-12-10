const express = require('express')

const router = express.Router()
const suppliersController = require('../controllers/suppliersController')

router.post('/suppliers', suppliersController.createSupplier)
router.get('/suppliers', suppliersController.getSuppliers)
router.patch('/suppliers/:supplierId', suppliersController.updateOneSupplier)
router.delete('/suppliers/:supplierId', suppliersController.softDeleteOneSupplier)
router.delete('/suppliers/destroy/:supplierId', suppliersController.destroyOneSupplier)
module.exports = router
