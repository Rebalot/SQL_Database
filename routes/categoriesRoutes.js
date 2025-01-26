const express = require('express')

const router = express.Router()
const categoriesController = require('../controllers/categoriesController')

router.post('/categories', categoriesController.createCategory)
router.get('/categories', categoriesController.getCategories)
router.patch('/categories/:categoryId', categoriesController.updateOneCategory)
router.delete('/categories/:categoryId', categoriesController.softDeleteOneCategory)
router.delete('/categories/destroy/:categoryId', categoriesController.destroyOneCategory)
module.exports = router
