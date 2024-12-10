/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex.raw('TRUNCATE sales_details RESTART IDENTITY CASCADE')
  // Deletes ALL existing entries
  // await knex('table_name').del()
  // unit_price y subtotal, la database tiene un trigger que ejecuta la función que setea los valores correspondientes al hacer cada inserción. Se le puede mandar el valor de unit_price y ya no tomaría como referencia el price de la tabla de products.
  await knex('sales_details').insert([
    { fk_sale_id: 1, fk_product_id: 45, quantity: 3 },
    { fk_sale_id: 1, fk_product_id: 97, quantity: 2 },
    { fk_sale_id: 2, fk_product_id: 11, quantity: 1 },
    { fk_sale_id: 2, fk_product_id: 185, quantity: 5 },
    { fk_sale_id: 2, fk_product_id: 54, quantity: 2 },
    { fk_sale_id: 3, fk_product_id: 8, quantity: 1 },
    { fk_sale_id: 3, fk_product_id: 112, quantity: 4 },
    { fk_sale_id: 4, fk_product_id: 33, quantity: 2 },
    { fk_sale_id: 5, fk_product_id: 88, quantity: 1 },
    { fk_sale_id: 5, fk_product_id: 10, quantity: 3 },
    { fk_sale_id: 5, fk_product_id: 156, quantity: 2 },
    { fk_sale_id: 6, fk_product_id: 28, quantity: 5 },
    { fk_sale_id: 6, fk_product_id: 143, quantity: 1 },
    { fk_sale_id: 6, fk_product_id: 55, quantity: 2 },
    { fk_sale_id: 7, fk_product_id: 112, quantity: 4 },
    { fk_sale_id: 8, fk_product_id: 78, quantity: 3 },
    { fk_sale_id: 9, fk_product_id: 175, quantity: 2 },
    { fk_sale_id: 9, fk_product_id: 203, quantity: 1 },
    { fk_sale_id: 10, fk_product_id: 1, quantity: 2 },
    { fk_sale_id: 10, fk_product_id: 100, quantity: 4 },
    { fk_sale_id: 11, fk_product_id: 17, quantity: 1 },
    { fk_sale_id: 11, fk_product_id: 56, quantity: 3 },
    { fk_sale_id: 11, fk_product_id: 99, quantity: 2 },
    { fk_sale_id: 12, fk_product_id: 22, quantity: 2 },
    { fk_sale_id: 12, fk_product_id: 50, quantity: 1 },
    { fk_sale_id: 12, fk_product_id: 67, quantity: 4 },
    { fk_sale_id: 13, fk_product_id: 141, quantity: 1 },
    { fk_sale_id: 13, fk_product_id: 200, quantity: 2 },
    { fk_sale_id: 14, fk_product_id: 33, quantity: 3 },
    { fk_sale_id: 14, fk_product_id: 78, quantity: 1 },
    { fk_sale_id: 14, fk_product_id: 132, quantity: 4 },
    { fk_sale_id: 15, fk_product_id: 57, quantity: 1 },
    { fk_sale_id: 16, fk_product_id: 135, quantity: 5 },
    { fk_sale_id: 16, fk_product_id: 99, quantity: 2 },
    { fk_sale_id: 17, fk_product_id: 11, quantity: 3 },
    { fk_sale_id: 17, fk_product_id: 220, quantity: 1 },
    { fk_sale_id: 18, fk_product_id: 33, quantity: 2 },
    { fk_sale_id: 19, fk_product_id: 198, quantity: 4 },
    { fk_sale_id: 19, fk_product_id: 15, quantity: 3 },
    { fk_sale_id: 20, fk_product_id: 30, quantity: 1 },
    { fk_sale_id: 21, fk_product_id: 2, quantity: 5 },
    { fk_sale_id: 21, fk_product_id: 34, quantity: 2 },
    { fk_sale_id: 22, fk_product_id: 78, quantity: 3 },
    { fk_sale_id: 22, fk_product_id: 146, quantity: 1 },
    { fk_sale_id: 23, fk_product_id: 1, quantity: 2 },
    { fk_sale_id: 23, fk_product_id: 99, quantity: 5 },
    { fk_sale_id: 24, fk_product_id: 142, quantity: 1 },
    { fk_sale_id: 25, fk_product_id: 38, quantity: 2 },
    { fk_sale_id: 25, fk_product_id: 84, quantity: 3 },
    { fk_sale_id: 26, fk_product_id: 197, quantity: 1 },
    { fk_sale_id: 27, fk_product_id: 140, quantity: 4 },
    { fk_sale_id: 27, fk_product_id: 10, quantity: 2 },
    { fk_sale_id: 28, fk_product_id: 78, quantity: 3 },
    { fk_sale_id: 29, fk_product_id: 123, quantity: 1 },
    { fk_sale_id: 29, fk_product_id: 45, quantity: 2 },
    { fk_sale_id: 30, fk_product_id: 220, quantity: 3 },
    { fk_sale_id: 31, fk_product_id: 9, quantity: 2 },
    { fk_sale_id: 32, fk_product_id: 45, quantity: 1 },
    { fk_sale_id: 32, fk_product_id: 113, quantity: 4 },
    { fk_sale_id: 33, fk_product_id: 11, quantity: 2 },
    { fk_sale_id: 34, fk_product_id: 5, quantity: 3 },
    { fk_sale_id: 34, fk_product_id: 39, quantity: 1 },
    { fk_sale_id: 35, fk_product_id: 197, quantity: 2 },
    { fk_sale_id: 36, fk_product_id: 142, quantity: 4 },
    { fk_sale_id: 36, fk_product_id: 30, quantity: 1 },
    { fk_sale_id: 37, fk_product_id: 121, quantity: 5 },
    { fk_sale_id: 37, fk_product_id: 2, quantity: 3 },
    { fk_sale_id: 38, fk_product_id: 220, quantity: 2 },
    { fk_sale_id: 39, fk_product_id: 111, quantity: 1 },
    { fk_sale_id: 39, fk_product_id: 180, quantity: 4 },
    { fk_sale_id: 40, fk_product_id: 142, quantity: 1 },
    { fk_sale_id: 40, fk_product_id: 18, quantity: 3 },
    { fk_sale_id: 41, fk_product_id: 88, quantity: 2 },
    { fk_sale_id: 42, fk_product_id: 14, quantity: 5 },
    { fk_sale_id: 42, fk_product_id: 55, quantity: 1 },
    { fk_sale_id: 43, fk_product_id: 38, quantity: 3 },
    { fk_sale_id: 44, fk_product_id: 204, quantity: 2 },
    { fk_sale_id: 45, fk_product_id: 12, quantity: 1 },
    { fk_sale_id: 46, fk_product_id: 99, quantity: 2 },
    { fk_sale_id: 47, fk_product_id: 8, quantity: 4 },
    { fk_sale_id: 48, fk_product_id: 145, quantity: 3 },
    { fk_sale_id: 49, fk_product_id: 2, quantity: 1 },
    { fk_sale_id: 49, fk_product_id: 110, quantity: 5 },
    { fk_sale_id: 50, fk_product_id: 29, quantity: 2 },
    { fk_sale_id: 51, fk_product_id: 1, quantity: 4 },
    { fk_sale_id: 52, fk_product_id: 199, quantity: 1 },
    { fk_sale_id: 53, fk_product_id: 83, quantity: 3 },
    { fk_sale_id: 54, fk_product_id: 7, quantity: 2 },
    { fk_sale_id: 54, fk_product_id: 188, quantity: 5 },
    { fk_sale_id: 55, fk_product_id: 22, quantity: 1 },
    { fk_sale_id: 55, fk_product_id: 141, quantity: 3 },
    { fk_sale_id: 56, fk_product_id: 76, quantity: 4 },
    { fk_sale_id: 57, fk_product_id: 37, quantity: 1 },
    { fk_sale_id: 57, fk_product_id: 22, quantity: 2 },
    { fk_sale_id: 58, fk_product_id: 155, quantity: 3 },
    { fk_sale_id: 59, fk_product_id: 44, quantity: 5 },
    { fk_sale_id: 59, fk_product_id: 100, quantity: 2 },
    { fk_sale_id: 60, fk_product_id: 83, quantity: 1 },
    { fk_sale_id: 61, fk_product_id: 54, quantity: 4 },
    { fk_sale_id: 62, fk_product_id: 99, quantity: 1 },
    { fk_sale_id: 63, fk_product_id: 101, quantity: 2 },
    { fk_sale_id: 63, fk_product_id: 13, quantity: 5 },
    { fk_sale_id: 64, fk_product_id: 24, quantity: 3 },
    { fk_sale_id: 64, fk_product_id: 186, quantity: 1 },
    { fk_sale_id: 65, fk_product_id: 3, quantity: 2 },
    { fk_sale_id: 65, fk_product_id: 72, quantity: 4 },
    { fk_sale_id: 66, fk_product_id: 65, quantity: 1 },
    { fk_sale_id: 66, fk_product_id: 220, quantity: 2 },
    { fk_sale_id: 67, fk_product_id: 109, quantity: 3 },
    { fk_sale_id: 68, fk_product_id: 140, quantity: 2 },
    { fk_sale_id: 68, fk_product_id: 156, quantity: 1 },
    { fk_sale_id: 69, fk_product_id: 55, quantity: 5 },
    { fk_sale_id: 70, fk_product_id: 44, quantity: 3 },
    { fk_sale_id: 71, fk_product_id: 101, quantity: 2 },
    { fk_sale_id: 71, fk_product_id: 11, quantity: 1 },
    { fk_sale_id: 72, fk_product_id: 118, quantity: 4 },
    { fk_sale_id: 73, fk_product_id: 9, quantity: 2 },
    { fk_sale_id: 73, fk_product_id: 50, quantity: 5 },
    { fk_sale_id: 74, fk_product_id: 144, quantity: 1 },
    { fk_sale_id: 75, fk_product_id: 74, quantity: 3 },
    { fk_sale_id: 75, fk_product_id: 34, quantity: 3 },
    { fk_sale_id: 75, fk_product_id: 78, quantity: 1 },
    { fk_sale_id: 75, fk_product_id: 142, quantity: 2 },

    { fk_sale_id: 76, fk_product_id: 12, quantity: 5 },
    { fk_sale_id: 76, fk_product_id: 97, quantity: 3 },

    { fk_sale_id: 77, fk_product_id: 220, quantity: 4 },
    { fk_sale_id: 77, fk_product_id: 105, quantity: 2 },
    { fk_sale_id: 77, fk_product_id: 15, quantity: 1 },
    { fk_sale_id: 77, fk_product_id: 67, quantity: 6 },

    { fk_sale_id: 78, fk_product_id: 5, quantity: 2 },

    { fk_sale_id: 79, fk_product_id: 18, quantity: 1 },
    { fk_sale_id: 79, fk_product_id: 54, quantity: 7 },
    { fk_sale_id: 79, fk_product_id: 113, quantity: 3 },

    { fk_sale_id: 80, fk_product_id: 85, quantity: 4 },
    { fk_sale_id: 80, fk_product_id: 127, quantity: 2 },
    { fk_sale_id: 80, fk_product_id: 199, quantity: 1 },
    { fk_sale_id: 80, fk_product_id: 45, quantity: 5 },
    { fk_sale_id: 81, fk_product_id: 35, quantity: 2 },
    { fk_sale_id: 81, fk_product_id: 76, quantity: 1 },
    { fk_sale_id: 81, fk_product_id: 150, quantity: 3 },

    { fk_sale_id: 82, fk_product_id: 14, quantity: 4 },
    { fk_sale_id: 82, fk_product_id: 190, quantity: 2 },
    { fk_sale_id: 82, fk_product_id: 57, quantity: 1 },

    { fk_sale_id: 83, fk_product_id: 100, quantity: 3 },
    { fk_sale_id: 83, fk_product_id: 88, quantity: 2 },
    { fk_sale_id: 83, fk_product_id: 165, quantity: 4 },
    { fk_sale_id: 83, fk_product_id: 38, quantity: 1 },

    { fk_sale_id: 84, fk_product_id: 8, quantity: 2 },

    { fk_sale_id: 85, fk_product_id: 45, quantity: 1 },
    { fk_sale_id: 85, fk_product_id: 97, quantity: 5 },
    { fk_sale_id: 85, fk_product_id: 103, quantity: 3 },

    { fk_sale_id: 86, fk_product_id: 200, quantity: 4 },
    { fk_sale_id: 86, fk_product_id: 19, quantity: 2 },
    { fk_sale_id: 86, fk_product_id: 120, quantity: 3 },
    { fk_sale_id: 86, fk_product_id: 78, quantity: 1 },

    { fk_sale_id: 87, fk_product_id: 55, quantity: 6 },
    { fk_sale_id: 87, fk_product_id: 160, quantity: 2 },
    { fk_sale_id: 88, fk_product_id: 43, quantity: 1 },
    { fk_sale_id: 88, fk_product_id: 112, quantity: 4 },
    { fk_sale_id: 88, fk_product_id: 205, quantity: 2 },
    { fk_sale_id: 88, fk_product_id: 36, quantity: 5 },

    { fk_sale_id: 89, fk_product_id: 76, quantity: 3 },
    { fk_sale_id: 89, fk_product_id: 90, quantity: 1 },
    { fk_sale_id: 89, fk_product_id: 175, quantity: 4 },

    { fk_sale_id: 90, fk_product_id: 15, quantity: 2 },

    { fk_sale_id: 91, fk_product_id: 101, quantity: 1 },
    { fk_sale_id: 91, fk_product_id: 117, quantity: 3 },
    { fk_sale_id: 91, fk_product_id: 56, quantity: 2 },
    { fk_sale_id: 91, fk_product_id: 190, quantity: 5 },

    { fk_sale_id: 92, fk_product_id: 30, quantity: 3 },
    { fk_sale_id: 92, fk_product_id: 75, quantity: 1 },

    { fk_sale_id: 93, fk_product_id: 40, quantity: 4 },
    { fk_sale_id: 93, fk_product_id: 85, quantity: 2 },
    { fk_sale_id: 93, fk_product_id: 200, quantity: 6 },
    { fk_sale_id: 93, fk_product_id: 125, quantity: 1 },

    { fk_sale_id: 94, fk_product_id: 51, quantity: 2 },
    { fk_sale_id: 94, fk_product_id: 98, quantity: 5 },

    { fk_sale_id: 95, fk_product_id: 10, quantity: 3 },
    { fk_sale_id: 95, fk_product_id: 150, quantity: 2 },
    { fk_sale_id: 95, fk_product_id: 88, quantity: 4 },
    { fk_sale_id: 95, fk_product_id: 200, quantity: 1 },

    { fk_sale_id: 96, fk_product_id: 12, quantity: 2 },

    { fk_sale_id: 97, fk_product_id: 44, quantity: 5 },
    { fk_sale_id: 97, fk_product_id: 79, quantity: 3 },
    { fk_sale_id: 97, fk_product_id: 100, quantity: 2 },

    { fk_sale_id: 98, fk_product_id: 67, quantity: 1 },
    { fk_sale_id: 98, fk_product_id: 121, quantity: 4 },
    { fk_sale_id: 98, fk_product_id: 220, quantity: 3 },

    { fk_sale_id: 99, fk_product_id: 10, quantity: 6 },
    { fk_sale_id: 99, fk_product_id: 55, quantity: 2 },
    { fk_sale_id: 99, fk_product_id: 130, quantity: 1 },

    { fk_sale_id: 100, fk_product_id: 200, quantity: 3 },
    { fk_sale_id: 100, fk_product_id: 11, quantity: 1 },
    { fk_sale_id: 100, fk_product_id: 42, quantity: 2 },
    { fk_sale_id: 100, fk_product_id: 99, quantity: 4 },

    { fk_sale_id: 101, fk_product_id: 8, quantity: 2 },
    { fk_sale_id: 101, fk_product_id: 115, quantity: 3 },
    { fk_sale_id: 101, fk_product_id: 56, quantity: 5 },

    { fk_sale_id: 102, fk_product_id: 45, quantity: 1 },

    { fk_sale_id: 103, fk_product_id: 97, quantity: 4 },
    { fk_sale_id: 103, fk_product_id: 105, quantity: 6 },
    { fk_sale_id: 103, fk_product_id: 190, quantity: 2 },
    { fk_sale_id: 103, fk_product_id: 25, quantity: 1 },

    { fk_sale_id: 104, fk_product_id: 18, quantity: 3 },
    { fk_sale_id: 104, fk_product_id: 110, quantity: 5 },

    { fk_sale_id: 105, fk_product_id: 205, quantity: 4 },
    { fk_sale_id: 105, fk_product_id: 19, quantity: 2 },
    { fk_sale_id: 105, fk_product_id: 89, quantity: 3 },

    { fk_sale_id: 106, fk_product_id: 15, quantity: 1 },
    { fk_sale_id: 106, fk_product_id: 150, quantity: 6 },
    { fk_sale_id: 106, fk_product_id: 120, quantity: 4 },

    { fk_sale_id: 107, fk_product_id: 36, quantity: 2 },
    { fk_sale_id: 107, fk_product_id: 55, quantity: 5 },
    { fk_sale_id: 107, fk_product_id: 199, quantity: 3 },

    { fk_sale_id: 108, fk_product_id: 77, quantity: 1 },
    { fk_sale_id: 108, fk_product_id: 185, quantity: 6 },
    { fk_sale_id: 108, fk_product_id: 12, quantity: 2 },

    { fk_sale_id: 109, fk_product_id: 10, quantity: 5 },
    { fk_sale_id: 109, fk_product_id: 54, quantity: 4 },
    { fk_sale_id: 109, fk_product_id: 8, quantity: 3 },

    { fk_sale_id: 110, fk_product_id: 200, quantity: 2 },
    { fk_sale_id: 110, fk_product_id: 45, quantity: 1 },
    { fk_sale_id: 110, fk_product_id: 97, quantity: 4 },
    { fk_sale_id: 110, fk_product_id: 11, quantity: 6 },
    { fk_sale_id: 111, fk_product_id: 99, quantity: 2 },
    { fk_sale_id: 111, fk_product_id: 67, quantity: 1 },
    { fk_sale_id: 111, fk_product_id: 12, quantity: 5 },

    { fk_sale_id: 112, fk_product_id: 22, quantity: 3 },
    { fk_sale_id: 112, fk_product_id: 57, quantity: 2 },
    { fk_sale_id: 112, fk_product_id: 88, quantity: 1 },
    { fk_sale_id: 112, fk_product_id: 130, quantity: 4 },

    { fk_sale_id: 113, fk_product_id: 75, quantity: 2 },
    { fk_sale_id: 113, fk_product_id: 45, quantity: 3 },
    { fk_sale_id: 113, fk_product_id: 220, quantity: 6 },

    { fk_sale_id: 114, fk_product_id: 10, quantity: 1 },

    { fk_sale_id: 115, fk_product_id: 111, quantity: 5 },
    { fk_sale_id: 115, fk_product_id: 78, quantity: 2 },
    { fk_sale_id: 115, fk_product_id: 67, quantity: 4 },

    { fk_sale_id: 116, fk_product_id: 56, quantity: 3 },
    { fk_sale_id: 116, fk_product_id: 112, quantity: 1 },
    { fk_sale_id: 116, fk_product_id: 200, quantity: 5 },

    { fk_sale_id: 117, fk_product_id: 19, quantity: 2 },
    { fk_sale_id: 117, fk_product_id: 77, quantity: 3 },

    { fk_sale_id: 118, fk_product_id: 125, quantity: 6 },
    { fk_sale_id: 118, fk_product_id: 54, quantity: 2 },

    { fk_sale_id: 119, fk_product_id: 88, quantity: 4 },
    { fk_sale_id: 119, fk_product_id: 36, quantity: 1 },
    { fk_sale_id: 119, fk_product_id: 99, quantity: 3 },
    { fk_sale_id: 119, fk_product_id: 150, quantity: 5 },

    { fk_sale_id: 120, fk_product_id: 85, quantity: 3 },
    { fk_sale_id: 120, fk_product_id: 15, quantity: 1 },

    { fk_sale_id: 121, fk_product_id: 42, quantity: 6 },
    { fk_sale_id: 121, fk_product_id: 105, quantity: 2 },
    { fk_sale_id: 121, fk_product_id: 120, quantity: 4 },

    { fk_sale_id: 122, fk_product_id: 220, quantity: 3 },

    { fk_sale_id: 123, fk_product_id: 56, quantity: 1 },
    { fk_sale_id: 123, fk_product_id: 10, quantity: 5 },
    { fk_sale_id: 123, fk_product_id: 85, quantity: 2 },

    { fk_sale_id: 124, fk_product_id: 150, quantity: 4 },
    { fk_sale_id: 124, fk_product_id: 25, quantity: 1 },
    { fk_sale_id: 124, fk_product_id: 200, quantity: 2 },

    { fk_sale_id: 125, fk_product_id: 112, quantity: 5 },
    { fk_sale_id: 125, fk_product_id: 45, quantity: 3 },
    { fk_sale_id: 125, fk_product_id: 190, quantity: 1 },

    { fk_sale_id: 126, fk_product_id: 10, quantity: 4 },
    { fk_sale_id: 126, fk_product_id: 97, quantity: 2 },

    { fk_sale_id: 127, fk_product_id: 88, quantity: 6 },
    { fk_sale_id: 127, fk_product_id: 115, quantity: 3 },
    { fk_sale_id: 127, fk_product_id: 18, quantity: 1 },

    { fk_sale_id: 128, fk_product_id: 220, quantity: 2 },
    { fk_sale_id: 128, fk_product_id: 33, quantity: 5 },

    { fk_sale_id: 129, fk_product_id: 44, quantity: 1 },
    { fk_sale_id: 129, fk_product_id: 200, quantity: 4 },
    { fk_sale_id: 129, fk_product_id: 77, quantity: 3 },

    { fk_sale_id: 130, fk_product_id: 19, quantity: 6 },
    { fk_sale_id: 130, fk_product_id: 125, quantity: 1 },
    { fk_sale_id: 130, fk_product_id: 105, quantity: 2 },
    { fk_sale_id: 130, fk_product_id: 120, quantity: 4 },
    { fk_sale_id: 131, fk_product_id: 56, quantity: 2 },
    { fk_sale_id: 131, fk_product_id: 112, quantity: 4 },
    { fk_sale_id: 131, fk_product_id: 99, quantity: 1 },

    { fk_sale_id: 132, fk_product_id: 15, quantity: 3 },
    { fk_sale_id: 132, fk_product_id: 78, quantity: 2 },

    { fk_sale_id: 133, fk_product_id: 45, quantity: 6 },
    { fk_sale_id: 133, fk_product_id: 101, quantity: 4 },
    { fk_sale_id: 133, fk_product_id: 120, quantity: 1 },

    { fk_sale_id: 134, fk_product_id: 88, quantity: 3 },

    { fk_sale_id: 135, fk_product_id: 33, quantity: 2 },
    { fk_sale_id: 135, fk_product_id: 54, quantity: 1 },
    { fk_sale_id: 135, fk_product_id: 130, quantity: 5 },

    { fk_sale_id: 136, fk_product_id: 200, quantity: 2 },
    { fk_sale_id: 136, fk_product_id: 67, quantity: 6 },

    { fk_sale_id: 137, fk_product_id: 55, quantity: 4 },
    { fk_sale_id: 137, fk_product_id: 12, quantity: 3 },
    { fk_sale_id: 137, fk_product_id: 220, quantity: 1 },

    { fk_sale_id: 138, fk_product_id: 18, quantity: 2 },
    { fk_sale_id: 138, fk_product_id: 112, quantity: 5 },

    { fk_sale_id: 139, fk_product_id: 45, quantity: 3 },
    { fk_sale_id: 139, fk_product_id: 85, quantity: 2 },
    { fk_sale_id: 139, fk_product_id: 125, quantity: 4 },
    { fk_sale_id: 139, fk_product_id: 97, quantity: 1 },

    { fk_sale_id: 140, fk_product_id: 200, quantity: 6 },
    { fk_sale_id: 140, fk_product_id: 19, quantity: 3 },

    { fk_sale_id: 141, fk_product_id: 150, quantity: 2 },
    { fk_sale_id: 141, fk_product_id: 54, quantity: 1 },
    { fk_sale_id: 141, fk_product_id: 76, quantity: 5 },

    { fk_sale_id: 142, fk_product_id: 33, quantity: 4 },

    { fk_sale_id: 143, fk_product_id: 99, quantity: 2 },
    { fk_sale_id: 143, fk_product_id: 8, quantity: 3 },
    { fk_sale_id: 143, fk_product_id: 120, quantity: 1 },

    { fk_sale_id: 144, fk_product_id: 77, quantity: 6 },
    { fk_sale_id: 144, fk_product_id: 150, quantity: 2 },

    { fk_sale_id: 145, fk_product_id: 45, quantity: 5 },
    { fk_sale_id: 145, fk_product_id: 101, quantity: 1 },
    { fk_sale_id: 145, fk_product_id: 33, quantity: 3 },

    { fk_sale_id: 146, fk_product_id: 54, quantity: 4 },

    { fk_sale_id: 147, fk_product_id: 125, quantity: 1 },
    { fk_sale_id: 147, fk_product_id: 97, quantity: 2 },
    { fk_sale_id: 147, fk_product_id: 220, quantity: 6 },

    { fk_sale_id: 148, fk_product_id: 88, quantity: 3 },
    { fk_sale_id: 148, fk_product_id: 67, quantity: 5 },

    { fk_sale_id: 149, fk_product_id: 112, quantity: 4 },
    { fk_sale_id: 149, fk_product_id: 200, quantity: 1 },

    { fk_sale_id: 150, fk_product_id: 105, quantity: 2 },
    { fk_sale_id: 150, fk_product_id: 150, quantity: 6 },
    { fk_sale_id: 150, fk_product_id: 56, quantity: 3 },
    { fk_sale_id: 151, fk_product_id: 45, quantity: 3 },
    { fk_sale_id: 151, fk_product_id: 112, quantity: 1 },
    { fk_sale_id: 151, fk_product_id: 220, quantity: 5 },

    { fk_sale_id: 152, fk_product_id: 8, quantity: 4 },
    { fk_sale_id: 152, fk_product_id: 19, quantity: 2 },

    { fk_sale_id: 153, fk_product_id: 56, quantity: 6 },
    { fk_sale_id: 153, fk_product_id: 77, quantity: 3 },
    { fk_sale_id: 153, fk_product_id: 101, quantity: 1 },

    { fk_sale_id: 154, fk_product_id: 36, quantity: 2 },
    { fk_sale_id: 154, fk_product_id: 125, quantity: 4 },
    { fk_sale_id: 154, fk_product_id: 54, quantity: 3 },

    { fk_sale_id: 155, fk_product_id: 88, quantity: 1 },
    { fk_sale_id: 155, fk_product_id: 67, quantity: 5 },

    { fk_sale_id: 156, fk_product_id: 150, quantity: 2 },
    { fk_sale_id: 156, fk_product_id: 112, quantity: 4 },

    { fk_sale_id: 157, fk_product_id: 45, quantity: 3 },
    { fk_sale_id: 157, fk_product_id: 78, quantity: 6 },
    { fk_sale_id: 157, fk_product_id: 85, quantity: 2 },

    { fk_sale_id: 158, fk_product_id: 101, quantity: 1 },

    { fk_sale_id: 159, fk_product_id: 10, quantity: 4 },
    { fk_sale_id: 159, fk_product_id: 33, quantity: 3 },

    { fk_sale_id: 160, fk_product_id: 99, quantity: 5 },
    { fk_sale_id: 160, fk_product_id: 19, quantity: 2 },
    { fk_sale_id: 160, fk_product_id: 200, quantity: 1 },

    { fk_sale_id: 161, fk_product_id: 88, quantity: 6 },
    { fk_sale_id: 161, fk_product_id: 56, quantity: 3 },

    { fk_sale_id: 162, fk_product_id: 85, quantity: 2 },
    { fk_sale_id: 162, fk_product_id: 120, quantity: 4 },

    { fk_sale_id: 163, fk_product_id: 77, quantity: 3 },
    { fk_sale_id: 163, fk_product_id: 67, quantity: 5 },

    { fk_sale_id: 164, fk_product_id: 45, quantity: 6 },
    { fk_sale_id: 164, fk_product_id: 220, quantity: 1 },
    { fk_sale_id: 164, fk_product_id: 130, quantity: 2 },

    { fk_sale_id: 165, fk_product_id: 10, quantity: 4 },
    { fk_sale_id: 165, fk_product_id: 18, quantity: 3 },
    { fk_sale_id: 165, fk_product_id: 112, quantity: 5 },

    { fk_sale_id: 166, fk_product_id: 99, quantity: 2 },

    { fk_sale_id: 167, fk_product_id: 150, quantity: 3 },
    { fk_sale_id: 167, fk_product_id: 56, quantity: 1 },

    { fk_sale_id: 168, fk_product_id: 19, quantity: 5 },
    { fk_sale_id: 168, fk_product_id: 200, quantity: 2 },

    { fk_sale_id: 169, fk_product_id: 112, quantity: 3 },
    { fk_sale_id: 169, fk_product_id: 78, quantity: 1 },

    { fk_sale_id: 170, fk_product_id: 45, quantity: 4 },
    { fk_sale_id: 170, fk_product_id: 67, quantity: 2 },
    { fk_sale_id: 170, fk_product_id: 85, quantity: 5 },
    { fk_sale_id: 171, fk_product_id: 54, quantity: 3 },
    { fk_sale_id: 171, fk_product_id: 120, quantity: 2 },
    { fk_sale_id: 171, fk_product_id: 220, quantity: 4 },

    { fk_sale_id: 172, fk_product_id: 15, quantity: 6 },
    { fk_sale_id: 172, fk_product_id: 105, quantity: 3 },

    { fk_sale_id: 173, fk_product_id: 8, quantity: 1 },
    { fk_sale_id: 173, fk_product_id: 67, quantity: 4 },
    { fk_sale_id: 173, fk_product_id: 125, quantity: 2 },

    { fk_sale_id: 174, fk_product_id: 99, quantity: 3 },
    { fk_sale_id: 174, fk_product_id: 45, quantity: 1 },

    { fk_sale_id: 175, fk_product_id: 36, quantity: 5 },
    { fk_sale_id: 175, fk_product_id: 112, quantity: 4 },

    { fk_sale_id: 176, fk_product_id: 200, quantity: 6 },
    { fk_sale_id: 176, fk_product_id: 88, quantity: 2 },

    { fk_sale_id: 177, fk_product_id: 77, quantity: 3 },
    { fk_sale_id: 177, fk_product_id: 18, quantity: 1 },
    { fk_sale_id: 177, fk_product_id: 78, quantity: 5 },

    { fk_sale_id: 178, fk_product_id: 56, quantity: 4 },
    { fk_sale_id: 178, fk_product_id: 220, quantity: 2 },

    { fk_sale_id: 179, fk_product_id: 97, quantity: 3 },
    { fk_sale_id: 179, fk_product_id: 67, quantity: 6 },
    { fk_sale_id: 179, fk_product_id: 150, quantity: 1 },

    { fk_sale_id: 180, fk_product_id: 125, quantity: 2 },

    { fk_sale_id: 181, fk_product_id: 33, quantity: 4 },
    { fk_sale_id: 181, fk_product_id: 99, quantity: 5 },
    { fk_sale_id: 181, fk_product_id: 45, quantity: 1 },

    { fk_sale_id: 182, fk_product_id: 101, quantity: 2 },
    { fk_sale_id: 182, fk_product_id: 112, quantity: 3 },

    { fk_sale_id: 183, fk_product_id: 85, quantity: 6 },
    { fk_sale_id: 183, fk_product_id: 19, quantity: 4 },

    { fk_sale_id: 184, fk_product_id: 88, quantity: 2 },
    { fk_sale_id: 184, fk_product_id: 54, quantity: 3 },
    { fk_sale_id: 184, fk_product_id: 120, quantity: 5 },

    { fk_sale_id: 185, fk_product_id: 10, quantity: 4 },
    { fk_sale_id: 185, fk_product_id: 78, quantity: 1 },

    { fk_sale_id: 186, fk_product_id: 67, quantity: 5 },
    { fk_sale_id: 186, fk_product_id: 220, quantity: 2 },

    { fk_sale_id: 187, fk_product_id: 36, quantity: 6 },
    { fk_sale_id: 187, fk_product_id: 97, quantity: 3 },
    { fk_sale_id: 187, fk_product_id: 77, quantity: 1 },

    { fk_sale_id: 188, fk_product_id: 150, quantity: 2 },
    { fk_sale_id: 188, fk_product_id: 105, quantity: 4 },

    { fk_sale_id: 189, fk_product_id: 56, quantity: 3 },
    { fk_sale_id: 189, fk_product_id: 125, quantity: 5 },

    { fk_sale_id: 190, fk_product_id: 19, quantity: 6 },
    { fk_sale_id: 190, fk_product_id: 33, quantity: 2 },
    { fk_sale_id: 191, fk_product_id: 112, quantity: 4 },
    { fk_sale_id: 191, fk_product_id: 54, quantity: 2 },
    { fk_sale_id: 191, fk_product_id: 120, quantity: 1 },

    { fk_sale_id: 192, fk_product_id: 85, quantity: 3 },
    { fk_sale_id: 192, fk_product_id: 45, quantity: 5 },
    { fk_sale_id: 192, fk_product_id: 88, quantity: 2 },

    { fk_sale_id: 193, fk_product_id: 8, quantity: 1 },
    { fk_sale_id: 193, fk_product_id: 77, quantity: 6 },

    { fk_sale_id: 194, fk_product_id: 99, quantity: 4 },
    { fk_sale_id: 194, fk_product_id: 97, quantity: 3 },
    { fk_sale_id: 194, fk_product_id: 200, quantity: 5 },

    { fk_sale_id: 195, fk_product_id: 78, quantity: 2 },

    { fk_sale_id: 196, fk_product_id: 56, quantity: 4 },
    { fk_sale_id: 196, fk_product_id: 101, quantity: 1 },

    { fk_sale_id: 197, fk_product_id: 54, quantity: 3 },
    { fk_sale_id: 197, fk_product_id: 18, quantity: 5 },
    { fk_sale_id: 197, fk_product_id: 220, quantity: 6 },

    { fk_sale_id: 198, fk_product_id: 150, quantity: 2 },
    { fk_sale_id: 198, fk_product_id: 67, quantity: 3 },
    { fk_sale_id: 198, fk_product_id: 112, quantity: 4 },

    { fk_sale_id: 199, fk_product_id: 45, quantity: 5 },
    { fk_sale_id: 199, fk_product_id: 105, quantity: 1 },

    { fk_sale_id: 200, fk_product_id: 33, quantity: 6 },
    { fk_sale_id: 200, fk_product_id: 120, quantity: 2 },

    { fk_sale_id: 201, fk_product_id: 88, quantity: 4 },
    { fk_sale_id: 201, fk_product_id: 8, quantity: 1 },
    { fk_sale_id: 201, fk_product_id: 99, quantity: 5 },

    { fk_sale_id: 202, fk_product_id: 200, quantity: 2 },

    { fk_sale_id: 203, fk_product_id: 10, quantity: 3 },
    { fk_sale_id: 203, fk_product_id: 97, quantity: 4 },
    { fk_sale_id: 203, fk_product_id: 85, quantity: 2 },

    { fk_sale_id: 204, fk_product_id: 125, quantity: 1 },
    { fk_sale_id: 204, fk_product_id: 77, quantity: 6 },
    { fk_sale_id: 204, fk_product_id: 56, quantity: 3 },

    { fk_sale_id: 205, fk_product_id: 18, quantity: 5 },
    { fk_sale_id: 205, fk_product_id: 150, quantity: 2 },

    { fk_sale_id: 206, fk_product_id: 19, quantity: 4 },
    { fk_sale_id: 206, fk_product_id: 88, quantity: 6 },

    { fk_sale_id: 207, fk_product_id: 67, quantity: 3 },
    { fk_sale_id: 207, fk_product_id: 101, quantity: 5 },

    { fk_sale_id: 208, fk_product_id: 120, quantity: 2 },
    { fk_sale_id: 208, fk_product_id: 33, quantity: 4 },

    { fk_sale_id: 209, fk_product_id: 45, quantity: 6 },
    { fk_sale_id: 209, fk_product_id: 220, quantity: 1 },
    { fk_sale_id: 209, fk_product_id: 85, quantity: 3 },

    { fk_sale_id: 210, fk_product_id: 105, quantity: 2 },
    { fk_sale_id: 210, fk_product_id: 54, quantity: 4 },
    { fk_sale_id: 211, fk_product_id: 125, quantity: 3 },
    { fk_sale_id: 211, fk_product_id: 18, quantity: 5 },

    { fk_sale_id: 212, fk_product_id: 8, quantity: 1 },
    { fk_sale_id: 212, fk_product_id: 150, quantity: 4 },
    { fk_sale_id: 212, fk_product_id: 77, quantity: 2 },

    { fk_sale_id: 213, fk_product_id: 97, quantity: 6 },
    { fk_sale_id: 213, fk_product_id: 19, quantity: 3 },

    { fk_sale_id: 214, fk_product_id: 101, quantity: 2 },
    { fk_sale_id: 214, fk_product_id: 120, quantity: 5 },
    { fk_sale_id: 214, fk_product_id: 36, quantity: 1 },

    { fk_sale_id: 215, fk_product_id: 200, quantity: 4 },
    { fk_sale_id: 215, fk_product_id: 67, quantity: 6 },

    { fk_sale_id: 216, fk_product_id: 85, quantity: 3 },
    { fk_sale_id: 216, fk_product_id: 99, quantity: 5 },

    { fk_sale_id: 217, fk_product_id: 220, quantity: 2 },
    { fk_sale_id: 217, fk_product_id: 54, quantity: 4 },
    { fk_sale_id: 217, fk_product_id: 88, quantity: 1 },

    { fk_sale_id: 218, fk_product_id: 33, quantity: 3 },
    { fk_sale_id: 218, fk_product_id: 112, quantity: 6 },

    { fk_sale_id: 219, fk_product_id: 10, quantity: 5 },
    { fk_sale_id: 219, fk_product_id: 56, quantity: 2 },

    { fk_sale_id: 220, fk_product_id: 78, quantity: 4 },
    { fk_sale_id: 220, fk_product_id: 97, quantity: 1 },

    { fk_sale_id: 221, fk_product_id: 8, quantity: 2 },
    { fk_sale_id: 221, fk_product_id: 105, quantity: 3 },
    { fk_sale_id: 221, fk_product_id: 125, quantity: 5 },

    { fk_sale_id: 222, fk_product_id: 45, quantity: 6 },
    { fk_sale_id: 222, fk_product_id: 18, quantity: 2 },

    { fk_sale_id: 223, fk_product_id: 36, quantity: 4 },
    { fk_sale_id: 223, fk_product_id: 120, quantity: 3 },

    { fk_sale_id: 224, fk_product_id: 150, quantity: 1 },
    { fk_sale_id: 224, fk_product_id: 67, quantity: 5 },
    { fk_sale_id: 224, fk_product_id: 77, quantity: 6 },

    { fk_sale_id: 225, fk_product_id: 19, quantity: 2 },
    { fk_sale_id: 225, fk_product_id: 88, quantity: 4 },

    { fk_sale_id: 226, fk_product_id: 101, quantity: 3 },
    { fk_sale_id: 226, fk_product_id: 54, quantity: 5 },

    { fk_sale_id: 227, fk_product_id: 112, quantity: 6 },
    { fk_sale_id: 227, fk_product_id: 85, quantity: 1 },

    { fk_sale_id: 228, fk_product_id: 99, quantity: 4 },
    { fk_sale_id: 228, fk_product_id: 220, quantity: 2 },
    { fk_sale_id: 228, fk_product_id: 10, quantity: 3 },

    { fk_sale_id: 229, fk_product_id: 200, quantity: 1 },
    { fk_sale_id: 229, fk_product_id: 33, quantity: 5 },

    { fk_sale_id: 230, fk_product_id: 56, quantity: 4 },
    { fk_sale_id: 230, fk_product_id: 97, quantity: 2 },
    { fk_sale_id: 230, fk_product_id: 45, quantity: 3 },

    { fk_sale_id: 231, fk_product_id: 78, quantity: 5 },

    { fk_sale_id: 232, fk_product_id: 8, quantity: 1 },
    { fk_sale_id: 232, fk_product_id: 150, quantity: 2 },

    { fk_sale_id: 233, fk_product_id: 85, quantity: 3 },
    { fk_sale_id: 233, fk_product_id: 105, quantity: 5 },

    { fk_sale_id: 234, fk_product_id: 125, quantity: 6 },

    { fk_sale_id: 235, fk_product_id: 120, quantity: 2 },
    { fk_sale_id: 235, fk_product_id: 67, quantity: 3 }

  ])
}
