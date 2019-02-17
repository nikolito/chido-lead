// This is a JavaScript file
function goHomePage() {
  window.location = 'index.html';
}

function goInfoPage() {
  window.location = 'info.html';
}

function goShirahuPage() {
  window.location = 'shirahu.html';
}

function goDoPage() {
  window.location = 'do.html';
}

function goNoPage() {
  playTomarimasu();
  setTimeout(function(){
    window.location = 'no.html';
  }, 2800);
}

function goNoPage2() {
  window.location = 'no.html';
}

function goNoRoutePage() {
  window.location = 'noRoute.html';
}

function goVehicleLocationPage() {
  window.location = 'vehicleLocation.html';
}

function goNuPage() {
  window.location = 'nu.html';
}

function goNuDemo() {
  window.location = 'nuDemo.html';
}

function goNoBusstopsPage() {
  window.location = 'noBusstops.html';
}

function goCLPage() {
  window.location = 'currentLocation.html';
}

function goFLPage() {
  window.location = 'findLocation.html';
}

function goBusstopsPage() {
  localStorage.setItem('nickname', document.forms.f1.nickname.value);
  localStorage.setItem('homeTime', document.forms.f1.homeTime.value);
  localStorage.setItem('navichara', document.forms.f1.navichara.value);
  //localStorage.setItem('geoAccept', document.forms.f1.geoAccept.value);
  window.location = 'busstops.html';
}

function uniq(array) {
  return Array.from(new Set(array));
}

function checkData() {
  if (localStorage.getItem('nickname') == null || localStorage.getItem('homeTime') == null || localStorage.getItem('busstop') == null || localStorage.getItem('nickname') == "" || localStorage.getItem('homeTime') == "" || localStorage.getItem('busstop') == "") {
//   if (localStorage.getItem('nickname') == null || localStorage.getItem('homeTime') == null || localStorage.getItem('busstop') == null || localStorage.getItem('geoAccept') == null || localStorage.getItem('nickname') == "" || localStorage.getItem('homeTime') == "" || localStorage.getItem('busstop') == "" || localStorage.getItem('geoAccept') == "") {
    return false;
  } else {
    return true;
  }
}

function csvToArray(path) {
  var csvData = new Array();
  var data = new XMLHttpRequest();
  
  data.open("GET", path , false);
  data.send(null);
  
  var LF = String.fromCharCode(10);
  var lines = data.responseText.split(LF);
  
  for (var i=0; i<lines.length; i++) {
    var cells = lines[i].split(",");
    
    if(cells.length != 1) {
      csvData.push(cells);
    }
  }
  
  return csvData;
}

function csvToHiraganaArray(path) {
  var csvData = new Array();
  var data = new XMLHttpRequest();
  
  data.open("GET", path , false);
  data.send(null);
  
  var LF = String.fromCharCode(10);
  var lines = data.responseText.split(LF);
  
  for (var i=0; i<lines.length; i++) {
    if (lines[i].match(/ja-Hrkt/)) {
      var cells = lines[i].split(",");
      
      if(cells.length != 1) {
        csvData.push(cells);
      }
    }
  }
  
  return csvData;
}

function sortByCol(arr, colIndex){
    arr.sort(sortFunction)
    function sortFunction(a, b) {

        a = a[colIndex]
        b = b[colIndex]
        return (a === b) ? 0 : (a < b) ? -1 : 1
    }
}

function readXML(url) {
	var request = new XMLHttpRequest();
	request.open('GET', url, false);
	request.resposeType = "json";
	request.send();
	var data = JSON.parse(request.responseText);
	//console.log(url);
	//console.log(request.responseText);
	return data;
	
/*
  fetch(url, {
	  method: "GET"
  }).then(function(response) {
	  return response.text();
  }).then(function(json){
	  console.log(json);
	  return json;
  });
*/
}

function playBusButton() {
	document.getElementById('busButton').innerHTML = '<img src="img/button2.png">';
	playChime();
	goNoPage();
}

function playChime() {
  var audioElem = new Audio();
  audioElem.src = "sound/doorchime1.mp3";
  audioElem.play();
}

function playTomarimasu() {
  var audioElem2 = new Audio();
  audioElem2.src = "/sound/nc51837.m4a";
  audioElem2.play();
}

function playAlerm1() {//店内
/*
	//window.onload = init;
	var context;
	var bufferLoader;
	
	function init() {
	  // Fix up prefixing
	  window.AudioContext = window.AudioContext || window.webkitAudioContext;
	  context = new AudioContext();
	
	  bufferLoader = new BufferLoader(
	    context,
	    [
	      '/sound/warning1.mp3',
	      '/sound/warning2.mp3',
	    ],
	    finishedLoading
	    );
	
	  bufferLoader.load();
	}
	init();
	
	function finishedLoading(bufferList) {
	  // Create two sources and play them both together.
	  var source1 = context.createBufferSource();
	  source1.buffer = bufferList[0];
	  source1.connect(context.destination);
	  source1.start(0);
	}
*/

  ducument.getElementById('alarm').innerHTML = '<audio id="player" autoplay><source src="/sound/warning1.mp3" type="audio/mp3"></audio>';
		

/*
  var audioElem = new Audio();
  audioElem.src = "/sound/warning1.mp3";
  audioElem.play();
*/
}

function playAlerm2() {
  var audioElem = new Audio();
  audioElem.src = "/sound/warning2.mp3";
  audioElem.play();
}

function playAlerm3() {//起す
  var audioElem = new Audio();
  audioElem.src = "/sound/se_maoudamashii_jingle03.mp3";
  audioElem.play();
}

function playAlerm4() {
  var audioElem = new Audio();
  audioElem.src = "/sound/se_maoudamashii_jingle04.mp3";
  audioElem.play();
}

function vibration() {
	if (navigator.vibrate) {
	  var vibCount = 0;
	  var nIntervId = setInterval(makeVib, 1000);
	  function makeVib() {
	    if (vibCount < 5) {
	      navigator.vibrate(1000);
	      vibCount++;
	    }
	  }
	}
}

//バス停の名前だけ（括弧なし）のデータ 配列を入力
function makeArrayForSimpleBusstops(list) {
  var i = 0;
  var simpleBuslist = new Array();
  list.shift();//要先頭データ確認
  
  while(i < list.length) {
	  
    if (list[i][0].length == 9) { //コード7桁＋ダブルクォート2個分をカウント
	    	    //"stop_id","stop_code","stop_name","stop_desc","stop_lat","stop_lon","zone_id","stop_url","location_type","parent_station","stop_timezone","wheelchair_boarding"

      simpleBuslist.push([list[i][0].replace(/\"/g,''),list[i][2].replace(/\"/g,''),list[i][4].replace(/\"/g,''),list[i][5].replace(/\"/g,'')]);
    }
    
    i++;
  }
  return simpleBuslist;
}

//バス停（標柱）のデータ 配列を入力
function makeArrayForHyochu(list) {
  var i = 0;
  var simpleBuslist = new Array();
  list.shift();//要先頭データ確認
  while(i < list.length) {
    //バス停のルート数
    //var bsRoutes = readXML('https://summer.hori-s.net/otp/routers/default/index/stops/1:' + list[i][0].replace(/\"/g,'') + '/routes');
    //console.log(bsRoutes[0]["id"]);
    if (list[i][0].length == 12) { //コード10桁（ハイフン付き）＋ダブルクォート2個分をカウント
      simpleBuslist.push([list[i][0].replace(/\"/g,''),list[i][2].replace(/\"/g,''),list[i][4].replace(/\"/g,''),list[i][5].replace(/\"/g,'')]);
    }
    i++;
  }
  return simpleBuslist;
}

function findBSLocation(busstopName) {
  var bsdata = makeArrayForSimpleBusstops(csvToArray("busData/stops.txt"));
  var arr = new Array();
  
  bsdata.forEach(function(el) {
    //console.log(busstopName);
    
    if (el[1] == busstopName) {
	    //"stop_id","stop_name","stop_lat","stop_lon"
      arr.push(el[0],el[1],el[2],el[3]);
    }
    
  });
  
  return arr;
}

/*
function findBSLocationFromStopId2(stop_id) {
  var bsdata = makeArrayForHyochu(csvToArray("busData/stops.txt"));
  var arr = new Array();
  
  bsdata.forEach(function(el) {
    //console.log(el[0] +','+ stop_id.replace('/\"/g',''));
    if (el[0] == stop_id.replace('/\"/g','')) {
      //el[0]=id,el[1]=name,el[2]=lat,el[3]=lng
      arr.push(el[0],el[1],el[2],el[3]);
    }
  });
  //console.log(arr);
  return arr;
}
*/

function findBSLocationFromStopId(stop_id) {
  let stops = readXML('https://summer.hori-s.net/getStopId.php?sid=' + stop_id);
  let arr = new Array();
  
  arr = stops[0];
	//[ "3116704-20", "", "メリーランド前(2)", "", "33.205972", "130.038211", "3116704-20", "", "0", "3116704", "", "" ]
	//arr.push(el[0],el[2],el[4],el[5]);

  //console.log(arr);
  return arr;
}

function checkCurrentPosition() {
  if (!navigator.geolocation){
    alert('あなたのブラウザでは地理情報取得機能が使えないようです…。');
    return;
  }

  function success(e) {
    var lat  = e.coords.latitude;
    var lng = e.coords.longitude;

	  localStorage.setItem('currentPosition', lat + ',' + lng);
	  localStorage.setItem('demoflag', 'false');
	  
	  outsideOfSaga();
  }

  function error(e) {
		// エラーコードのメッセージを定義
		var errorMessage = {
			0: "原因不明のエラーが発生しました…。" ,
			1: "位置情報の取得が許可されませんでした…。" ,
			2: "電波状況などで位置情報が取得できませんでした…。" ,
			3: "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。" ,
		} ;
	
		// エラーコードに合わせたエラー内容を表示
		alert(errorMessage[e.code] + 'デモモードに入ります。') ;
	  var lat = 33.264007;//JR佐賀駅
	  var lng = 130.296483;
	  localStorage.setItem('currentPosition', lat + ',' + lng);
	  localStorage.setItem('demoflag', 'true');
  }

  return navigator.geolocation.getCurrentPosition(success, error, {enableHighAccuracy: true});
}

/////////////////////////////////////////////////
//経路サーチ　OpenTripPlannerを使用
function searchRoute() {
  //現在地の評価　OpenTripPlannerのエリア内にいるかを判定
	checkCurrentPosition();
	flagDemo();

  const cpos = localStorage.getItem('currentPosition');  
  const dests = JSON.parse(localStorage.getItem('busstopDetail'));
  const hometime = localStorage.getItem('homeTime');//帰宅予定時間
  let ht = new Array();
	ht = hometime.split(':');
	let now = new Date(); 
  let tomorrow = new Date();
  tomorrow.setDate(now.getDate() + 1);
  var hTime;
  
  if (23 >= ht[0] && ht[0] >= now.getHours()) {
	  //今日23:59まで
	  hTime = Date.parse(now.getFullYear() + "/" + (now.getMonth()+1) + "/" + now.getDate() + " " + hometime + ":00 +0900");
  } else {
	  //明日0:00以降
  	hTime = Date.parse(tomorrow.getFullYear() + "/" + (tomorrow.getMonth()+1) + "/" + tomorrow.getDate() + " " + hometime + ":00 +0900");
  }
  
  //console.log(hTime);
  
  const timestr = "以降出発";
  const arriveBy = "false";
	const maxWalkDistance = 500;
  const numOfRoot = 5;

	var count = 0;
	
  var currentDate = new Date();

  var routeData = new Array(); //経路データ
  var endTimeData = new Array(); //帰宅時間などの比較に使用
	var hometimeMust; //帰らなければならない時間
	var tableStr = ""; //テーブルに入れ込むデータ
	var legGeometryArray = new Array();

  /////////////////////////////////////
  //現在時刻以降の可能な行程データ（routeData）構築
  if (count == 0 || count % 6 == 0) {
	  
	  dests.forEach(function (el) { //登録バス停情報
		  //console.log(el);
	    //let routeData = readXML('https://summer.hori-s.net/otp/routers/default/plan?fromPlace=' + currentpos[0] + ',' + currentpos[1] + '&toPlace=' + el[2] + ',' + el[3] + '&time=' + time + '&date=' + (currentDate.getMonth()+1) + '-' + currentDate.getDate() + '-' + currentDate.getFullYear() + '&mode=WALK,TRANSIT&maxWalkDistance=500&arriveBy=' + arriveBy + '&numItineraries=' + num + '&optimize=QUICK');
	  
	    let routeQuery = readXML('https://summer.hori-s.net/otp/routers/default/plan?fromPlace=' + cpos + '&toPlace=' + el[2] + ',' + el[3] + '&time=' + currentDate.getHours() + ':' + currentDate.getMinutes() + '&date=' + (currentDate.getMonth()+1) + '-' + currentDate.getDate() + '-' + currentDate.getFullYear() + '&mode=WALK,TRANSIT&maxWalkDistance=' + maxWalkDistance + '&arriveBy=' + arriveBy + '&numItineraries=' + numOfRoot);
	    	    
	    //console.log(routeQuery);
	    
			//routeQueryでエラーが起きた時
			if (routeQuery['error']) {
				document.getElementById('result').innerHTML = '<p class="timeTable">現時点でご希望の旅程が見つかりません。<i class="fas fa-synct" aria-hidden="true"></i>少し待つかもう一度ボタンを押してみてください。</p>';
				console.log(routeQuery);
				console.log('https://summer.hori-s.net/otp/routers/default/plan?fromPlace=' + cpos + '&toPlace=' + el[2] + ',' + el[3] + '&time=' + currentDate.getHours() + ':' + currentDate.getMinutes() + '&date=' + (currentDate.getMonth()+1) + '-' + currentDate.getDate() + '-' + currentDate.getFullYear() + '&mode=WALK,TRANSIT&maxWalkDistance=' + maxWalkDistance + '&arriveBy=' + arriveBy + '&numItineraries=' + numOfRoot);
			}

      //現在地と目的地
      let originFrom = routeQuery["plan"]["from"];
      let originLat = originFrom["lat"];
      let oringinLon = originFrom["lon"];
      
      let destinationTo = routeQuery["plan"]["to"];
      let destinationLat = destinationTo["lat"];
      let destinationLon = destinationTo["lon"];
      
			routeQuery["plan"]["itineraries"].forEach(function(item) {
				
				//console.log(item);
		    //num=メイン旅程
		    //i=サブ旅程
	      
	      let duration = item["duration"] / 60;
	      
	      let sDate = new Date(item["startTime"]);
	      let startTime = item["startTime"];
	      let eDate = new Date(item["endTime"]);
	      let endTime = item["endTime"];
	      
	      //料金
	      if (item["fare"]) {
		      var fare = item["fare"]["fare"]["regular"]["cents"]; //全体の料金
		      let fareId = item["fare"]["details"]["regular"]["fareId"]; //
		      //let fareCents = item["fare"]["details"]["regular"]["price"]["cents"]; //
		      let fareRoutes = item["fare"]["details"]["regular"]["routes"];
		    } else {
			    var fare = '-';
		    }
	      
	      //移動
	      let transfers = item["transfers"];
	      let transitTime = item["transitTime"]; //歩いて移動する時間
	      let waitingTime = item["waitingTime"];
	      let walkDistance = item["walkDistance"];
	      let walkTime = item["walkTime"];
	
	      //サブ旅程詳細
	      var innerRoutes = new Array();
	      
		    item["legs"].forEach(function(leg){
	        let mode = leg["mode"]; //BUS, WALK
	        
	        let startTime = leg["startTime"];
	        let fromName = leg["from"]["name"];
	        let fromArrival = leg["from"]["arrival"];
	        let fromDeparture = leg["from"]["departure"];
	        let fromLat = leg["from"]["lat"];
	        let fromLon = leg["from"]["lon"];
	        let fromStopId = leg["from"]["stopId"];
	        let fromStopSequence = leg["from"]["stopSequence"];
	
	        let endTime = leg["endTime"];
	        let toName = leg["to"]["name"];
	        let toArrival = leg["to"]["arrival"];
	        let toDeparture = leg["to"]["departure"];
	        let toLat = leg["to"]["lat"];
	        let toLon = leg["to"]["lon"];
	        let toStopId = leg["to"]["stopId"];
	        let toStopSequence = leg["to"]["stopSequence"];
	
	        let arrivalDelay = leg["arrivalDelay"];
	        let departureDelay = leg["departureDelay"];
	        let distance = leg["distance"];
	        let legDuration = leg["duration"];
	        let legGeometry = leg["legGeometry"];
	        //legGeometryArray.push(legGeometry);
	
	        let agencyId = leg["agencyId"];//会社
	        let agencyName = leg["agencyName"];
	        let agencyUrl = leg["agencyUrl"];
	        let headsign = leg["headsign"];
	        let route = leg["route"];
	        let tripId = leg["tripId"];
	        
	        //innerRoutes.push([mode,route,agencyName,agencyUrl,fromName,fromNameArrival,fromNameDeparture,toName,toNameArrival,toNameDeparture,legDuration,headsign,legGeometry]);
	        innerRoutes.push([mode,route,agencyName,agencyUrl,fromName,fromArrival,fromDeparture,toName,toArrival,toDeparture,legDuration,headsign,fromLat,fromLon,legGeometry,toLat,toLon]);
	        	        
	      });
	      
	      routeData.push([startTime,el[1],endTime,transfers,fare,duration,innerRoutes]);
	      endTimeData.push(endTime);
	      
			});
	    
	    routeData.sort();
	    endTimeData.sort();
	    
	    //帰宅時間に近い旅程をチェック
	    let i2=0;
	    
	    for(i2=0; i2<endTimeData.length; i2++) {
		    if (endTimeData[i2] >= hTime) {
		    	//console.log(endTimeData[i2] + ',' + hTime);
			    hometimeMust = endTimeData[i2-1];
			    break;
		    } else {
			    hometimeMust = null;
		    }
	    }
	    
	    //console.log(routeData);
	    //console.log(hometimeMust);
	  });
	  
	  localStorage.setItem('polylineEnc', JSON.stringify(legGeometryArray));
	  localStorage.setItem('routeData',JSON.stringify(routeData));
	
	  
	  /////////////////////////////////////////////
	  //出発時間＋到着時間をブラウザ表示
	  let c = 0;
	  routeData.forEach(function(r) {
	    var detail;
	    var detail2 = '';
	    
	    var d1 = new Date(r[0]);
	    var d2 = new Date(r[2]);
	    
	    var sign = '<i class="far fa-dot-circle"></i> - ';
	
	    //詳細情報はここから
	    r[6].forEach(function(el) {
	      //詳細
	      //console.log(el);
	      
	      var signel = '';

	      //手段
	      var type;

	      switch (el[0]) {
		      case 'WALK':
	        	signel = '<i class="fas fa-walking"></i>';
		      	type = '<i class="fas fa-walking"></i>';
		      	break;
		      	
		      case 'BUS':
	        	signel = '<i class="fas fa-bus"></i>';
		      	let agent = '<a href="' + el[3] + '" target="_blank">' + el[2] + '</a><br>'
		      	type = '<i class="fas fa-bus"></i>' + agent;
		      	break;
		      	
		      default:
		      	type = el[0];
		      	break;
	      }
	      
		    //アイコンサイン
	      sign = sign + signel + ' - ';
	      
				let routeName = el[1];
				let agency = el[2];
				let agencyurl = el[3];
				
				//発
				var startname;

				switch (el[4]) {
					case 'Origin':
						startname = '<span class="voidletter"></span>';
						break;
						
					case 'Destination':
						startname = '<i class="fas fa-flag-checkered"></i>';
						break;
						
					default:
						startname = el[4];
				}
				
				//出発時刻
				let stime = new Date(el[6]);
	      let startime = '<span class="dateSmall">' + ('0' + (stime.getMonth() + 1)).slice(-2) + '月' + ('0' + stime.getDate()).slice(-2) + '日</span>' + '<span class="dateBig">' + ('0' + stime.getHours()).slice(-2) + ':' + ('0' + stime.getMinutes()).slice(-2) + '</span>';
				
				//着
				var destname;

				switch (el[7]) {
					case 'Origin':
						destname = '<i class="far fa-dot-circle"></i>';
						break;
						
					case 'Destination':
						destname = '<i class="fas fa-flag-checkered"></i>';
						break;
						
					default:
						destname = el[7];
				}
				
				//到着時刻
				let dtime = new Date(el[8]);
	      let desttime = '<span class="dateSmall">' + ('0' + (dtime.getMonth() + 1)).slice(-2) + '月' + ('0' + dtime.getDate()).slice(-2) + '日</span>' + '<span class="dateBig">' + ('0' + dtime.getHours()).slice(-2) + ':' + ('0' + dtime.getMinutes()).slice(-2) + '</span>';

	      //かかる時間
	      var interval;
	      
	      if (el[10] >= 60) {
		      interval = Math.ceil((el[10] / 60)) + '分' + ('0' + (el[10] % 60)).slice(-2) + '秒';
	      } else {
		      interval = (el[10] % 60) + '秒';
	      }
	      
	      let headsignstr;
	      if (el[11]) {
	      	headsignstr = '<br><span class="headsign">' + el[11] + '</span>';
	      } else {
		      headsignstr = '';
	      }
	      
	      //サブ旅程のなかの1区間
	      detail2 = detail2 + '<tr><td><i class="fas fa-angle-double-down"></i><br>' + startname + headsignstr + '<br><i class="fas fa-angle-double-down"></i></td><td class="schedules">' + startime + '<br>' + type + '（'+ interval + '）<br>' + desttime + '</td></tr>';

	      //console.log(el);
	      
	    });
	    
			//現在地→最終到着地点名
			let originEl;
			let destinationEl = r[1];
			
	    if (r[6][0][0] == "BUS") {
	      originEl = '現在地<i class="fas fa-arrow-circle-right"></i>' + r[6][0][4];
	    } else if (r[6][0][0] == "WALK") {
	      originEl = '現在地';
	    } else {
	      originEl = r[6][0][7];
	    }

			let origin = '<tr onclick="showInnerRoute(' + c + ');"><td colspan="2" style="font-size: 1.5em; background-color: rgba(255, 0, 0, 0.5);"><span class="innerSign" style="color: lightyellow;"><i class="far fa-hand-pointer"> </i>MAP</span></td></tr><tr class="edge"><td><i class="far fa-dot-circle"></i><br>' + originEl + '</td><td>出発<br></td></tr>';
			let destination = '<tr class="edge"><td><i class="fas fa-flag-checkered"></i><br>' + destinationEl + '</td><td>到着</td></tr>';
			c++;
		
	    detail = '<table class="planDesc" align="center">' + origin + detail2 + destination + '</table>';

	    sign = sign + '<i class="fas fa-flag-checkered"></i>';
	
	    let timetabled = '<div class="hide">' + detail + '</div>';
	    
	    //帰宅時間の時、timeTableのスタイル変更
	    let timeTableStyle = '<span>';
	    //console.log(r[2] + ',' + hometimeMust);
	    
	    if (r[2] == hometimeMust) {
		    timeTableStyle = '<span class="timeTable2">'+ hometime +'までに帰宅したいなら';
	    }
	    
	    if (hometimeMust == null) {
		    timeTableStyle = '';
	    }
	    
	    //時刻表表示（クリックすると詳細表示）
	    tableStr = tableStr + '<div class="accordion-wrapper">' + '<p class="timeTable">' + timeTableStyle + '</span><span class="routeSign">' + sign + '</span><br><span class="busstopSign">' + originEl + '</span>発<br><span class="ttDate">' + ('0' + (d1.getMonth() + 1)).slice(-2) + '月' + ('0' + d1.getDate()).slice(-2) + '日<br><span class="bigNum">' + ('0' + d1.getHours()).slice(-2) + ':' + ('0' + d1.getMinutes()).slice(-2) + '</span></span> <span class="innerSign">' + Math.ceil(r[5]) + '分 ' + 　r[4] + '円</span> <span class="ttDate">' + ('0' + (d2.getMonth() + 1)).slice(-2) + '月' + ('0' + d2.getDate()).slice(-2) + '日<br><span class="bigNum">' + ('0' + d2.getHours()).slice(-2) + ':' + ('0' + d2.getMinutes()).slice(-2) + '</span></span><br><span class="busstopSign">' + destinationEl + '</span>着</p>' + timetabled + '</div>';
	    
	  });
	}

  document.getElementById('display').innerHTML = '<button id="loadingStatus" class="btn" type="button" onclick="goNoPage2();"><i class="fas fa-sync-alt" aria-hidden="true"></i></button>' + tableStr;

	//旅程に詳細内容を出す
	let menu = document.getElementsByClassName('timeTable');
	
	function show(){
	  let hideContent = this.nextElementSibling;
	  hideContent.classList.toggle('hide');
	  
	  document.getElementById('loadingStatus').innerHTML = '<i class="far fa-pause-circle"></i>';
	  
	  clearInterval(timerSearchRoute);
	  clearInterval(timerIdAlarm);
	};
	
	for(let i = 0; i < menu.length; i++){
	  menu[i].addEventListener('click', show);
	}

	count++;
	if (count > 6) {
  	count = 0;
	}

  //乗ったら「ぬっ。」（乗車モード）に遷移
  //watch-position.jsで設定
}

//サブ旅程の地図表示
function showInnerRoute(num) {
	let routeData = JSON.parse(localStorage.getItem('routeData'));
	localStorage.removeItem('polyline');
	localStorage.removeItem('polylineEnc');
	//console.log(routeData[num][6]);
	
	let polylines = [];
	
	routeData[num][6].forEach(function(el) {
		let line = el[14]['points'];
		//console.log(line);
		polylines.push(line);
	});
	
	localStorage.setItem('polylineEnc', JSON.stringify(polylines));
	
	window.location = 'innerRoute.html?rn=' + num;
}

//////////////////////////////////////////////////////////
//アラームチェック

var timerIdAlarm;

function checkAlarm() {
  var count = 0;
  const limit = 600; //count上限値
  var chara = localStorage.getItem('navichara') + '.png';
  var hometime = localStorage.getItem('hometime');
  var nickname = localStorage.getItem('nickname');

  timerIdAlarm = setInterval(alarm, 20000);
  
  function alarm(){    
    var now = new Date();
    var topItem = JSON.parse(localStorage.getItem('routeData'));
    var sTimes = new Array(); //出発時間を昇順に並べる→アラームに使う
    var sTimes2 = new Array();
    
    topItem.forEach(function(el) {
      if (el[0] >= now.getTime()) {
        sTimes.push(el[0]);
      }
    });
    
    sTimes2 = sTimes.sort();
    //console.log(sTimes2);
    
    var st = sTimes2[0];
    
    if (st <= now.getTime()) { window.location = 'no.html'; }
    
    //console.log(st-now.getTime());
    
    if (st-now.getTime() <= 60 * 11 * 1000 && st-now.getTime() > 60 * 10 * 1000) {
      //vibration();
      document.getElementById('result').innerHTML = '<p class="messagesNickname">' + nickname + 'さん</p><p class="messages">あと10分!</p><img class="focus" src="img/' + chara + '">' + '<audio id="player" autoplay><source src="/sound/warning1.mp3" type="audio/mp3"></audio>';
      
      //playAlerm1();
      
      setTimeout(function(){
	      document.getElementById('result').innerHTML = '';
      }, 5000);
    }
    
    if (st-now.getTime() <= 60 * 6 * 1000 && st-now.getTime() > 60 * 5 * 1000) {
      //vibration();
      
      document.getElementById('result').innerHTML = '<p class="messagesNickname">' + nickname + 'さん</p><p class="messages">あと５分!!</p><img class="focus" src="img/' + chara + '">' + '<audio id="player" autoplay><source src="/sound/warning1.mp3" type="audio/mp3"></audio>';
      
      //playAlerm1();
      
      setTimeout(function(){
	      document.getElementById('result').innerHTML = '';
      }, 5000);
    }
    
    if (st-now.getTime() <= 60 * 1 * 1000 && st-now.getTime() > 0) {
      //vibration();
      document.getElementById('result').innerHTML = '<p class="messagesNickname">' + nickname + 'さん</p><p class="messages">出発時間です</p><img class="focus" src="img/' + chara + '">' + '<audio id="player" autoplay><source src="/sound/warning2.mp3" type="audio/mp3"></audio>';
      
      //playAlerm2();
      
      setTimeout(function(){
	      document.getElementById('result').innerHTML = '';
      }, 5000);
    }

	  count++;
	  //console.log(count);
	  if (count > limit) { count = 0; }
  }
}

//バスと到着バス停の距離でアラーム
//あと2km, 1km, 500m
function checkAlarmNu() {
  var chara = localStorage.getItem('navichara') + '.png';
  var hometime = localStorage.getItem('hometime');
  var nickname = localStorage.getItem('nickname');
  var count = 0;
  const limit = 600; //count上限値

  var timerId = setInterval(alarm, 10000);
  
  function alarm(){
    document.getElementById('result').innerHTML = '';
    var now = new Date();
    var topItem = JSON.parse(localStorage.getItem('routeData'));

    //現在地watch
	  if (!navigator.geolocation){
	    alert('あなたのブラウザでは地理情報取得機能が使えないようです…。');
	    return;
	  }
    
    // 成功した時の関数
    function successFunc(position){
      var latDis = position.coords.latitude;
      var lngDis = position.coords.longitude;1
      var bsFirst = (localStorage.getItem('stopidRideOn')).split(',');
      
      var bsDestination;
      if (localStorage.getItem('bsDestination')) {
      	bsDestination = (localStorage.getItem('bsDestination')).split(',');
      }
    
      //現在地currentから到着バス停destinationまでの距離distを計測
      var dist = checkDistance(latDis, lngDis, bsDestination[1], bsDestination[2], '');
      
      document.getElementById('info').innerHTML = '<p>' + bsDestination[0] + 'まで' + Math.ceil(dist) + 'm！</p>';
      
      if (dist <= 1000 && dist > 700 && (count == 0 || count == limit)) {
        document.getElementById('result').innerHTML = '<p class="messagesNickname2">' + nickname + 'さん</p><p class="messages2">あと1km!</p><img class="focus" src="img/' + chara + '">' + '<audio id="player" autoplay><source src="/sound/warning1.mp3" type="audio/mp3"></audio>';
        
        //vibration();
        //playAlerm3();
        
        setTimeout(function(){
	        document.getElementById('result').innerHTML = '';
        }, 5000);
      }
      
      if (dist <= 500 && dist > 300 && (count == 0 || count == limit)) {
        document.getElementById('result').innerHTML = '<p class="messagesNickname2">' + nickname + 'さん</p><p class="messages2">あと500m!</p><img class="focus" src="img/' + chara + '">' + '<audio id="player" autoplay><source src="/sound/se_maoudamashii_jingle03.mp3" type="audio/mp3"></audio>';
        
        //vibration();
        playAlerm3();
        
        setTimeout(function(){
	        document.getElementById('result').innerHTML = '';
        }, 5000);
      }
      
      if (dist <= 200 && dist > 50 && (count == 0 || count == limit)) {
        document.getElementById('result').innerHTML = '<p class="messagesNickname2">' + nickname + 'さん</p><p class="messages2">そろそろです</p><img class="focus" src="img/' + chara + '">' + '<audio id="player" autoplay><source src="/sound/se_maoudamashii_jingle04.mp3" type="audio/mp3"></audio>';
        
        //playAlerm4();
        
        setTimeout(function(){
	        document.getElementById('result').innerHTML = '';
	        document.getElementById('info').innerHTML = 'そろそろ着きます。' ;
        }, 5000);
        
      }
	      
      if (dist < 30) {
        document.getElementById('result').innerHTML = '<p class="messagesNickname2">' + nickname + 'さん</p><p class="messages2">すぐ降りて！</p><img class="focus" src="img/' + chara + '">' + '<audio id="player" autoplay><source src="/sound/se_maoudamashii_onepoint23.mp3" type="audio/mp3"></audio>';
        
        //playAlerm4(); //ゴールっぽいサウンドにする
        
        setTimeout(function(){
					clearInterval(timerId);
					goHomePage(); //ゴール画面を設定する
        }, 5000);
      }
      
      count++;
      //console.log(count);
      if (count > limit) { count = 0; }
    }

    // 失敗した時の関数
    function errorFunc(e){
			// エラーコードのメッセージを定義
			var errorMessage = {
				0: "原因不明のエラーが発生しました…。" ,
				1: "位置情報の取得が許可されませんでした…。" ,
				2: "電波状況などで位置情報が取得できませんでした…。" ,
				3: "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。" ,
			} ;
		
			// エラーコードに合わせたエラー内容を表示
			alert(errorMessage[e.code]) ;
		  var lat  = 33.264007;//JR佐賀駅
		  var lng = 130.296483;
		  localStorage.setItem('currentPosition', lat + ',' + lng);
		  localStorage.setItem('demoflag', 'true');
    }

    // オプション・オブジェクト
    var optionObj = {
      "enableHighAccuracy": true ,
      "timeout": 1000000 ,
      "maximumAge": 0 ,
    };

    // 現在位置を取得する
    navigator.geolocation.watchPosition(successFunc, errorFunc, optionObj) ;
  }
}

//////////////////////////
//デモモード起動
function flagDemo() {
	if (localStorage.getItem('demoflag') == 'true') {
		document.getElementById('demo').innerHTML = 'DEMO MODE';
	} else {
		if (document.getElementById('demo')) {
			document.getElementById('demo').innerHTML = '';
		}
	}
}

function cancelDemo() {
	localStorage.setItem('demoflag', 'false');
	document.getElementById('demo').innerHTML = '';
}

function outsideOfSaga() {
	const cpos = localStorage.getItem('currentPosition');  
	const sagaStation = '33.264007,130.296483'; //JR佐賀駅
	const testStation = '35.681236,139.767125'; //東京駅
	const maxWalkDistance = 500;
	const arriveBy = 'false';
	const numOfRoot = 1;
	
  let currentDate = new Date();

	let routeQuery = readXML('https://summer.hori-s.net/otp/routers/default/plan?fromPlace=' + cpos + '&toPlace=' + sagaStation + '&time=' + currentDate.getHours() + ':' + currentDate.getMinutes() + '&date=' + (currentDate.getMonth()+1) + '-' + currentDate.getDate() + '-' + currentDate.getFullYear() + '&mode=WALK,TRANSIT&maxWalkDistance=' + maxWalkDistance + '&arriveBy=' + arriveBy + '&numItineraries=' + numOfRoot);
	
	//判定
	//console.log('https://summer.hori-s.net/otp/routers/default/plan?fromPlace=' + testStation + '&toPlace=' + sagaStation + '&time=' + currentDate.getHours() + ':' + currentDate.getMinutes() + '&date=' + (currentDate.getMonth()+1) + '-' + currentDate.getDate() + '-' + currentDate.getFullYear() + '&mode=WALK,TRANSIT&maxWalkDistance=' + maxWalkDistance + '&arriveBy=' + arriveBy + '&numItineraries=' + numOfRoot);
	//console.log(routeQuery);
	
	if (routeQuery['error']) {
		localStorage.setItem('demoflag', 'true');
		localStorage.setItem('currentPosition', '33.264007,130.296483');
		return true; //エリア外->デモ画面行き
/*
		if (routeQuery['error']['noPath'] == 'true') { //routeQueryがエラーを返した
			localStorage.setItem('demoflag', 'true');
			localStorage.setItem('currentPosition', '33.264007,130.296483');
			return true; //エリア外->デモ画面行き
		} else {
			localStorage.setItem('demoflag', 'false');
			return false; //エリア内
		}
*/
	}
}