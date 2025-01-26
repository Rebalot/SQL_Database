/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex.raw('TRUNCATE sales RESTART IDENTITY CASCADE')
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('sales').insert([
    {
      fk_branch_id: 3,
      fk_customer_id: 30,
      sale_date: '2024-11-02T00:00:00Z',
      total_amount: 264.95
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 50,
      sale_date: '2024-11-02T00:33:00Z',
      total_amount: 479.92
    },
    {
      fk_branch_id: 6,
      fk_customer_id: 25,
      sale_date: '2024-11-02T01:12:00Z',
      total_amount: 132.95
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 22,
      sale_date: '2024-11-02T01:19:00Z',
      total_amount: 25.98
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 27,
      sale_date: '2024-11-02T01:20:00Z',
      total_amount: 1124.94
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 7,
      sale_date: '2024-11-02T01:37:00Z',
      total_amount: 590.92
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 57,
      sale_date: '2024-11-02T02:02:00Z',
      total_amount: 119.96
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 46,
      sale_date: '2024-11-02T02:06:00Z',
      total_amount: 119.97
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 19,
      sale_date: '2024-11-02T02:57:00Z',
      total_amount: 1099.97
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 59,
      sale_date: '2024-11-02T03:40:00Z',
      total_amount: 1759.94
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 19,
      sale_date: '2024-11-02T04:21:00Z',
      total_amount: 709.94
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 55,
      sale_date: '2024-11-02T05:06:00Z',
      total_amount: 2189.93
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 4,
      sale_date: '2024-11-02T05:20:00Z',
      total_amount: 269.97
    },
    {
      fk_branch_id: 6,
      fk_customer_id: 33,
      sale_date: '2024-11-02T05:32:00Z',
      total_amount: 158.92
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 35,
      sale_date: '2024-11-02T06:29:00Z',
      total_amount: 199.99
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 57,
      sale_date: '2024-11-02T07:26:00Z',
      total_amount: 134.93
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 17,
      sale_date: '2024-11-02T07:29:00Z',
      total_amount: 269.96
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 41,
      sale_date: '2024-11-02T08:03:00Z',
      total_amount: 25.98
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 24,
      sale_date: '2024-11-02T08:58:00Z',
      total_amount: 889.93
    },
    {
      fk_branch_id: 6,
      fk_customer_id: 8,
      sale_date: '2024-11-02T09:58:00Z',
      total_amount: 69.99
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 21,
      sale_date: '2024-11-02T10:25:00Z',
      total_amount: 4525.93
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 28,
      sale_date: '2024-11-02T11:14:00Z',
      total_amount: 144.96
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 55,
      sale_date: '2024-11-02T11:29:00Z',
      total_amount: 1549.93
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 53,
      sale_date: '2024-11-02T12:05:00Z',
      total_amount: 39.99
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 62,
      sale_date: '2024-11-02T12:25:00Z',
      total_amount: 179.95
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 15,
      sale_date: '2024-11-02T13:20:00Z',
      total_amount: 59.99
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 15,
      sale_date: '2024-11-02T14:18:00Z',
      total_amount: 599.94
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 60,
      sale_date: '2024-11-02T14:26:00Z',
      total_amount: 119.97
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 1,
      sale_date: '2024-11-02T15:05:00Z',
      total_amount: 469.97
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 19,
      sale_date: '2024-11-02T15:48:00Z',
      total_amount: 359.97
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 47,
      sale_date: '2024-11-02T16:46:00Z',
      total_amount: 49.98
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 21,
      sale_date: '2024-11-02T17:40:00Z',
      total_amount: 354.95
    },
    {
      fk_branch_id: 6,
      fk_customer_id: 48,
      sale_date: '2024-11-02T17:57:00Z',
      total_amount: 99.98
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 1,
      sale_date: '2024-11-02T18:57:00Z',
      total_amount: 399.96
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 12,
      sale_date: '2024-11-02T19:39:00Z',
      total_amount: 119.98
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 32,
      sale_date: '2024-11-02T20:33:00Z',
      total_amount: 229.95
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 12,
      sale_date: '2024-11-02T21:04:00Z',
      total_amount: 3099.92
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 16,
      sale_date: '2024-11-02T21:46:00Z',
      total_amount: 239.98
    },
    {
      fk_branch_id: 6,
      fk_customer_id: 59,
      sale_date: '2024-11-02T22:39:00Z',
      total_amount: 624.95
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 57,
      sale_date: '2024-11-02T23:34:00Z',
      total_amount: 639.96
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 50,
      sale_date: '2024-11-03T00:32:00Z',
      total_amount: 9.98
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 7,
      sale_date: '2024-11-03T00:46:00Z',
      total_amount: 257.94
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 42,
      sale_date: '2024-11-03T01:26:00Z',
      total_amount: 89.97
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 32,
      sale_date: '2024-11-03T02:18:00Z',
      total_amount: 49.98
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 29,
      sale_date: '2024-11-03T02:52:00Z',
      total_amount: 59.99
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 48,
      sale_date: '2024-11-03T03:30:00Z',
      total_amount: 59.98
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 12,
      sale_date: '2024-11-03T04:16:00Z',
      total_amount: 51.96
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 34,
      sale_date: '2024-11-03T04:26:00Z',
      total_amount: 269.97
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 45,
      sale_date: '2024-11-03T05:13:00Z',
      total_amount: 1549.94
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 12,
      sale_date: '2024-11-03T06:02:00Z',
      total_amount: 199.98
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 48,
      sale_date: '2024-11-03T06:58:00Z',
      total_amount: 2799.96
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 55,
      sale_date: '2024-11-03T07:02:00Z',
      total_amount: 12.99
    },
    {
      fk_branch_id: 6,
      fk_customer_id: 34,
      sale_date: '2024-11-03T07:37:00Z',
      total_amount: 2699.97
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 36,
      sale_date: '2024-11-03T08:31:00Z',
      total_amount: 134.93
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 15,
      sale_date: '2024-11-03T08:45:00Z',
      total_amount: 1009.96
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 21,
      sale_date: '2024-11-03T09:24:00Z',
      total_amount: 1199.96
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 29,
      sale_date: '2024-11-03T09:37:00Z',
      total_amount: 1679.97
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 26,
      sale_date: '2024-11-03T09:44:00Z',
      total_amount: 89.97
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 37,
      sale_date: '2024-11-03T10:34:00Z',
      total_amount: 929.93
    },
    {
      fk_branch_id: 6,
      fk_customer_id: 8,
      sale_date: '2024-11-03T11:33:00Z',
      total_amount: 899.99
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 6,
      sale_date: '2024-11-03T11:35:00Z',
      total_amount: 59.96
    },
    {
      fk_branch_id: 6,
      fk_customer_id: 42,
      sale_date: '2024-11-03T12:08:00Z',
      total_amount: 29.99
    },
    {
      fk_branch_id: 6,
      fk_customer_id: 62,
      sale_date: '2024-11-03T13:02:00Z',
      total_amount: 1899.93
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 27,
      sale_date: '2024-11-03T13:10:00Z',
      total_amount: 169.96
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 62,
      sale_date: '2024-11-03T14:02:00Z',
      total_amount: 1099.94
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 56,
      sale_date: '2024-11-03T14:43:00Z',
      total_amount: 309.97
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 61,
      sale_date: '2024-11-03T14:59:00Z',
      total_amount: 38.97
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 20,
      sale_date: '2024-11-03T15:01:00Z',
      total_amount: 759.97
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 1,
      sale_date: '2024-11-03T15:03:00Z',
      total_amount: 39.95
    },
    {
      fk_branch_id: 6,
      fk_customer_id: 32,
      sale_date: '2024-11-03T15:51:00Z',
      total_amount: 449.97
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 29,
      sale_date: '2024-11-03T16:51:00Z',
      total_amount: 449.97
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 32,
      sale_date: '2024-11-03T17:22:00Z',
      total_amount: 519.96
    },
    {
      fk_branch_id: 6,
      fk_customer_id: 20,
      sale_date: '2024-11-03T17:27:00Z',
      total_amount: 199.93
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 38,
      sale_date: '2024-11-03T17:46:00Z',
      total_amount: 39.99
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 50,
      sale_date: '2024-11-03T18:23:00Z',
      total_amount: 218.91
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 12,
      sale_date: '2024-11-03T18:26:00Z',
      total_amount: 539.92
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 54,
      sale_date: '2024-11-03T18:47:00Z',
      total_amount: 1509.87
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 7,
      sale_date: '2024-11-03T19:28:00Z',
      total_amount: 179.98
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 39,
      sale_date: '2024-11-03T19:33:00Z',
      total_amount: 544.89
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 16,
      sale_date: '2024-11-03T20:02:00Z',
      total_amount: 607.88
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 23,
      sale_date: '2024-11-03T20:56:00Z',
      total_amount: 829.94
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 25,
      sale_date: '2024-11-03T21:18:00Z',
      total_amount: 479.93
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 19,
      sale_date: '2024-11-03T21:52:00Z',
      total_amount: 869.9
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 34,
      sale_date: '2024-11-03T22:51:00Z',
      total_amount: 25.98
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 42,
      sale_date: '2024-11-03T23:18:00Z',
      total_amount: 2834.91
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 26,
      sale_date: '2024-11-03T23:50:00Z',
      total_amount: 999.9
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 51,
      sale_date: '2024-11-04T00:13:00Z',
      total_amount: 307.92
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 54,
      sale_date: '2024-11-04T01:01:00Z',
      total_amount: 1759.88
    },
    {
      fk_branch_id: 6,
      fk_customer_id: 30,
      sale_date: '2024-11-04T01:12:00Z',
      total_amount: 1529.92
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 46,
      sale_date: '2024-11-04T01:57:00Z',
      total_amount: 59.98
    },
    {
      fk_branch_id: 6,
      fk_customer_id: 30,
      sale_date: '2024-11-04T02:20:00Z',
      total_amount: 799.89
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 53,
      sale_date: '2024-11-04T02:36:00Z',
      total_amount: 216.96
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 56,
      sale_date: '2024-11-04T03:12:00Z',
      total_amount: 1709.87
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 3,
      sale_date: '2024-11-04T04:06:00Z',
      total_amount: 539.93
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 25,
      sale_date: '2024-11-04T04:30:00Z',
      total_amount: 419.9
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 28,
      sale_date: '2024-11-04T05:17:00Z',
      total_amount: 119.98
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 14,
      sale_date: '2024-11-04T05:38:00Z',
      total_amount: 959.9
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 32,
      sale_date: '2024-11-04T06:09:00Z',
      total_amount: 819.92
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 14,
      sale_date: '2024-11-04T06:41:00Z',
      total_amount: 295.91
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 52,
      sale_date: '2024-11-04T07:03:00Z',
      total_amount: 649.9
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 24,
      sale_date: '2024-11-04T07:48:00Z',
      total_amount: 305.9
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 28,
      sale_date: '2024-11-04T08:26:00Z',
      total_amount: 34.99
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 57,
      sale_date: '2024-11-04T09:22:00Z',
      total_amount: 904.87
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 47,
      sale_date: '2024-11-04T10:17:00Z',
      total_amount: 1249.92
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 12,
      sale_date: '2024-11-04T10:20:00Z',
      total_amount: 204.91
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 22,
      sale_date: '2024-11-04T11:07:00Z',
      total_amount: 1209.89
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 49,
      sale_date: '2024-11-04T11:37:00Z',
      total_amount: 478.9
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 29,
      sale_date: '2024-11-04T12:09:00Z',
      total_amount: 669.91
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 37,
      sale_date: '2024-11-04T12:40:00Z',
      total_amount: 298.88
    },
    {
      fk_branch_id: 6,
      fk_customer_id: 19,
      sale_date: '2024-11-04T13:21:00Z',
      total_amount: 854.87
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 17,
      sale_date: '2024-11-04T13:29:00Z',
      total_amount: 499.92
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 44,
      sale_date: '2024-11-04T13:42:00Z',
      total_amount: 2964.9
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 48,
      sale_date: '2024-11-04T14:26:00Z',
      total_amount: 838.89
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 46,
      sale_date: '2024-11-04T15:05:00Z',
      total_amount: 39.99
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 58,
      sale_date: '2024-11-04T15:34:00Z',
      total_amount: 764.89
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 52,
      sale_date: '2024-11-04T15:49:00Z',
      total_amount: 679.91
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 35,
      sale_date: '2024-11-04T16:25:00Z',
      total_amount: 289.95
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 4,
      sale_date: '2024-11-04T17:11:00Z',
      total_amount: 809.92
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 62,
      sale_date: '2024-11-04T17:30:00Z',
      total_amount: 759.87
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 48,
      sale_date: '2024-11-04T18:27:00Z',
      total_amount: 299.96
    },
    {
      fk_branch_id: 6,
      fk_customer_id: 30,
      sale_date: '2024-11-04T18:36:00Z',
      total_amount: 1339.88
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 47,
      sale_date: '2024-11-04T19:34:00Z',
      total_amount: 359.97
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 45,
      sale_date: '2024-11-04T19:37:00Z',
      total_amount: 429.92
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 35,
      sale_date: '2024-11-04T20:03:00Z',
      total_amount: 584.93
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 19,
      sale_date: '2024-11-04T20:36:00Z',
      total_amount: 294.91
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 61,
      sale_date: '2024-11-04T21:36:00Z',
      total_amount: 319.94
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 19,
      sale_date: '2024-11-04T22:10:00Z',
      total_amount: 259.9
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 25,
      sale_date: '2024-11-04T22:12:00Z',
      total_amount: 304.93
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 6,
      sale_date: '2024-11-04T22:22:00Z',
      total_amount: 759.92
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 12,
      sale_date: '2024-11-04T22:23:00Z',
      total_amount: 1169.87
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 60,
      sale_date: '2024-11-04T23:07:00Z',
      total_amount: 249.93
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 31,
      sale_date: '2024-11-04T23:40:00Z',
      total_amount: 169.95
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 29,
      sale_date: '2024-11-05T00:25:00Z',
      total_amount: 1169.89
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 13,
      sale_date: '2024-11-05T00:41:00Z',
      total_amount: 14.97
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 38,
      sale_date: '2024-11-05T01:16:00Z',
      total_amount: 240.92
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 36,
      sale_date: '2024-11-05T01:51:00Z',
      total_amount: 1039.92
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 2,
      sale_date: '2024-11-05T02:28:00Z',
      total_amount: 331.92
    },
    {
      fk_branch_id: 6,
      fk_customer_id: 35,
      sale_date: '2024-11-05T02:33:00Z',
      total_amount: 549.93
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 35,
      sale_date: '2024-11-05T03:11:00Z',
      total_amount: 884.9
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 26,
      sale_date: '2024-11-05T03:38:00Z',
      total_amount: 719.91
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 24,
      sale_date: '2024-11-05T03:44:00Z',
      total_amount: 1694.92
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 49,
      sale_date: '2024-11-05T03:57:00Z',
      total_amount: 51.96
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 12,
      sale_date: '2024-11-05T04:31:00Z',
      total_amount: 258.94
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 33,
      sale_date: '2024-11-05T04:58:00Z',
      total_amount: 599.92
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 31,
      sale_date: '2024-11-05T05:24:00Z',
      total_amount: 413.91
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 22,
      sale_date: '2024-11-05T05:46:00Z',
      total_amount: 59.96
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 50,
      sale_date: '2024-11-05T06:27:00Z',
      total_amount: 1009.91
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 34,
      sale_date: '2024-11-05T07:25:00Z',
      total_amount: 714.92
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 60,
      sale_date: '2024-11-05T08:14:00Z',
      total_amount: 219.95
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 34,
      sale_date: '2024-11-05T09:00:00Z',
      total_amount: 849.89
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 62,
      sale_date: '2024-11-05T09:20:00Z',
      total_amount: 734.91
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 62,
      sale_date: '2024-11-05T10:14:00Z',
      total_amount: 131.94
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 24,
      sale_date: '2024-11-05T10:40:00Z',
      total_amount: 709.9
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 15,
      sale_date: '2024-11-05T11:09:00Z',
      total_amount: 964.91
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 40,
      sale_date: '2024-11-05T12:07:00Z',
      total_amount: 704.94
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 26,
      sale_date: '2024-11-05T12:54:00Z',
      total_amount: 299.94
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 9,
      sale_date: '2024-11-05T13:12:00Z',
      total_amount: 524.89
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 5,
      sale_date: '2024-11-05T13:46:00Z',
      total_amount: 199.99
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 34,
      sale_date: '2024-11-05T14:02:00Z',
      total_amount: 198.93
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 31,
      sale_date: '2024-11-05T14:34:00Z',
      total_amount: 329.92
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 59,
      sale_date: '2024-11-05T14:49:00Z',
      total_amount: 179.91
    },
    {
      fk_branch_id: 6,
      fk_customer_id: 51,
      sale_date: '2024-11-05T15:01:00Z',
      total_amount: 819.94
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 43,
      sale_date: '2024-11-05T15:33:00Z',
      total_amount: 909.92
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 22,
      sale_date: '2024-11-05T15:46:00Z',
      total_amount: 409.91
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 55,
      sale_date: '2024-11-05T16:19:00Z',
      total_amount: 909.88
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 62,
      sale_date: '2024-11-05T16:40:00Z',
      total_amount: 59.98
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 49,
      sale_date: '2024-11-05T17:36:00Z',
      total_amount: 319.96
    },
    {
      fk_branch_id: 6,
      fk_customer_id: 49,
      sale_date: '2024-11-05T18:08:00Z',
      total_amount: 399.93
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 45,
      sale_date: '2024-11-05T18:41:00Z',
      total_amount: 129.96
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 49,
      sale_date: '2024-11-05T19:19:00Z',
      total_amount: 869.89
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 53,
      sale_date: '2024-11-05T19:26:00Z',
      total_amount: 844.91
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 1,
      sale_date: '2024-11-05T20:05:00Z',
      total_amount: 419.91
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 44,
      sale_date: '2024-11-05T20:12:00Z',
      total_amount: 832.93
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 3,
      sale_date: '2024-11-05T20:41:00Z',
      total_amount: 124.96
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 41,
      sale_date: '2024-11-05T20:51:00Z',
      total_amount: 1119.91
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 9,
      sale_date: '2024-11-05T21:13:00Z',
      total_amount: 609.92
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 8,
      sale_date: '2024-11-05T22:13:00Z',
      total_amount: 609.91
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 28,
      sale_date: '2024-11-05T22:58:00Z',
      total_amount: 439.94
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 44,
      sale_date: '2024-11-05T23:28:00Z',
      total_amount: 1169.9
    },
    {
      fk_branch_id: 6,
      fk_customer_id: 46,
      sale_date: '2024-11-05T23:45:00Z',
      total_amount: 259.98
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 52,
      sale_date: '2024-11-06T00:30:00Z',
      total_amount: 236.9
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 49,
      sale_date: '2024-11-06T01:02:00Z',
      total_amount: 489.95
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 41,
      sale_date: '2024-11-06T01:52:00Z',
      total_amount: 699.9
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 22,
      sale_date: '2024-11-06T02:36:00Z',
      total_amount: 854.9
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 60,
      sale_date: '2024-11-06T02:48:00Z',
      total_amount: 199.95
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 19,
      sale_date: '2024-11-06T03:15:00Z',
      total_amount: 939.93
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 6,
      sale_date: '2024-11-06T03:43:00Z',
      total_amount: 1509.9
    },
    {
      fk_branch_id: 6,
      fk_customer_id: 42,
      sale_date: '2024-11-06T04:13:00Z',
      total_amount: 499.94
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 31,
      sale_date: '2024-11-06T04:17:00Z',
      total_amount: 799.92
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 43,
      sale_date: '2024-11-06T05:10:00Z',
      total_amount: 265.92
    },
    {
      fk_branch_id: 6,
      fk_customer_id: 28,
      sale_date: '2024-11-06T05:35:00Z',
      total_amount: 309.93
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 62,
      sale_date: '2024-11-06T06:01:00Z',
      total_amount: 454.9
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 22,
      sale_date: '2024-11-06T06:49:00Z',
      total_amount: 432.93
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 21,
      sale_date: '2024-11-06T07:47:00Z',
      total_amount: 859.88
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 56,
      sale_date: '2024-11-06T08:28:00Z',
      total_amount: 79.98
    },
    {
      fk_branch_id: 6,
      fk_customer_id: 19,
      sale_date: '2024-11-06T08:55:00Z',
      total_amount: 399.95
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 59,
      sale_date: '2024-11-06T09:07:00Z',
      total_amount: 1764.86
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 28,
      sale_date: '2024-11-06T10:01:00Z',
      total_amount: 719.91
    },
    {
      fk_branch_id: 6,
      fk_customer_id: 59,
      sale_date: '2024-11-06T10:24:00Z',
      total_amount: 254.94
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 38,
      sale_date: '2024-11-06T11:01:00Z',
      total_amount: 397.92
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 16,
      sale_date: '2024-11-06T11:04:00Z',
      total_amount: 182.9
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 29,
      sale_date: '2024-11-06T11:50:00Z',
      total_amount: 199.98
    },
    {
      fk_branch_id: 6,
      fk_customer_id: 29,
      sale_date: '2024-11-06T12:26:00Z',
      total_amount: 619.91
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 9,
      sale_date: '2024-11-06T13:23:00Z',
      total_amount: 699.9
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 23,
      sale_date: '2024-11-06T14:04:00Z',
      total_amount: 1179.93
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 61,
      sale_date: '2024-11-06T15:00:00Z',
      total_amount: 189.9
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 34,
      sale_date: '2024-11-06T15:22:00Z',
      total_amount: 1419.92
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 34,
      sale_date: '2024-11-06T15:36:00Z',
      total_amount: 371.94
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 38,
      sale_date: '2024-11-06T16:20:00Z',
      total_amount: 599.9
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 46,
      sale_date: '2024-11-06T16:33:00Z',
      total_amount: 219.94
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 20,
      sale_date: '2024-11-06T16:57:00Z',
      total_amount: 1389.92
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 5,
      sale_date: '2024-11-06T17:57:00Z',
      total_amount: 512.93
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 22,
      sale_date: '2024-11-06T18:32:00Z',
      total_amount: 599.91
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 52,
      sale_date: '2024-11-06T19:22:00Z',
      total_amount: 1399.92
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 53,
      sale_date: '2024-11-06T20:22:00Z',
      total_amount: 1239.9
    },
    {
      fk_branch_id: 6,
      fk_customer_id: 44,
      sale_date: '2024-11-06T20:31:00Z',
      total_amount: 419.92
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 13,
      sale_date: '2024-11-06T20:36:00Z',
      total_amount: 304.93
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 42,
      sale_date: '2024-11-06T21:04:00Z',
      total_amount: 218.91
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 17,
      sale_date: '2024-11-06T21:14:00Z',
      total_amount: 299.93
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 47,
      sale_date: '2024-11-06T21:56:00Z',
      total_amount: 239.95
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 11,
      sale_date: '2024-11-06T22:45:00Z',
      total_amount: 915.9
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 28,
      sale_date: '2024-11-06T22:53:00Z',
      total_amount: 609.92
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 25,
      sale_date: '2024-11-06T23:15:00Z',
      total_amount: 1279.93
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 16,
      sale_date: '2024-11-06T23:33:00Z',
      total_amount: 1209.88
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 36,
      sale_date: '2024-11-07T00:14:00Z',
      total_amount: 99.94
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 3,
      sale_date: '2024-11-07T00:45:00Z',
      total_amount: 674.92
    },
    {
      fk_branch_id: 6,
      fk_customer_id: 23,
      sale_date: '2024-11-07T01:38:00Z',
      total_amount: 269.93
    },
    {
      fk_branch_id: 5,
      fk_customer_id: 3,
      sale_date: '2024-11-07T01:49:00Z',
      total_amount: 479.91
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 44,
      sale_date: '2024-11-07T02:22:00Z',
      total_amount: 164.94
    },
    {
      fk_branch_id: 6,
      fk_customer_id: 36,
      sale_date: '2024-11-07T03:02:00Z',
      total_amount: 464.91
    },
    {
      fk_branch_id: 2,
      fk_customer_id: 44,
      sale_date: '2024-11-07T03:06:00Z',
      total_amount: 199.95
    },
    {
      fk_branch_id: 4,
      fk_customer_id: 2,
      sale_date: '2024-11-07T03:15:00Z',
      total_amount: 192.97
    },
    {
      fk_branch_id: 1,
      fk_customer_id: 24,
      sale_date: '2024-11-07T03:57:00Z',
      total_amount: 669.92
    },
    {
      fk_branch_id: 3,
      fk_customer_id: 8,
      sale_date: '2024-11-07T04:27:00Z',
      total_amount: 779.94
    },
    {
      fk_branch_id: 7,
      fk_customer_id: 53,
      sale_date: '2024-11-07T04:52:00Z',
      total_amount: 739.95
    }
  ])
}
