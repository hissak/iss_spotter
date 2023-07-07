const request = require('request')
const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', function (error, response, body) {
  if (error){ 
    console.log('Error1:', null)
    callback(error, null);
  };
  if (response.statusCode !== 200) {
    const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
    console.log(msg)
    callback(Error(msg), null);
    return;
  };
  if(!error) {
    const data = JSON.parse(body);
    const IP = data.ip;
    console.log(IP)
    callback(null, IP);
   }
});
}

const fetchCoordsByIP = function(ip, callback) {
  request(`http://ipwho.is/${ip}`, function (error, response, body) {
  if (error) {
    callback (null, null);
    console.log('Error!: ', error)
  };
  if(response.statusCode !== 200) {
    callback(null, null);
    console.log("Something went wrong!", error)
  }
  const data = JSON.parse(body); 
  if (!data.success) {
    callback(null, null);
    console.log('IP Address could not be found')
  } else {const long = data.longitude;
  const lat = data.latitude;
  callback(lat, long);
}
});
}

const fetchISSFlyOverTimes = function(coord, callback) {
  request(`https://iss-flyover.herokuapp.com/json/?lat=${coord.latitude}&lon=${coord.longitude}`, function (error, response, body) {
    if (error) {
      callback(error, null);
      console.log("Something went wrong while finding flyover", error);
    } else if(response.statusCode !== 200) {
      callback(true, null);
      //console.log ('URL:', `https://iss-flyover.herokuapp.com/json/?lat=${coords.lat}&lon=${coords.long}`)
      console.log('Response status not 200; Something went wrong:', body);
    }
    else {const data = JSON.parse(body);
    if (data.message === 'success') {
      console.log('Success! Displaying flyovers now...');
      callback(null, data.response)
    }
    }
  })
};

const nextISSTimesForMyLocation = function(callback) {
  if (callback) {
    const flyovers = callback;
    for (flyover of flyovers) {
      console.log(`Next pass at ${Date(flyover.risetime)} for ${flyover.duration} seconds!`)
    }
  }
}


// const nextISSTimesForMyLocation = function(callback) {
//   fetchMyIP((error, ip) => {
//     if (error) {
//       return callback(error, null);
//     }

//     fetchCoordsByIP(ip, (error, loc) => {
//       if (error) {
//         return callback(error, null);
//       }

//       fetchISSFlyOverTimes(loc, (error, nextPasses) => {
//         if (error) {
//           return callback(error, null);
//         }

//         callback(null, nextPasses);
//       });
//     });
//   });
// };

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation }