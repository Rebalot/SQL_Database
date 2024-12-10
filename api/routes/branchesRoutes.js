const express = require('express')

const router = express.Router()
const branchesController = require('../controllers/branchesController')

router.post('/branches', branchesController.createBranch)
router.get('/branches', branchesController.getBranches)
router.patch('/branches/:branchId', branchesController.updateOneBranch)
router.delete('/branches/:branchId', branchesController.softDeleteOneBranch)
router.delete('/branches/destroy/:branchId', branchesController.destroyOneBranch)
module.exports = router
