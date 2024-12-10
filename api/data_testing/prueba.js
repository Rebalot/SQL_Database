// const products = [
//     {
//       name: 'Smartphone X200',
//       description: 'Latest smartphone with advanced features and sleek design.',
//       price: 699.99,
//       sku: 'SP-X200-001',
//       created_at: '2024-11-01T12:00:00Z',
//       updated_at: '2024-11-01T12:00:00Z',
//       fk_supplier_id: 23,
//       fk_category_id: 1
//     },
//     {
//       name: '4K Ultra HD TV',
//       description: 'Experience stunning visuals with our 55-inch 4K UHD TV.',
//       price: 899.99,
//       sku: 'TV-4K-002',
//       created_at: '2024-11-01T12:05:00Z',
//       updated_at: '2024-11-01T12:05:00Z',
//       fk_supplier_id: 45,
//       fk_category_id: 1
//     },
//     {
//       name: 'Blender Pro 3000',
//       description: 'Powerful blender for smoothies, soups, and sauces.',
//       price: 149.99,
//       sku: 'BLD-P3000-003',
//       created_at: '2024-11-01T12:10:00Z',
//       updated_at: '2024-11-01T12:10:00Z',
//       fk_supplier_id: 12,
//       fk_category_id: 2
//     },
//     {
//       name: 'Ergonomic Office Chair',
//       description: 'Comfortable and adjustable office chair for long hours.',
//       price: 249.99,
//       sku: 'OFC-CH-004',
//       created_at: '2024-11-01T12:15:00Z',
//       updated_at: '2024-11-01T12:15:00Z',
//       fk_supplier_id: 34,
//       fk_category_id: 3
//     },
//     {
//       name: "Men's Running Shoes",
//       description: 'Lightweight running shoes designed for comfort and performance.',
//       price: 89.99,
//       sku: 'SHO-MRUN-005',
//       created_at: '2024-11-01T12:20:00Z',
//       updated_at: '2024-11-01T12:20:00Z',
//       fk_supplier_id: 56,
//       fk_category_id: 5
//     },
//     {
//       name: 'Novel: The Great Adventure',
//       description: 'A thrilling tale of courage and discovery.',
//       price: 19.99,
//       sku: 'BK-GADV-006',
//       created_at: '2024-11-01T12:25:00Z',
//       updated_at: '2024-11-01T12:25:00Z',
//       fk_supplier_id: 15,
//       fk_category_id: 6
//     },
//     {
//       name: 'Teddy Bear',
//       description: 'Soft and cuddly teddy bear for children of all ages.',
//       price: 29.99,
//       sku: 'TOY-TB-007',
//       created_at: '2024-11-01T12:30:00Z',
//       updated_at: '2024-11-01T12:30:00Z',
//       fk_supplier_id: 25,
//       fk_category_id: 7
//     },
//     {
//       name: 'Organic Almonds 500g',
//       description: 'Fresh and healthy organic almonds for snacking.',
//       price: 12.99,
//       sku: 'GRN-ALM-008',
//       created_at: '2024-11-01T12:35:00Z',
//       updated_at: '2024-11-01T12:35:00Z',
//       fk_supplier_id: 33,
//       fk_category_id: 8
//     },
//     {
//       name: 'Moisturizing Face Cream',
//       description: 'Hydrating face cream for all skin types.',
//       price: 24.99,
//       sku: 'HNB-FC-009',
//       created_at: '2024-11-01T12:40:00Z',
//       updated_at: '2024-11-01T12:40:00Z',
//       fk_supplier_id: 47,
//       fk_category_id: 9
//     },
//     {
//       name: 'Yoga Mat',
//       description: 'High-quality, non-slip yoga mat for all practices.',
//       price: 39.99,
//       sku: 'SP-YM-010',
//       created_at: '2024-11-01T12:45:00Z',
//       updated_at: '2024-11-01T12:45:00Z',
//       fk_supplier_id: 18,
//       fk_category_id: 10
//     },
//     {
//       name: 'Car Vacuum Cleaner',
//       description: 'Compact vacuum cleaner for quick car clean-ups.',
//       price: 49.99,
//       sku: 'AUTO-VAC-011',
//       created_at: '2024-11-01T12:50:00Z',
//       updated_at: '2024-11-01T12:50:00Z',
//       fk_supplier_id: 38,
//       fk_category_id: 11
//     },
//     {
//       name: 'Garden Tool Set',
//       description: 'Essential tools for all your gardening needs.',
//       price: 59.99,
//       sku: 'GAR-TOOL-012',
//       created_at: '2024-11-01T12:55:00Z',
//       updated_at: '2024-11-01T12:55:00Z',
//       fk_supplier_id: 22,
//       fk_category_id: 12
//     },
//     {
//       name: 'Diamond Necklace',
//       description: 'Elegant diamond necklace for special occasions.',
//       price: 299.99,
//       sku: 'JEW-DN-013',
//       created_at: '2024-11-01T13:00:00Z',
//       updated_at: '2024-11-01T13:00:00Z',
//       fk_supplier_id: 29,
//       fk_category_id: 13
//     },
//     {
//       name: 'Dog Food 10kg',
//       description: 'Nutritious dog food for healthy growth.',
//       price: 49.99,
//       sku: 'PET-DF-014',
//       created_at: '2024-11-01T13:05:00Z',
//       updated_at: '2024-11-01T13:05:00Z',
//       fk_supplier_id: 11,
//       fk_category_id: 14
//     },
//     {
//       name: 'Printer Ink Cartridge',
//       description: 'High-quality ink cartridge for vibrant prints.',
//       price: 29.99,
//       sku: 'OFF-INK-015',
//       created_at: '2024-11-01T13:10:00Z',
//       updated_at: '2024-11-01T13:10:00Z',
//       fk_supplier_id: 8,
//       fk_category_id: 15
//     },
//     {
//       name: 'Bluetooth Headphones',
//       description: 'Wireless headphones with noise cancellation.',
//       price: 149.99,
//       sku: 'MUS-BTHP-016',
//       created_at: '2024-11-01T13:15:00Z',
//       updated_at: '2024-11-01T13:15:00Z',
//       fk_supplier_id: 44,
//       fk_category_id: 16
//     },
//     {
//       name: 'Gaming Console',
//       description: 'Next-gen gaming console with stunning graphics.',
//       price: 499.99,
//       sku: 'VG-CNSL-017',
//       created_at: '2024-11-01T13:20:00Z',
//       updated_at: '2024-11-01T13:20:00Z',
//       fk_supplier_id: 3,
//       fk_category_id: 17
//     },
//     {
//       name: 'Baby Stroller',
//       description: 'Comfortable and safe stroller for your baby.',
//       price: 199.99,
//       sku: 'BAB-ST-018',
//       created_at: '2024-11-01T13:25:00Z',
//       updated_at: '2024-11-01T13:25:00Z',
//       fk_supplier_id: 55,
//       fk_category_id: 18
//     },
//     {
//       name: 'Knitting Kit',
//       description: 'Complete knitting kit for beginners and enthusiasts.',
//       price: 39.99,
//       sku: 'CR-KIT-019',
//       created_at: '2024-11-01T13:30:00Z',
//       updated_at: '2024-11-01T13:30:00Z',
//       fk_supplier_id: 14,
//       fk_category_id: 19
//     },
//     {
//       name: 'Cordless Drill',
//       description: 'Powerful cordless drill for home improvement projects.',
//       price: 89.99,
//       sku: 'TOOL-CD-020',
//       created_at: '2024-11-01T13:35:00Z',
//       updated_at: '2024-11-01T13:35:00Z',
//       fk_supplier_id: 26,
//       fk_category_id: 20
//     },
//     {
//       name: 'Electric Kettle',
//       description: 'Quick boiling electric kettle for your kitchen.',
//       price: 39.99,
//       sku: 'HAP-EK-021',
//       created_at: '2024-11-01T13:40:00Z',
//       updated_at: '2024-11-01T13:40:00Z',
//       fk_supplier_id: 32,
//       fk_category_id: 2
//     },
//     {
//       name: 'Leather Sofa',
//       description: 'Luxurious leather sofa for your living room.',
//       price: 799.99,
//       sku: 'FUR-LS-022',
//       created_at: '2024-11-01T13:45:00Z',
//       updated_at: '2024-11-01T13:45:00Z',
//       fk_supplier_id: 39,
//       fk_category_id: 3
//     },
//     {
//       name: "Women's Jacket",
//       description: 'Stylish and warm jacket for the winter season.',
//       price: 99.99,
//       sku: 'CLT-WJ-023',
//       created_at: '2024-11-01T13:50:00Z',
//       updated_at: '2024-11-01T13:50:00Z',
//       fk_supplier_id: 7,
//       fk_category_id: 4
//     },
//     {
//       name: "Kids' Sneakers",
//       description: 'Durable sneakers for active kids.',
//       price: 49.99,
//       sku: 'SHO-KS-024',
//       created_at: '2024-11-01T13:55:00Z',
//       updated_at: '2024-11-01T13:55:00Z',
//       fk_supplier_id: 16,
//       fk_category_id: 5
//     },
//     {
//       name: 'Cookbook: Easy Meals',
//       description: 'Simple and delicious recipes for everyday cooking.',
//       price: 24.99,
//       sku: 'BK-EM-025',
//       created_at: '2024-11-01T14:00:00Z',
//       updated_at: '2024-11-01T14:00:00Z',
//       fk_supplier_id: 9,
//       fk_category_id: 6
//     },
//     {
//       name: 'Building Blocks Set',
//       description: "Creative building blocks for kids' imagination.",
//       price: 39.99,
//       sku: 'TOY-BBS-026',
//       created_at: '2024-11-01T14:05:00Z',
//       updated_at: '2024-11-01T14:05:00Z',
//       fk_supplier_id: 41,
//       fk_category_id: 7
//     },
//     {
//       name: 'Whole Grain Pasta',
//       description: 'Healthy whole grain pasta for nutritious meals.',
//       price: 2.99,
//       sku: 'GRN-PST-027',
//       created_at: '2024-11-01T14:10:00Z',
//       updated_at: '2024-11-01T14:10:00Z',
//       fk_supplier_id: 19,
//       fk_category_id: 8
//     },
//     {
//       name: 'Organic Shampoo',
//       description: 'Gentle shampoo made with natural ingredients.',
//       price: 14.99,
//       sku: 'HNB-OS-028',
//       created_at: '2024-11-01T14:15:00Z',
//       updated_at: '2024-11-01T14:15:00Z',
//       fk_supplier_id: 46,
//       fk_category_id: 9
//     },
//     {
//       name: 'Fitness Tracker',
//       description: 'Track your fitness goals with this stylish device.',
//       price: 99.99,
//       sku: 'SP-FT-029',
//       created_at: '2024-11-01T14:20:00Z',
//       updated_at: '2024-11-01T14:20:00Z',
//       fk_supplier_id: 11,
//       fk_category_id: 10
//     },
//     {
//       name: 'Portable Jump Starter',
//       description: 'Compact jump starter for emergencies.',
//       price: 69.99,
//       sku: 'AUTO-JS-030',
//       created_at: '2024-11-01T14:25:00Z',
//       updated_at: '2024-11-01T14:25:00Z',
//       fk_supplier_id: 21,
//       fk_category_id: 11
//     },
//     {
//       name: 'Outdoor Patio Furniture',
//       description: 'Comfortable furniture set for your outdoor space.',
//       price: 499.99,
//       sku: 'GAR-OPF-031',
//       created_at: '2024-11-01T14:30:00Z',
//       updated_at: '2024-11-01T14:30:00Z',
//       fk_supplier_id: 36,
//       fk_category_id: 12
//     },
//     {
//       name: 'Gold Earrings',
//       description: 'Beautiful gold earrings for any occasion.',
//       price: 199.99,
//       sku: 'JEW-GE-032',
//       created_at: '2024-11-01T14:35:00Z',
//       updated_at: '2024-11-01T14:35:00Z',
//       fk_supplier_id: 28,
//       fk_category_id: 13
//     },
//     {
//       name: 'Cat Litter',
//       description: 'Absorbent cat litter for a clean home.',
//       price: 12.99,
//       sku: 'PET-CL-033',
//       created_at: '2024-11-01T14:40:00Z',
//       updated_at: '2024-11-01T14:40:00Z',
//       fk_supplier_id: 4,
//       fk_category_id: 14
//     },
//     {
//       name: 'Stapler',
//       description: 'Durable stapler for your office needs.',
//       price: 12.99,
//       sku: 'OFF-ST-034',
//       created_at: '2024-11-01T14:45:00Z',
//       updated_at: '2024-11-01T14:45:00Z',
//       fk_supplier_id: 5,
//       fk_category_id: 15
//     },
//     {
//       name: 'Wireless Speaker',
//       description: 'High-quality sound in a portable design.',
//       price: 129.99,
//       sku: 'MUS-WS-035',
//       created_at: '2024-11-01T14:50:00Z',
//       updated_at: '2024-11-01T14:50:00Z',
//       fk_supplier_id: 39,
//       fk_category_id: 16
//     },
//     {
//       name: 'Racing Wheel for Gaming',
//       description: 'Realistic racing wheel for immersive gaming experiences.',
//       price: 199.99,
//       sku: 'VG-RW-036',
//       created_at: '2024-11-01T14:55:00Z',
//       updated_at: '2024-11-01T14:55:00Z',
//       fk_supplier_id: 30,
//       fk_category_id: 17
//     },
//     {
//       name: 'Baby Monitor',
//       description: 'Keep an eye on your baby with this reliable monitor.',
//       price: 79.99,
//       sku: 'BAB-MON-037',
//       created_at: '2024-11-01T15:00:00Z',
//       updated_at: '2024-11-01T15:00:00Z',
//       fk_supplier_id: 18,
//       fk_category_id: 18
//     },
//     {
//       name: 'Scrapbooking Supplies',
//       description: 'Everything you need for your scrapbooking projects.',
//       price: 29.99,
//       sku: 'CR-SUP-038',
//       created_at: '2024-11-01T15:05:00Z',
//       updated_at: '2024-11-01T15:05:00Z',
//       fk_supplier_id: 25,
//       fk_category_id: 19
//     },
//     {
//       name: 'Hammer Drill',
//       description: 'Versatile hammer drill for tough tasks.',
//       price: 129.99,
//       sku: 'TOOL-HD-039',
//       created_at: '2024-11-01T15:10:00Z',
//       updated_at: '2024-11-01T15:10:00Z',
//       fk_supplier_id: 40,
//       fk_category_id: 20
//     },
//     {
//       name: 'Noise-Canceling Headphones',
//       description: 'Experience music like never before with noise-canceling technology.',
//       price: 199.99,
//       sku: 'MUS-NCH-081',
//       created_at: '2024-11-01T15:15:00Z',
//       updated_at: '2024-11-01T15:15:00Z',
//       fk_supplier_id: 29,
//       fk_category_id: 1
//     },
//     {
//       name: 'Smartwatch Series 5',
//       description: 'Stay connected with notifications and fitness tracking.',
//       price: 249.99,
//       sku: 'SP-SS5-082',
//       created_at: '2024-11-01T15:20:00Z',
//       updated_at: '2024-11-01T15:20:00Z',
//       fk_supplier_id: 45,
//       fk_category_id: 1
//     },
//     {
//       name: 'Air Fryer 5L',
//       description: 'Healthier frying with rapid air technology.',
//       price: 89.99,
//       sku: 'HAP-AF5-083',
//       created_at: '2024-11-01T15:25:00Z',
//       updated_at: '2024-11-01T15:25:00Z',
//       fk_supplier_id: 10,
//       fk_category_id: 2
//     },
//     {
//       name: 'Dining Table Set',
//       description: 'Stylish dining table set for family meals.',
//       price: 599.99,
//       sku: 'FUR-DTS-084',
//       created_at: '2024-11-01T15:30:00Z',
//       updated_at: '2024-11-01T15:30:00Z',
//       fk_supplier_id: 32,
//       fk_category_id: 3
//     },
//     {
//       name: "Men's Winter Coat",
//       description: 'Warm and stylish coat for cold weather.',
//       price: 149.99,
//       sku: 'CLT-MWC-085',
//       created_at: '2024-11-01T15:35:00Z',
//       updated_at: '2024-11-01T15:35:00Z',
//       fk_supplier_id: 21,
//       fk_category_id: 4
//     },
//     {
//       name: "Kids' Sandals",
//       description: 'Comfortable sandals for summer fun.',
//       price: 34.99,
//       sku: 'SHO-KS-086',
//       created_at: '2024-11-01T15:40:00Z',
//       updated_at: '2024-11-01T15:40:00Z',
//       fk_supplier_id: 19,
//       fk_category_id: 5
//     },
//     {
//       name: 'Self-Help Book',
//       description: 'Transform your life with practical tips and strategies.',
//       price: 15.99,
//       sku: 'BK-SH-087',
//       created_at: '2024-11-01T15:45:00Z',
//       updated_at: '2024-11-01T15:45:00Z',
//       fk_supplier_id: 8,
//       fk_category_id: 6
//     },
//     {
//       name: 'Puzzle Set',
//       description: 'Challenging puzzles for hours of fun.',
//       price: 19.99,
//       sku: 'TOY-PS-088',
//       created_at: '2024-11-01T15:50:00Z',
//       updated_at: '2024-11-01T15:50:00Z',
//       fk_supplier_id: 37,
//       fk_category_id: 7
//     },
//     {
//       name: 'Organic Oats 1kg',
//       description: 'Healthy organic oats for breakfast.',
//       price: 5.99,
//       sku: 'GRN-OATS-089',
//       created_at: '2024-11-01T15:55:00Z',
//       updated_at: '2024-11-01T15:55:00Z',
//       fk_supplier_id: 27,
//       fk_category_id: 8
//     },
//     {
//       name: 'Sunscreen SPF 50',
//       description: 'Broad spectrum sunscreen for sun protection.',
//       price: 16.99,
//       sku: 'HNB-SS50-090',
//       created_at: '2024-11-01T16:00:00Z',
//       updated_at: '2024-11-01T16:00:00Z',
//       fk_supplier_id: 4,
//       fk_category_id: 9
//     },
//     {
//       name: 'Resistance Bands Set',
//       description: 'Perfect for home workouts and strength training.',
//       price: 29.99,
//       sku: 'SP-RB-091',
//       created_at: '2024-11-01T16:05:00Z',
//       updated_at: '2024-11-01T16:05:00Z',
//       fk_supplier_id: 50,
//       fk_category_id: 10
//     },
//     {
//       name: 'Car Phone Mount',
//       description: 'Securely mount your phone while driving.',
//       price: 19.99,
//       sku: 'AUTO-CPM-092',
//       created_at: '2024-11-01T16:10:00Z',
//       updated_at: '2024-11-01T16:10:00Z',
//       fk_supplier_id: 14,
//       fk_category_id: 11
//     },
//     {
//       name: 'Outdoor Grill',
//       description: 'Perfect for BBQs and outdoor cooking.',
//       price: 299.99,
//       sku: 'GAR-OG-093',
//       created_at: '2024-11-01T16:15:00Z',
//       updated_at: '2024-11-01T16:15:00Z',
//       fk_supplier_id: 15,
//       fk_category_id: 12
//     },
//     {
//       name: 'Silver Bracelet',
//       description: 'Elegant silver bracelet for everyday wear.',
//       price: 79.99,
//       sku: 'JEW-SB-094',
//       created_at: '2024-11-01T16:20:00Z',
//       updated_at: '2024-11-01T16:20:00Z',
//       fk_supplier_id: 39,
//       fk_category_id: 13
//     },
//     {
//       name: 'Dog Leash',
//       description: 'Durable dog leash for safe walks.',
//       price: 14.99,
//       sku: 'PET-DL-095',
//       created_at: '2024-11-01T16:25:00Z',
//       updated_at: '2024-11-01T16:25:00Z',
//       fk_supplier_id: 23,
//       fk_category_id: 14
//     },
//     {
//       name: 'Notepad Set',
//       description: 'Perfect for jotting down notes and ideas.',
//       price: 7.99,
//       sku: 'OFF-NS-096',
//       created_at: '2024-11-01T16:30:00Z',
//       updated_at: '2024-11-01T16:30:00Z',
//       fk_supplier_id: 7,
//       fk_category_id: 15
//     },
//     {
//       name: 'Vinyl Records Collection',
//       description: 'Classic vinyl records for music lovers.',
//       price: 49.99,
//       sku: 'MUS-VRC-097',
//       created_at: '2024-11-01T16:35:00Z',
//       updated_at: '2024-11-01T16:35:00Z',
//       fk_supplier_id: 12,
//       fk_category_id: 16
//     },
//     {
//       name: 'Portable Game Console',
//       description: 'Take your gaming on the go with this portable console.',
//       price: 199.99,
//       sku: 'VG-PGC-098',
//       created_at: '2024-11-01T16:40:00Z',
//       updated_at: '2024-11-01T16:40:00Z',
//       fk_supplier_id: 31,
//       fk_category_id: 17
//     },
//     {
//       name: 'Baby Clothes Set',
//       description: 'Cute and comfortable outfits for your baby.',
//       price: 49.99,
//       sku: 'BAB-CLS-099',
//       created_at: '2024-11-01T16:45:00Z',
//       updated_at: '2024-11-01T16:45:00Z',
//       fk_supplier_id: 44,
//       fk_category_id: 18
//     },
//     {
//       name: 'Art Supplies Kit',
//       description: 'Everything you need for your artistic endeavors.',
//       price: 29.99,
//       sku: 'CR-ASK-100',
//       created_at: '2024-11-01T16:50:00Z',
//       updated_at: '2024-11-01T16:50:00Z',
//       fk_supplier_id: 2,
//       fk_category_id: 19
//     },
//     {
//       name: 'Corded Circular Saw',
//       description: 'Powerful saw for woodworking projects.',
//       price: 159.99,
//       sku: 'TOOL-CCS-101',
//       created_at: '2024-11-01T16:55:00Z',
//       updated_at: '2024-11-01T16:55:00Z',
//       fk_supplier_id: 17,
//       fk_category_id: 20
//     },
//     {
//       name: 'Bluetooth Earbuds',
//       description: 'Compact and wireless earbuds for music on the go.',
//       price: 79.99,
//       sku: 'MUS-BE-141',
//       created_at: '2024-11-01T17:00:00Z',
//       updated_at: '2024-11-01T17:00:00Z',
//       fk_supplier_id: 33,
//       fk_category_id: 1
//     },
//     {
//       name: 'Toaster Oven',
//       description: 'Versatile toaster oven for all your baking needs.',
//       price: 89.99,
//       sku: 'HAP-TO-142',
//       created_at: '2024-11-01T17:05:00Z',
//       updated_at: '2024-11-01T17:05:00Z',
//       fk_supplier_id: 5,
//       fk_category_id: 2
//     },
//     {
//       name: 'Accent Chair',
//       description: 'Stylish accent chair to enhance your decor.',
//       price: 249.99,
//       sku: 'FUR-AC-143',
//       created_at: '2024-11-01T17:10:00Z',
//       updated_at: '2024-11-01T17:10:00Z',
//       fk_supplier_id: 12,
//       fk_category_id: 3
//     },
//     {
//       name: "Kids' Winter Jacket",
//       description: 'Warm and colorful jacket for kids.',
//       price: 59.99,
//       sku: 'CLT-KWJ-144',
//       created_at: '2024-11-01T17:15:00Z',
//       updated_at: '2024-11-01T17:15:00Z',
//       fk_supplier_id: 34,
//       fk_category_id: 4
//     },
//     {
//       name: 'Sneakers for Men',
//       description: 'Comfortable sneakers for everyday wear.',
//       price: 69.99,
//       sku: 'SHO-MSN-145',
//       created_at: '2024-11-01T17:20:00Z',
//       updated_at: '2024-11-01T17:20:00Z',
//       fk_supplier_id: 8,
//       fk_category_id: 5
//     },
//     {
//       name: 'Travel Guide Book',
//       description: 'Explore new destinations with this comprehensive guide.',
//       price: 19.99,
//       sku: 'BK-TG-146',
//       created_at: '2024-11-01T17:25:00Z',
//       updated_at: '2024-11-01T17:25:00Z',
//       fk_supplier_id: 36,
//       fk_category_id: 6
//     },
//     {
//       name: 'Dollhouse Playset',
//       description: 'A beautiful dollhouse for hours of imaginative play.',
//       price: 139.99,
//       sku: 'TOY-DPS-147',
//       created_at: '2024-11-01T17:30:00Z',
//       updated_at: '2024-11-01T17:30:00Z',
//       fk_supplier_id: 47,
//       fk_category_id: 7
//     },
//     {
//       name: 'Almonds (Raw)',
//       description: 'Healthy and nutritious raw almonds for snacking.',
//       price: 8.99,
//       sku: 'GRN-ALM-148',
//       created_at: '2024-11-01T17:35:00Z',
//       updated_at: '2024-11-01T17:35:00Z',
//       fk_supplier_id: 14,
//       fk_category_id: 8
//     },
//     {
//       name: 'Moisturizing Lotion',
//       description: 'Hydrating lotion for soft and smooth skin.',
//       price: 12.99,
//       sku: 'HNB-ML-149',
//       created_at: '2024-11-01T17:40:00Z',
//       updated_at: '2024-11-01T17:40:00Z',
//       fk_supplier_id: 22,
//       fk_category_id: 9
//     },
//     {
//       name: 'Yoga Mat',
//       description: 'Non-slip yoga mat for your workouts.',
//       price: 29.99,
//       sku: 'SP-YM-150',
//       created_at: '2024-11-01T17:45:00Z',
//       updated_at: '2024-11-01T17:45:00Z',
//       fk_supplier_id: 25,
//       fk_category_id: 10
//     },
//     {
//       name: 'Car Seat Cover',
//       description: 'Protect your car seats with this stylish cover.',
//       price: 39.99,
//       sku: 'AUTO-CSC-151',
//       created_at: '2024-11-01T17:50:00Z',
//       updated_at: '2024-11-01T17:50:00Z',
//       fk_supplier_id: 41,
//       fk_category_id: 11
//     },
//     {
//       name: 'Picnic Table',
//       description: 'Perfect for outdoor gatherings and meals.',
//       price: 199.99,
//       sku: 'GAR-PT-152',
//       created_at: '2024-11-01T17:55:00Z',
//       updated_at: '2024-11-01T17:55:00Z',
//       fk_supplier_id: 48,
//       fk_category_id: 12
//     },
//     {
//       name: 'Diamond Ring',
//       description: 'Stunning diamond ring for special occasions.',
//       price: 499.99,
//       sku: 'JEW-DR-153',
//       created_at: '2024-11-01T18:00:00Z',
//       updated_at: '2024-11-01T18:00:00Z',
//       fk_supplier_id: 15,
//       fk_category_id: 13
//     },
//     {
//       name: 'Cat Toys Variety Pack',
//       description: 'Fun toys to keep your cat entertained.',
//       price: 19.99,
//       sku: 'PET-CTVP-154',
//       created_at: '2024-11-01T18:05:00Z',
//       updated_at: '2024-11-01T18:05:00Z',
//       fk_supplier_id: 11,
//       fk_category_id: 14
//     },
//     {
//       name: 'Binder Clips Set',
//       description: 'Organize your documents with these durable clips.',
//       price: 6.99,
//       sku: 'OFF-BCS-155',
//       created_at: '2024-11-01T18:10:00Z',
//       updated_at: '2024-11-01T18:10:00Z',
//       fk_supplier_id: 38,
//       fk_category_id: 15
//     },
//     {
//       name: 'Acoustic Guitar',
//       description: 'Quality acoustic guitar for musicians of all levels.',
//       price: 299.99,
//       sku: 'MUS-AG-156',
//       created_at: '2024-11-01T18:15:00Z',
//       updated_at: '2024-11-01T18:15:00Z',
//       fk_supplier_id: 30,
//       fk_category_id: 16
//     },
//     {
//       name: 'Wireless Gaming Mouse',
//       description: 'Precision gaming mouse with customizable buttons.',
//       price: 69.99,
//       sku: 'VG-WGM-157',
//       created_at: '2024-11-01T18:20:00Z',
//       updated_at: '2024-11-01T18:20:00Z',
//       fk_supplier_id: 20,
//       fk_category_id: 17
//     },
//     {
//       name: 'Diaper Bag Backpack',
//       description: 'Stylish and functional backpack for parents on the go.',
//       price: 39.99,
//       sku: 'BAB-DBB-158',
//       created_at: '2024-11-01T18:25:00Z',
//       updated_at: '2024-11-01T18:25:00Z',
//       fk_supplier_id: 3,
//       fk_category_id: 18
//     },
//     {
//       name: 'Crafting Scissors',
//       description: 'Sharp and durable scissors for all your crafting needs.',
//       price: 9.99,
//       sku: 'CR-CS-159',
//       created_at: '2024-11-01T18:30:00Z',
//       updated_at: '2024-11-01T18:30:00Z',
//       fk_supplier_id: 28,
//       fk_category_id: 19
//     },
//     {
//       name: 'Cordless Impact Wrench',
//       description: 'High torque impact wrench for heavy-duty tasks.',
//       price: 199.99,
//       sku: 'TOOL-CIW-160',
//       created_at: '2024-11-01T18:35:00Z',
//       updated_at: '2024-11-01T18:35:00Z',
//       fk_supplier_id: 42,
//       fk_category_id: 20
//     },
//     {
//       name: 'Portable Bluetooth Speaker',
//       description: 'Enjoy your favorite music on the go with this portable speaker.',
//       price: 59.99,
//       sku: 'MUS-PBS-201',
//       created_at: '2024-11-01T18:40:00Z',
//       updated_at: '2024-11-01T18:40:00Z',
//       fk_supplier_id: 25,
//       fk_category_id: 1
//     },
//     {
//       name: 'Electric Kettle',
//       description: 'Boil water quickly and safely with this electric kettle.',
//       price: 49.99,
//       sku: 'HAP-EK-202',
//       created_at: '2024-11-01T18:45:00Z',
//       updated_at: '2024-11-01T18:45:00Z',
//       fk_supplier_id: 39,
//       fk_category_id: 2
//     },
//     {
//       name: 'Leather Sofa',
//       description: 'Luxurious leather sofa that adds elegance to any room.',
//       price: 899.99,
//       sku: 'FUR-LS-203',
//       created_at: '2024-11-01T18:50:00Z',
//       updated_at: '2024-11-01T18:50:00Z',
//       fk_supplier_id: 19,
//       fk_category_id: 3
//     },
//     {
//       name: 'Summer Dress',
//       description: 'Light and airy dress perfect for warm weather.',
//       price: 39.99,
//       sku: 'CLT-SD-204',
//       created_at: '2024-11-01T18:55:00Z',
//       updated_at: '2024-11-01T18:55:00Z',
//       fk_supplier_id: 14,
//       fk_category_id: 4
//     },
//     {
//       name: 'Running Shoes',
//       description: 'Comfortable running shoes for all distances.',
//       price: 89.99,
//       sku: 'SHO-RS-205',
//       created_at: '2024-11-01T19:00:00Z',
//       updated_at: '2024-11-01T19:00:00Z',
//       fk_supplier_id: 32,
//       fk_category_id: 5
//     },
//     {
//       name: 'Cooking Cookbook',
//       description: 'A collection of delicious recipes for all occasions.',
//       price: 24.99,
//       sku: 'BK-CC-206',
//       created_at: '2024-11-01T19:05:00Z',
//       updated_at: '2024-11-01T19:05:00Z',
//       fk_supplier_id: 11,
//       fk_category_id: 6
//     },
//     {
//       name: 'Wooden Train Set',
//       description: 'Classic wooden train set for imaginative play.',
//       price: 79.99,
//       sku: 'TOY-WTS-207',
//       created_at: '2024-11-01T19:10:00Z',
//       updated_at: '2024-11-01T19:10:00Z',
//       fk_supplier_id: 37,
//       fk_category_id: 7
//     },
//     {
//       name: 'Cereal (Whole Grain)',
//       description: 'Healthy whole grain cereal for breakfast.',
//       price: 4.99,
//       sku: 'GRN-CG-208',
//       created_at: '2024-11-01T19:15:00Z',
//       updated_at: '2024-11-01T19:15:00Z',
//       fk_supplier_id: 44,
//       fk_category_id: 8
//     },
//     {
//       name: 'Facial Cleanser',
//       description: 'Gentle cleanser for all skin types.',
//       price: 14.99,
//       sku: 'HNB-FC-209',
//       created_at: '2024-11-01T19:20:00Z',
//       updated_at: '2024-11-01T19:20:00Z',
//       fk_supplier_id: 29,
//       fk_category_id: 9
//     },
//     {
//       name: 'Exercise Ball',
//       description: 'Ideal for fitness workouts and balance training.',
//       price: 29.99,
//       sku: 'SP-EB-210',
//       created_at: '2024-11-01T19:25:00Z',
//       updated_at: '2024-11-01T19:25:00Z',
//       fk_supplier_id: 50,
//       fk_category_id: 10
//     },
//     {
//       name: 'Emergency Car Kit',
//       description: 'Essential kit for roadside emergencies.',
//       price: 49.99,
//       sku: 'AUTO-ECK-211',
//       created_at: '2024-11-01T19:30:00Z',
//       updated_at: '2024-11-01T19:30:00Z',
//       fk_supplier_id: 38,
//       fk_category_id: 11
//     },
//     {
//       name: 'Garden Hose',
//       description: 'Durable garden hose for all your watering needs.',
//       price: 29.99,
//       sku: 'GAR-GH-212',
//       created_at: '2024-11-01T19:35:00Z',
//       updated_at: '2024-11-01T19:35:00Z',
//       fk_supplier_id: 40,
//       fk_category_id: 12
//     },
//     {
//       name: 'Gold Earrings',
//       description: 'Elegant gold earrings suitable for any occasion.',
//       price: 149.99,
//       sku: 'JEW-GE-213',
//       created_at: '2024-11-01T19:40:00Z',
//       updated_at: '2024-11-01T19:40:00Z',
//       fk_supplier_id: 18,
//       fk_category_id: 13
//     },
//     {
//       name: 'Dog Bed',
//       description: 'Comfortable bed for your furry friend.',
//       price: 49.99,
//       sku: 'PET-DB-214',
//       created_at: '2024-11-01T19:45:00Z',
//       updated_at: '2024-11-01T19:45:00Z',
//       fk_supplier_id: 13,
//       fk_category_id: 14
//     },
//     {
//       name: 'Sticky Notes Set',
//       description: 'Colorful sticky notes for reminders and notes.',
//       price: 5.99,
//       sku: 'OFF-SNS-215',
//       created_at: '2024-11-01T19:50:00Z',
//       updated_at: '2024-11-01T19:50:00Z',
//       fk_supplier_id: 6,
//       fk_category_id: 15
//     },
//     {
//       name: 'Digital Piano',
//       description: 'Perfect for beginners and experienced musicians alike.',
//       price: 399.99,
//       sku: 'MUS-DP-216',
//       created_at: '2024-11-01T19:55:00Z',
//       updated_at: '2024-11-01T19:55:00Z',
//       fk_supplier_id: 17,
//       fk_category_id: 16
//     },
//     {
//       name: 'Gaming Headset',
//       description: 'High-quality headset for immersive gaming experience.',
//       price: 79.99,
//       sku: 'VG-GH-217',
//       created_at: '2024-11-01T20:00:00Z',
//       updated_at: '2024-11-01T20:00:00Z',
//       fk_supplier_id: 9,
//       fk_category_id: 17
//     },
//     {
//       name: 'Baby Monitor',
//       description: 'Keep an eye on your baby with this reliable monitor.',
//       price: 99.99,
//       sku: 'BAB-BM-218',
//       created_at: '2024-11-01T20:05:00Z',
//       updated_at: '2024-11-01T20:05:00Z',
//       fk_supplier_id: 48,
//       fk_category_id: 18
//     },
//     {
//       name: 'Painting Kit',
//       description: 'Complete kit for artists to explore their creativity.',
//       price: 29.99,
//       sku: 'CR-PK-219',
//       created_at: '2024-11-01T20:10:00Z',
//       updated_at: '2024-11-01T20:10:00Z',
//       fk_supplier_id: 35,
//       fk_category_id: 19
//     },
//     {
//       name: 'Cordless Drill',
//       description: 'Versatile cordless drill for home improvement projects.',
//       price: 89.99,
//       sku: 'TOOL-CD-220',
//       created_at: '2024-11-01T20:15:00Z',
//       updated_at: '2024-11-01T20:15:00Z',
//       fk_supplier_id: 23,
//       fk_category_id: 20
//     },
//     {
//       name: 'Smartwatch',
//       description: 'Track your fitness and receive notifications on the go.',
//       price: 199.99,
//       sku: 'MUS-SW-261',
//       created_at: '2024-11-01T20:20:00Z',
//       updated_at: '2024-11-01T20:20:00Z',
//       fk_supplier_id: 29,
//       fk_category_id: 1
//     },
//     {
//       name: 'Stand Mixer',
//       description: 'Powerful stand mixer for baking and cooking.',
//       price: 299.99,
//       sku: 'HAP-SM-262',
//       created_at: '2024-11-01T20:25:00Z',
//       updated_at: '2024-11-01T20:25:00Z',
//       fk_supplier_id: 8,
//       fk_category_id: 2
//     },
//     {
//       name: 'Dining Table Set',
//       description: 'Elegant dining table set for family gatherings.',
//       price: 799.99,
//       sku: 'FUR-DTS-263',
//       created_at: '2024-11-01T20:30:00Z',
//       updated_at: '2024-11-01T20:30:00Z',
//       fk_supplier_id: 26,
//       fk_category_id: 3
//     },
//     {
//       name: 'Graphic T-Shirt',
//       description: 'Cool graphic tee for casual outings.',
//       price: 24.99,
//       sku: 'CLT-GTS-264',
//       created_at: '2024-11-01T20:35:00Z',
//       updated_at: '2024-11-01T20:35:00Z',
//       fk_supplier_id: 11,
//       fk_category_id: 4
//     },
//     {
//       name: 'Ankle Boots',
//       description: 'Stylish ankle boots for fall fashion.',
//       price: 79.99,
//       sku: 'SHO-AB-265',
//       created_at: '2024-11-01T20:40:00Z',
//       updated_at: '2024-11-01T20:40:00Z',
//       fk_supplier_id: 42,
//       fk_category_id: 5
//     },
//     {
//       name: 'Travel Journal',
//       description: 'Document your adventures with this beautiful journal.',
//       price: 19.99,
//       sku: 'BK-TJ-266',
//       created_at: '2024-11-01T20:45:00Z',
//       updated_at: '2024-11-01T20:45:00Z',
//       fk_supplier_id: 15,
//       fk_category_id: 6
//     },
//     {
//       name: 'Board Game',
//       description: 'Fun board game for family game nights.',
//       price: 39.99,
//       sku: 'TOY-BG-267',
//       created_at: '2024-11-01T20:50:00Z',
//       updated_at: '2024-11-01T20:50:00Z',
//       fk_supplier_id: 33,
//       fk_category_id: 7
//     },
//     {
//       name: 'Organic Pasta',
//       description: 'Delicious and healthy organic pasta.',
//       price: 3.99,
//       sku: 'GRN-OP-268',
//       created_at: '2024-11-01T20:55:00Z',
//       updated_at: '2024-11-01T20:55:00Z',
//       fk_supplier_id: 10,
//       fk_category_id: 8
//     },
//     {
//       name: 'Hair Conditioner',
//       description: 'Nourishing conditioner for soft and shiny hair.',
//       price: 12.99,
//       sku: 'HNB-HC-269',
//       created_at: '2024-11-01T21:00:00Z',
//       updated_at: '2024-11-01T21:00:00Z',
//       fk_supplier_id: 46,
//       fk_category_id: 9
//     },
//     {
//       name: 'Dumbbell Set',
//       description: 'Adjustable dumbbell set for home workouts.',
//       price: 129.99,
//       sku: 'SP-DS-270',
//       created_at: '2024-11-01T21:05:00Z',
//       updated_at: '2024-11-01T21:05:00Z',
//       fk_supplier_id: 39,
//       fk_category_id: 10
//     },
//     {
//       name: 'First Aid Kit',
//       description: 'Complete first aid kit for home or travel.',
//       price: 24.99,
//       sku: 'AUTO-FAK-271',
//       created_at: '2024-11-01T21:10:00Z',
//       updated_at: '2024-11-01T21:10:00Z',
//       fk_supplier_id: 22,
//       fk_category_id: 11
//     },
//     {
//       name: 'Outdoor String Lights',
//       description: 'Create a cozy atmosphere with these string lights.',
//       price: 29.99,
//       sku: 'GAR-OSL-272',
//       created_at: '2024-11-01T21:15:00Z',
//       updated_at: '2024-11-01T21:15:00Z',
//       fk_supplier_id: 36,
//       fk_category_id: 12
//     },
//     {
//       name: 'Silver Bracelet',
//       description: 'Beautiful silver bracelet that complements any outfit.',
//       price: 79.99,
//       sku: 'JEW-SB-273',
//       created_at: '2024-11-01T21:20:00Z',
//       updated_at: '2024-11-01T21:20:00Z',
//       fk_supplier_id: 8,
//       fk_category_id: 13
//     },
//     {
//       name: 'Pet Carrier',
//       description: 'Comfortable carrier for your pet on the go.',
//       price: 49.99,
//       sku: 'PET-PC-274',
//       created_at: '2024-11-01T21:25:00Z',
//       updated_at: '2024-11-01T21:25:00Z',
//       fk_supplier_id: 50,
//       fk_category_id: 14
//     },
//     {
//       name: 'Whiteboard Markers',
//       description: 'Set of colorful markers for whiteboards.',
//       price: 9.99,
//       sku: 'OFF-WBM-275',
//       created_at: '2024-11-01T21:30:00Z',
//       updated_at: '2024-11-01T21:30:00Z',
//       fk_supplier_id: 20,
//       fk_category_id: 15
//     },
//     {
//       name: 'Violin',
//       description: 'High-quality violin for aspiring musicians.',
//       price: 299.99,
//       sku: 'MUS-VL-276',
//       created_at: '2024-11-01T21:35:00Z',
//       updated_at: '2024-11-01T21:35:00Z',
//       fk_supplier_id: 17,
//       fk_category_id: 16
//     },
//     {
//       name: 'Gaming Keyboard',
//       description: 'Mechanical keyboard designed for gamers.',
//       price: 99.99,
//       sku: 'VG-GK-277',
//       created_at: '2024-11-01T21:40:00Z',
//       updated_at: '2024-11-01T21:40:00Z',
//       fk_supplier_id: 9,
//       fk_category_id: 17
//     },
//     {
//       name: 'Breast Pump',
//       description: 'Efficient breast pump for breastfeeding moms.',
//       price: 129.99,
//       sku: 'BAB-BP-278',
//       created_at: '2024-11-01T21:45:00Z',
//       updated_at: '2024-11-01T21:45:00Z',
//       fk_supplier_id: 5,
//       fk_category_id: 18
//     },
//     {
//       name: 'Knitting Needles',
//       description: 'Set of knitting needles for your crafting projects.',
//       price: 12.99,
//       sku: 'CR-KN-279',
//       created_at: '2024-11-01T21:50:00Z',
//       updated_at: '2024-11-01T21:50:00Z',
//       fk_supplier_id: 24,
//       fk_category_id: 19
//     },
//     {
//       name: 'Woodworking Tool Set',
//       description: 'Essential tools for woodworking enthusiasts.',
//       price: 159.99,
//       sku: 'TOOL-WTS-280',
//       created_at: '2024-11-01T21:55:00Z',
//       updated_at: '2024-11-01T21:55:00Z',
//       fk_supplier_id: 1,
//       fk_category_id: 20
//     },
//     {
//       name: 'Wireless Earbuds',
//       description: 'Compact wireless earbuds with great sound quality.',
//       price: 79.99,
//       sku: 'MUS-WE-321',
//       created_at: '2024-11-01T22:00:00Z',
//       updated_at: '2024-11-01T22:00:00Z',
//       fk_supplier_id: 30,
//       fk_category_id: 1
//     },
//     {
//       name: 'Toaster Oven',
//       description: 'Versatile toaster oven for all your baking needs.',
//       price: 89.99,
//       sku: 'HAP-TO-322',
//       created_at: '2024-11-01T22:05:00Z',
//       updated_at: '2024-11-01T22:05:00Z',
//       fk_supplier_id: 43,
//       fk_category_id: 2
//     },
//     {
//       name: 'Recliner Chair',
//       description: 'Comfortable recliner chair for relaxation.',
//       price: 399.99,
//       sku: 'FUR-RC-323',
//       created_at: '2024-11-01T22:10:00Z',
//       updated_at: '2024-11-01T22:10:00Z',
//       fk_supplier_id: 28,
//       fk_category_id: 3
//     },
//     {
//       name: 'Denim Jacket',
//       description: 'Classic denim jacket for casual style.',
//       price: 59.99,
//       sku: 'CLT-DJ-324',
//       created_at: '2024-11-01T22:15:00Z',
//       updated_at: '2024-11-01T22:15:00Z',
//       fk_supplier_id: 14,
//       fk_category_id: 4
//     },
//     {
//       name: 'Basketball Shoes',
//       description: 'High-performance shoes designed for basketball players.',
//       price: 129.99,
//       sku: 'SHO-BS-325',
//       created_at: '2024-11-01T22:20:00Z',
//       updated_at: '2024-11-01T22:20:00Z',
//       fk_supplier_id: 31,
//       fk_category_id: 5
//     },
//     {
//       name: 'Mystery Novel',
//       description: 'Intriguing mystery novel that keeps you guessing.',
//       price: 14.99,
//       sku: 'BK-MN-326',
//       created_at: '2024-11-01T22:25:00Z',
//       updated_at: '2024-11-01T22:25:00Z',
//       fk_supplier_id: 12,
//       fk_category_id: 6
//     },
//     {
//       name: 'Building Blocks',
//       description: 'Colorful building blocks for creative play.',
//       price: 29.99,
//       sku: 'TOY-BB-327',
//       created_at: '2024-11-01T22:30:00Z',
//       updated_at: '2024-11-01T22:30:00Z',
//       fk_supplier_id: 36,
//       fk_category_id: 7
//     },
//     {
//       name: 'Organic Snack Bars',
//       description: 'Healthy snack bars made with organic ingredients.',
//       price: 19.99,
//       sku: 'GRN-OSB-328',
//       created_at: '2024-11-01T22:35:00Z',
//       updated_at: '2024-11-01T22:35:00Z',
//       fk_supplier_id: 45,
//       fk_category_id: 8
//     },
//     {
//       name: 'Moisturizing Cream',
//       description: 'Hydrating cream for all skin types.',
//       price: 29.99,
//       sku: 'HNB-MC-329',
//       created_at: '2024-11-01T22:40:00Z',
//       updated_at: '2024-11-01T22:40:00Z',
//       fk_supplier_id: 23,
//       fk_category_id: 9
//     },
//     {
//       name: 'Yoga Mat',
//       description: 'High-quality yoga mat for comfort and stability.',
//       price: 39.99,
//       sku: 'SP-YM-330',
//       created_at: '2024-11-01T22:45:00Z',
//       updated_at: '2024-11-01T22:45:00Z',
//       fk_supplier_id: 16,
//       fk_category_id: 10
//     },
//     {
//       name: 'Portable Jump Starter',
//       description: 'Compact jump starter for emergencies.',
//       price: 49.99,
//       sku: 'AUTO-PJS-331',
//       created_at: '2024-11-01T22:50:00Z',
//       updated_at: '2024-11-01T22:50:00Z',
//       fk_supplier_id: 21,
//       fk_category_id: 11
//     },
//     {
//       name: 'Planter Pot',
//       description: 'Decorative planter pot for your indoor plants.',
//       price: 19.99,
//       sku: 'GAR-PP-332',
//       created_at: '2024-11-01T22:55:00Z',
//       updated_at: '2024-11-01T22:55:00Z',
//       fk_supplier_id: 49,
//       fk_category_id: 12
//     },
//     {
//       name: 'Pearl Necklace',
//       description: 'Elegant pearl necklace for special occasions.',
//       price: 249.99,
//       sku: 'JEW-PN-333',
//       created_at: '2024-11-01T23:00:00Z',
//       updated_at: '2024-11-01T23:00:00Z',
//       fk_supplier_id: 11,
//       fk_category_id: 13
//     },
//     {
//       name: 'Cat Scratching Post',
//       description: 'Durable scratching post to keep your cat entertained.',
//       price: 39.99,
//       sku: 'PET-CSP-334',
//       created_at: '2024-11-01T23:05:00Z',
//       updated_at: '2024-11-01T23:05:00Z',
//       fk_supplier_id: 4,
//       fk_category_id: 14
//     },
//     {
//       name: 'Printer Paper',
//       description: 'High-quality printer paper for all your printing needs.',
//       price: 14.99,
//       sku: 'OFF-PP-335',
//       created_at: '2024-11-01T23:10:00Z',
//       updated_at: '2024-11-01T23:10:00Z',
//       fk_supplier_id: 8,
//       fk_category_id: 15
//     },
//     {
//       name: 'Electric Guitar',
//       description: 'Versatile electric guitar suitable for all genres.',
//       price: 399.99,
//       sku: 'MUS-EG-336',
//       created_at: '2024-11-01T23:15:00Z',
//       updated_at: '2024-11-01T23:15:00Z',
//       fk_supplier_id: 7,
//       fk_category_id: 16
//     },
//     {
//       name: 'Gaming Monitor',
//       description: 'High-resolution monitor for an immersive gaming experience.',
//       price: 299.99,
//       sku: 'VG-GM-337',
//       created_at: '2024-11-01T23:20:00Z',
//       updated_at: '2024-11-01T23:20:00Z',
//       fk_supplier_id: 12,
//       fk_category_id: 17
//     },
//     {
//       name: 'Baby Wipes',
//       description: 'Gentle baby wipes for sensitive skin.',
//       price: 19.99,
//       sku: 'BAB-BW-338',
//       created_at: '2024-11-01T23:25:00Z',
//       updated_at: '2024-11-01T23:25:00Z',
//       fk_supplier_id: 44,
//       fk_category_id: 18
//     },
//     {
//       name: 'Art Supplies Set',
//       description: 'Complete set of art supplies for creativity.',
//       price: 49.99,
//       sku: 'CR-ASS-339',
//       created_at: '2024-11-01T23:30:00Z',
//       updated_at: '2024-11-01T23:30:00Z',
//       fk_supplier_id: 39,
//       fk_category_id: 19
//     },
//     {
//       name: 'Corded Circular Saw',
//       description: 'Powerful saw for precise cuts in wood.',
//       price: 129.99,
//       sku: 'TOOL-CCS-340',
//       created_at: '2024-11-01T23:35:00Z',
//       updated_at: '2024-11-01T23:35:00Z',
//       fk_supplier_id: 18,
//       fk_category_id: 20
//     },
//     {
//       name: 'Bluetooth Speaker',
//       description: 'Portable speaker with exceptional sound quality.',
//       price: 69.99,
//       sku: 'MUS-BS-341',
//       created_at: '2024-11-01T23:40:00Z',
//       updated_at: '2024-11-01T23:40:00Z',
//       fk_supplier_id: 35,
//       fk_category_id: 1
//     },
//     {
//       name: 'Electric Kettle',
//       description: 'Fast boiling electric kettle for your kitchen.',
//       price: 39.99,
//       sku: 'HAP-EK-342',
//       created_at: '2024-11-01T23:45:00Z',
//       updated_at: '2024-11-01T23:45:00Z',
//       fk_supplier_id: 14,
//       fk_category_id: 2
//     },
//     {
//       name: 'Sofa Bed',
//       description: 'Comfortable sofa that converts into a bed.',
//       price: 499.99,
//       sku: 'FUR-SB-343',
//       created_at: '2024-11-01T23:50:00Z',
//       updated_at: '2024-11-01T23:50:00Z',
//       fk_supplier_id: 32,
//       fk_category_id: 3
//     },
//     {
//       name: 'Summer Dress',
//       description: 'Lightweight summer dress for warm days.',
//       price: 39.99,
//       sku: 'CLT-SD-344',
//       created_at: '2024-11-01T23:55:00Z',
//       updated_at: '2024-11-01T23:55:00Z',
//       fk_supplier_id: 40,
//       fk_category_id: 4
//     },
//     {
//       name: 'Running Shoes',
//       description: 'Comfortable running shoes for everyday use.',
//       price: 89.99,
//       sku: 'SHO-RS-345',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 1,
//       fk_category_id: 5
//     },
//     {
//       name: 'Travel Guide Book',
//       description: 'Essential guidebook for your next travel destination.',
//       price: 24.99,
//       sku: 'BK-TGB-346',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 48,
//       fk_category_id: 6
//     },
//     {
//       name: 'Puzzle Set',
//       description: 'Challenging puzzles for hours of fun.',
//       price: 29.99,
//       sku: 'TOY-PS-347',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 5,
//       fk_category_id: 7
//     },
//     {
//       name: 'Coffee Beans',
//       description: 'Freshly roasted coffee beans for a perfect brew.',
//       price: 14.99,
//       sku: 'GRN-CB-348',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 39,
//       fk_category_id: 8
//     },
//     {
//       name: 'Facial Serum',
//       description: 'Revitalizing serum for a glowing complexion.',
//       price: 49.99,
//       sku: 'HNB-FS-349',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 6,
//       fk_category_id: 9
//     },
//     {
//       name: 'Fitness Tracker',
//       description: 'Monitor your activity levels and health metrics.',
//       price: 89.99,
//       sku: 'SP-FT-350',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 37,
//       fk_category_id: 10
//     },
//     {
//       name: 'Car Emergency Kit',
//       description: 'All-in-one emergency kit for your car.',
//       price: 59.99,
//       sku: 'AUTO-CEK-351',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 27,
//       fk_category_id: 11
//     },
//     {
//       name: 'Garden Hose',
//       description: 'Durable garden hose for all your watering needs.',
//       price: 34.99,
//       sku: 'GAR-GH-352',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 25,
//       fk_category_id: 12
//     },
//     {
//       name: 'Diamond Ring',
//       description: 'Stunning diamond ring for that special moment.',
//       price: 999.99,
//       sku: 'JEW-DR-353',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 40,
//       fk_category_id: 13
//     },
//     {
//       name: 'Dog Bed',
//       description: 'Cozy bed for your furry friend.',
//       price: 59.99,
//       sku: 'PET-DB-354',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 3,
//       fk_category_id: 14
//     },
//     {
//       name: 'Stapler',
//       description: 'Heavy-duty stapler for office use.',
//       price: 29.99,
//       sku: 'OFF-S-355',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 11,
//       fk_category_id: 15
//     },
//     {
//       name: 'Digital Piano',
//       description: 'Portable digital piano for aspiring musicians.',
//       price: 499.99,
//       sku: 'MUS-DP-356',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 29,
//       fk_category_id: 16
//     },
//     {
//       name: 'PS5 Console',
//       description: 'Next-gen gaming console with stunning graphics.',
//       price: 499.99,
//       sku: 'VG-PS5-357',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 12,
//       fk_category_id: 17
//     },
//     {
//       name: 'Baby Monitor',
//       description: 'Keep an eye on your little one with this baby monitor.',
//       price: 69.99,
//       sku: 'BAB-BM-358',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 33,
//       fk_category_id: 18
//     },
//     {
//       name: 'Sewing Machine',
//       description: 'Easy-to-use sewing machine for all your projects.',
//       price: 199.99,
//       sku: 'CR-SM-359',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 19,
//       fk_category_id: 19
//     },
//     {
//       name: 'Cordless Drill',
//       description: 'Versatile cordless drill for home improvement tasks.',
//       price: 129.99,
//       sku: 'TOOL-CD-360',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 42,
//       fk_category_id: 20
//     },
//     {
//       name: 'Smart Watch',
//       description: 'Track your fitness and stay connected on the go.',
//       price: 199.99,
//       sku: 'SP-SW-361',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 2,
//       fk_category_id: 10
//     },
//     {
//       name: 'Food Processor',
//       description: 'Multi-functional food processor for quick meal prep.',
//       price: 149.99,
//       sku: 'HAP-FP-362',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 15,
//       fk_category_id: 2
//     },
//     {
//       name: 'Bunk Bed',
//       description: "Space-saving bunk bed for kids' rooms.",
//       price: 399.99,
//       sku: 'FUR-BB-363',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 39,
//       fk_category_id: 3
//     },
//     {
//       name: 'Windbreaker Jacket',
//       description: 'Lightweight windbreaker for outdoor activities.',
//       price: 49.99,
//       sku: 'CLT-WJ-364',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 10,
//       fk_category_id: 4
//     },
//     {
//       name: 'Hiking Boots',
//       description: 'Durable hiking boots for all terrains.',
//       price: 139.99,
//       sku: 'SHO-HB-365',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 20,
//       fk_category_id: 5
//     },
//     {
//       name: 'Cookbook',
//       description: 'Inspiring cookbook with delicious recipes.',
//       price: 29.99,
//       sku: 'BK-CB-366',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 46,
//       fk_category_id: 6
//     },
//     {
//       name: 'Action Figure',
//       description: 'Collectible action figure for fans of the series.',
//       price: 24.99,
//       sku: 'TOY-AF-367',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 17,
//       fk_category_id: 7
//     },
//     {
//       name: 'Organic Granola',
//       description: 'Healthy organic granola for breakfast.',
//       price: 9.99,
//       sku: 'GRN-OG-368',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 14,
//       fk_category_id: 8
//     },
//     {
//       name: 'Nail Polish',
//       description: 'Long-lasting nail polish in various colors.',
//       price: 9.99,
//       sku: 'HNB-NP-369',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 11,
//       fk_category_id: 9
//     },
//     {
//       name: 'Resistance Bands',
//       description: 'Versatile resistance bands for workouts.',
//       price: 29.99,
//       sku: 'SP-RB-370',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 29,
//       fk_category_id: 10
//     },
//     {
//       name: 'Car Floor Mats',
//       description: "Durable mats to protect your car's interior.",
//       price: 49.99,
//       sku: 'AUTO-CFM-371',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 9,
//       fk_category_id: 11
//     },
//     {
//       name: 'Garden Trowel',
//       description: 'Essential tool for planting and digging.',
//       price: 14.99,
//       sku: 'GAR-GT-372',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 33,
//       fk_category_id: 12
//     },
//     {
//       name: 'Silver Bracelet',
//       description: 'Stylish silver bracelet for everyday wear.',
//       price: 99.99,
//       sku: 'JEW-SB-373',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 12,
//       fk_category_id: 13
//     },
//     {
//       name: 'Pet Grooming Kit',
//       description: 'Complete grooming kit for your pet.',
//       price: 39.99,
//       sku: 'PET-GK-374',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 25,
//       fk_category_id: 14
//     },
//     {
//       name: 'Office Chair',
//       description: 'Comfortable office chair for long hours of work.',
//       price: 149.99,
//       sku: 'OFF-OC-375',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 8,
//       fk_category_id: 15
//     },
//     {
//       name: 'Ukulele',
//       description: 'Fun and easy-to-play ukulele for beginners.',
//       price: 69.99,
//       sku: 'MUS-UKE-376',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 45,
//       fk_category_id: 16
//     },
//     {
//       name: 'Xbox Series X',
//       description: 'Powerful gaming console with a vast library of games.',
//       price: 499.99,
//       sku: 'VG-XBX-377',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 31,
//       fk_category_id: 17
//     },
//     {
//       name: 'Diaper Bag',
//       description: 'Stylish diaper bag with plenty of storage.',
//       price: 49.99,
//       sku: 'BAB-DB-378',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 9,
//       fk_category_id: 18
//     },
//     {
//       name: 'Paint Set',
//       description: 'Complete paint set for artists of all levels.',
//       price: 39.99,
//       sku: 'CR-PS-379',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 17,
//       fk_category_id: 19
//     },
//     {
//       name: 'Corded Circular Saw',
//       description: 'Powerful circular saw for all your cutting needs.',
//       price: 149.99,
//       sku: 'TOOL-CCS-380',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 28,
//       fk_category_id: 20
//     },
//     {
//       name: 'Wireless Earbuds',
//       description: 'High-quality wireless earbuds with noise cancellation.',
//       price: 79.99,
//       sku: 'ELE-WE-001',
//       created_at: '2024-11-01T23:10:00Z',
//       updated_at: '2024-11-01T23:10:00Z',
//       fk_supplier_id: 21,
//       fk_category_id: 1
//     },
//     {
//       name: 'Blender',
//       description: 'Powerful blender for smoothies and soups.',
//       price: 89.99,
//       sku: 'HAP-BL-002',
//       created_at: '2024-11-01T23:15:00Z',
//       updated_at: '2024-11-01T23:15:00Z',
//       fk_supplier_id: 10,
//       fk_category_id: 2
//     },
//     {
//       name: 'Dining Table',
//       description: 'Stylish dining table for family meals.',
//       price: 499.99,
//       sku: 'FUR-DT-003',
//       created_at: '2024-11-01T23:20:00Z',
//       updated_at: '2024-11-01T23:20:00Z',
//       fk_supplier_id: 50,
//       fk_category_id: 3
//     },
//     {
//       name: 'Jeans',
//       description: 'Comfortable jeans for everyday wear.',
//       price: 39.99,
//       sku: 'CLT-JE-004',
//       created_at: '2024-11-01T23:25:00Z',
//       updated_at: '2024-11-01T23:25:00Z',
//       fk_supplier_id: 16,
//       fk_category_id: 4
//     },
//     {
//       name: 'Sneakers',
//       description: 'Stylish sneakers for casual outings.',
//       price: 79.99,
//       sku: 'SHO-SN-005',
//       created_at: '2024-11-01T23:30:00Z',
//       updated_at: '2024-11-01T23:30:00Z',
//       fk_supplier_id: 22,
//       fk_category_id: 5
//     },
//     {
//       name: 'Fiction Novel',
//       description: 'A gripping fiction novel for book lovers.',
//       price: 19.99,
//       sku: 'BK-FN-006',
//       created_at: '2024-11-01T23:35:00Z',
//       updated_at: '2024-11-01T23:35:00Z',
//       fk_supplier_id: 27,
//       fk_category_id: 6
//     },
//     {
//       name: 'Action Figure Set',
//       description: 'Collectible action figures from your favorite series.',
//       price: 34.99,
//       sku: 'TOY-AFS-007',
//       created_at: '2024-11-01T23:40:00Z',
//       updated_at: '2024-11-01T23:40:00Z',
//       fk_supplier_id: 11,
//       fk_category_id: 7
//     },
//     {
//       name: 'Organic Olive Oil',
//       description: 'High-quality organic olive oil for cooking.',
//       price: 14.99,
//       sku: 'GRN-OO-008',
//       created_at: '2024-11-01T23:45:00Z',
//       updated_at: '2024-11-01T23:45:00Z',
//       fk_supplier_id: 15,
//       fk_category_id: 8
//     },
//     {
//       name: 'Moisturizing Lotion',
//       description: 'Nourishing lotion for soft and smooth skin.',
//       price: 29.99,
//       sku: 'HNB-ML-009',
//       created_at: '2024-11-01T23:50:00Z',
//       updated_at: '2024-11-01T23:50:00Z',
//       fk_supplier_id: 30,
//       fk_category_id: 9
//     },
//     {
//       name: 'Yoga Mat',
//       description: 'Non-slip yoga mat for all types of workouts.',
//       price: 39.99,
//       sku: 'SP-YM-080',
//       created_at: '2024-11-01T23:55:00Z',
//       updated_at: '2024-11-01T23:55:00Z',
//       fk_supplier_id: 38,
//       fk_category_id: 10
//     },
//     {
//       name: 'Windshield Sunshade',
//       description: "Protect your car's interior from UV rays.",
//       price: 19.99,
//       sku: 'AUTO-WS-011',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 3,
//       fk_category_id: 11
//     },
//     {
//       name: 'Gardening Gloves',
//       description: 'Durable gloves for all your gardening tasks.',
//       price: 12.99,
//       sku: 'GAR-GG-012',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 40,
//       fk_category_id: 12
//     },
//     {
//       name: 'Gold Necklace',
//       description: 'Elegant gold necklace for special occasions.',
//       price: 299.99,
//       sku: 'JEW-GN-013',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 9,
//       fk_category_id: 13
//     },
//     {
//       name: 'Cat Litter Box',
//       description: 'Hygienic litter box for your feline friend.',
//       price: 39.99,
//       sku: 'PET-CLB-014',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 12,
//       fk_category_id: 14
//     },
//     {
//       name: 'Notebook',
//       description: 'Stylish notebook for your thoughts and ideas.',
//       price: 9.99,
//       sku: 'OFF-NB-015',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 5,
//       fk_category_id: 15
//     },
//     {
//       name: 'Violin',
//       description: 'Beautifully crafted violin for aspiring musicians.',
//       price: 499.99,
//       sku: 'MUS-VN-016',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 26,
//       fk_category_id: 16
//     },
//     {
//       name: 'Gaming Mouse',
//       description: 'High precision gaming mouse for competitive play.',
//       price: 59.99,
//       sku: 'VG-GM-017',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 44,
//       fk_category_id: 17
//     },
//     {
//       name: 'Baby Crib',
//       description: 'Safe and stylish crib for your baby.',
//       price: 199.99,
//       sku: 'BAB-CR-018',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 8,
//       fk_category_id: 18
//     },
//     {
//       name: 'Crafting Scissors',
//       description: 'Sharp and durable scissors for all your crafting needs.',
//       price: 12.99,
//       sku: 'CR-CS-019',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 7,
//       fk_category_id: 19
//     },
//     {
//       name: 'Rotary Tool Kit',
//       description: 'Versatile rotary tool for DIY projects.',
//       price: 99.99,
//       sku: 'TOOL-RK-020',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 4,
//       fk_category_id: 20
//     },
//     {
//       name: 'Bluetooth Speaker',
//       description: 'Portable Bluetooth speaker with rich sound.',
//       price: 59.99,
//       sku: 'ELE-BS-021',
//       created_at: '2024-11-01T23:10:00Z',
//       updated_at: '2024-11-01T23:10:00Z',
//       fk_supplier_id: 35,
//       fk_category_id: 1
//     },
//     {
//       name: 'Coffee Maker',
//       description: 'Brews rich and flavorful coffee every morning.',
//       price: 89.99,
//       sku: 'HAP-CM-022',
//       created_at: '2024-11-01T23:15:00Z',
//       updated_at: '2024-11-01T23:15:00Z',
//       fk_supplier_id: 1,
//       fk_category_id: 2
//     },
//     {
//       name: 'Sofa',
//       description: 'Comfortable and modern sofa for your living room.',
//       price: 799.99,
//       sku: 'FUR-SO-023',
//       created_at: '2024-11-01T23:20:00Z',
//       updated_at: '2024-11-01T23:20:00Z',
//       fk_supplier_id: 19,
//       fk_category_id: 3
//     },
//     {
//       name: 'T-Shirt',
//       description: 'Casual T-shirt available in various colors.',
//       price: 24.99,
//       sku: 'CLT-TS-024',
//       created_at: '2024-11-01T23:25:00Z',
//       updated_at: '2024-11-01T23:25:00Z',
//       fk_supplier_id: 32,
//       fk_category_id: 4
//     },
//     {
//       name: 'Flip Flops',
//       description: 'Comfortable flip flops for the beach.',
//       price: 19.99,
//       sku: 'SHO-FF-025',
//       created_at: '2024-11-01T23:30:00Z',
//       updated_at: '2024-11-01T23:30:00Z',
//       fk_supplier_id: 49,
//       fk_category_id: 5
//     },
//     {
//       name: 'Science Fiction Book',
//       description: 'An engaging science fiction novel for readers.',
//       price: 14.99,
//       sku: 'BK-SF-026',
//       created_at: '2024-11-01T23:35:00Z',
//       updated_at: '2024-11-01T23:35:00Z',
//       fk_supplier_id: 20,
//       fk_category_id: 6
//     },
//     {
//       name: 'Puzzle Game',
//       description: 'Challenging puzzle game for hours of fun.',
//       price: 29.99,
//       sku: 'TOY-PG-027',
//       created_at: '2024-11-01T23:40:00Z',
//       updated_at: '2024-11-01T23:40:00Z',
//       fk_supplier_id: 24,
//       fk_category_id: 7
//     },
//     {
//       name: 'Granola Bars',
//       description: 'Healthy granola bars for a quick snack.',
//       price: 9.99,
//       sku: 'GRN-GB-028',
//       created_at: '2024-11-01T23:45:00Z',
//       updated_at: '2024-11-01T23:45:00Z',
//       fk_supplier_id: 13,
//       fk_category_id: 8
//     },
//     {
//       name: 'Facial Cleanser',
//       description: 'Gentle facial cleanser for daily use.',
//       price: 15.99,
//       sku: 'HNB-FC-029',
//       created_at: '2024-11-01T23:50:00Z',
//       updated_at: '2024-11-01T23:50:00Z',
//       fk_supplier_id: 23,
//       fk_category_id: 9
//     },
//     {
//       name: 'Jump Rope',
//       description: 'Durable jump rope for fitness training.',
//       price: 14.99,
//       sku: 'SP-JR-030',
//       created_at: '2024-11-01T23:55:00Z',
//       updated_at: '2024-11-01T23:55:00Z',
//       fk_supplier_id: 37,
//       fk_category_id: 10
//     },
//     {
//       name: 'Seat Covers',
//       description: 'Stylish seat covers to protect your car seats.',
//       price: 39.99,
//       sku: 'AUTO-SC-031',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 6,
//       fk_category_id: 11
//     },
//     {
//       name: 'Garden Hose',
//       description: 'Durable garden hose for watering plants.',
//       price: 24.99,
//       sku: 'GAR-GH-032',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 18,
//       fk_category_id: 12
//     },
//     {
//       name: 'Diamond Earrings',
//       description: 'Elegant diamond earrings for special occasions.',
//       price: 399.99,
//       sku: 'JEW-DE-033',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 47,
//       fk_category_id: 13
//     },
//     {
//       name: 'Dog Bed',
//       description: 'Comfortable bed for your furry friend.',
//       price: 49.99,
//       sku: 'PET-DB-034',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 29,
//       fk_category_id: 14
//     },
//     {
//       name: 'Office Desk',
//       description: 'Spacious desk for your home office.',
//       price: 199.99,
//       sku: 'OFF-OD-035',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 34,
//       fk_category_id: 15
//     },
//     {
//       name: 'Acoustic Guitar',
//       description: 'Perfect guitar for beginners and enthusiasts.',
//       price: 199.99,
//       sku: 'MUS-AG-036',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 41,
//       fk_category_id: 16
//     },
//     {
//       name: 'Nintendo Switch',
//       description: 'Popular gaming console with handheld capabilities.',
//       price: 299.99,
//       sku: 'VG-NS-037',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 10,
//       fk_category_id: 17
//     },
//     {
//       name: 'Baby Monitor',
//       description: 'Wireless baby monitor with video capabilities.',
//       price: 89.99,
//       sku: 'BAB-BM-038',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 5,
//       fk_category_id: 18
//     },
//     {
//       name: 'Crafting Paper',
//       description: 'Versatile crafting paper for all your projects.',
//       price: 8.99,
//       sku: 'CR-CP-039',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 18,
//       fk_category_id: 19
//     },
//     {
//       name: 'Drill Set',
//       description: 'Comprehensive drill set for DIY enthusiasts.',
//       price: 119.99,
//       sku: 'TOOL-DS-040',
//       created_at: '2024-11-01T23:59:00Z',
//       updated_at: '2024-11-01T23:59:00Z',
//       fk_supplier_id: 2,
//       fk_category_id: 20
//     }
//   ]

// // Contador de SKU
// const skuCount = {};

// // Contar ocurrencias de cada SKU
// products.forEach(product => {
//   if (skuCount[product.sku]) {
//     skuCount[product.sku].count++;
//     skuCount[product.sku].products.push(product);
//   } else {
//     skuCount[product.sku] = { count: 1, products: [product] };
//   }
// });

// // Filtrar los SKU duplicados
// const duplicates = Object.values(skuCount).filter(sku => sku.count > 1);

// // Mostrar los productos duplicados en la consola
// duplicates.forEach(duplicate => {
//   console.log(`SKU: ${duplicate.products[0].sku}`);
//   console.log('Productos duplicados:');
//   duplicate.products.forEach(product => {
//     console.log(`- ${product.name} (ID: ${product.fk_supplier_id})`);
//   });
// });

const express = require('express')
const fs = require('fs')
const app = express() //crea instancia de express
// const PORT = 3000 
// const colors = require('colors')

app.use(express.json()) //configura express para que pueda recibir json

// const totalAmountData = [264.95, 479.92, 132.95, 25.98, 1124.94, 590.92, 119.96, 119.97, 1099.97, 1759.94, 709.94, 2189.93, 269.97, 158.92, 199.99, 134.93, 269.96, 25.98, 889.93, 69.99, 4525.93, 144.96, 1549.93, 39.99, 179.95, 59.99, 599.94, 119.97, 469.97, 359.97, 49.98, 354.95, 99.98, 399.96, 119.98, 229.95, 3099.92, 239.98, 624.95, 639.96, 9.98, 257.94, 89.97, 49.98, 59.99, 59.98, 51.96, 269.97, 1549.94, 199.98, 2799.96, 12.99, 2699.97, 134.93, 1009.96, 1199.96, 1679.97, 89.97, 929.93, 899.99, 59.96, 29.99, 1899.93, 169.96, 1099.94, 309.97, 38.97, 759.97, 39.95, 449.97, 449.97, 519.96, 199.93, 39.99, 218.91, 539.92, 1509.87, 179.98, 544.89, 607.88, 829.94, 479.93, 869.90, 25.98, 2834.91, 999.90, 307.92, 1759.88, 1529.92, 59.98, 799.89, 216.96, 1709.87, 539.93, 419.90, 119.98, 959.90, 819.92, 295.91, 649.90, 305.90, 34.99, 904.87, 1249.92, 204.91, 1209.89, 478.90, 669.91, 298.88, 854.87, 499.92, 2964.90, 838.89, 39.99, 764.89, 679.91, 289.95, 809.92, 759.87, 299.96, 1339.88, 359.97, 429.92, 584.93, 294.91, 319.94, 259.90, 304.93, 759.92, 1169.87, 249.93, 169.95, 1169.89, 14.97, 240.92, 1039.92, 331.92, 549.93, 884.90, 719.91, 1694.92, 51.96, 258.94, 599.92, 413.91, 59.96, 1009.91, 714.92, 219.95, 849.89, 734.91, 131.94, 709.90, 964.91, 704.94, 299.94, 524.89, 199.99, 198.93, 329.92, 179.91, 819.94, 909.92, 409.91, 909.88, 59.98, 319.96, 399.93, 129.96, 869.89, 844.91, 419.91, 832.93, 124.96, 1119.91, 609.92, 609.91, 439.94, 1169.90, 259.98, 236.90, 489.95, 699.90, 854.90, 199.95, 939.93, 1509.90, 499.94, 799.92, 265.92, 309.93, 454.90, 432.93, 859.88, 79.98, 399.95, 1764.86, 719.91, 254.94, 397.92, 182.90, 199.98, 619.91, 699.90, 1179.93, 189.90, 1419.92, 371.94, 599.90, 219.94, 1389.92, 512.93, 599.91, 1399.92, 1239.90, 419.92, 304.93, 218.91, 299.93, 239.95, 915.90, 609.92, 1279.93, 1209.88, 99.94, 674.92, 269.93, 479.91, 164.94, 464.91, 199.95, 192.97, 669.92, 779.94, 739.95]

// function generateAscendingDates (startDate, count) {
//   const dates = []
//   const currentDate = startDate

//   for (let i = 0; i < count; i++) {
//     // Crear una nueva fecha en el formato deseado
//     const date = currentDate.toISOString().slice(0, 19) + 'Z'
//     dates.push(date)

//     // Incrementar la fecha por un intervalo aleatorio entre 1 y 60 minutos
//     const randomMinutes = Math.floor(Math.random() * 60) + 1 // Entre 1 y 60 minutos
//     currentDate.setMinutes(currentDate.getMinutes() + randomMinutes)
//   }

//   return dates
// }

// // Establecer la fecha inicial
// const startDate = new Date('2024-11-02T00:00:00Z')

// // Generar fechas ascendentes
// const saleDates = generateAscendingDates(startDate, totalAmountData.length)

// // Generar datos en formato JSON
// const newData = totalAmountData.map((amount, index) => ({
//   fk_branch_id: Math.floor(Math.random() * 7) + 1,
//   fk_customer_id: Math.floor(Math.random() * 62) + 1,
//   sale_date: saleDates[index],
//   total_amount: amount
// }))

// // Guardar todos los datos en un solo archivo JSON
// const filename = 'all_sales_data.json'
// fs.writeFileSync(filename, JSON.stringify(newData, null, 2))
// console.log(`Todos los datos guardados en ${filename}`)

// Establecer la fecha inicial

// Guardar todos los datos en un solo archivo JSON

// function generateData () {
//   const data = []

//   // Iterar sobre cada fk_branch_id del 1 al 7
//   for (let branchId = 1; branchId <= 7; branchId++) {
//     // Iterar sobre cada fk_product_id del 1 al 220
//     for (let productId = 1; productId <= 220; productId++) {
//       data.push({
//         fk_branch_id: branchId,
//         fk_product_id: productId,
//         quantity: Math.floor(Math.random() * 1001), // Cantidad aleatoria del 0 al 1000
//         updated_at: '2024-11-02T06:00:00Z' // Fecha fija
//       })
//     }
//   }

//   return data
// }

// // Llamar a la función y almacenar el resultado
// const generatedData = generateData()

// const filename = 'all_stock_data.json'
// fs.writeFileSync(filename, JSON.stringify(generatedData, null, 2))
// console.log(`Todos los datos guardados en ${filename}`)
const customerDates = [
  { name: 'Juan', last_name_1: 'García', last_name_2: 'Hernández', email: 'juan.garcia@example.com', phone: '(555) 100-0001', address: 'Calle Insurgentes 1234', city: 'Ciudad de México', state: 'CDMX', country: 'México', postal_code: '01000', registered_at: '2023-10-01T09:00:00Z' },
  { name: 'María', last_name_1: 'López', last_name_2: 'Sánchez', email: 'maria.lopez@example.com', phone: '(555) 100-0002', address: 'Av. Juárez 567', city: 'Guadalajara', state: 'Jalisco', country: 'México', postal_code: '44100', registered_at: '2023-10-02T10:00:00Z' },
  { name: 'José', last_name_1: 'Martínez', last_name_2: 'González', email: 'jose.martinez@example.com', phone: '(555) 100-0003', address: 'Calle Reforma 101', city: 'Monterrey', state: 'Nuevo León', country: 'México', postal_code: '64000', registered_at: '2023-10-03T11:00:00Z' },
  { name: 'Ana', last_name_1: 'Ramírez', last_name_2: 'Pérez', email: 'ana.ramirez@example.com', phone: '(555) 100-0004', address: 'Calle 5 de Febrero 789', city: 'Puebla', state: 'Puebla', country: 'México', postal_code: '72000', registered_at: '2023-10-04T12:00:00Z' },
  { name: 'Luis', last_name_1: 'Hernández', last_name_2: 'Torres', email: 'luis.hernandez@example.com', phone: '(555) 100-0005', address: 'Calle Morelos 456', city: 'Tijuana', state: 'Baja California', country: 'México', postal_code: '22000', registered_at: '2023-10-05T13:00:00Z' },
  { name: 'Sofía', last_name_1: 'González', last_name_2: 'Vásquez', email: 'sofia.gonzalez@example.com', phone: '(555) 100-0006', address: 'Calle 20 de Noviembre 234', city: 'León', state: 'Guanajuato', country: 'México', postal_code: '37000', registered_at: '2023-10-06T14:00:00Z' },
  { name: 'Diego', last_name_1: 'Martínez', last_name_2: 'Salazar', email: 'diego.martinez@example.com', phone: '(555) 100-0007', address: 'Av. Constitución 101', city: 'Querétaro', state: 'Querétaro', country: 'México', postal_code: '76000', registered_at: '2023-10-07T15:00:00Z' },
  { name: 'Camila', last_name_1: 'Pérez', last_name_2: 'Méndez', email: 'camila.perez@example.com', phone: '(555) 100-0008', address: 'Calle Hidalgo 123', city: 'Mérida', state: 'Yucatán', country: 'México', postal_code: '97000', registered_at: '2023-10-08T16:00:00Z' },
  { name: 'Miguel', last_name_1: 'Torres', last_name_2: 'Cruz', email: 'miguel.torres@example.com', phone: '(555) 100-0009', address: 'Calle de la Paz 987', city: 'Veracruz', state: 'Veracruz', country: 'México', postal_code: '91700', registered_at: '2023-10-09T17:00:00Z' },
  { name: 'Valentina', last_name_1: 'Gutiérrez', last_name_2: 'Ríos', email: 'valentina.gutierrez@example.com', phone: '(555) 100-0010', address: 'Calle de los Naranjos 456', city: 'San Luis Potosí', state: 'San Luis Potosí', country: 'México', postal_code: '78000', registered_at: '2023-10-10T18:00:00Z' },
  { name: 'Fernando', last_name_1: 'Reyes', last_name_2: 'Maldonado', email: 'fernando.reyes@example.com', phone: '(555) 100-0011', address: 'Calle de los Olivos 123', city: 'Hermosillo', state: 'Sonora', country: 'México', postal_code: '83000', registered_at: '2023-10-11T19:00:00Z' },
  { name: 'Lucía', last_name_1: 'Morales', last_name_2: 'López', email: 'lucia.morales@example.com', phone: '(555) 100-0012', address: 'Calle de las Flores 654', city: 'Saltillo', state: 'Coahuila', country: 'México', postal_code: '25000', registered_at: '2023-10-12T20:00:00Z' },
  { name: 'Javier', last_name_1: 'Santos', last_name_2: 'Ceballos', email: 'javier.santos@example.com', phone: '(555) 100-0013', address: 'Calle de los Abetos 321', city: 'Puebla', state: 'Puebla', country: 'México', postal_code: '72001', registered_at: '2023-10-13T21:00:00Z' },
  { name: 'Natalia', last_name_1: 'Jiménez', last_name_2: 'Alvarado', email: 'natalia.jimenez@example.com', phone: '(555) 100-0014', address: 'Calle de la Luz 222', city: 'Tlaxcala', state: 'Tlaxcala', country: 'México', postal_code: '90000', registered_at: '2023-10-14T22:00:00Z' },
  { name: 'Andrés', last_name_1: 'Cano', last_name_2: 'Rojas', email: 'andres.cano@example.com', phone: '(555) 100-0015', address: 'Calle de la Esperanza 333', city: 'Chihuahua', state: 'Chihuahua', country: 'México', postal_code: '31000', registered_at: '2023-10-15T23:00:00Z' },
  { name: 'Gabriela', last_name_1: 'Aguilar', last_name_2: 'Salas', email: 'gabriela.aguilar@example.com', phone: '(555) 100-0016', address: 'Calle de la Salud 777', city: 'Irapuato', state: 'Guanajuato', country: 'México', postal_code: '36500', registered_at: '2023-10-16T08:30:00Z' },
  { name: 'Cristian', last_name_1: 'Ríos', last_name_2: 'González', email: 'cristian.rios@example.com', phone: '(555) 100-0017', address: 'Calle de la Amistad 444', city: 'Durango', state: 'Durango', country: 'México', postal_code: '34000', registered_at: '2023-10-17T09:15:00Z' },
  { name: 'Estefanía', last_name_1: 'Valdez', last_name_2: 'Mora', email: 'estefania.valdez@example.com', phone: '(555) 100-0018', address: 'Calle de los Pinos 555', city: 'Oaxaca', state: 'Oaxaca', country: 'México', postal_code: '68000', registered_at: '2023-10-18T10:00:00Z' },
  { name: 'Alberto', last_name_1: 'Córdova', last_name_2: 'Soto', email: 'alberto.cordova@example.com', phone: '(555) 100-0019', address: 'Calle de la Esperanza 666', city: 'Aguascalientes', state: 'Aguascalientes', country: 'México', postal_code: '20000', registered_at: '2023-10-19T11:00:00Z' },
  { name: 'Patricia', last_name_1: 'Salinas', last_name_2: 'Pérez', email: 'patricia.salinas@example.com', phone: '(555) 100-0020', address: 'Calle de la Salud 777', city: 'Irapuato', state: 'Guanajuato', country: 'México', postal_code: '36500', registered_at: '2023-10-20T12:00:00Z' },
  { name: 'Raúl', last_name_1: 'Pérez', last_name_2: 'Cruz', email: 'raul.perez@example.com', phone: '(555) 100-0021', address: 'Calle de la Libertad 888', city: 'Tepic', state: 'Nayarit', country: 'México', postal_code: '63000', registered_at: '2023-10-21T13:00:00Z' },
  { name: 'Verónica', last_name_1: 'Castillo', last_name_2: 'Jiménez', email: 'veronica.castillo@example.com', phone: '(555) 100-0022', address: 'Calle de la Amistad 999', city: 'Tuxtla Gutiérrez', state: 'Chiapas', country: 'México', postal_code: '29000', registered_at: '2023-10-22T14:00:00Z' },
  { name: 'Jorge', last_name_1: 'Mendoza', last_name_2: 'Fuentes', email: 'jorge.mendoza@example.com', phone: '(555) 100-0023', address: 'Calle de la Independencia 1111', city: 'Matamoros', state: 'Tamaulipas', country: 'México', postal_code: '87400', registered_at: '2023-10-23T15:00:00Z' },
  { name: 'Cecilia', last_name_1: 'Aguirre', last_name_2: 'Soto', email: 'cecilia.aguirre@example.com', phone: '(555) 100-0024', address: 'Calle de los Ángeles 1212', city: 'Monclova', state: 'Coahuila', country: 'México', postal_code: '25700', registered_at: '2023-10-24T16:00:00Z' },
  { name: 'Ernesto', last_name_1: 'Orozco', last_name_2: 'Luna', email: 'ernesto.orozco@example.com', phone: '(555) 100-0025', address: 'Calle de la Riqueza 1313', city: 'Culiacán', state: 'Sinaloa', country: 'México', postal_code: '80000', registered_at: '2023-10-25T17:00:00Z' },
  { name: 'Diana', last_name_1: 'Rivas', last_name_2: 'Sánchez', email: 'diana.rivas@example.com', phone: '(555) 100-0026', address: 'Calle de la Victoria 1414', city: 'Chilpancingo', state: 'Guerrero', country: 'México', postal_code: '39000', registered_at: '2023-10-26T18:00:00Z' },
  { name: 'Santiago', last_name_1: 'Cárdenas', last_name_2: 'Arreola', email: 'santiago.cardenas@example.com', phone: '(555) 100-0027', address: 'Calle de los Ríos 1515', city: 'Zacatecas', state: 'Zacatecas', country: 'México', postal_code: '98000', registered_at: '2023-10-27T19:00:00Z' },
  { name: 'Emilia', last_name_1: 'Silva', last_name_2: 'Méndez', email: 'emilia.silva@example.com', phone: '(555) 100-0028', address: 'Calle de las Estrellas 1616', city: 'San Cristóbal de las Casas', state: 'Chiapas', country: 'México', postal_code: '29200', registered_at: '2023-10-28T20:00:00Z' },
  { name: 'Nicolás', last_name_1: 'Lara', last_name_2: 'Nava', email: 'nicolas.lara@example.com', phone: '(555) 100-0029', address: 'Calle de los Girasoles 1717', city: 'Oaxaca', state: 'Oaxaca', country: 'México', postal_code: '68001', registered_at: '2023-10-29T21:00:00Z' },
  { name: 'Pablo', last_name_1: 'Serrano', last_name_2: 'González', email: 'pablo.serrano@example.com', phone: '(555) 100-0030', address: 'Calle de la Calma 1818', city: 'Guadalajara', state: 'Jalisco', country: 'México', postal_code: '44101', registered_at: '2023-10-30T22:00:00Z' },
  { name: 'Lucas', last_name_1: 'Moreno', last_name_2: 'Hernández', email: 'lucas.moreno@example.com', phone: '(555) 100-0031', address: 'Calle del Sol 1919', city: 'Durango', state: 'Durango', country: 'México', postal_code: '34001', registered_at: '2023-10-31T23:00:00Z' },
  { name: 'Emily', last_name_1: 'Smith', email: 'emily.smith@example.com', phone: '(555) 200-0001', address: '123 Maple St', city: 'Los Angeles', state: 'CA', country: 'USA', postal_code: '90001', registered_at: '2023-10-01T09:00:00Z' },
  { name: 'Michael', last_name_1: 'Johnson', email: 'michael.johnson@example.com', phone: '(555) 200-0002', address: '456 Oak Ave', city: 'Chicago', state: 'IL', country: 'USA', postal_code: '60601', registered_at: '2023-10-02T10:00:00Z' },
  { name: 'Jessica', last_name_1: 'Davis', email: 'jessica.davis@example.com', phone: '(555) 200-0003', address: '789 Pine Rd', city: 'Houston', state: 'TX', country: 'USA', postal_code: '77001', registered_at: '2023-10-03T11:00:00Z' },
  { name: 'David', last_name_1: 'Garcia', email: 'david.garcia@example.com', phone: '(555) 200-0004', address: '321 Birch Dr', city: 'Phoenix', state: 'AZ', country: 'USA', postal_code: '85001', registered_at: '2023-10-04T12:00:00Z' },
  { name: 'Sarah', last_name_1: 'Brown', email: 'sarah.brown@example.com', phone: '(555) 200-0005', address: '654 Cedar St', city: 'San Antonio', state: 'TX', country: 'USA', postal_code: '78201', registered_at: '2023-10-05T13:00:00Z' },
  { name: 'Christopher', last_name_1: 'Martinez', email: 'christopher.martinez@example.com', phone: '(555) 200-0006', address: '987 Elm St', city: 'San Diego', state: 'CA', country: 'USA', postal_code: '92101', registered_at: '2023-10-06T14:00:00Z' },
  { name: 'Ashley', last_name_1: 'Wilson', email: 'ashley.wilson@example.com', phone: '(555) 200-0007', address: '123 Willow Ln', city: 'Dallas', state: 'TX', country: 'USA', postal_code: '75201', registered_at: '2023-10-07T15:00:00Z' },
  { name: 'Matthew', last_name_1: 'Anderson', email: 'matthew.anderson@example.com', phone: '(555) 200-0008', address: '456 Spruce St', city: 'Austin', state: 'TX', country: 'USA', postal_code: '73301', registered_at: '2023-10-08T16:00:00Z' },
  { name: 'Michelle', last_name_1: 'Taylor', email: 'michelle.taylor@example.com', phone: '(555) 200-0009', address: '789 Poplar Ave', city: 'San Francisco', state: 'CA', country: 'USA', postal_code: '94101', registered_at: '2023-10-09T17:00:00Z' },
  { name: 'Daniel', last_name_1: 'Thomas', email: 'daniel.thomas@example.com', phone: '(555) 200-0010', address: '321 Walnut St', city: 'Seattle', state: 'WA', country: 'USA', postal_code: '98101', registered_at: '2023-10-10T18:00:00Z' },
  { name: 'Laura', last_name_1: 'Jackson', email: 'laura.jackson@example.com', phone: '(555) 200-0011', address: '654 Maple Ave', city: 'Denver', state: 'CO', country: 'USA', postal_code: '80201', registered_at: '2023-10-11T19:00:00Z' },
  { name: 'James', last_name_1: 'White', email: 'james.white@example.com', phone: '(555) 200-0012', address: '987 Pine St', city: 'Boston', state: 'MA', country: 'USA', postal_code: '02101', registered_at: '2023-10-12T20:00:00Z' },
  { name: 'Olivia', last_name_1: 'Harris', email: 'olivia.harris@example.com', phone: '(555) 200-0013', address: '123 Elm St', city: 'Philadelphia', state: 'PA', country: 'USA', postal_code: '19101', registered_at: '2023-10-13T21:00:00Z' },
  { name: 'Alexander', last_name_1: 'Martin', email: 'alexander.martin@example.com', phone: '(555) 200-0014', address: '456 Oak Dr', city: 'Las Vegas', state: 'NV', country: 'USA', postal_code: '89101', registered_at: '2023-10-14T22:00:00Z' },
  { name: 'Sophia', last_name_1: 'Thompson', email: 'sophia.thompson@example.com', phone: '(555) 200-0015', address: '789 Cedar Ln', city: 'Portland', state: 'OR', country: 'USA', postal_code: '97201', registered_at: '2023-10-15T23:00:00Z' },
  { name: 'Ethan', last_name_1: 'Garrett', email: 'ethan.garrett@example.com', phone: '(555) 200-0016', address: '321 Maple St', city: 'Miami', state: 'FL', country: 'USA', postal_code: '33101', registered_at: '2023-10-16T08:30:00Z' },
  { name: 'Ava', last_name_1: 'Martinez', email: 'ava.martinez@example.com', phone: '(555) 200-0017', address: '654 Birch Ave', city: 'Baltimore', state: 'MD', country: 'USA', postal_code: '21201', registered_at: '2023-10-17T09:15:00Z' },
  { name: 'Mason', last_name_1: 'Lee', email: 'mason.lee@example.com', phone: '(555) 200-0018', address: '987 Willow St', city: 'Atlanta', state: 'GA', country: 'USA', postal_code: '30301', registered_at: '2023-10-18T10:00:00Z' },
  { name: 'Isabella', last_name_1: 'Walker', email: 'isabella.walker@example.com', phone: '(555) 200-0019', address: '123 Oak St', city: 'Tampa', state: 'FL', country: 'USA', postal_code: '33601', registered_at: '2023-10-19T11:00:00Z' },
  { name: 'Logan', last_name_1: 'Hall', email: 'logan.hall@example.com', phone: '(555) 200-0020', address: '456 Pine Ave', city: 'Cleveland', state: 'OH', country: 'USA', postal_code: '44101', registered_at: '2023-10-20T12:00:00Z' },
  { name: 'Mia', last_name_1: 'Young', email: 'mia.young@example.com', phone: '(555) 200-0021', address: '789 Maple St', city: 'Omaha', state: 'NE', country: 'USA', postal_code: '68101', registered_at: '2023-10-21T13:00:00Z' },
  { name: 'Liam', last_name_1: 'King', email: 'liam.king@example.com', phone: '(555) 200-0022', address: '321 Cedar Dr', city: 'Virginia Beach', state: 'VA', country: 'USA', postal_code: '23450', registered_at: '2023-10-22T14:00:00Z' },
  { name: 'Charlotte', last_name_1: 'Wright', email: 'charlotte.wright@example.com', phone: '(555) 200-0023', address: '654 Oak Ln', city: 'Sacramento', state: 'CA', country: 'USA', postal_code: '95801', registered_at: '2023-10-23T15:00:00Z' },
  { name: 'Aiden', last_name_1: 'Scott', email: 'aiden.scott@example.com', phone: '(555) 200-0024', address: '987 Maple Ave', city: 'Kansas City', state: 'MO', country: 'USA', postal_code: '64101', registered_at: '2023-10-24T16:00:00Z' },
  { name: 'Harper', last_name_1: 'Green', email: 'harper.green@example.com', phone: '(555) 200-0025', address: '123 Pine Rd', city: 'Cincinnati', state: 'OH', country: 'USA', postal_code: '45201', registered_at: '2023-10-25T17:00:00Z' },
  { name: 'Jackson', last_name_1: 'Adams', email: 'jackson.adams@example.com', phone: '(555) 200-0026', address: '456 Willow St', city: 'Cleveland', state: 'OH', country: 'USA', postal_code: '44102', registered_at: '2023-10-26T18:00:00Z' },
  { name: 'Sofia', last_name_1: 'Nelson', email: 'sofia.nelson@example.com', phone: '(555) 200-0027', address: '789 Birch Ave', city: 'Tulsa', state: 'OK', country: 'USA', postal_code: '74101', registered_at: '2023-10-27T19:00:00Z' },
  { name: 'Lucas', last_name_1: 'Carter', email: 'lucas.carter@example.com', phone: '(555) 200-0028', address: '321 Oak Dr', city: 'Pittsburgh', state: 'PA', country: 'USA', postal_code: '15201', registered_at: '2023-10-28T20:00:00Z' },
  { name: 'Ella', last_name_1: 'Mitchell', email: 'ella.mitchell@example.com', phone: '(555) 200-0029', address: '654 Pine St', city: 'New Orleans', state: 'LA', country: 'USA', postal_code: '70112', registered_at: '2023-10-29T21:00:00Z' },
  { name: 'Liam', last_name_1: 'Bennett', email: 'liam.bennett@example.com', phone: '(555) 200-0030', address: '987 Oak Ln', city: 'Minneapolis', state: 'MN', country: 'USA', postal_code: '55401', registered_at: '2023-10-30T22:00:00Z' },
  { name: 'Charlotte', last_name_1: 'Rivera', email: 'charlotte.rivera@example.com', phone: '(555) 200-0031', address: '123 Cedar St', city: 'Detroit', state: 'MI', country: 'USA', postal_code: '48201', registered_at: '2023-10-31T23:00:00Z' }
]
const newDates = [
  {"registered_at": "2024-11-01T09:27:56Z"},
  {"registered_at": "2024-11-01T03:49:38Z"},
  {"registered_at": "2024-11-01T23:30:13Z"},
  {"registered_at": "2024-11-01T13:56:22Z"},
  {"registered_at": "2024-11-01T16:31:42Z"},
  {"registered_at": "2024-11-01T18:14:05Z"},
  {"registered_at": "2024-11-01T12:08:11Z"},
  {"registered_at": "2024-11-01T00:56:45Z"},
  {"registered_at": "2024-11-01T10:25:33Z"},
  {"registered_at": "2024-11-01T20:45:09Z"},
  {"registered_at": "2024-11-01T14:40:29Z"},
  {"registered_at": "2024-11-01T06:20:55Z"},
  {"registered_at": "2024-11-01T01:13:10Z"},
  {"registered_at": "2024-11-01T08:01:57Z"},
  {"registered_at": "2024-11-01T22:38:03Z"},
  {"registered_at": "2024-11-01T05:47:29Z"},
  {"registered_at": "2024-11-01T15:04:14Z"},
  {"registered_at": "2024-11-01T04:56:41Z"},
  {"registered_at": "2024-11-01T21:22:30Z"},
  {"registered_at": "2024-11-01T17:18:25Z"},
  {"registered_at": "2024-11-01T19:08:57Z"},
  {"registered_at": "2024-11-01T09:34:25Z"},
  {"registered_at": "2024-11-01T11:46:44Z"},
  {"registered_at": "2024-11-01T02:47:05Z"},
  {"registered_at": "2024-11-01T23:04:39Z"},
  {"registered_at": "2024-11-01T07:19:42Z"},
  {"registered_at": "2024-11-01T17:02:55Z"},
  {"registered_at": "2024-11-01T08:58:14Z"},
  {"registered_at": "2024-11-01T10:58:31Z"},
  {"registered_at": "2024-11-01T22:47:57Z"},
  {"registered_at": "2024-11-01T12:53:52Z"},
  {"registered_at": "2024-11-01T05:23:28Z"},
  {"registered_at": "2024-11-01T02:24:31Z"},
  {"registered_at": "2024-11-01T00:38:59Z"},
  {"registered_at": "2024-11-01T15:35:50Z"},
  {"registered_at": "2024-11-01T11:08:42Z"},
  {"registered_at": "2024-11-01T03:16:57Z"},
  {"registered_at": "2024-11-01T16:53:09Z"},
  {"registered_at": "2024-11-01T21:35:13Z"},
  {"registered_at": "2024-11-01T06:34:56Z"},
  {"registered_at": "2024-11-01T04:03:34Z"},
  {"registered_at": "2024-11-01T18:51:29Z"},
  {"registered_at": "2024-11-01T13:01:22Z"},
  {"registered_at": "2024-11-01T07:38:40Z"},
  {"registered_at": "2024-11-01T23:10:47Z"},
  {"registered_at": "2024-11-01T06:14:11Z"},
  {"registered_at": "2024-11-01T09:18:17Z"},
  {"registered_at": "2024-11-01T12:36:17Z"},
  {"registered_at": "2024-11-01T15:55:13Z"},
  {"registered_at": "2024-11-01T04:26:59Z"},
  {"registered_at": "2024-11-01T17:50:13Z"},
  {"registered_at": "2024-11-01T18:36:39Z"},
  {"registered_at": "2024-11-01T14:19:41Z"},
  {"registered_at": "2024-11-01T13:33:47Z"},
  {"registered_at": "2024-11-01T09:40:59Z"},
  {"registered_at": "2024-11-01T05:58:51Z"},
  {"registered_at": "2024-11-01T10:51:45Z"},
  {"registered_at": "2024-11-01T20:30:18Z"},
  {"registered_at": "2024-11-01T11:29:42Z"},
  {"registered_at": "2024-11-01T21:56:43Z"},
  {"registered_at": "2024-11-01T17:07:40Z"},
  {"registered_at": "2024-11-01T23:24:59Z"},
  {"registered_at": "2024-11-01T07:50:30Z"},
  {"registered_at": "2024-11-01T06:44:38Z"},
  {"registered_at": "2024-11-01T16:43:27Z"},
  {"registered_at": "2024-11-01T20:01:11Z"},
  {"registered_at": "2024-11-01T22:25:24Z"},
  {"registered_at": "2024-11-01T01:31:48Z"},
  {"registered_at": "2024-11-01T01:56:37Z"},
  {"registered_at": "2024-11-01T05:06:12Z"},
  {"registered_at": "2024-11-01T13:47:15Z"},
  {"registered_at": "2024-11-01T04:16:53Z"},
  {"registered_at": "2024-11-01T03:00:22Z"},
  {"registered_at": "2024-11-01T02:10:59Z"},
  {"registered_at": "2024-11-01T19:53:21Z"},
  {"registered_at": "2024-11-01T12:18:45Z"},
  {"registered_at": "2024-11-01T17:27:57Z"},
  {"registered_at": "2024-11-01T21:02:07Z"},
  {"registered_at": "2024-11-01T20:57:34Z"},
  {"registered_at": "2024-11-01T22:14:36Z"},
  {"registered_at": "2024-11-01T01:24:58Z"},
  {"registered_at": "2024-11-01T08:40:29Z"},
  {"registered_at": "2024-11-01T04:42:03Z"},
  {"registered_at": "2024-11-01T09:12:09Z"},
  {"registered_at": "2024-11-01T19:40:07Z"},
  {"registered_at": "2024-11-01T02:55:50Z"},
  {"registered_at": "2024-11-01T08:26:01Z"}
]
const newArray = customerDates.map((customer, i) => {
  customer.registered_at = newDates[i].registered_at
  return customer
})
const filename = 'customer_dates.json'
fs.writeFileSync(filename, JSON.stringify(newArray, null, 2))
console.log(`Todos los datos guardados en ${filename}`)

// app.listen(PORT, () => {
//   console.log(`Servidor API iniciado en http://localhost:${PORT}`.yellow)
// })
