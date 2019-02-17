<?php //ブラウザのセキュア機能回避
	//httpsサイトからhttpは呼べないのでブラウザで
	//https://summer.hori-s.net/px.phpにクエリをリダイレクト
	//（/.htaccessを参照）
  $queryStr = $_SERVER['QUERY_STRING'];
  //print_r($_SERVER);
  
  //あるバス停を通過する系統表示
  if (strstr($queryStr, "routes") !== false) {
	  $data = file_get_contents('http://summer.hori-s.net:8080/otp/routers/default/index/stops/'.$queryStr);
	  
	//時刻表表示
  } elseif (strstr($queryStr, "stoptimes") !== false) {
	  $queryStr = str_replace('data=', '', $queryStr);
	  $queryStr = str_replace('&', '?', $queryStr);
	  $data = file_get_contents('http://summer.hori-s.net:8080/otp/routers/default/index/stops/'.$queryStr);
	  
	//旅程表示
  } else {
  	$data = file_get_contents('http://summer.hori-s.net:8080/otp/routers/default/plan?'.$queryStr);
  }
  
  //print $queryStr;
  print $data;
?>
