const ModelCategories = require('../models/Categories')

// CREATE / POST
const createCategory = (req, res) => {
  ModelCategories
    .create(req.body)
    .then(category => {
      res.status(201).json(category)
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}

// READ / GET

const getCategories = (req, res) => {
  ModelCategories
    .get(req.query)
    .then(categories => {
      res.status(200).json(categories)
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}
// UPDATE / PATCH
const updateOneCategory = (req, res) => {
  ModelCategories
    .update(req.params.categoryId, req.body)
    .then(category => {
      res.status(200).json(category)
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}

// DELETE
const softDeleteOneCategory = (req, res) => {
  ModelSuppliers
    .softDelete(req.params.CategoryId)
    .then(() => {
      res.status(204).json()
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}
const destroyOneCategory = (req, res) => {
  ModelCategories
    .destroy(req.params.categoryId)
    .then(() => {
      res.status(204).json()
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}
module.exports = {
  createCategory,
  getCategories,
  updateOneCategory,
  softDeleteOneCategory,
  destroyOneCategory
}
