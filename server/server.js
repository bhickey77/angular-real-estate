const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pool = require('./modules/pool')
const port = process.env.PORT || 5000;

app.use(express.static('server/public'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/listing', (req, res) => {
    console.log(`Posting in /listing`, req.body);
    let queryText = 'INSERT INTO listings (price, sqft, type, city, image_path) VALUES ($1, $2, $3, $4, $5)';
    pool.query(queryText, 
        [req.body.price, req.body.sqft, req.body.type, req.body.city, req.body.image])
        .then(results =>{
            console.log(`Successfully added to databse.`);
            res.sendStatus(200);
        }).catch(error => {
            console.log(`Error adding song ${error}`);
            res.sendStatus(500);
        });
});

app.get('/rentlisting', (req, res) => {
    console.log(`Getting in /rentlisting`);
    let queryText = "SELECT * FROM listings WHERE type = 'rent'";
    pool.query(queryText).then(results => {
        console.log(`Received from database: ${results}`);
        res.send(results.rows);
    }).catch(error => {
        console.log(`Error in getting from db: ${error}`);
        res.sendStatus(500);
    });
});

app.get('/buylisting', (req, res) => {
    console.log(`Getting in /buylisting`);
    let queryText = "SELECT * FROM listings WHERE type = 'sale'";
    pool.query(queryText).then(results => {
        console.log(`Received from database: ${results}`);
        res.send(results.rows);
    }).catch(error => {
        console.log(`Error in getting from db: ${error}`);
        res.sendStatus(500);
    });
});

app.delete('/listing/:id', (req, res) => {
    console.log(`Deleting in /listing`);
    let queryText = `DELETE FROM listings WHERE id = ${id}`;
    pool.query(queryText).then(results => {
        console.log(`Deleted fromn database ${id}`);
        res.sendStatus(200);
    }).catch(error => {
        console.log(`Error in deleting: ${error}`);
        res.sendStatus(500);
    });
})

app.listen(port, () => {
    console.log('server is listening on port: ', port);
})