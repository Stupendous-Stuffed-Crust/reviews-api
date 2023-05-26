require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const {pool, client} = require('./db/db');

// Middleware
app.use(morgan('dev'));


app.use(express.static(path.join(__dirname, 'public')));


app.get('/api/reviews', (request, response) => {
  pool
  .query('SELECT * from review where id<4')
  .then((res) => {console.log(res.rows); response.send(res.rows)})
  .catch((err) => console.error('Error executing query', err.stack))
})

app.listen(process.env.PORT, () => console.log(`app listening on port ${process.env.PORT}`));
