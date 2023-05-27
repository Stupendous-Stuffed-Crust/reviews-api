const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('../routes');
require('dotenv').config();

function createServer() {
  const app = express();
  app.use(morgan('dev'));

  app.use('/', router);

  app.use(express.static(path.join(__dirname, '../public')));

  return app;
}

module.exports = createServer;
