const express = require('express');

const port = 8080;
const app = express();

const { setupRoutes, setupMiddleware } = require('./routes');

setupMiddleware(app);
setupRoutes(app);

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
})
