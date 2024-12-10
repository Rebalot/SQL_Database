const knex = require('../config')

// CREATE
const create = (bodyProduct) => {
  return knex.insert(bodyProduct).into('products').returning('*') // Para especificar que devuelva columnas especificas ['branch_id', 'name']
}

// READ
const get = (queryParams) => {
  return knex
    .select('*')
    .from('products')
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
      if (queryParams.product_id) {
        const productIds = queryParams.product_id
          .split(',')
          .map((id) => +id)
          .filter((id) => !isNaN(id))

        queryBuilder.whereIn('product_id', productIds)
      }
      if (queryParams.name) {
        queryBuilder.where('name', 'like', `%${queryParams.name}%`)
      }
      if (queryParams.description) {
        queryBuilder.where('description', 'like', `%${queryParams.description}%`)
      }
      if (queryParams.price) {
        const price = +queryParams.price
        if (!isNaN(price)) {
          queryBuilder.where('price', '=', price)
        }
      }
      if (queryParams.price_min) {
        const priceMin = +queryParams.price_min
        if (!isNaN(priceMin)) {
          queryBuilder.where('price', '>=', priceMin)
        }
      }
      if (queryParams.price_max) {
        const priceMax = +queryParams.price_max
        if (!isNaN(priceMax)) {
          queryBuilder.where('price', '<=', priceMax)
        }
      }
      if (queryParams.sku) {
        queryBuilder.where('sku', queryParams.sku)
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
      if (queryParams.supplier_id) {
        const productIds = queryParams.supplier_id
          .split(',')
          .map((id) => +id)
          .filter((id) => !isNaN(id))

        queryBuilder.whereIn('fk_supplier_id', productIds)
      }
      if (queryParams.category_id) {
        const productIds = queryParams.category_id
          .split(',')
          .map((id) => +id)
          .filter((id) => !isNaN(id))

        queryBuilder.whereIn('fk_category_id', productIds)
      }
    })
}

// UPDATE
const update = (productId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate)
    .from('products')
    .where('product_id', productId)
    .returning('*')
}

// DELETE
// soft delete (borrado lógico)
const softDelete = (productId) => {
  return knex
    .update({ active: false })
    .from('products')
    .where('product_id', productId)
}
// hard delete (borrado físico)
const destroy = (productId) => {
  return knex.delete().from('products').where('product_id', productId)
}

module.exports = {
  create,
  get,
  update,
  softDelete,
  destroy
}
