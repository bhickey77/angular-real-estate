// const pg = require('pg');
// const Pool = pg.Pool;

// const DATABASE_NAME = process.env.DATA_;
// const config = {
//     database: DATABASE_NAME,
//     host: 'localhost',
//     port: 5432,
//     max: 10,
//     idelTimeoutMillis: 30000
// }

// const pool = new Pool(config);

// pool.on('connect', client => {
//     console.log(`Connected to database ${DATABASE_NAME}`);
// });

// pool.on('error', (err, client) => {
//     console.log(`Error with database connection from ${client}. Error: `, err);
//     process.exit(-1);
// });

// module.exports = pool;

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

module.exports = client;