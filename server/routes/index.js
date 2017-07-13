const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config');
const compiler = webpack(webpackConfig);

const searchController = require('.././controllers/search');
const trendsPlacesController = require('.././controllers/trendsPlaces');

function setupMiddleware(app) {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
    },
  }));
  app.use(require('webpack-hot-middleware')(compiler));
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, '../../dist')));
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
