const createServer = require('./utils/server');

// Middleware

// data will not be same, shape will be the same
// build in count and page parameters
const app = createServer();

app.listen(process.env.PORT || 3000, () =>
  console.log(`app listening on port ${process.env.PORT || 3000}`)
);

module.exports = app;
