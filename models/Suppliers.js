const knex = require('../config')
const { queryActiveStatus, queryNumbersArray, queryStringsArray } = require('../helpers/queryHelper')

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
      const active = queryActiveStatus(queryParams.active)
      queryBuilder.where('active', active)

      if (queryParams.supplier_id) {
        const supplierIds = queryNumbersArray(queryParams.supplier_id)
        queryBuilder.whereIn('supplier_id', supplierIds)
      }
      if (queryParams.name) {
        queryBuilder.where('name', 'like', `%${queryParams.name}%`)
      }
      if (queryParams.city) {
        const cities = queryStringsArray(queryParams.city)
        queryBuilder.whereIn('city', cities)
      }
      if (queryParams.state) {
        const states = queryStringsArray(queryParams.state)
        queryBuilder.whereIn('state', states)
      }
      if (queryParams.country) {
        const countries = queryStringsArray(queryParams.country)
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
