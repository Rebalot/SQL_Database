const knex = require('../config')
const { queryActiveStatus, queryNumbersArray, queryStringsArray } = require('../helpers/queryHelper')

// CREATE
const create = (bodyBranches) => {
  return knex
    .insert(bodyBranches)
    .into('branches')
    .returning('*') // Para especificar que devuelva columnas especificas ['branch_id', 'name']
}

// READ
const get = (queryParams) => {
  return knex
    .select('*')
    .from('branches')
    .modify((queryBuilder) => {
      const active = queryActiveStatus(queryParams.active)
      queryBuilder.where('active', active)

      if (queryParams.branch_id) {
        const branchIds = queryNumbersArray(queryParams.branch_id)
        queryBuilder.whereIn('branch_id', branchIds)
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
    })
}

// UPDATE
const update = (branchId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate)
    .from('branches')
    .where('branch_id', branchId)
    .returning('*')
}

// DELETE
// soft delete (borrado lógico)
const softDelete = (branchId) => {
  return knex
    .update({ active: false })
    .from('branches')
    .where('branch_id', branchId)
}
// hard delete (borrado físico)
const destroy = (branchId) => {
  return knex
    .delete()
    .from('branches')
    .where('branch_id', branchId)
}

module.exports = {
  create,
  get,
  update,
  softDelete,
  destroy
}
