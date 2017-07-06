const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const compiler = webpack(webpackConfig);

const searchController = require('.././controllers/search');
const trendsPlacesController = require('.././controllers/trendsPlaces');

function setupMiddleware(app) {
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
  app.use(bodyParser.json());
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
