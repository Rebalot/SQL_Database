/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('sales').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('sales', function (table) {
        table.increments('sale_id').primary()
        table.integer('fk_branch_id').notNullable()
          .references('branches.branch_id')
          .onDelete('CASCADE')
        table.integer('fk_customer_id').notNullable()
        table.timestamp('sale_date', { useTz: true }).defaultTo(knex.fn.now())
        table.decimal('total_amount', 10, 2).notNullable()
      })
    }
  })
}

/**
       * @param { import("knex").Knex } knex
       * @returns { Promise<void> }
       */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('sales')
}
