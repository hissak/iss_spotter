const {fetchMyIP, fetchCoordsByIP} = require('./iss');
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });
// const testIP = '99.241.110.207'
// fetchCoordsByIP(testIP, (a, b) => {
//   let coords = {};
//   coords.ip = testIP;
//   coords.lat = a;
//   coords.long = b;
//   if (coords.lat) {
//     console.log(coords);
//   }
// })
