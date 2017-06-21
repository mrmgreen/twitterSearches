const express = require('express');
const bodyParser = require('body-parser');

const port = 8080;
const app = express();

const searchController = require('./controllers/search');

app.use(bodyParser.json());
app.get('/search/:searchTerm', searchController);

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
})
