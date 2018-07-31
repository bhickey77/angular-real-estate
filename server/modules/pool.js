const pg = require('pg');
const Pool = pg.Pool;

// const { Client } = require('pg');
// const client = new Client({
//     connectionString: process.env.DATABASE_URL,
//     ssl: true,
//   });  
// client.connect();


const DATABASE_NAME = process.env.DATA_URL;
const config = {
    database: DATABASE_NAME,
    port: process.env.PORT,
    host: 'ec2-23-23-242-163.compute-1.amazonaws.com',
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