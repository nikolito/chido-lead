var GtfsRealtimeBindings = require('gtfs-realtime-bindings');
var request = require('request');
var routes = new Array();

function getRouteInfo() {
  var requestSettings = {
    method: 'GET',
    url: 'https://web11.hori-s.net:4141/alert.pb',
    encoding: null
  };
  request(requestSettings, function (error, response, body) {

    if (!error && response.statusCode == 200) {
      routes = [];
      var feed = GtfsRealtimeBindings.FeedMessage.decode(body);
      feed.entity.forEach(function(entity) {
        console.log(entity);
        //routes.push([entity.vehicle.vehicle.id,entity.vehicle.position.latitude,entity.vehicle.position.longitude]);
      });

      //localStorage.setItem('routes', JSON.stringify(routes));
    }
  });
}

setInterval(getRouteInfo,60000);
