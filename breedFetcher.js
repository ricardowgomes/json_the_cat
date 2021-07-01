const request = require('request');
const myAPI = 'https://api.thecatapi.com/v1/breeds/search';
const fs = require('fs');
// https://api.thecatapi.com/v1/breeds

const printDescription = (str) => {
  request(`${myAPI}?q=${str}`, (error, response, body) => {
    if (!error) {
      const data = JSON.parse(body);
      console.log(data[0].description);

    } else {
      console.log(error);
      process.exit();
    }
  });
};

printDescription('siberian');