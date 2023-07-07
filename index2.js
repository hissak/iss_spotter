
const { nextISSTimesForMyLocation } = require('./iss_promised');

// fetchMyIP()
// .then(fetchCoordsByIP)
// .then(fetchISSFlyOverTimes)
// .then((input) => {console.log(input)})
nextISSTimesForMyLocation().catch((error) => {
  console.log("It didn't work: ", error.message);
});