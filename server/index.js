require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const {pool, client} = require('./db/index');
const router = require('./routes');

// Middleware
app.use(morgan('dev'));

app.use('/', router);

app.use(express.static(path.join(__dirname, '../public')));

// data will not be same, shape will be the same
// build in count and page parameters

app.listen(process.env.PORT, () => console.log(`app listening on port ${process.env.PORT}`));

module.exports = app;