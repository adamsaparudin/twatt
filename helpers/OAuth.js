let OAuth = require('oauth');

let myOauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  'UoJ9V5aRTGLT2phqU1BicS2YE',
  'a53DqRXOw6y1KbyObRWD1wcqICcMa01VDsKmLfHtGIAJbSf68X',
  '1.0A',
  null,
  'HMAC-SHA1'
)

function searchTwitter(req, res) {
  myOauth.get(
    'https://api.twitter.com/1.1/search/tweets.json?q=' + req.params.query,
    '2358019916-8GS0jffersrnq288Plmh0P2CjrZtQ3Dp7mFekBQ', //test user token
    'TpQD8s2RRq0jcCKlpxhssV6h0CjZn9vnC9WPkapjYi1kb', //test user secret
    function (e, data, response){
      if (e) console.error(e);
      else {
        res.send(JSON.parse(data))
      }
  });
}

function homeTwitter(req, res) {
  myOauth.get(
    'https://api.twitter.com/1.1/statuses/home_timeline.json',
    '2358019916-8GS0jffersrnq288Plmh0P2CjrZtQ3Dp7mFekBQ', //test user token
    'TpQD8s2RRq0jcCKlpxhssV6h0CjZn9vnC9WPkapjYi1kb', //test user secret
    function (e, data, response){
      if (e) console.error(e);
      else {
        res.send(JSON.parse(data))
      }
  });
}

module.exports = {searchTwitter: searchTwitter, homeTwitter: homeTwitter}
