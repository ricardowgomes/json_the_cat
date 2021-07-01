const request = require('request');
const myAPI = 'https://api.thecatapi.com/v1/breeds/search';

const fetchBreedDescription = (str, callback) => {
  request(`${myAPI}?q=${str}`, (error, response, body) => {

    if (!error) {
      const data = JSON.parse(body);

      if (!data[0]) {
        return callback('Breed not found', null);
      }

      return callback(null, data[0].description);

    } else {
      return callback(error, null);
    }
  });
};

module.exports = { fetchBreedDescription };