const knex = require('../config')

// CREATE
const create = (bodyStock) => {
  return knex.insert(bodyStock).into('stock').returning('*') // Para especificar que devuelva columnas especificas ['branch_id', 'name']
}

// READ
const get = (queryParams) => {
  return knex
    .select('*')
    .from('stock')
    .modify((queryBuilder) => {
      let active
      if (queryParams.active === 'true' || queryParams.active === undefined) {
        active = true
      } else if (queryParams.active === 'false') {
        active = false
      } else {
        active = null
      }
      if (active === true) {
        queryBuilder.where('active', true)
      } else if (active === false) {
        queryBuilder.where('active', false)
      } else {
        queryBuilder.where('active', active)
      }
      if (queryParams.stock_id) {
        const stockIds = queryParams.stock_id
          .split(',')
          .map((id) => +id)
          .filter((id) => !isNaN(id))
        queryBuilder.whereIn('stock_id', stockIds)
      }
      if (queryParams.branch_id) {
        const branchIds = queryParams.branch_id
          .split(',')
          .map((id) => +id)
          .filter((id) => !isNaN(id))

        queryBuilder.whereIn('fk_branch_id', branchIds)
      }
      if (queryParams.product_id) {
        const productIds = queryParams.product_id
          .split(',')
          .map((id) => +id)
          .filter((id) => !isNaN(id))

        queryBuilder.whereIn('fk_product_id', productIds)
      }
      if (queryParams.quantity) {
        const quantity = +queryParams.quantity
        if (!isNaN(quantity)) {
          queryBuilder.where('quantity', '=', quantity)
        }
      }
      if (queryParams.quantity_min) {
        const quantityMin = +queryParams.quantity_min
        if (!isNaN(quantityMin)) {
          queryBuilder.where('quantity', '>=', quantityMin)
        }
      }
      if (queryParams.quantity_max) {
        const quantityMax = +queryParams.quantity_max
        if (!isNaN(quantityMax)) {
          queryBuilder.where('quantity', '<=', quantityMax)
        }
      }
      if (queryParams.upd_date) {
        queryBuilder.whereRaw('DATE(updated_at) = ?', [queryParams.upd_date])
      }
      if (queryParams.start_upd_date) {
        queryBuilder.where('updated_at', '>=', queryParams.start_upd_date)
      }
      if (queryParams.end_upd_date) {
        queryBuilder.where('updated_at', '<=', queryParams.end_upd_date)
      }
    })
}

// UPDATE
const update = (stockId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate)
    .from('stock')
    .where('stock_id', stockId)
    .returning('*')
}

// DELETE
// soft delete (borrado lógico)
const softDelete = (stockId) => {
  return knex
    .update({ active: false })
    .from('stock')
    .where('stock_id', stockId)
}
// hard delete (borrado físico)
const destroy = (stockId) => {
  return knex.delete().from('stock').where('stock_id', stockId)
}

module.exports = {
  create,
  get,
  update,
  softDelete,
  destroy
}
