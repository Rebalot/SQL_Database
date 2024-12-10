/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('customers').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('customers', function (table) {
        table.increments('customer_id').primary()
        table.string('name', 100).notNullable()
        table.string('last_name_1', 100).notNullable()
        table.string('last_name_2', 100).nullable()
        table.string('email', 100).notNullable()
        table.string('phone', 20).notNullable()
        table.string('address', 255).notNullable()
        table.string('city', 100).notNullable()
        table.string('state', 100).notNullable()
        table.string('country', 100).notNullable()
        table.string('postal_code', 10).notNullable()
        table.timestamp('registered_at', { useTz: true }).defaultTo(knex.fn.now())
      })
    }
  })
}

/**
         * @param { import("knex").Knex } knex
         * @returns { Promise<void> }
         */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('customers')
}
