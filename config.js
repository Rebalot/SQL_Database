// Dependiendo la variable de entorno del sistema en que se ejecute el servidor, se va a cambiar la configuración adecuada para la base de datos

// Tomar la configuración del entorno de Node, y si no existe, usar la configuración por defecto: development. Se especificaria en caso de, desde el package.json EJ. "node run index.js NODE_ENV='staging'"
const ENV = process.env.NODE_ENV || 'development'
const knex = require('knex')
const knexfile = require('./knexfile')

module.exports = knex(knexfile[ENV])