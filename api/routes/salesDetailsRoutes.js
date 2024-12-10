const express = require('express')

const router = express.Router()
const salesDetailsController = require('../controllers/salesDetailsController')

router.post('/salesDetails', salesDetailsController.createSaleDetail)
router.get('/salesDetails', salesDetailsController.getSalesDetails)
router.patch('/salesDetails/:saleDetailId', salesDetailsController.updateOneSaleDetail)
router.delete('/salesDetails/:saleDetailId', salesDetailsController.softDeleteOneSaleDetail)
router.delete('/salesDetails/destroy/:saleDetailId', salesDetailsController.destroyOneSaleDetail)
module.exports = router
