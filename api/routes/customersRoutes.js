const express = require('express')

const router = express.Router()
const customersController = require('../controllers/customersController')

router.post('/customers', customersController.createCustomer)
router.get('/customers', customersController.getCustomers)
router.patch('/customers/:customerId', customersController.updateOneCustomer)
router.delete('/customers/:customerId', customersController.softDeleteOneCustomer)
router.delete('/customers/destroy/:customerId', customersController.destroyOneCustomer)
module.exports = router
