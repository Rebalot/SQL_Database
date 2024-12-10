/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex.raw('TRUNCATE customers RESTART IDENTITY CASCADE')
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('customers').insert([
    {
      name: 'Juan',
      last_name_1: 'García',
      last_name_2: 'Hernández',
      email: 'juan.garcia@example.com',
      phone: '(555) 100-0001',
      address: 'Calle Insurgentes 1234',
      city: 'Ciudad de México',
      state: 'CDMX',
      country: 'México',
      postal_code: '01000',
      registered_at: '2024-11-01T09:27:56Z'
    },
    {
      name: 'María',
      last_name_1: 'López',
      last_name_2: 'Sánchez',
      email: 'maria.lopez@example.com',
      phone: '(555) 100-0002',
      address: 'Av. Juárez 567',
      city: 'Guadalajara',
      state: 'Jalisco',
      country: 'México',
      postal_code: '44100',
      registered_at: '2024-11-01T03:49:38Z'
    },
    {
      name: 'José',
      last_name_1: 'Martínez',
      last_name_2: 'González',
      email: 'jose.martinez@example.com',
      phone: '(555) 100-0003',
      address: 'Calle Reforma 101',
      city: 'Monterrey',
      state: 'Nuevo León',
      country: 'México',
      postal_code: '64000',
      registered_at: '2024-11-01T23:30:13Z'
    },
    {
      name: 'Ana',
      last_name_1: 'Ramírez',
      last_name_2: 'Pérez',
      email: 'ana.ramirez@example.com',
      phone: '(555) 100-0004',
      address: 'Calle 5 de Febrero 789',
      city: 'Puebla',
      state: 'Puebla',
      country: 'México',
      postal_code: '72000',
      registered_at: '2024-11-01T13:56:22Z'
    },
    {
      name: 'Luis',
      last_name_1: 'Hernández',
      last_name_2: 'Torres',
      email: 'luis.hernandez@example.com',
      phone: '(555) 100-0005',
      address: 'Calle Morelos 456',
      city: 'Tijuana',
      state: 'Baja California',
      country: 'México',
      postal_code: '22000',
      registered_at: '2024-11-01T16:31:42Z'
    },
    {
      name: 'Sofía',
      last_name_1: 'González',
      last_name_2: 'Vásquez',
      email: 'sofia.gonzalez@example.com',
      phone: '(555) 100-0006',
      address: 'Calle 20 de Noviembre 234',
      city: 'León',
      state: 'Guanajuato',
      country: 'México',
      postal_code: '37000',
      registered_at: '2024-11-01T18:14:05Z'
    },
    {
      name: 'Diego',
      last_name_1: 'Martínez',
      last_name_2: 'Salazar',
      email: 'diego.martinez@example.com',
      phone: '(555) 100-0007',
      address: 'Av. Constitución 101',
      city: 'Querétaro',
      state: 'Querétaro',
      country: 'México',
      postal_code: '76000',
      registered_at: '2024-11-01T12:08:11Z'
    },
    {
      name: 'Camila',
      last_name_1: 'Pérez',
      last_name_2: 'Méndez',
      email: 'camila.perez@example.com',
      phone: '(555) 100-0008',
      address: 'Calle Hidalgo 123',
      city: 'Mérida',
      state: 'Yucatán',
      country: 'México',
      postal_code: '97000',
      registered_at: '2024-11-01T00:56:45Z'
    },
    {
      name: 'Miguel',
      last_name_1: 'Torres',
      last_name_2: 'Cruz',
      email: 'miguel.torres@example.com',
      phone: '(555) 100-0009',
      address: 'Calle de la Paz 987',
      city: 'Veracruz',
      state: 'Veracruz',
      country: 'México',
      postal_code: '91700',
      registered_at: '2024-11-01T10:25:33Z'
    },
    {
      name: 'Valentina',
      last_name_1: 'Gutiérrez',
      last_name_2: 'Ríos',
      email: 'valentina.gutierrez@example.com',
      phone: '(555) 100-0010',
      address: 'Calle de los Naranjos 456',
      city: 'San Luis Potosí',
      state: 'San Luis Potosí',
      country: 'México',
      postal_code: '78000',
      registered_at: '2024-11-01T20:45:09Z'
    },
    {
      name: 'Fernando',
      last_name_1: 'Reyes',
      last_name_2: 'Maldonado',
      email: 'fernando.reyes@example.com',
      phone: '(555) 100-0011',
      address: 'Calle de los Olivos 123',
      city: 'Hermosillo',
      state: 'Sonora',
      country: 'México',
      postal_code: '83000',
      registered_at: '2024-11-01T14:40:29Z'
    },
    {
      name: 'Lucía',
      last_name_1: 'Morales',
      last_name_2: 'López',
      email: 'lucia.morales@example.com',
      phone: '(555) 100-0012',
      address: 'Calle de las Flores 654',
      city: 'Saltillo',
      state: 'Coahuila',
      country: 'México',
      postal_code: '25000',
      registered_at: '2024-11-01T06:20:55Z'
    },
    {
      name: 'Javier',
      last_name_1: 'Santos',
      last_name_2: 'Ceballos',
      email: 'javier.santos@example.com',
      phone: '(555) 100-0013',
      address: 'Calle de los Abetos 321',
      city: 'Puebla',
      state: 'Puebla',
      country: 'México',
      postal_code: '72001',
      registered_at: '2024-11-01T01:13:10Z'
    },
    {
      name: 'Natalia',
      last_name_1: 'Jiménez',
      last_name_2: 'Alvarado',
      email: 'natalia.jimenez@example.com',
      phone: '(555) 100-0014',
      address: 'Calle de la Luz 222',
      city: 'Tlaxcala',
      state: 'Tlaxcala',
      country: 'México',
      postal_code: '90000',
      registered_at: '2024-11-01T08:01:57Z'
    },
    {
      name: 'Andrés',
      last_name_1: 'Cano',
      last_name_2: 'Rojas',
      email: 'andres.cano@example.com',
      phone: '(555) 100-0015',
      address: 'Calle de la Esperanza 333',
      city: 'Chihuahua',
      state: 'Chihuahua',
      country: 'México',
      postal_code: '31000',
      registered_at: '2024-11-01T22:38:03Z'
    },
    {
      name: 'Gabriela',
      last_name_1: 'Aguilar',
      last_name_2: 'Salas',
      email: 'gabriela.aguilar@example.com',
      phone: '(555) 100-0016',
      address: 'Calle de la Salud 777',
      city: 'Irapuato',
      state: 'Guanajuato',
      country: 'México',
      postal_code: '36500',
      registered_at: '2024-11-01T05:47:29Z'
    },
    {
      name: 'Cristian',
      last_name_1: 'Ríos',
      last_name_2: 'González',
      email: 'cristian.rios@example.com',
      phone: '(555) 100-0017',
      address: 'Calle de la Amistad 444',
      city: 'Durango',
      state: 'Durango',
      country: 'México',
      postal_code: '34000',
      registered_at: '2024-11-01T15:04:14Z'
    },
    {
      name: 'Estefanía',
      last_name_1: 'Valdez',
      last_name_2: 'Mora',
      email: 'estefania.valdez@example.com',
      phone: '(555) 100-0018',
      address: 'Calle de los Pinos 555',
      city: 'Oaxaca',
      state: 'Oaxaca',
      country: 'México',
      postal_code: '68000',
      registered_at: '2024-11-01T04:56:41Z'
    },
    {
      name: 'Alberto',
      last_name_1: 'Córdova',
      last_name_2: 'Soto',
      email: 'alberto.cordova@example.com',
      phone: '(555) 100-0019',
      address: 'Calle de la Esperanza 666',
      city: 'Aguascalientes',
      state: 'Aguascalientes',
      country: 'México',
      postal_code: '20000',
      registered_at: '2024-11-01T21:22:30Z'
    },
    {
      name: 'Patricia',
      last_name_1: 'Salinas',
      last_name_2: 'Pérez',
      email: 'patricia.salinas@example.com',
      phone: '(555) 100-0020',
      address: 'Calle de la Salud 777',
      city: 'Irapuato',
      state: 'Guanajuato',
      country: 'México',
      postal_code: '36500',
      registered_at: '2024-11-01T17:18:25Z'
    },
    {
      name: 'Raúl',
      last_name_1: 'Pérez',
      last_name_2: 'Cruz',
      email: 'raul.perez@example.com',
      phone: '(555) 100-0021',
      address: 'Calle de la Libertad 888',
      city: 'Tepic',
      state: 'Nayarit',
      country: 'México',
      postal_code: '63000',
      registered_at: '2024-11-01T19:08:57Z'
    },
    {
      name: 'Verónica',
      last_name_1: 'Castillo',
      last_name_2: 'Jiménez',
      email: 'veronica.castillo@example.com',
      phone: '(555) 100-0022',
      address: 'Calle de la Amistad 999',
      city: 'Tuxtla Gutiérrez',
      state: 'Chiapas',
      country: 'México',
      postal_code: '29000',
      registered_at: '2024-11-01T09:34:25Z'
    },
    {
      name: 'Jorge',
      last_name_1: 'Mendoza',
      last_name_2: 'Fuentes',
      email: 'jorge.mendoza@example.com',
      phone: '(555) 100-0023',
      address: 'Calle de la Independencia 1111',
      city: 'Matamoros',
      state: 'Tamaulipas',
      country: 'México',
      postal_code: '87400',
      registered_at: '2024-11-01T11:46:44Z'
    },
    {
      name: 'Cecilia',
      last_name_1: 'Aguirre',
      last_name_2: 'Soto',
      email: 'cecilia.aguirre@example.com',
      phone: '(555) 100-0024',
      address: 'Calle de los Ángeles 1212',
      city: 'Monclova',
      state: 'Coahuila',
      country: 'México',
      postal_code: '25700',
      registered_at: '2024-11-01T02:47:05Z'
    },
    {
      name: 'Ernesto',
      last_name_1: 'Orozco',
      last_name_2: 'Luna',
      email: 'ernesto.orozco@example.com',
      phone: '(555) 100-0025',
      address: 'Calle de la Riqueza 1313',
      city: 'Culiacán',
      state: 'Sinaloa',
      country: 'México',
      postal_code: '80000',
      registered_at: '2024-11-01T23:04:39Z'
    },
    {
      name: 'Diana',
      last_name_1: 'Rivas',
      last_name_2: 'Sánchez',
      email: 'diana.rivas@example.com',
      phone: '(555) 100-0026',
      address: 'Calle de la Victoria 1414',
      city: 'Chilpancingo',
      state: 'Guerrero',
      country: 'México',
      postal_code: '39000',
      registered_at: '2024-11-01T07:19:42Z'
    },
    {
      name: 'Santiago',
      last_name_1: 'Cárdenas',
      last_name_2: 'Arreola',
      email: 'santiago.cardenas@example.com',
      phone: '(555) 100-0027',
      address: 'Calle de los Ríos 1515',
      city: 'Zacatecas',
      state: 'Zacatecas',
      country: 'México',
      postal_code: '98000',
      registered_at: '2024-11-01T17:02:55Z'
    },
    {
      name: 'Emilia',
      last_name_1: 'Silva',
      last_name_2: 'Méndez',
      email: 'emilia.silva@example.com',
      phone: '(555) 100-0028',
      address: 'Calle de las Estrellas 1616',
      city: 'San Cristóbal de las Casas',
      state: 'Chiapas',
      country: 'México',
      postal_code: '29200',
      registered_at: '2024-11-01T08:58:14Z'
    },
    {
      name: 'Nicolás',
      last_name_1: 'Lara',
      last_name_2: 'Nava',
      email: 'nicolas.lara@example.com',
      phone: '(555) 100-0029',
      address: 'Calle de los Girasoles 1717',
      city: 'Oaxaca',
      state: 'Oaxaca',
      country: 'México',
      postal_code: '68001',
      registered_at: '2024-11-01T10:58:31Z'
    },
    {
      name: 'Pablo',
      last_name_1: 'Serrano',
      last_name_2: 'González',
      email: 'pablo.serrano@example.com',
      phone: '(555) 100-0030',
      address: 'Calle de la Calma 1818',
      city: 'Guadalajara',
      state: 'Jalisco',
      country: 'México',
      postal_code: '44101',
      registered_at: '2024-11-01T22:47:57Z'
    },
    {
      name: 'Lucas',
      last_name_1: 'Moreno',
      last_name_2: 'Hernández',
      email: 'lucas.moreno@example.com',
      phone: '(555) 100-0031',
      address: 'Calle del Sol 1919',
      city: 'Durango',
      state: 'Durango',
      country: 'México',
      postal_code: '34001',
      registered_at: '2024-11-01T12:53:52Z'
    },
    {
      name: 'Emily',
      last_name_1: 'Smith',
      email: 'emily.smith@example.com',
      phone: '(555) 200-0001',
      address: '123 Maple St',
      city: 'Los Angeles',
      state: 'CA',
      country: 'USA',
      postal_code: '90001',
      registered_at: '2024-11-01T05:23:28Z'
    },
    {
      name: 'Michael',
      last_name_1: 'Johnson',
      email: 'michael.johnson@example.com',
      phone: '(555) 200-0002',
      address: '456 Oak Ave',
      city: 'Chicago',
      state: 'IL',
      country: 'USA',
      postal_code: '60601',
      registered_at: '2024-11-01T02:24:31Z'
    },
    {
      name: 'Jessica',
      last_name_1: 'Davis',
      email: 'jessica.davis@example.com',
      phone: '(555) 200-0003',
      address: '789 Pine Rd',
      city: 'Houston',
      state: 'TX',
      country: 'USA',
      postal_code: '77001',
      registered_at: '2024-11-01T00:38:59Z'
    },
    {
      name: 'David',
      last_name_1: 'Garcia',
      email: 'david.garcia@example.com',
      phone: '(555) 200-0004',
      address: '321 Birch Dr',
      city: 'Phoenix',
      state: 'AZ',
      country: 'USA',
      postal_code: '85001',
      registered_at: '2024-11-01T15:35:50Z'
    },
    {
      name: 'Sarah',
      last_name_1: 'Brown',
      email: 'sarah.brown@example.com',
      phone: '(555) 200-0005',
      address: '654 Cedar St',
      city: 'San Antonio',
      state: 'TX',
      country: 'USA',
      postal_code: '78201',
      registered_at: '2024-11-01T11:08:42Z'
    },
    {
      name: 'Christopher',
      last_name_1: 'Martinez',
      email: 'christopher.martinez@example.com',
      phone: '(555) 200-0006',
      address: '987 Elm St',
      city: 'San Diego',
      state: 'CA',
      country: 'USA',
      postal_code: '92101',
      registered_at: '2024-11-01T03:16:57Z'
    },
    {
      name: 'Ashley',
      last_name_1: 'Wilson',
      email: 'ashley.wilson@example.com',
      phone: '(555) 200-0007',
      address: '123 Willow Ln',
      city: 'Dallas',
      state: 'TX',
      country: 'USA',
      postal_code: '75201',
      registered_at: '2024-11-01T16:53:09Z'
    },
    {
      name: 'Matthew',
      last_name_1: 'Anderson',
      email: 'matthew.anderson@example.com',
      phone: '(555) 200-0008',
      address: '456 Spruce St',
      city: 'Austin',
      state: 'TX',
      country: 'USA',
      postal_code: '73301',
      registered_at: '2024-11-01T21:35:13Z'
    },
    {
      name: 'Michelle',
      last_name_1: 'Taylor',
      email: 'michelle.taylor@example.com',
      phone: '(555) 200-0009',
      address: '789 Poplar Ave',
      city: 'San Francisco',
      state: 'CA',
      country: 'USA',
      postal_code: '94101',
      registered_at: '2024-11-01T06:34:56Z'
    },
    {
      name: 'Daniel',
      last_name_1: 'Thomas',
      email: 'daniel.thomas@example.com',
      phone: '(555) 200-0010',
      address: '321 Walnut St',
      city: 'Seattle',
      state: 'WA',
      country: 'USA',
      postal_code: '98101',
      registered_at: '2024-11-01T04:03:34Z'
    },
    {
      name: 'Laura',
      last_name_1: 'Jackson',
      email: 'laura.jackson@example.com',
      phone: '(555) 200-0011',
      address: '654 Maple Ave',
      city: 'Denver',
      state: 'CO',
      country: 'USA',
      postal_code: '80201',
      registered_at: '2024-11-01T18:51:29Z'
    },
    {
      name: 'James',
      last_name_1: 'White',
      email: 'james.white@example.com',
      phone: '(555) 200-0012',
      address: '987 Pine St',
      city: 'Boston',
      state: 'MA',
      country: 'USA',
      postal_code: '02101',
      registered_at: '2024-11-01T13:01:22Z'
    },
    {
      name: 'Olivia',
      last_name_1: 'Harris',
      email: 'olivia.harris@example.com',
      phone: '(555) 200-0013',
      address: '123 Elm St',
      city: 'Philadelphia',
      state: 'PA',
      country: 'USA',
      postal_code: '19101',
      registered_at: '2024-11-01T07:38:40Z'
    },
    {
      name: 'Alexander',
      last_name_1: 'Martin',
      email: 'alexander.martin@example.com',
      phone: '(555) 200-0014',
      address: '456 Oak Dr',
      city: 'Las Vegas',
      state: 'NV',
      country: 'USA',
      postal_code: '89101',
      registered_at: '2024-11-01T23:10:47Z'
    },
    {
      name: 'Sophia',
      last_name_1: 'Thompson',
      email: 'sophia.thompson@example.com',
      phone: '(555) 200-0015',
      address: '789 Cedar Ln',
      city: 'Portland',
      state: 'OR',
      country: 'USA',
      postal_code: '97201',
      registered_at: '2024-11-01T06:14:11Z'
    },
    {
      name: 'Ethan',
      last_name_1: 'Garrett',
      email: 'ethan.garrett@example.com',
      phone: '(555) 200-0016',
      address: '321 Maple St',
      city: 'Miami',
      state: 'FL',
      country: 'USA',
      postal_code: '33101',
      registered_at: '2024-11-01T09:18:17Z'
    },
    {
      name: 'Ava',
      last_name_1: 'Martinez',
      email: 'ava.martinez@example.com',
      phone: '(555) 200-0017',
      address: '654 Birch Ave',
      city: 'Baltimore',
      state: 'MD',
      country: 'USA',
      postal_code: '21201',
      registered_at: '2024-11-01T12:36:17Z'
    },
    {
      name: 'Mason',
      last_name_1: 'Lee',
      email: 'mason.lee@example.com',
      phone: '(555) 200-0018',
      address: '987 Willow St',
      city: 'Atlanta',
      state: 'GA',
      country: 'USA',
      postal_code: '30301',
      registered_at: '2024-11-01T15:55:13Z'
    },
    {
      name: 'Isabella',
      last_name_1: 'Walker',
      email: 'isabella.walker@example.com',
      phone: '(555) 200-0019',
      address: '123 Oak St',
      city: 'Tampa',
      state: 'FL',
      country: 'USA',
      postal_code: '33601',
      registered_at: '2024-11-01T04:26:59Z'
    },
    {
      name: 'Logan',
      last_name_1: 'Hall',
      email: 'logan.hall@example.com',
      phone: '(555) 200-0020',
      address: '456 Pine Ave',
      city: 'Cleveland',
      state: 'OH',
      country: 'USA',
      postal_code: '44101',
      registered_at: '2024-11-01T17:50:13Z'
    },
    {
      name: 'Mia',
      last_name_1: 'Young',
      email: 'mia.young@example.com',
      phone: '(555) 200-0021',
      address: '789 Maple St',
      city: 'Omaha',
      state: 'NE',
      country: 'USA',
      postal_code: '68101',
      registered_at: '2024-11-01T18:36:39Z'
    },
    {
      name: 'Liam',
      last_name_1: 'King',
      email: 'liam.king@example.com',
      phone: '(555) 200-0022',
      address: '321 Cedar Dr',
      city: 'Virginia Beach',
      state: 'VA',
      country: 'USA',
      postal_code: '23450',
      registered_at: '2024-11-01T14:19:41Z'
    },
    {
      name: 'Charlotte',
      last_name_1: 'Wright',
      email: 'charlotte.wright@example.com',
      phone: '(555) 200-0023',
      address: '654 Oak Ln',
      city: 'Sacramento',
      state: 'CA',
      country: 'USA',
      postal_code: '95801',
      registered_at: '2024-11-01T13:33:47Z'
    },
    {
      name: 'Aiden',
      last_name_1: 'Scott',
      email: 'aiden.scott@example.com',
      phone: '(555) 200-0024',
      address: '987 Maple Ave',
      city: 'Kansas City',
      state: 'MO',
      country: 'USA',
      postal_code: '64101',
      registered_at: '2024-11-01T09:40:59Z'
    },
    {
      name: 'Harper',
      last_name_1: 'Green',
      email: 'harper.green@example.com',
      phone: '(555) 200-0025',
      address: '123 Pine Rd',
      city: 'Cincinnati',
      state: 'OH',
      country: 'USA',
      postal_code: '45201',
      registered_at: '2024-11-01T05:58:51Z'
    },
    {
      name: 'Jackson',
      last_name_1: 'Adams',
      email: 'jackson.adams@example.com',
      phone: '(555) 200-0026',
      address: '456 Willow St',
      city: 'Cleveland',
      state: 'OH',
      country: 'USA',
      postal_code: '44102',
      registered_at: '2024-11-01T10:51:45Z'
    },
    {
      name: 'Sofia',
      last_name_1: 'Nelson',
      email: 'sofia.nelson@example.com',
      phone: '(555) 200-0027',
      address: '789 Birch Ave',
      city: 'Tulsa',
      state: 'OK',
      country: 'USA',
      postal_code: '74101',
      registered_at: '2024-11-01T20:30:18Z'
    },
    {
      name: 'Lucas',
      last_name_1: 'Carter',
      email: 'lucas.carter@example.com',
      phone: '(555) 200-0028',
      address: '321 Oak Dr',
      city: 'Pittsburgh',
      state: 'PA',
      country: 'USA',
      postal_code: '15201',
      registered_at: '2024-11-01T11:29:42Z'
    },
    {
      name: 'Ella',
      last_name_1: 'Mitchell',
      email: 'ella.mitchell@example.com',
      phone: '(555) 200-0029',
      address: '654 Pine St',
      city: 'New Orleans',
      state: 'LA',
      country: 'USA',
      postal_code: '70112',
      registered_at: '2024-11-01T21:56:43Z'
    },
    {
      name: 'Liam',
      last_name_1: 'Bennett',
      email: 'liam.bennett@example.com',
      phone: '(555) 200-0030',
      address: '987 Oak Ln',
      city: 'Minneapolis',
      state: 'MN',
      country: 'USA',
      postal_code: '55401',
      registered_at: '2024-11-01T17:07:40Z'
    },
    {
      name: 'Charlotte',
      last_name_1: 'Rivera',
      email: 'charlotte.rivera@example.com',
      phone: '(555) 200-0031',
      address: '123 Cedar St',
      city: 'Detroit',
      state: 'MI',
      country: 'USA',
      postal_code: '48201',
      registered_at: '2024-11-01T23:24:59Z'
    }
  ])
}
