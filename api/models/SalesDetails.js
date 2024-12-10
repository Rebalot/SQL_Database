const knex = require('../config')

// CREATE
const create = (bodySaleDetail) => {
  return knex.insert(bodySaleDetail).into('sales_details').returning('*') // Para especificar que devuelva columnas especificas ['branch_id', 'name']
}

// READ
const get = (queryParams) => {
  return knex
    .select('*')
    .from('sales_details')
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
      if (queryParams.sale_detail_id) {
        const saleDetailIds = queryParams.sale_detail_id
          .split(',')
          .map((id) => +id)
          .filter((id) => !isNaN(id))

        queryBuilder.whereIn('sale_detail_id', saleDetailIds)
      }
      if (queryParams.sale_id) {
        const saleIds = queryParams.sale_id
          .split(',')
          .map((id) => +id)
          .filter((id) => !isNaN(id))

        queryBuilder.whereIn('fk_sale_id', saleIds)
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
      if (queryParams.unit_price) {
        const unitPrice = +queryParams.unit_price
        if (!isNaN(unitPrice)) {
          queryBuilder.where('unit_price', '=', unitPrice)
        }
      }
      if (queryParams.unit_price_min) {
        const unitPriceMin = +queryParams.unit_price_min
        if (!isNaN(unitPriceMin)) {
          queryBuilder.where('unit_price', '>=', unitPriceMin)
        }
      }
      if (queryParams.unit_price_max) {
        const unitPriceMax = +queryParams.unit_price_max
        if (!isNaN(unitPriceMax)) {
          queryBuilder.where('unit_price', '<=', unitPriceMax)
        }
      }
      if (queryParams.subtotal) {
        const subtotal = +queryParams.subtotal
        if (!isNaN(subtotal)) {
          queryBuilder.where('subtotal', '=', subtotal)
        }
      }
      if (queryParams.subtotal_min) {
        const subtotalMin = +queryParams.subtotal_min
        if (!isNaN(subtotalMin)) {
          queryBuilder.where('subtotal', '>=', subtotalMin)
        }
      }
      if (queryParams.subtotal_max) {
        const subtotalMax = +queryParams.subtotal_max
        if (!isNaN(subtotalMax)) {
          queryBuilder.where('subtotal', '<=', subtotalMax)
        }
      }
    })
}

// UPDATE
const update = (saleDetailId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate)
    .from('sales_details')
    .where('sale_detail_id', saleDetailId)
    .returning('*')
}

// DELETE
// soft delete (borrado lógico)
const softDelete = (saleDetailId) => {
  return knex
    .update({ active: false })
    .from('sales_details')
    .where('sale_detail_id', saleDetailId)
}
// hard delete (borrado físico)
const destroy = (saleDetailId) => {
  return knex.delete().from('sales_details').where('sale_detail_id', saleDetailId)
}

module.exports = {
  create,
  get,
  update,
  softDelete,
  destroy
}
