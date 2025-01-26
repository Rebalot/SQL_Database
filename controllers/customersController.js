const ModelCustomers = require('../models/Customers')

// CREATE
const createCustomer = (req, res) => {
  ModelCustomers
    .create(req.body)
    .then(customer => {
      res.status(201).json(customer)
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}

// READ

const getCustomers = (req, res) => {
  ModelCustomers
    .get(req.query)
    .then(customers => {
      customers.sort((a, b) => a.customer_id - b.customer_id)
      res.status(200).json(customers)
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}
// UPDATE
const updateOneCustomer = (req, res) => {
  ModelCustomers
    .update(req.params.customerId, req.body)
    .then(customer => {
      res.status(200).json(customer)
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}

// DELETE
const softDeleteOneCustomer = (req, res) => {
  ModelCustomers
    .softDelete(req.params.customerId)
    .then(() => {
      res.status(204).json()
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}
const destroyOneCustomer = (req, res) => {
  ModelCustomers
    .destroy(req.params.customerId)
    .then(() => {
      res.status(204).json()
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
}
module.exports = {
  createCustomer,
  getCustomers,
  updateOneCustomer,
  softDeleteOneCustomer,
  destroyOneCustomer
}
