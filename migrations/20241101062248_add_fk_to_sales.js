/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.table('sales', function (table) {
    table.foreign('fk_customer_id').references('customers.customer_id').onDelete('CASCADE')
  })
}

/**
         * @param { import("knex").Knex } knex
         * @returns { Promise<void> }
         */
exports.down = function (knex) {
  return knex.schema.table('sales', function (table) {
    table.dropForeign('fk_customer_id')
  })
}
