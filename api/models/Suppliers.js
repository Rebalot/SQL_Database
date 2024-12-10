const knex = require('../config')

// CREATE
const create = (bodySupplier) => {
  return knex.insert(bodySupplier).into('suppliers').returning('*') // Para especificar que devuelva columnas especificas ['branch_id', 'name']
}

// READ
const get = (queryParams) => {
  return knex
    .select('*')
    .from('suppliers')
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
      if (queryParams.supplier_id) {
        const supplierIds = queryParams.supplier_id
          .split(',')
          .map((id) => +id)
          .filter((id) => !isNaN(id))

        queryBuilder.whereIn('supplier_id', supplierIds)
      }
      if (queryParams.name) {
        queryBuilder.where('name', 'like', `%${queryParams.name}%`)
      }
      if (queryParams.city) {
        const cities = queryParams.city
          .split(',')

        queryBuilder.whereIn('city', cities)
      }
      if (queryParams.state) {
        const states = queryParams.state
          .split(',')

        queryBuilder.whereIn('state', states)
      }
      if (queryParams.country) {
        const countries = queryParams.country
          .split(',')

        queryBuilder.whereIn('country', countries)
      }
      if (queryParams.cre_date) {
        queryBuilder.whereRaw('DATE(created_at) = ?', [queryParams.cre_date])
      }
      if (queryParams.start_cre_date) {
        queryBuilder.where('created_at', '>=', queryParams.start_cre_date)
      }
      if (queryParams.end_cre_date) {
        queryBuilder.where('created_at', '<=', queryParams.end_cre_date)
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
const update = (supplierId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate)
    .from('suppliers')
    .where('supplier_id', supplierId)
    .returning('*')
}

// DELETE
// soft delete (borrado lógico)
const softDelete = (supplierId) => {
  return knex
    .update({ active: false })
    .from('suppliers')
    .where('supplier_id', supplierId)
}
// hard delete (borrado físico)
const destroy = (supplierId) => {
  return knex.delete().from('suppliers').where('supplier_id', supplierId)
}

module.exports = {
  create,
  get,
  update,
  softDelete,
  destroy
}
