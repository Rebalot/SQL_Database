const knex = require('../config')

// CREATE / POST
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
      if (queryParams.branch_id) {
        const branchIds = queryParams.branch_id
          .split(',')
          .map((id) => +id)
          .filter((id) => !isNaN(id))

        queryBuilder.whereIn('branch_id', branchIds)
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
    })
}

// UPDATE / PATCH
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
