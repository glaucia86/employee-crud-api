/**
 * arquivo: config/database.js
 * descrição: arquivo responsável pelas 'connectrionStrings' (Cosmos DB & PostgreSQL)
 * data: 31/07/2020
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Conexão com a Base de Dados:
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('error', (err, client) => {
  console.log('Unexpected error on idle client', err)
  process.exit(-1);
});

pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!')
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};