const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require('chai');

describe("#breedFetcher", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // We expect no error for this scenerio
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });

  it("returns an error message for invalid/not found bred", (done) => {
    fetchBreedDescription('Hym', (err, desc) => {
      assert.equal(desc, null);
      assert.isNotNull(err);
     
    });
    done();
  });
});