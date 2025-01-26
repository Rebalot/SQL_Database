/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('sales_details').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('sales_details', function (table) {
        table.increments('sale_detail_id').primary()
        table.integer('fk_sale_id').notNullable()
        table.integer('fk_product_id').notNullable()
        table.integer('quantity').notNullable()
        table.decimal('unit_price', 10, 2).notNullable()
        table.decimal('subtotal', 10, 2).notNullable()
      })
    }
  })
}

/**
     * @param { import("knex").Knex } knex
     * @returns { Promise<void> }
     */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('sales_details')
}
