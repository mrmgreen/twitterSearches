const requestMiddleware = require('../utilities/requestMiddleware');
const nonce = require('nonce')();
const moment = require('moment');

module.exports = (req,res) => {
  const { woid } = req.params

  function getTrendsPlacesResults() {
    return new Promise((resolve,reject) => {
      const timestamp = moment.utc().unix();
      const url = "https://api.twitter.com/1.1/trends/place.json";
      const oauth = {
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret:process.env.TWITTER_CONSUMER_SECRET,
        token: process.env.TWITTER_TOKEN,
        token_secret: process.env.TWITTER_TOKEN_SECRET,
        timestamp,
        nonce: nonce(),
      }
      const woidEncoded = encodeURI(woid);

      requestMiddleware({
        url,
        oauth,
        qs: {
          id: woidEncoded,
        },
      }, (error, response, body) => {
        if (error) {
          console.error('getTrendsPlacesResults in get request', error);
          reject(error);
        } else if (response.statusCode == 200){
          console.log('status is 200');
          resolve(JSON.parse(body));
        } else {
          console.log('not a 200 and not an error', response.statusCode);
          reject(response);
        }
      })
    });
  }
  getTrendsPlacesResults().then((result) => {
    console.log('result is ===', result);
    return res.send(result);
  })
  .catch((err) => {
    console.log('errrrr', err);
  });
  console.log('woid ===', woid);
}
