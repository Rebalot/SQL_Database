/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex.raw('TRUNCATE stock RESTART IDENTITY CASCADE')
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('stock').insert([
    {
      fk_branch_id: 1,
      fk_product_id: 1,
      quantity: 804,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 2,
      quantity: 995,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 3,
      quantity: 715,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 4,
      quantity: 248,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 5,
      quantity: 358,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 6,
      quantity: 323,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 7,
      quantity: 847,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 8,
      quantity: 603,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 9,
      quantity: 820,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 10,
      quantity: 290,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 11,
      quantity: 43,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 12,
      quantity: 127,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 13,
      quantity: 572,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 14,
      quantity: 874,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 15,
      quantity: 337,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 16,
      quantity: 626,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 17,
      quantity: 82,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 18,
      quantity: 825,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 19,
      quantity: 994,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 20,
      quantity: 894,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 21,
      quantity: 415,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 22,
      quantity: 659,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 23,
      quantity: 883,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 24,
      quantity: 778,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 25,
      quantity: 229,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 26,
      quantity: 178,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 27,
      quantity: 869,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 28,
      quantity: 451,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 29,
      quantity: 776,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 30,
      quantity: 277,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 31,
      quantity: 162,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 32,
      quantity: 596,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 33,
      quantity: 220,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 34,
      quantity: 304,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 35,
      quantity: 878,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 36,
      quantity: 97,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 37,
      quantity: 177,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 38,
      quantity: 625,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 39,
      quantity: 230,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 40,
      quantity: 534,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 41,
      quantity: 108,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 42,
      quantity: 692,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 43,
      quantity: 430,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 44,
      quantity: 71,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 45,
      quantity: 799,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 46,
      quantity: 738,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 47,
      quantity: 788,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 48,
      quantity: 336,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 49,
      quantity: 691,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 50,
      quantity: 892,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 51,
      quantity: 106,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 52,
      quantity: 251,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 53,
      quantity: 356,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 54,
      quantity: 465,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 55,
      quantity: 455,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 56,
      quantity: 175,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 57,
      quantity: 761,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 58,
      quantity: 95,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 59,
      quantity: 828,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 60,
      quantity: 980,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 61,
      quantity: 799,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 62,
      quantity: 504,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 63,
      quantity: 957,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 64,
      quantity: 545,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 65,
      quantity: 262,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 66,
      quantity: 482,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 67,
      quantity: 786,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 68,
      quantity: 569,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 69,
      quantity: 87,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 70,
      quantity: 225,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 71,
      quantity: 811,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 72,
      quantity: 214,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 73,
      quantity: 886,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 74,
      quantity: 676,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 75,
      quantity: 249,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 76,
      quantity: 688,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 77,
      quantity: 361,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 78,
      quantity: 335,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 79,
      quantity: 93,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 80,
      quantity: 290,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 81,
      quantity: 703,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 82,
      quantity: 487,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 83,
      quantity: 373,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 84,
      quantity: 395,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 85,
      quantity: 993,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 86,
      quantity: 514,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 87,
      quantity: 830,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 88,
      quantity: 670,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 89,
      quantity: 780,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 90,
      quantity: 806,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 91,
      quantity: 996,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 92,
      quantity: 966,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 93,
      quantity: 211,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 94,
      quantity: 164,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 95,
      quantity: 822,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 96,
      quantity: 760,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 97,
      quantity: 250,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 98,
      quantity: 355,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 99,
      quantity: 996,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 100,
      quantity: 61,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 101,
      quantity: 656,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 102,
      quantity: 307,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 103,
      quantity: 241,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 104,
      quantity: 588,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 105,
      quantity: 481,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 106,
      quantity: 289,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 107,
      quantity: 822,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 108,
      quantity: 153,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 109,
      quantity: 179,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 110,
      quantity: 983,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 111,
      quantity: 814,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 112,
      quantity: 849,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 113,
      quantity: 830,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 114,
      quantity: 235,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 115,
      quantity: 181,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 116,
      quantity: 804,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 117,
      quantity: 395,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 118,
      quantity: 948,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 119,
      quantity: 727,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 120,
      quantity: 182,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 121,
      quantity: 27,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 122,
      quantity: 713,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 123,
      quantity: 112,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 124,
      quantity: 987,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 125,
      quantity: 454,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 126,
      quantity: 314,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 127,
      quantity: 660,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 128,
      quantity: 28,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 129,
      quantity: 632,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 130,
      quantity: 911,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 131,
      quantity: 661,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 132,
      quantity: 22,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 133,
      quantity: 135,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 134,
      quantity: 442,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 135,
      quantity: 995,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 136,
      quantity: 848,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 137,
      quantity: 178,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 138,
      quantity: 118,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 139,
      quantity: 40,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 140,
      quantity: 288,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 141,
      quantity: 835,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 142,
      quantity: 759,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 143,
      quantity: 714,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 144,
      quantity: 960,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 145,
      quantity: 876,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 146,
      quantity: 597,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 147,
      quantity: 514,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 148,
      quantity: 456,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 149,
      quantity: 547,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 150,
      quantity: 124,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 151,
      quantity: 833,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 152,
      quantity: 602,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 153,
      quantity: 139,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 154,
      quantity: 282,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 155,
      quantity: 549,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 156,
      quantity: 245,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 157,
      quantity: 598,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 158,
      quantity: 143,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 159,
      quantity: 602,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 160,
      quantity: 949,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 161,
      quantity: 122,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 162,
      quantity: 687,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 163,
      quantity: 19,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 164,
      quantity: 331,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 165,
      quantity: 797,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 166,
      quantity: 721,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 167,
      quantity: 140,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 168,
      quantity: 144,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 169,
      quantity: 445,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 170,
      quantity: 463,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 171,
      quantity: 205,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 172,
      quantity: 223,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 173,
      quantity: 708,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 174,
      quantity: 502,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 175,
      quantity: 585,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 176,
      quantity: 357,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 177,
      quantity: 120,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 178,
      quantity: 810,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 179,
      quantity: 267,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 180,
      quantity: 655,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 181,
      quantity: 100,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 182,
      quantity: 898,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 183,
      quantity: 410,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 184,
      quantity: 850,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 185,
      quantity: 483,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 186,
      quantity: 140,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 187,
      quantity: 695,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 188,
      quantity: 191,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 189,
      quantity: 223,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 190,
      quantity: 732,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 191,
      quantity: 456,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 192,
      quantity: 105,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 193,
      quantity: 399,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 194,
      quantity: 469,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 195,
      quantity: 87,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 196,
      quantity: 114,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 197,
      quantity: 150,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 198,
      quantity: 148,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 199,
      quantity: 925,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 200,
      quantity: 908,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 201,
      quantity: 867,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 202,
      quantity: 153,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 203,
      quantity: 456,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 204,
      quantity: 604,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 205,
      quantity: 190,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 206,
      quantity: 449,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 207,
      quantity: 235,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 208,
      quantity: 508,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 209,
      quantity: 464,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 210,
      quantity: 868,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 211,
      quantity: 966,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 212,
      quantity: 621,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 213,
      quantity: 430,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 214,
      quantity: 379,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 215,
      quantity: 305,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 216,
      quantity: 251,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 217,
      quantity: 926,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 218,
      quantity: 975,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 219,
      quantity: 848,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 1,
      fk_product_id: 220,
      quantity: 417,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 1,
      quantity: 53,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 2,
      quantity: 647,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 3,
      quantity: 476,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 4,
      quantity: 887,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 5,
      quantity: 185,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 6,
      quantity: 437,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 7,
      quantity: 670,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 8,
      quantity: 476,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 9,
      quantity: 445,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 10,
      quantity: 626,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 11,
      quantity: 82,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 12,
      quantity: 417,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 13,
      quantity: 891,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 14,
      quantity: 826,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 15,
      quantity: 178,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 16,
      quantity: 266,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 17,
      quantity: 948,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 18,
      quantity: 594,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 19,
      quantity: 584,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 20,
      quantity: 292,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 21,
      quantity: 582,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 22,
      quantity: 794,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 23,
      quantity: 527,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 24,
      quantity: 962,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 25,
      quantity: 549,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 26,
      quantity: 659,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 27,
      quantity: 9,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 28,
      quantity: 111,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 29,
      quantity: 820,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 30,
      quantity: 605,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 31,
      quantity: 983,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 32,
      quantity: 654,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 33,
      quantity: 201,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 34,
      quantity: 369,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 35,
      quantity: 498,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 36,
      quantity: 948,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 37,
      quantity: 465,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 38,
      quantity: 804,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 39,
      quantity: 475,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 40,
      quantity: 876,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 41,
      quantity: 473,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 42,
      quantity: 493,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 43,
      quantity: 233,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 44,
      quantity: 315,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 45,
      quantity: 92,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 46,
      quantity: 168,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 47,
      quantity: 895,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 48,
      quantity: 413,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 49,
      quantity: 778,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 50,
      quantity: 694,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 51,
      quantity: 40,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 52,
      quantity: 436,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 53,
      quantity: 239,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 54,
      quantity: 528,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 55,
      quantity: 982,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 56,
      quantity: 126,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 57,
      quantity: 46,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 58,
      quantity: 83,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 59,
      quantity: 710,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 60,
      quantity: 189,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 61,
      quantity: 807,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 62,
      quantity: 265,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 63,
      quantity: 29,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 64,
      quantity: 346,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 65,
      quantity: 409,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 66,
      quantity: 976,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 67,
      quantity: 594,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 68,
      quantity: 200,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 69,
      quantity: 494,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 70,
      quantity: 365,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 71,
      quantity: 387,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 72,
      quantity: 460,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 73,
      quantity: 500,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 74,
      quantity: 477,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 75,
      quantity: 130,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 76,
      quantity: 424,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 77,
      quantity: 804,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 78,
      quantity: 314,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 79,
      quantity: 882,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 80,
      quantity: 535,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 81,
      quantity: 90,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 82,
      quantity: 649,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 83,
      quantity: 374,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 84,
      quantity: 720,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 85,
      quantity: 407,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 86,
      quantity: 537,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 87,
      quantity: 978,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 88,
      quantity: 405,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 89,
      quantity: 226,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 90,
      quantity: 335,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 91,
      quantity: 50,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 92,
      quantity: 641,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 93,
      quantity: 251,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 94,
      quantity: 849,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 95,
      quantity: 530,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 96,
      quantity: 987,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 97,
      quantity: 209,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 98,
      quantity: 136,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 99,
      quantity: 503,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 100,
      quantity: 73,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 101,
      quantity: 242,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 102,
      quantity: 905,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 103,
      quantity: 672,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 104,
      quantity: 985,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 105,
      quantity: 20,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 106,
      quantity: 651,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 107,
      quantity: 582,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 108,
      quantity: 992,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 109,
      quantity: 269,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 110,
      quantity: 357,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 111,
      quantity: 149,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 112,
      quantity: 310,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 113,
      quantity: 114,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 114,
      quantity: 649,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 115,
      quantity: 961,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 116,
      quantity: 43,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 117,
      quantity: 86,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 118,
      quantity: 510,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 119,
      quantity: 849,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 120,
      quantity: 735,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 121,
      quantity: 29,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 122,
      quantity: 803,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 123,
      quantity: 18,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 124,
      quantity: 570,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 125,
      quantity: 779,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 126,
      quantity: 307,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 127,
      quantity: 93,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 128,
      quantity: 470,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 129,
      quantity: 777,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 130,
      quantity: 225,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 131,
      quantity: 736,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 132,
      quantity: 407,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 133,
      quantity: 893,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 134,
      quantity: 845,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 135,
      quantity: 332,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 136,
      quantity: 647,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 137,
      quantity: 972,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 138,
      quantity: 244,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 139,
      quantity: 749,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 140,
      quantity: 391,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 141,
      quantity: 574,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 142,
      quantity: 923,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 143,
      quantity: 638,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 144,
      quantity: 37,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 145,
      quantity: 371,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 146,
      quantity: 192,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 147,
      quantity: 51,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 148,
      quantity: 907,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 149,
      quantity: 240,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 150,
      quantity: 568,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 151,
      quantity: 660,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 152,
      quantity: 652,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 153,
      quantity: 831,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 154,
      quantity: 996,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 155,
      quantity: 152,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 156,
      quantity: 235,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 157,
      quantity: 399,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 158,
      quantity: 133,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 159,
      quantity: 257,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 160,
      quantity: 201,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 161,
      quantity: 488,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 162,
      quantity: 275,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 163,
      quantity: 206,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 164,
      quantity: 343,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 165,
      quantity: 21,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 166,
      quantity: 48,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 167,
      quantity: 855,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 168,
      quantity: 815,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 169,
      quantity: 549,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 170,
      quantity: 784,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 171,
      quantity: 269,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 172,
      quantity: 728,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 173,
      quantity: 377,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 174,
      quantity: 975,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 175,
      quantity: 279,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 176,
      quantity: 519,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 177,
      quantity: 126,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 178,
      quantity: 569,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 179,
      quantity: 743,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 180,
      quantity: 153,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 181,
      quantity: 415,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 182,
      quantity: 786,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 183,
      quantity: 13,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 184,
      quantity: 884,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 185,
      quantity: 261,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 186,
      quantity: 256,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 187,
      quantity: 560,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 188,
      quantity: 718,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 189,
      quantity: 796,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 190,
      quantity: 375,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 191,
      quantity: 337,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 192,
      quantity: 223,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 193,
      quantity: 214,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 194,
      quantity: 566,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 195,
      quantity: 754,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 196,
      quantity: 452,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 197,
      quantity: 378,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 198,
      quantity: 179,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 199,
      quantity: 310,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 200,
      quantity: 618,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 201,
      quantity: 426,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 202,
      quantity: 896,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 203,
      quantity: 202,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 204,
      quantity: 727,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 205,
      quantity: 788,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 206,
      quantity: 798,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 207,
      quantity: 71,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 208,
      quantity: 654,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 209,
      quantity: 902,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 210,
      quantity: 151,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 211,
      quantity: 215,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 212,
      quantity: 513,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 213,
      quantity: 313,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 214,
      quantity: 866,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 215,
      quantity: 892,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 216,
      quantity: 424,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 217,
      quantity: 755,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 218,
      quantity: 847,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 219,
      quantity: 999,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 2,
      fk_product_id: 220,
      quantity: 861,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 1,
      quantity: 238,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 2,
      quantity: 442,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 3,
      quantity: 728,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 4,
      quantity: 842,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 5,
      quantity: 76,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 6,
      quantity: 421,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 7,
      quantity: 713,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 8,
      quantity: 289,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 9,
      quantity: 699,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 10,
      quantity: 487,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 11,
      quantity: 883,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 12,
      quantity: 382,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 13,
      quantity: 5,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 14,
      quantity: 734,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 15,
      quantity: 564,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 16,
      quantity: 389,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 17,
      quantity: 953,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 18,
      quantity: 440,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 19,
      quantity: 390,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 20,
      quantity: 198,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 21,
      quantity: 726,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 22,
      quantity: 798,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 23,
      quantity: 930,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 24,
      quantity: 125,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 25,
      quantity: 519,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 26,
      quantity: 671,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 27,
      quantity: 110,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 28,
      quantity: 782,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 29,
      quantity: 133,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 30,
      quantity: 998,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 31,
      quantity: 202,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 32,
      quantity: 222,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 33,
      quantity: 890,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 34,
      quantity: 308,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 35,
      quantity: 521,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 36,
      quantity: 136,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 37,
      quantity: 304,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 38,
      quantity: 298,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 39,
      quantity: 755,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 40,
      quantity: 811,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 41,
      quantity: 157,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 42,
      quantity: 415,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 43,
      quantity: 315,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 44,
      quantity: 184,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 45,
      quantity: 503,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 46,
      quantity: 980,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 47,
      quantity: 312,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 48,
      quantity: 182,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 49,
      quantity: 571,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 50,
      quantity: 670,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 51,
      quantity: 681,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 52,
      quantity: 94,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 53,
      quantity: 195,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 54,
      quantity: 721,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 55,
      quantity: 968,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 56,
      quantity: 697,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 57,
      quantity: 750,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 58,
      quantity: 899,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 59,
      quantity: 462,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 60,
      quantity: 461,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 61,
      quantity: 638,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 62,
      quantity: 270,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 63,
      quantity: 212,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 64,
      quantity: 596,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 65,
      quantity: 298,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 66,
      quantity: 702,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 67,
      quantity: 668,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 68,
      quantity: 657,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 69,
      quantity: 158,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 70,
      quantity: 978,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 71,
      quantity: 712,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 72,
      quantity: 90,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 73,
      quantity: 497,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 74,
      quantity: 372,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 75,
      quantity: 318,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 76,
      quantity: 934,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 77,
      quantity: 563,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 78,
      quantity: 961,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 79,
      quantity: 976,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 80,
      quantity: 46,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 81,
      quantity: 760,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 82,
      quantity: 129,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 83,
      quantity: 860,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 84,
      quantity: 976,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 85,
      quantity: 268,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 86,
      quantity: 220,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 87,
      quantity: 927,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 88,
      quantity: 901,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 89,
      quantity: 894,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 90,
      quantity: 457,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 91,
      quantity: 853,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 92,
      quantity: 319,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 93,
      quantity: 72,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 94,
      quantity: 989,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 95,
      quantity: 680,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 96,
      quantity: 135,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 97,
      quantity: 521,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 98,
      quantity: 212,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 99,
      quantity: 695,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 100,
      quantity: 114,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 101,
      quantity: 180,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 102,
      quantity: 696,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 103,
      quantity: 41,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 104,
      quantity: 671,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 105,
      quantity: 461,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 106,
      quantity: 980,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 107,
      quantity: 745,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 108,
      quantity: 931,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 109,
      quantity: 675,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 110,
      quantity: 714,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 111,
      quantity: 816,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 112,
      quantity: 351,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 113,
      quantity: 495,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 114,
      quantity: 726,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 115,
      quantity: 212,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 116,
      quantity: 739,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 117,
      quantity: 813,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 118,
      quantity: 798,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 119,
      quantity: 457,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 120,
      quantity: 974,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 121,
      quantity: 631,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 122,
      quantity: 114,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 123,
      quantity: 159,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 124,
      quantity: 641,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 125,
      quantity: 694,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 126,
      quantity: 975,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 127,
      quantity: 959,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 128,
      quantity: 143,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 129,
      quantity: 171,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 130,
      quantity: 844,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 131,
      quantity: 63,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 132,
      quantity: 989,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 133,
      quantity: 835,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 134,
      quantity: 196,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 135,
      quantity: 718,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 136,
      quantity: 700,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 137,
      quantity: 149,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 138,
      quantity: 214,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 139,
      quantity: 122,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 140,
      quantity: 697,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 141,
      quantity: 770,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 142,
      quantity: 816,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 143,
      quantity: 538,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 144,
      quantity: 512,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 145,
      quantity: 519,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 146,
      quantity: 933,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 147,
      quantity: 808,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 148,
      quantity: 912,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 149,
      quantity: 592,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 150,
      quantity: 268,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 151,
      quantity: 879,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 152,
      quantity: 319,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 153,
      quantity: 394,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 154,
      quantity: 594,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 155,
      quantity: 44,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 156,
      quantity: 799,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 157,
      quantity: 594,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 158,
      quantity: 821,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 159,
      quantity: 731,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 160,
      quantity: 874,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 161,
      quantity: 69,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 162,
      quantity: 611,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 163,
      quantity: 734,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 164,
      quantity: 878,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 165,
      quantity: 329,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 166,
      quantity: 461,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 167,
      quantity: 861,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 168,
      quantity: 629,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 169,
      quantity: 906,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 170,
      quantity: 8,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 171,
      quantity: 42,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 172,
      quantity: 600,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 173,
      quantity: 498,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 174,
      quantity: 332,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 175,
      quantity: 886,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 176,
      quantity: 87,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 177,
      quantity: 480,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 178,
      quantity: 892,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 179,
      quantity: 649,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 180,
      quantity: 830,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 181,
      quantity: 634,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 182,
      quantity: 119,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 183,
      quantity: 398,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 184,
      quantity: 868,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 185,
      quantity: 887,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 186,
      quantity: 831,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 187,
      quantity: 407,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 188,
      quantity: 544,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 189,
      quantity: 420,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 190,
      quantity: 970,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 191,
      quantity: 185,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 192,
      quantity: 716,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 193,
      quantity: 624,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 194,
      quantity: 578,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 195,
      quantity: 75,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 196,
      quantity: 267,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 197,
      quantity: 989,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 198,
      quantity: 454,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 199,
      quantity: 568,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 200,
      quantity: 300,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 201,
      quantity: 828,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 202,
      quantity: 112,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 203,
      quantity: 192,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 204,
      quantity: 951,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 205,
      quantity: 810,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 206,
      quantity: 673,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 207,
      quantity: 769,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 208,
      quantity: 328,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 209,
      quantity: 334,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 210,
      quantity: 539,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 211,
      quantity: 247,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 212,
      quantity: 256,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 213,
      quantity: 11,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 214,
      quantity: 107,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 215,
      quantity: 528,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 216,
      quantity: 243,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 217,
      quantity: 192,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 218,
      quantity: 85,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 219,
      quantity: 867,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 3,
      fk_product_id: 220,
      quantity: 364,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 1,
      quantity: 522,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 2,
      quantity: 711,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 3,
      quantity: 461,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 4,
      quantity: 281,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 5,
      quantity: 500,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 6,
      quantity: 102,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 7,
      quantity: 74,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 8,
      quantity: 943,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 9,
      quantity: 68,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 10,
      quantity: 502,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 11,
      quantity: 257,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 12,
      quantity: 135,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 13,
      quantity: 259,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 14,
      quantity: 301,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 15,
      quantity: 922,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 16,
      quantity: 605,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 17,
      quantity: 416,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 18,
      quantity: 286,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 19,
      quantity: 485,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 20,
      quantity: 212,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 21,
      quantity: 217,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 22,
      quantity: 886,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 23,
      quantity: 110,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 24,
      quantity: 227,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 25,
      quantity: 567,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 26,
      quantity: 449,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 27,
      quantity: 593,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 28,
      quantity: 753,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 29,
      quantity: 244,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 30,
      quantity: 720,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 31,
      quantity: 387,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 32,
      quantity: 776,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 33,
      quantity: 749,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 34,
      quantity: 947,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 35,
      quantity: 913,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 36,
      quantity: 687,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 37,
      quantity: 736,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 38,
      quantity: 934,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 39,
      quantity: 630,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 40,
      quantity: 447,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 41,
      quantity: 478,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 42,
      quantity: 137,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 43,
      quantity: 344,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 44,
      quantity: 248,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 45,
      quantity: 363,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 46,
      quantity: 725,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 47,
      quantity: 326,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 48,
      quantity: 482,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 49,
      quantity: 313,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 50,
      quantity: 619,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 51,
      quantity: 455,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 52,
      quantity: 6,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 53,
      quantity: 933,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 54,
      quantity: 615,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 55,
      quantity: 90,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 56,
      quantity: 384,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 57,
      quantity: 626,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 58,
      quantity: 838,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 59,
      quantity: 986,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 60,
      quantity: 59,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 61,
      quantity: 256,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 62,
      quantity: 882,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 63,
      quantity: 882,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 64,
      quantity: 204,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 65,
      quantity: 884,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 66,
      quantity: 168,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 67,
      quantity: 61,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 68,
      quantity: 676,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 69,
      quantity: 394,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 70,
      quantity: 683,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 71,
      quantity: 341,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 72,
      quantity: 791,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 73,
      quantity: 427,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 74,
      quantity: 18,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 75,
      quantity: 830,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 76,
      quantity: 732,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 77,
      quantity: 114,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 78,
      quantity: 303,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 79,
      quantity: 543,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 80,
      quantity: 255,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 81,
      quantity: 943,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 82,
      quantity: 443,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 83,
      quantity: 45,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 84,
      quantity: 443,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 85,
      quantity: 721,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 86,
      quantity: 477,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 87,
      quantity: 615,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 88,
      quantity: 799,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 89,
      quantity: 399,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 90,
      quantity: 718,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 91,
      quantity: 873,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 92,
      quantity: 735,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 93,
      quantity: 537,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 94,
      quantity: 789,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 95,
      quantity: 571,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 96,
      quantity: 581,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 97,
      quantity: 854,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 98,
      quantity: 966,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 99,
      quantity: 189,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 100,
      quantity: 632,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 101,
      quantity: 375,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 102,
      quantity: 110,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 103,
      quantity: 331,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 104,
      quantity: 167,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 105,
      quantity: 336,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 106,
      quantity: 550,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 107,
      quantity: 737,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 108,
      quantity: 250,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 109,
      quantity: 115,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 110,
      quantity: 766,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 111,
      quantity: 928,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 112,
      quantity: 463,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 113,
      quantity: 320,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 114,
      quantity: 307,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 115,
      quantity: 218,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 116,
      quantity: 377,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 117,
      quantity: 210,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 118,
      quantity: 694,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 119,
      quantity: 880,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 120,
      quantity: 732,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 121,
      quantity: 913,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 122,
      quantity: 495,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 123,
      quantity: 189,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 124,
      quantity: 975,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 125,
      quantity: 327,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 126,
      quantity: 422,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 127,
      quantity: 339,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 128,
      quantity: 603,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 129,
      quantity: 9,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 130,
      quantity: 638,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 131,
      quantity: 955,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 132,
      quantity: 294,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 133,
      quantity: 572,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 134,
      quantity: 441,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 135,
      quantity: 649,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 136,
      quantity: 867,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 137,
      quantity: 912,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 138,
      quantity: 293,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 139,
      quantity: 251,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 140,
      quantity: 870,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 141,
      quantity: 826,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 142,
      quantity: 200,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 143,
      quantity: 233,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 144,
      quantity: 387,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 145,
      quantity: 538,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 146,
      quantity: 823,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 147,
      quantity: 939,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 148,
      quantity: 587,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 149,
      quantity: 810,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 150,
      quantity: 870,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 151,
      quantity: 414,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 152,
      quantity: 563,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 153,
      quantity: 14,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 154,
      quantity: 977,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 155,
      quantity: 927,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 156,
      quantity: 740,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 157,
      quantity: 675,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 158,
      quantity: 376,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 159,
      quantity: 477,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 160,
      quantity: 427,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 161,
      quantity: 752,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 162,
      quantity: 434,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 163,
      quantity: 172,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 164,
      quantity: 105,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 165,
      quantity: 570,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 166,
      quantity: 113,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 167,
      quantity: 881,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 168,
      quantity: 657,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 169,
      quantity: 262,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 170,
      quantity: 471,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 171,
      quantity: 118,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 172,
      quantity: 131,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 173,
      quantity: 796,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 174,
      quantity: 236,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 175,
      quantity: 649,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 176,
      quantity: 890,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 177,
      quantity: 389,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 178,
      quantity: 435,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 179,
      quantity: 784,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 180,
      quantity: 7,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 181,
      quantity: 317,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 182,
      quantity: 977,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 183,
      quantity: 765,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 184,
      quantity: 894,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 185,
      quantity: 437,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 186,
      quantity: 679,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 187,
      quantity: 826,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 188,
      quantity: 12,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 189,
      quantity: 942,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 190,
      quantity: 811,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 191,
      quantity: 507,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 192,
      quantity: 608,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 193,
      quantity: 225,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 194,
      quantity: 970,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 195,
      quantity: 714,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 196,
      quantity: 752,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 197,
      quantity: 970,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 198,
      quantity: 2,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 199,
      quantity: 90,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 200,
      quantity: 948,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 201,
      quantity: 579,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 202,
      quantity: 479,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 203,
      quantity: 494,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 204,
      quantity: 680,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 205,
      quantity: 144,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 206,
      quantity: 417,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 207,
      quantity: 384,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 208,
      quantity: 503,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 209,
      quantity: 161,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 210,
      quantity: 665,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 211,
      quantity: 667,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 212,
      quantity: 157,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 213,
      quantity: 300,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 214,
      quantity: 237,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 215,
      quantity: 956,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 216,
      quantity: 478,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 217,
      quantity: 42,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 218,
      quantity: 852,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 219,
      quantity: 607,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 4,
      fk_product_id: 220,
      quantity: 343,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 1,
      quantity: 801,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 2,
      quantity: 847,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 3,
      quantity: 115,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 4,
      quantity: 883,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 5,
      quantity: 147,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 6,
      quantity: 550,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 7,
      quantity: 308,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 8,
      quantity: 319,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 9,
      quantity: 648,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 10,
      quantity: 236,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 11,
      quantity: 304,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 12,
      quantity: 308,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 13,
      quantity: 381,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 14,
      quantity: 137,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 15,
      quantity: 885,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 16,
      quantity: 462,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 17,
      quantity: 103,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 18,
      quantity: 232,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 19,
      quantity: 305,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 20,
      quantity: 598,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 21,
      quantity: 795,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 22,
      quantity: 728,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 23,
      quantity: 982,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 24,
      quantity: 901,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 25,
      quantity: 812,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 26,
      quantity: 59,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 27,
      quantity: 267,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 28,
      quantity: 269,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 29,
      quantity: 530,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 30,
      quantity: 977,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 31,
      quantity: 353,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 32,
      quantity: 445,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 33,
      quantity: 744,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 34,
      quantity: 579,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 35,
      quantity: 377,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 36,
      quantity: 345,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 37,
      quantity: 123,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 38,
      quantity: 381,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 39,
      quantity: 977,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 40,
      quantity: 230,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 41,
      quantity: 635,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 42,
      quantity: 759,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 43,
      quantity: 684,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 44,
      quantity: 387,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 45,
      quantity: 623,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 46,
      quantity: 69,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 47,
      quantity: 214,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 48,
      quantity: 98,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 49,
      quantity: 868,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 50,
      quantity: 298,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 51,
      quantity: 633,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 52,
      quantity: 410,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 53,
      quantity: 910,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 54,
      quantity: 263,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 55,
      quantity: 494,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 56,
      quantity: 586,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 57,
      quantity: 466,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 58,
      quantity: 462,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 59,
      quantity: 550,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 60,
      quantity: 201,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 61,
      quantity: 205,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 62,
      quantity: 829,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 63,
      quantity: 52,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 64,
      quantity: 903,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 65,
      quantity: 942,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 66,
      quantity: 909,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 67,
      quantity: 56,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 68,
      quantity: 27,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 69,
      quantity: 196,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 70,
      quantity: 415,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 71,
      quantity: 229,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 72,
      quantity: 139,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 73,
      quantity: 895,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 74,
      quantity: 198,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 75,
      quantity: 577,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 76,
      quantity: 494,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 77,
      quantity: 508,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 78,
      quantity: 178,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 79,
      quantity: 489,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 80,
      quantity: 792,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 81,
      quantity: 714,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 82,
      quantity: 80,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 83,
      quantity: 25,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 84,
      quantity: 731,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 85,
      quantity: 336,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 86,
      quantity: 261,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 87,
      quantity: 320,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 88,
      quantity: 558,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 89,
      quantity: 569,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 90,
      quantity: 16,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 91,
      quantity: 448,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 92,
      quantity: 836,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 93,
      quantity: 788,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 94,
      quantity: 70,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 95,
      quantity: 98,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 96,
      quantity: 903,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 97,
      quantity: 909,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 98,
      quantity: 36,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 99,
      quantity: 666,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 100,
      quantity: 344,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 101,
      quantity: 915,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 102,
      quantity: 274,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 103,
      quantity: 610,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 104,
      quantity: 480,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 105,
      quantity: 494,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 106,
      quantity: 138,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 107,
      quantity: 788,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 108,
      quantity: 630,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 109,
      quantity: 895,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 110,
      quantity: 806,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 111,
      quantity: 435,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 112,
      quantity: 865,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 113,
      quantity: 450,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 114,
      quantity: 165,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 115,
      quantity: 335,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 116,
      quantity: 593,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 117,
      quantity: 83,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 118,
      quantity: 548,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 119,
      quantity: 729,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 120,
      quantity: 776,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 121,
      quantity: 774,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 122,
      quantity: 692,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 123,
      quantity: 493,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 124,
      quantity: 759,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 125,
      quantity: 274,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 126,
      quantity: 607,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 127,
      quantity: 214,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 128,
      quantity: 132,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 129,
      quantity: 0,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 130,
      quantity: 605,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 131,
      quantity: 364,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 132,
      quantity: 522,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 133,
      quantity: 233,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 134,
      quantity: 737,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 135,
      quantity: 448,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 136,
      quantity: 133,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 137,
      quantity: 241,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 138,
      quantity: 996,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 139,
      quantity: 511,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 140,
      quantity: 417,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 141,
      quantity: 286,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 142,
      quantity: 859,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 143,
      quantity: 852,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 144,
      quantity: 87,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 145,
      quantity: 804,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 146,
      quantity: 217,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 147,
      quantity: 184,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 148,
      quantity: 278,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 149,
      quantity: 122,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 150,
      quantity: 332,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 151,
      quantity: 992,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 152,
      quantity: 65,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 153,
      quantity: 227,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 154,
      quantity: 196,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 155,
      quantity: 476,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 156,
      quantity: 610,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 157,
      quantity: 908,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 158,
      quantity: 751,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 159,
      quantity: 285,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 160,
      quantity: 749,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 161,
      quantity: 52,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 162,
      quantity: 128,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 163,
      quantity: 400,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 164,
      quantity: 699,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 165,
      quantity: 304,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 166,
      quantity: 679,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 167,
      quantity: 467,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 168,
      quantity: 783,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 169,
      quantity: 985,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 170,
      quantity: 221,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 171,
      quantity: 236,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 172,
      quantity: 409,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 173,
      quantity: 711,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 174,
      quantity: 532,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 175,
      quantity: 633,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 176,
      quantity: 963,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 177,
      quantity: 625,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 178,
      quantity: 969,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 179,
      quantity: 277,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 180,
      quantity: 289,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 181,
      quantity: 426,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 182,
      quantity: 185,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 183,
      quantity: 731,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 184,
      quantity: 819,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 185,
      quantity: 768,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 186,
      quantity: 194,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 187,
      quantity: 292,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 188,
      quantity: 470,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 189,
      quantity: 850,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 190,
      quantity: 867,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 191,
      quantity: 68,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 192,
      quantity: 921,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 193,
      quantity: 94,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 194,
      quantity: 27,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 195,
      quantity: 873,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 196,
      quantity: 56,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 197,
      quantity: 903,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 198,
      quantity: 270,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 199,
      quantity: 789,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 200,
      quantity: 860,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 201,
      quantity: 373,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 202,
      quantity: 520,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 203,
      quantity: 885,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 204,
      quantity: 919,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 205,
      quantity: 416,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 206,
      quantity: 926,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 207,
      quantity: 43,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 208,
      quantity: 183,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 209,
      quantity: 608,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 210,
      quantity: 787,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 211,
      quantity: 714,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 212,
      quantity: 343,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 213,
      quantity: 561,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 214,
      quantity: 685,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 215,
      quantity: 45,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 216,
      quantity: 906,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 217,
      quantity: 554,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 218,
      quantity: 911,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 219,
      quantity: 705,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 5,
      fk_product_id: 220,
      quantity: 850,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 1,
      quantity: 706,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 2,
      quantity: 827,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 3,
      quantity: 624,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 4,
      quantity: 276,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 5,
      quantity: 505,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 6,
      quantity: 280,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 7,
      quantity: 866,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 8,
      quantity: 650,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 9,
      quantity: 729,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 10,
      quantity: 688,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 11,
      quantity: 402,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 12,
      quantity: 124,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 13,
      quantity: 941,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 14,
      quantity: 339,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 15,
      quantity: 538,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 16,
      quantity: 695,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 17,
      quantity: 516,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 18,
      quantity: 244,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 19,
      quantity: 564,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 20,
      quantity: 636,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 21,
      quantity: 652,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 22,
      quantity: 659,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 23,
      quantity: 609,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 24,
      quantity: 915,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 25,
      quantity: 306,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 26,
      quantity: 47,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 27,
      quantity: 762,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 28,
      quantity: 716,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 29,
      quantity: 25,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 30,
      quantity: 901,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 31,
      quantity: 938,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 32,
      quantity: 414,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 33,
      quantity: 121,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 34,
      quantity: 874,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 35,
      quantity: 760,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 36,
      quantity: 35,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 37,
      quantity: 124,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 38,
      quantity: 746,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 39,
      quantity: 944,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 40,
      quantity: 371,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 41,
      quantity: 457,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 42,
      quantity: 158,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 43,
      quantity: 904,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 44,
      quantity: 103,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 45,
      quantity: 477,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 46,
      quantity: 557,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 47,
      quantity: 575,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 48,
      quantity: 331,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 49,
      quantity: 409,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 50,
      quantity: 851,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 51,
      quantity: 853,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 52,
      quantity: 987,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 53,
      quantity: 751,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 54,
      quantity: 102,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 55,
      quantity: 748,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 56,
      quantity: 15,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 57,
      quantity: 818,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 58,
      quantity: 109,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 59,
      quantity: 665,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 60,
      quantity: 445,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 61,
      quantity: 443,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 62,
      quantity: 764,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 63,
      quantity: 857,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 64,
      quantity: 587,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 65,
      quantity: 954,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 66,
      quantity: 406,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 67,
      quantity: 298,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 68,
      quantity: 96,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 69,
      quantity: 869,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 70,
      quantity: 529,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 71,
      quantity: 212,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 72,
      quantity: 822,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 73,
      quantity: 250,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 74,
      quantity: 538,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 75,
      quantity: 564,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 76,
      quantity: 783,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 77,
      quantity: 616,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 78,
      quantity: 195,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 79,
      quantity: 675,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 80,
      quantity: 96,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 81,
      quantity: 960,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 82,
      quantity: 707,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 83,
      quantity: 386,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 84,
      quantity: 480,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 85,
      quantity: 473,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 86,
      quantity: 646,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 87,
      quantity: 824,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 88,
      quantity: 422,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 89,
      quantity: 500,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 90,
      quantity: 464,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 91,
      quantity: 7,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 92,
      quantity: 55,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 93,
      quantity: 999,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 94,
      quantity: 996,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 95,
      quantity: 425,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 96,
      quantity: 684,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 97,
      quantity: 508,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 98,
      quantity: 952,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 99,
      quantity: 921,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 100,
      quantity: 470,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 101,
      quantity: 136,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 102,
      quantity: 60,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 103,
      quantity: 550,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 104,
      quantity: 378,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 105,
      quantity: 612,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 106,
      quantity: 262,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 107,
      quantity: 476,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 108,
      quantity: 926,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 109,
      quantity: 791,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 110,
      quantity: 423,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 111,
      quantity: 914,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 112,
      quantity: 620,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 113,
      quantity: 727,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 114,
      quantity: 164,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 115,
      quantity: 725,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 116,
      quantity: 695,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 117,
      quantity: 107,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 118,
      quantity: 427,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 119,
      quantity: 570,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 120,
      quantity: 26,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 121,
      quantity: 223,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 122,
      quantity: 612,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 123,
      quantity: 901,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 124,
      quantity: 300,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 125,
      quantity: 366,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 126,
      quantity: 23,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 127,
      quantity: 200,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 128,
      quantity: 793,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 129,
      quantity: 837,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 130,
      quantity: 944,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 131,
      quantity: 886,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 132,
      quantity: 945,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 133,
      quantity: 235,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 134,
      quantity: 898,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 135,
      quantity: 710,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 136,
      quantity: 971,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 137,
      quantity: 731,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 138,
      quantity: 908,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 139,
      quantity: 672,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 140,
      quantity: 94,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 141,
      quantity: 743,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 142,
      quantity: 75,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 143,
      quantity: 299,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 144,
      quantity: 178,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 145,
      quantity: 699,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 146,
      quantity: 731,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 147,
      quantity: 128,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 148,
      quantity: 896,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 149,
      quantity: 112,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 150,
      quantity: 533,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 151,
      quantity: 207,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 152,
      quantity: 109,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 153,
      quantity: 615,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 154,
      quantity: 757,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 155,
      quantity: 836,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 156,
      quantity: 30,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 157,
      quantity: 747,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 158,
      quantity: 118,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 159,
      quantity: 863,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 160,
      quantity: 247,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 161,
      quantity: 883,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 162,
      quantity: 257,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 163,
      quantity: 861,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 164,
      quantity: 277,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 165,
      quantity: 463,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 166,
      quantity: 664,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 167,
      quantity: 775,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 168,
      quantity: 38,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 169,
      quantity: 107,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 170,
      quantity: 67,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 171,
      quantity: 773,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 172,
      quantity: 174,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 173,
      quantity: 325,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 174,
      quantity: 663,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 175,
      quantity: 492,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 176,
      quantity: 591,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 177,
      quantity: 321,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 178,
      quantity: 727,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 179,
      quantity: 929,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 180,
      quantity: 401,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 181,
      quantity: 784,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 182,
      quantity: 840,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 183,
      quantity: 410,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 184,
      quantity: 730,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 185,
      quantity: 954,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 186,
      quantity: 884,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 187,
      quantity: 425,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 188,
      quantity: 918,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 189,
      quantity: 937,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 190,
      quantity: 553,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 191,
      quantity: 332,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 192,
      quantity: 543,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 193,
      quantity: 538,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 194,
      quantity: 58,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 195,
      quantity: 344,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 196,
      quantity: 131,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 197,
      quantity: 423,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 198,
      quantity: 637,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 199,
      quantity: 140,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 200,
      quantity: 995,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 201,
      quantity: 897,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 202,
      quantity: 103,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 203,
      quantity: 897,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 204,
      quantity: 634,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 205,
      quantity: 612,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 206,
      quantity: 411,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 207,
      quantity: 118,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 208,
      quantity: 266,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 209,
      quantity: 712,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 210,
      quantity: 973,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 211,
      quantity: 374,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 212,
      quantity: 437,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 213,
      quantity: 746,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 214,
      quantity: 818,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 215,
      quantity: 35,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 216,
      quantity: 146,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 217,
      quantity: 55,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 218,
      quantity: 756,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 219,
      quantity: 424,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 6,
      fk_product_id: 220,
      quantity: 43,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 1,
      quantity: 522,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 2,
      quantity: 587,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 3,
      quantity: 283,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 4,
      quantity: 6,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 5,
      quantity: 76,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 6,
      quantity: 15,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 7,
      quantity: 950,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 8,
      quantity: 927,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 9,
      quantity: 392,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 10,
      quantity: 359,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 11,
      quantity: 24,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 12,
      quantity: 539,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 13,
      quantity: 508,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 14,
      quantity: 136,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 15,
      quantity: 503,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 16,
      quantity: 970,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 17,
      quantity: 698,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 18,
      quantity: 841,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 19,
      quantity: 574,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 20,
      quantity: 923,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 21,
      quantity: 806,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 22,
      quantity: 515,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 23,
      quantity: 106,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 24,
      quantity: 100,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 25,
      quantity: 895,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 26,
      quantity: 369,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 27,
      quantity: 593,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 28,
      quantity: 943,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 29,
      quantity: 104,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 30,
      quantity: 9,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 31,
      quantity: 373,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 32,
      quantity: 373,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 33,
      quantity: 309,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 34,
      quantity: 539,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 35,
      quantity: 856,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 36,
      quantity: 985,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 37,
      quantity: 741,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 38,
      quantity: 696,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 39,
      quantity: 379,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 40,
      quantity: 443,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 41,
      quantity: 570,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 42,
      quantity: 286,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 43,
      quantity: 597,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 44,
      quantity: 504,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 45,
      quantity: 9,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 46,
      quantity: 589,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 47,
      quantity: 107,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 48,
      quantity: 34,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 49,
      quantity: 801,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 50,
      quantity: 270,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 51,
      quantity: 723,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 52,
      quantity: 450,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 53,
      quantity: 46,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 54,
      quantity: 918,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 55,
      quantity: 584,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 56,
      quantity: 76,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 57,
      quantity: 310,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 58,
      quantity: 886,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 59,
      quantity: 773,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 60,
      quantity: 928,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 61,
      quantity: 887,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 62,
      quantity: 232,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 63,
      quantity: 430,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 64,
      quantity: 781,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 65,
      quantity: 892,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 66,
      quantity: 468,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 67,
      quantity: 526,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 68,
      quantity: 208,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 69,
      quantity: 819,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 70,
      quantity: 271,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 71,
      quantity: 58,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 72,
      quantity: 489,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 73,
      quantity: 525,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 74,
      quantity: 475,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 75,
      quantity: 335,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 76,
      quantity: 179,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 77,
      quantity: 932,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 78,
      quantity: 699,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 79,
      quantity: 360,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 80,
      quantity: 500,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 81,
      quantity: 434,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 82,
      quantity: 983,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 83,
      quantity: 358,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 84,
      quantity: 413,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 85,
      quantity: 667,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 86,
      quantity: 789,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 87,
      quantity: 849,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 88,
      quantity: 8,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 89,
      quantity: 59,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 90,
      quantity: 9,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 91,
      quantity: 367,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 92,
      quantity: 93,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 93,
      quantity: 657,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 94,
      quantity: 715,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 95,
      quantity: 803,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 96,
      quantity: 669,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 97,
      quantity: 693,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 98,
      quantity: 785,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 99,
      quantity: 78,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 100,
      quantity: 282,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 101,
      quantity: 655,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 102,
      quantity: 464,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 103,
      quantity: 438,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 104,
      quantity: 623,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 105,
      quantity: 431,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 106,
      quantity: 650,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 107,
      quantity: 714,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 108,
      quantity: 648,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 109,
      quantity: 74,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 110,
      quantity: 139,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 111,
      quantity: 358,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 112,
      quantity: 863,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 113,
      quantity: 632,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 114,
      quantity: 666,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 115,
      quantity: 656,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 116,
      quantity: 309,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 117,
      quantity: 813,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 118,
      quantity: 188,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 119,
      quantity: 161,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 120,
      quantity: 722,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 121,
      quantity: 920,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 122,
      quantity: 842,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 123,
      quantity: 247,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 124,
      quantity: 41,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 125,
      quantity: 42,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 126,
      quantity: 635,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 127,
      quantity: 918,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 128,
      quantity: 825,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 129,
      quantity: 194,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 130,
      quantity: 123,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 131,
      quantity: 485,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 132,
      quantity: 980,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 133,
      quantity: 928,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 134,
      quantity: 402,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 135,
      quantity: 895,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 136,
      quantity: 255,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 137,
      quantity: 660,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 138,
      quantity: 803,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 139,
      quantity: 69,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 140,
      quantity: 734,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 141,
      quantity: 720,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 142,
      quantity: 678,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 143,
      quantity: 131,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 144,
      quantity: 732,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 145,
      quantity: 302,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 146,
      quantity: 548,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 147,
      quantity: 625,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 148,
      quantity: 193,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 149,
      quantity: 740,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 150,
      quantity: 990,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 151,
      quantity: 678,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 152,
      quantity: 374,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 153,
      quantity: 498,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 154,
      quantity: 273,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 155,
      quantity: 594,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 156,
      quantity: 469,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 157,
      quantity: 11,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 158,
      quantity: 939,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 159,
      quantity: 459,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 160,
      quantity: 994,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 161,
      quantity: 426,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 162,
      quantity: 745,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 163,
      quantity: 751,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 164,
      quantity: 496,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 165,
      quantity: 443,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 166,
      quantity: 769,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 167,
      quantity: 173,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 168,
      quantity: 357,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 169,
      quantity: 800,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 170,
      quantity: 702,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 171,
      quantity: 306,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 172,
      quantity: 726,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 173,
      quantity: 726,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 174,
      quantity: 514,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 175,
      quantity: 87,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 176,
      quantity: 774,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 177,
      quantity: 972,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 178,
      quantity: 309,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 179,
      quantity: 610,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 180,
      quantity: 592,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 181,
      quantity: 355,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 182,
      quantity: 610,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 183,
      quantity: 700,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 184,
      quantity: 372,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 185,
      quantity: 284,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 186,
      quantity: 325,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 187,
      quantity: 522,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 188,
      quantity: 397,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 189,
      quantity: 895,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 190,
      quantity: 134,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 191,
      quantity: 766,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 192,
      quantity: 843,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 193,
      quantity: 421,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 194,
      quantity: 537,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 195,
      quantity: 886,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 196,
      quantity: 530,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 197,
      quantity: 463,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 198,
      quantity: 159,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 199,
      quantity: 225,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 200,
      quantity: 497,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 201,
      quantity: 314,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 202,
      quantity: 472,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 203,
      quantity: 377,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 204,
      quantity: 774,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 205,
      quantity: 525,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 206,
      quantity: 836,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 207,
      quantity: 201,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 208,
      quantity: 533,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 209,
      quantity: 802,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 210,
      quantity: 594,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 211,
      quantity: 799,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 212,
      quantity: 439,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 213,
      quantity: 241,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 214,
      quantity: 99,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 215,
      quantity: 52,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 216,
      quantity: 786,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 217,
      quantity: 146,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 218,
      quantity: 123,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 219,
      quantity: 40,
      updated_at: '2024-11-02T06:00:00Z'
    },
    {
      fk_branch_id: 7,
      fk_product_id: 220,
      quantity: 273,
      updated_at: '2024-11-02T06:00:00Z'
    }
  ])
}
