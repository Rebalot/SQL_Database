/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.table('sales_details', function (table) {
    table.foreign('fk_sale_id').references('sales.sale_id').onDelete('CASCADE')
    table.foreign('fk_product_id').references('products.product_id').onDelete('CASCADE')
  })
}

/**
       * @param { import("knex").Knex } knex
       * @returns { Promise<void> }
       */
exports.down = function (knex) {
  return knex.schema.table('sales_details', function (table) {
    table.dropForeign('fk_sale_id')
    table.dropForeign('fk_product_id')
  })
}
