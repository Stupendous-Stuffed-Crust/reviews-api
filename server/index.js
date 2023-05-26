require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const {pool, client} = require('./db/index');
const router = require('./routes');

// Middleware
app.use(morgan('dev'));

// app.get('/api/reviews', (request, response) => {
//   pool
//   .query('EXPLAIN (ANALYZE, COSTS OFF, TIMING OFF) SELECT * from review where product_id=1')
//   .then((res) => {response.status(200).send(res.rows)})
//   .catch((err) => response.status(500).send('Error executing query: ' + err.stack));
// })

app.use('/', router);

app.use(express.static(path.join(__dirname, '../public')));

// data will not be same, shape will be the same
// build in count and page parameters

app.listen(process.env.PORT, () => console.log(`app listening on port ${process.env.PORT}`));

