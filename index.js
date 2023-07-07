const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');
let testIP = '99.241.110.207'
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });
let coords = { lat: '49.27670', long: '-123.13000' };
// fetchCoordsByIP(testIP, (a, b) => {
//   coords.ip = testIP;
//   coords.lat = a;
//   coords.long = b;
//   if (coords.lat) {
//     return coords;
//   }
// });

// fetchISSFlyOverTimes(coords, function(error, input) {
//   if (error) {
//     console.log("Error!");
//   } else if (!input && !error) {
//     console.log(`Could not find info for ${coords}`);
//   } else {console.log(input);}
// })
