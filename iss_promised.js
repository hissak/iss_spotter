const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(body) {
  const data = JSON.parse(body);
  const IP = data.ip;
  return request(`http://ipwho.is/${IP}`);
};

const fetchISSFlyOverTimes = function(body) {
  const data = JSON.parse(body);
  const lat = data.latitude;
  const lon = data.longitude;
  return request (`https://iss-flyover.herokuapp.com/json/?lat=${lat}&lon=${lon}`)
}

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then((input) => {
    const data = JSON.parse(input);
    const flyovers = data.response;
    console.log(flyovers)
    return flyovers
  })
}
module.exports = { nextISSTimesForMyLocation };