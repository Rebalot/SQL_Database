const ModelSuppliers = require('../models/Suppliers')

// CREATE / POST
const createSupplier = (req, res) => {
  ModelSuppliers
    .create(req.body)
    .then(supplier => {
      res.status(201).json(supplier)
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}

// READ / GET

const getSuppliers = (req, res) => {
  ModelSuppliers
    .get(req.query)
    .then(suppliers => {
      res.status(200).json(suppliers)
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}
// UPDATE / PATCH
const updateOneSupplier = (req, res) => {
  ModelSuppliers
    .update(req.params.supplierId, req.body)
    .then(supplier => {
      res.status(200).json(supplier)
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}

// DELETE
const softDeleteOneSupplier = (req, res) => {
  ModelSuppliers
    .softDelete(req.params.supplierId)
    .then(() => {
      res.status(204).json()
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}
const destroyOneSupplier = (req, res) => {
  ModelSuppliers
    .destroy(req.params.supplierId)
    .then(() => {
      res.status(204).json()
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}
module.exports = {
  createSupplier,
  getSuppliers,
  updateOneSupplier,
  softDeleteOneSupplier,
  destroyOneSupplier
}
