const search = require('./twitter/search.json');
const trendsPlaces = require('./twitter/trendsPlaces.json');

function router(url) {
  const searchUrl = "https://api.twitter.com/1.1/search/tweets.json";
  const trendsPlacesUrl = "https://api.twitter.com/1.1/trends/place.json";

  switch (url) {
    case searchUrl:
      return search
      break;
    case trendsPlacesUrl:
      return trendsPlaces
      break;
    default:
    return search
  }
}

module.exports = router;
