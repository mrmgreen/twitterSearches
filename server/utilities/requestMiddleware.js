const request = require('request');
const router = require('../../mocks/router');

function requestMiddleware(path, callback) {
  let url;
  let body;

  if (process.env.NODE_ENV == 'test') {
    if (typeof path === 'object') {
      if (path.url) {
          url = path.url;
      } else {
        console.error('path does not have a url property');
      }

    } else if (typeof path === 'string') {
      url = path;
    } else {
      console.error('request path is not an object or a string');
    }
    body = router(url);
    return callback(null, { statusCode: 200 }, JSON.stringify(body));

  }
  return request(path, callback);
}

module.exports = requestMiddleware;
