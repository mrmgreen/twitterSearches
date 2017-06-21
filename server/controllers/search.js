const request = require('request');
const nonce = require('nonce')();
const moment = require('moment');

module.exports = (req,res) => {
  const { searchTerm } = req.params

  function getSearchResults() {
    return new Promise((resolve,reject) => {
      const timestamp = moment.utc().unix();
      const url = "https://api.twitter.com/1.1/search/tweets.json";
      const oauth = {
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret:process.env.TWITTER_CONSUMER_SECRET,
        token: process.env.TWITTER_TOKEN,
        token_secret: process.env.TWITTER_TOKEN_SECRET,
        timestamp,
        nonce: nonce(),
      }
      const encodedUriString = encodeURI(searchTerm);

      request({
        url,
        oauth,
        qs: {
          q: encodedUriString,
        },
      }, (error, response, body) => {
        if (error) {
          console.error('getSearchResults in get request', error);
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
  getSearchResults().then((result) => {
    console.log('result ===', result);
    return res.send('search controller');
  })
  .catch((err) => {
    console.log('errrrr', err);
  });
  console.log('searchTerm ===', searchTerm);
}
