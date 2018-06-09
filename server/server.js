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
        [req.body.price, req.body.sqft, req.body.city, req.body.type, req.body.image])
        .then(results =>{
            console.log(`Successfully added to databse.`);
            res.sendStatus(200);
        }).catch(error => {
            console.log(`Error adding song ${error}`);
            res.sendStatus(500);
        });
});

app.listen(port, () => {
    console.log('server is listening on port: ', port);
})