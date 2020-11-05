const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback("Sorry, we couldn't find the page!" + error, null);
    } else {
      const data = JSON.parse(body);
      if (!data[0]) {
        callback("Sorry! We could't find that breed.", null);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };