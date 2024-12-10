const knex = require('../config')

// CREATE
const create = (bodySale) => {
  return knex.insert(bodySale).into('sales').returning('*') // Para especificar que devuelva columnas especificas ['branch_id', 'name']
}

// READ
const get = (queryParams) => {
  return knex
    .select('*')
    .from('sales')
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
      if (queryParams.sale_id) {
        const saleIds = queryParams.sale_id
          .split(',')
          .map((id) => +id)
          .filter((id) => !isNaN(id))

        queryBuilder.whereIn('sale_id', saleIds)
      }
      if (queryParams.branch_id) {
        const branchIds = queryParams.branch_id
          .split(',')
          .map((id) => +id)
          .filter((id) => !isNaN(id))

        queryBuilder.whereIn('fk_branch_id', branchIds)
      }
      if (queryParams.customer_id) {
        const customerIds = queryParams.customer_id
          .split(',')
          .map((id) => +id)
          .filter((id) => !isNaN(id))

        queryBuilder.whereIn('fk_customer_id', customerIds)
      }
      if (queryParams.sale_date) {
        queryBuilder.whereRaw('DATE(sale_date) = ?', [queryParams.sale_date])
      }
      if (queryParams.start_sale_date) {
        queryBuilder.where('sale_date', '>=', queryParams.start_sale_date)
      }
      if (queryParams.end_sale_date) {
        queryBuilder.where('sale_date', '<=', queryParams.end_sale_date)
      }
      if (queryParams.total) {
        const total = +queryParams.total
        if (!isNaN(total)) {
          queryBuilder.where('total_amount', '=', total)
        }
      }
      if (queryParams.total_min) {
        const totalMin = +queryParams.total_min
        if (!isNaN(totalMin)) {
          queryBuilder.where('total_amount', '>=', totalMin)
        }
      }
      if (queryParams.total_max) {
        const totalMax = +queryParams.total_max
        if (!isNaN(totalMax)) {
          queryBuilder.where('total_amount', '<=', totalMax)
        }
      }
    })
}

// UPDATE
const update = (saleId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate)
    .from('sales')
    .where('sale_id', saleId)
    .returning('*')
}

// DELETE
// soft delete (borrado lógico)
const softDelete = (saleId) => {
  return knex
    .update({ active: false })
    .from('sales')
    .where('sale_id', saleId)
}
// hard delete (borrado físico)
const destroy = (saleId) => {
  return knex.delete().from('sales').where('sale_id', saleId)
}

module.exports = {
  create,
  get,
  update,
  softDelete,
  destroy
}
