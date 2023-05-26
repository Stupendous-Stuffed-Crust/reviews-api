require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.send('<h1>Hello World!</h1>');
// })

app.listen(process.env.PORT, () => console.log(`app listening on port ${process.env.PORT}`));
