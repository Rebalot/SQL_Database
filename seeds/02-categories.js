/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  //  Elimina todos los registros de la tabla categories, reinicia los contadores de auto-incremento y elimina también los registros en cualquier tabla relacionada que dependa de categories.
  await knex.raw('TRUNCATE categories RESTART IDENTITY CASCADE')
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('categories').insert([
    { name: 'Electronics' },
    { name: 'Home Appliances' },
    { name: 'Furniture' },
    { name: 'Clothing' },
    { name: 'Footwear' },
    { name: 'Books' },
    { name: 'Toys' },
    { name: 'Groceries' },
    { name: 'Health & Beauty' },
    { name: 'Sports & Outdoors' },
    { name: 'Automotive' },
    { name: 'Garden & Outdoor' },
    { name: 'Jewelry' },
    { name: 'Pet Supplies' },
    { name: 'Office Supplies' },
    { name: 'Music' },
    { name: 'Video Games' },
    { name: 'Baby Products' },
    { name: 'Crafts & Sewing' },
    { name: 'Tools & Home Improvement' }
  ])
}
