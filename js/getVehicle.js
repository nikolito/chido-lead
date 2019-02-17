var GtfsRealtimeBindings = require('gtfs-realtime-bindings');
var request = require('request');
var vehicles = new Array();

function getVehiclePosistion() {
  var requestSettings = {
    method: 'GET',
    url: 'https://web11.hori-s.net:4141/vehicle.pb',
    encoding: null
  };
  request(requestSettings, function (error, response, body) {

    if (!error && response.statusCode == 200) {
      vehicles = [];
      var feed = GtfsRealtimeBindings.FeedMessage.decode(body);
      feed.entity.forEach(function(entity) {
        //console.log(entity);
        //console.log(entity.vehicle.vehicle.id);
        //console.log(entity.vehicle.position);
        //console.log(entity.vehicle.vehicle.id + ',' + entity.vehicle.position.latitude + ',' + entity.vehicle.position.longitude);
        vehicles.push([entity.vehicle.vehicle.id,entity.vehicle.position.latitude,entity.vehicle.position.longitude,entity.vehicle.trip.trip_id,entity.vehicle.timestamp.low]);
      });

      //console.log(realBsData);
      localStorage.setItem('vehicle', JSON.stringify(vehicles));
    }
  });
}

setInterval(getVehiclePosistion,7000);
