const { Pool } = require('pg');
const { Client } = require('pg')


const pool = new Pool();
const client = new Client();

module.exports = {pool, client};