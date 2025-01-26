const ModelStock = require('../models/Stock')

// CREATE
const createStock = (req, res) => {
  ModelStock
    .create(req.body)
    .then(stock => {
      res.status(201).json(stock)
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}

// READ

const getStock = (req, res) => {
  ModelStock
    .get(req.query)
    .then(stock => {
      stock.sort((a, b) => a.stock_id - b.stock_id)
      res.status(200).json(stock)
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}
// UPDATE
const updateOneStock = (req, res) => {
  ModelStock
    .update(req.params.stockId, req.body)
    .then(stock => {
      res.status(200).json(stock)
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}

// DELETE
const softDeleteOneStock = (req, res) => {
  ModelStock
    .softDelete(req.params.stockId)
    .then(() => {
      res.status(204).json()
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}
const destroyOneStock = (req, res) => {
  ModelStock
    .destroy(req.params.stockId)
    .then(() => {
      res.status(204).json()
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}
module.exports = {
  createStock,
  getStock,
  updateOneStock,
  softDeleteOneStock,
  destroyOneStock
}
