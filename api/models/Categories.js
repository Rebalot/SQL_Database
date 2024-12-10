const knex = require('../config')

// CREATE
const create = (bodyCategory) => {
  return knex.insert(bodyCategory).into('categories').returning('*') // Para especificar que devuelva columnas especificas ['branch_id', 'name']
}

// READ
const get = (queryParams) => {
  return knex
    .select('*')
    .from('categories')
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
      if (queryParams.category_id) {
        const categoryIds = queryParams.category_id
          .split(',')
          .map((id) => +id)
          .filter((id) => !isNaN(id))

        queryBuilder.whereIn('category_id', categoryIds)
      }
      if (queryParams.name) {
        queryBuilder.where('name', 'like', `%${queryParams.name}%`)
      }
    })
}

// UPDATE
const update = (categoryId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate)
    .from('categories')
    .where('category_id', categoryId)
    .returning('*')
}

// DELETE
// soft delete (borrado lógico)
const softDelete = (categoryId) => {
  return knex
    .update({ active: false })
    .from('categories')
    .where('category_id', categoryId)
}
// hard delete (borrado físico)
const destroy = (categoryId) => {
  return knex.delete().from('categories').where('category_id', categoryId)
}

module.exports = {
  create,
  get,
  update,
  softDelete,
  destroy
}
