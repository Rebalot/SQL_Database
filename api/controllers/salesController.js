const ModelSales = require('../models/Sales')

// CREATE / POST
const createSale = (req, res) => {
  ModelSales
    .create(req.body)
    .then(sale => {
      res.status(201).json(sale)
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}

// READ / GET

const getSales = (req, res) => {
  ModelSales
    .get(req.query)
    .then(sales => {
      res.status(200).json(sales)
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}
// UPDATE / PATCH
const updateOneSale = (req, res) => {
  ModelSales
    .update(req.params.saleId, req.body)
    .then(sale => {
      res.status(200).json(sale)
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}

// DELETE
const softDeleteOneSale = (req, res) => {
  ModelSales
    .softDelete(req.params.saleId)
    .then(() => {
      res.status(204).json()
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}
const destroyOneSale = (req, res) => {
  ModelSales
    .destroy(req.params.saleId)
    .then(() => {
      res.status(204).json()
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}
module.exports = {
  createSale,
  getSales,
  updateOneSale,
  softDeleteOneSale,
  destroyOneSale
}
