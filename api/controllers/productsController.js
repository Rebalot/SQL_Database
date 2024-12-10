const ModelProducts = require('../models/Products')

// CREATE / POST
const createProduct = (req, res) => {
  ModelProducts
    .create(req.body)
    .then(product => {
      res.status(201).json(product)
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}

// READ / GET

const getProducts = (req, res) => {
  ModelProducts
    .get(req.query)
    .then(products => {
      res.status(200).json(products)
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}
// UPDATE / PATCH
const updateOneProduct = (req, res) => {
  ModelProducts
    .update(req.params.productId, req.body)
    .then(product => {
      res.status(200).json(product)
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}

// DELETE
const softDeleteOneProduct = (req, res) => {
  ModelProducts
    .softDelete(req.params.productId)
    .then(() => {
      res.status(204).json()
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}
const destroyOneProduct = (req, res) => {
  ModelProducts
    .destroy(req.params.productId)
    .then(() => {
      res.status(204).json()
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}
module.exports = {
  createProduct,
  getProducts,
  updateOneProduct,
  softDeleteOneProduct,
  destroyOneProduct
}
