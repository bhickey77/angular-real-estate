const pg = require('pg');
const Pool = pg.Pool;

const DATABASE_NAME = process.env.DATA_URL;
const config = {
    database: DATABASE_NAME,
    host: process.env.PORT,
    port: 5432,
    max: 10,
    idelTimeoutMillis: 30000
}

const pool = new Pool(config);

pool.on('connect', client => {
    console.log(`Connected to database ${DATABASE_NAME}`);
});

pool.on('error', (err, client) => {
    console.log(`Error with database connection from ${client}. Error: `, err);
    process.exit(-1);
});

module.exports = pool;