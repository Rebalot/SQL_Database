const ModelDetails = require('../models/SalesDetails')

// CREATE
const createSaleDetail = (req, res) => {
  ModelDetails
    .create(req.body)
    .then(saleDetail => {
      res.status(201).json(saleDetail)
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}

// READ

const getSalesDetails = (req, res) => {
  ModelDetails
    .get(req.query)
    .then(salesDetails => {
      res.status(200).json(salesDetails)
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}
// UPDATE
const updateOneSaleDetail = (req, res) => {
  ModelDetails
    .update(req.params.saleDetailId, req.body)
    .then(saleDetail => {
      res.status(200).json(saleDetail)
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}

// DELETE
const softDeleteOneSaleDetail = (req, res) => {
  ModelDetails
    .softDelete(req.params.saleDetailId)
    .then(() => {
      res.status(204).json()
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}
const destroyOneSaleDetail = (req, res) => {
  ModelDetails
    .destroy(req.params.saleDetailId)
    .then(() => {
      res.status(204).json()
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}
module.exports = {
  createSaleDetail,
  getSalesDetails,
  updateOneSaleDetail,
  softDeleteOneSaleDetail,
  destroyOneSaleDetail
}
