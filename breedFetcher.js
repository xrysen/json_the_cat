const request = require('request');
const query = process.argv.slice(2).toString().toLowerCase();

request(`https://api.thecatapi.com/v1/breeds/search?q=${query}`, (error, response, body) => {
  if (error) {
    console.log("Sorry! We couldn't find the page you were looking for \n", error);
  } else {
    const data = JSON.parse(body);
    if (!data[0]) {
      console.log("Sorry! We could't find that breed.");
    } else {
      console.log(data[0].description);
    }
  }
});
