var GtfsRealtimeBindings = require('gtfs-realtime-bindings');
var request = require('request');
var routes = new Array();
var stime = new Array();

function getRouteInfo() {
  var requestSettings = {
    method: 'GET',
    url: 'https://web11.hori-s.net:4141/route.pb',
    encoding: null
  };
  request(requestSettings, function (error, response, body) {

    if (!error && response.statusCode == 200) {
      routes = [];
      stime = [];
      var feed = GtfsRealtimeBindings.FeedMessage.decode(body);
      feed.entity.forEach(function(entity) {
        //console.log(entity.trip_update.trip.trip_id);
        //console.log(entity.trip_update.vehicle.id);
        //console.log(entity.trip_update.stop_time_update);
        //entity.trip_update.stop_time_update.forEach(function (el){
          //console.log(el.stop_sequence);
          //console.log(el.arrival.time.low);
          //stime.push([el.stop_sequence,el.arrival.time.low]);
        //});
        console.log(entity);
        //routes.push([entity.trip_update.trip.trip_id,entity.trip_update.vehicle.id,stime]);
        //routes.push([entity.trip_update.trip.trip_id,entity.trip_update.vehicle.id,[entity.trip_update.stop_time_update.stop_sequence,entity.trip_update.stop_time_update.arrival]]);
      });
      //console.log(routes);
      //localStorage.setItem('routes', JSON.stringify(routes));
    }
  });
}

setInterval(getRouteInfo,10000);
