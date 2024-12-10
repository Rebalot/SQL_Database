const ModelBranches = require('../models/Branches')

// CREATE / POST
const createBranch = (req, res) => {
  ModelBranches
    .create(req.body)
    .then(branch => {
      res.status(201).json(branch)
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}

// READ / GET
const getBranches = (req, res) => {
  ModelBranches
    .get(req.query)
    .then(branches => {
      res.status(200).json(branches)
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}

// UPDATE / PATCH
const updateOneBranch = (req, res) => {
  ModelBranches
    .update(req.params.branchId, req.body)
    .then(branch => {
      res.status(200).json(branch)
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}

// DELETE
const softDeleteOneBranch = (req, res) => {
  ModelBranches
    .softDelete(req.params.branchId)
    .then(() => {
      res.status(204).json()
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}
const destroyOneBranch = (req, res) => {
  ModelBranches
    .destroy(req.params.branchId)
    .then(() => {
      res.status(204).json()
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}
module.exports = {
  createBranch,
  getBranches,
  updateOneBranch,
  softDeleteOneBranch,
  destroyOneBranch
}
