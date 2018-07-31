const pg = require('pg');
const Pool = pg.Pool;
const url = require('url');


let config = {}

if(process.env.DATABASE_URL){
    const params = url.parse(process.env.DATABASE_URL);
    const auth = params.auth.split(':');
    config = {
        database: params.pathname.split('/')[1],
        port: params.port,
        host: params.hostname,
        user: auth[0],
        password: auth[1],
        max: 10,
        idelTimeoutMillis: 30000,
        ssl: true,
    }
} else {
    config = {
        database: 'listings',
        host: 'localhost',
        port: 5432,
        max: 10,
        idelTimeoutMillis: 30000
    }
}


const pool = new Pool(config);

pool.on('connect', client => {
    console.log(`Connected to database`);
});

pool.on('error', (err, client) => {
    console.log(`Error with database connection from ${client}. Error: `, err);
    process.exit(-1);
});

const createTable = `CREATE TABLE listings (
                        id serial primary key,
                        price integer,
                        sqft integer,
                        type varchar(4),
                        city varchar(20),
                        image_path varchar(30)
                    );`;
pool.query(createTable);



module.exports = pool;