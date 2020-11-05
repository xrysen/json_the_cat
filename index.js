const { fetchBreedDescription } = require("./breedFetcher");

const query = process.argv.slice(2).toString();

fetchBreedDescription(query, (error, desc) => {
  if (error) {
    console.log("Error fetching details", error);
  } else {
    console.log(desc);
  }
});
