const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss2');
// let testIP = '99.241.110.207'
// // fetchMyIP((error, ip) => {
// //   if (error) {
// //     console.log("It didn't work!" , error);
// //     return;
// //   }

// //   console.log('It worked! Returned IP:' , ip);
// // });
// let coords = { lat: '49.27670', long: '-123.13000' };
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
// // })


nextISSTimesForMyLocation(
  fetchISSFlyOverTimes(
    fetchCoordsByIP(
      fetchMyIP(
    (error, ip) => {
      if(error) {
        console.log('Could not find IP! Error:', error)
        return null
      }
      else {
        console.log('IP found!', ip);
        return ip;
      }
    }
  ), (lat, lon) => {
    let coords = {};
    if (!lat || !long) {
      console.log('Could not find coordinates!');
      return null
    }
    if (lat && long) {
      coords.latitude = lat;
      coords.longitude = long;
      return coords;
    }
  }
  ), (error, input) => {
    if (error) {
      console.log("Could not fetch flyover times!");
      return null;
    } else if (!error && !input) {
      console.log("Could not fetch flyover times!");
      return null;
    } else {
      console.log("Success! Calculating flyover times now...");
      return input;
    }
  }
  )
  )

// nextISSTimesForMyLocation(fetchMyIP(
//   fetchCoordsByIP(fetchISSFlyOverTimes(coord, (lat, lon) => {
//         let coords = {};
//         if (!lat || !long) {
//           console.log('Could not find coordinates!');
//           return null
//         }
//         if (lat && long) {
//           coords.latitude = lat;
//           coords.longitude = long;
//           return coords;
//         }
//       }), (error, ip) => {
//           if(error) {
//             console.log('Could not find IP! Error:', error)
//             return null
//           }
//           else {
//             console.log('IP found!', ip);
//             return ip;
//           }
//         })
// ))



// const printPassTimes = function(passTimes) {
//   for (const pass of passTimes) {
//     const datetime = new Date(0);
//     datetime.setUTCSeconds(pass.risetime);
//     const duration = pass.duration;
//     console.log(`Next pass at ${datetime} for ${duration} seconds!`);
//   }
// };

// nextISSTimesForMyLocation((error, passTimes) => {
//   if (error) {
//     return console.log("It didn't work!", error);
//   }
//   // success, print out the deets!
//   printPassTimes(passTimes);
// });
