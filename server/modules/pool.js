const pg = require('pg');
const Pool = pg.Pool;
const url = require('url');

const params = url.parse(process.env.DATABASE_URL);
const auth = params.auth.split(':');

const config = {
    database: params.pathname.split('/')[1],
    port: params.port,
    user: auth[0],
    password: auth[1],
    max: 10,
    idelTimeoutMillis: 30000,
    ssl: true,
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