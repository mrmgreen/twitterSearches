const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const searchController = require('.././controllers/search');
const trendsPlacesController = require('.././controllers/trendsPlaces');

function setupMiddleware(app) {
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, '../../client')));
}

function setupRoutes(app) {
  app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../../client' + '/index.html'));
  });
  app.get('/search/:searchTerm', searchController);
  app.get('/trends/place/:woid', trendsPlacesController);
}

module.exports = {
  setupMiddleware,
  setupRoutes
}
