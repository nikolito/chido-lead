/**
 * ２地点間の距離(m)を求める
 * ヒュベニの公式から求めるバージョン
 * https://qiita.com/chiyoyo/items/b10bd3864f3ce5c56291 より
 * JavaScriptに書き換え
 *
 * @param float $lat1 緯度１
 * @param float $lon1 経度１
 * @param float $lat2 緯度２
 * @param float $lon2 経度２
 * @param boolean $mode 測地系 true:世界 false:日本
 * @return float 距離(m)
 */
function checkDistance(lat1, lon1, lat2, lon2) {
    var mode=true;
    // 緯度経度をラジアンに変換
    var radLat1 = lat1 * (Math.PI / 180); // 緯度１
    var radLon1 = lon1 * (Math.PI / 180); // 経度１
    var radLat2 = lat2 * (Math.PI / 180); // 緯度２
    var radLon2 = lon2 * (Math.PI / 180); // 経度２

    // 緯度差
    var radLatDiff = radLat1 - radLat2;

    // 経度差算
    var radLonDiff = radLon1 - radLon2;

    // 平均緯度
    var radLatAve = (radLat1 + radLat2) / 2.0;

    // 測地系による値の違い
    var a = 6378137.0; //6377397.155; // 赤道半径
    //$b = $mode ? 6356752.314140356 : 6356078.963; // 極半径
    //$e2 = ($a*$a - $b*$b) / ($a*$a);
    var e2 = 0.00669438002301188; //0.00667436061028297; // 第一離心率^2
    //$a1e2 = $a * (1 - $e2);
    var a1e2 = 6335439.32708317; // 赤道上の子午線曲率半径

    var sinLat = Math.sin(radLatAve);
    var W2 = 1.0 - e2 * (sinLat*sinLat);
    var M = a1e2 / (Math.sqrt(W2)*W2); // 子午線曲率半径M
    var N = a / Math.sqrt(W2); // 卯酉線曲率半径

    var t1 = M * radLatDiff;
    var t2 = N * Math.cos(radLatAve) * radLonDiff;
    var dist = Math.sqrt((t1*t1) + (t2*t2));

    return dist;
}

function calcurateVelocity() {
  //場所1、時間1計測
  var loc1 = new Array();
  loc1 = checkCurrentPosition();
  console.log(checkCurrentPosition());
  var lat1 = loc1[0];
  var lon1 = loc1[1];
  var t1 = new Date();

  setTimeout(function(){
  }, 3000)

  //n分後、場所2、時間2計測
  var loc2 = checkCurrentPosition();
  var lat2 = loc2[0];
  var lon2 = loc2[1];
  var t2 = new Date();

  var velocity = checkDistance(lat1, lon1, lat2, lon2) / (t2 - t1);
  console.log(lat1, lon1, lat2, lon2,t2,t1);
  document.getElementById("fromTo").innerHTML = velocity + "m/s";

  //移動距離および時間から速度算出
  return velocity;
}