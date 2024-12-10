const knex = require('../config')

// CREATE
const create = (bodyCustomer) => {
  return knex.insert(bodyCustomer).into('customers').returning('*') // Para especificar que devuelva columnas especificas ['branch_id', 'name']
}

// READ
const get = (queryParams) => {
  return knex
    .select('*')
    .from('customers')
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
      if (queryParams.customer_id) {
        const customerIds = queryParams.customer_id
          .split(',')
          .map((id) => +id)
          .filter((id) => !isNaN(id))

        queryBuilder.whereIn('customer_id', customerIds)
      }
      if (queryParams.name) {
        queryBuilder.where('name', 'like', `%${queryParams.name}%`)
      }
      if (queryParams.last_name1) {
        queryBuilder.where('last_name_1', 'like', `%${queryParams.last_name1}%`)
      }
      if (queryParams.last_name2) {
        if (queryParams.last_name2 === 'null') {
          queryBuilder.where('last_name_2', null)
        } else {
          queryBuilder.where('last_name_2', 'like', `%${queryParams.last_name2}%`)
        }
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
      if (queryParams.reg_date) {
        queryBuilder.whereRaw('DATE(registered_at) = ?', [queryParams.reg_date])
      }
      if (queryParams.start_reg_date) {
        queryBuilder.where('registered_at', '>=', queryParams.start_reg_date)
      }
      if (queryParams.end_reg_date) {
        queryBuilder.where('registered_at', '<=', queryParams.end_reg_date)
      }
    })
}

// UPDATE
const update = (customerId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate)
    .from('customers')
    .where('customer_id', customerId)
    .returning('*')
}

// DELETE
// soft delete (borrado lógico)
const softDelete = (customerId) => {
  return knex
    .update({ active: false })
    .from('customers')
    .where('customer_id', customerId)
}
// hard delete (borrado físico)
const destroy = (customerId) => {
  return knex.delete().from('customers').where('customer_id', customerId)
}

module.exports = {
  create,
  get,
  update,
  softDelete,
  destroy
}
