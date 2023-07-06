const request = require('request')
const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', function (error, response, body) {
  if (error){ 
    callback(error, null);
  };
  if (response.statusCode !== 200) {
    const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
    callback(Error(msg), null);
    return;
  };
  if(!error) {
    const data = JSON.parse(body);
    const IP = data.ip;
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
  }
  const long = data.longitude;
  const lat = data.latitude;
  callback(lat, long);
});
}

module.exports = { fetchMyIP, fetchCoordsByIP }