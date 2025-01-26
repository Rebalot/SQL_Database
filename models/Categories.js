const knex = require('../config')
const { queryActiveStatus, queryNumbersArray } = require('../helpers/queryHelper')

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
      const active = queryActiveStatus(queryParams.active)
      queryBuilder.where('active', active)

      if (queryParams.category_id) {
        const categoryIds = queryNumbersArray(queryParams.category_id)
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
