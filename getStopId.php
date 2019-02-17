<?php //stop_times.txtから指定したtrip_idを抽出
	//クエリを整理
  $queryStr = urldecode($_SERVER['QUERY_STRING']);
  $queryStr = str_replace('sid=', '', $queryStr);
  //print_r($queryStr);
  //print PHP_EOL;
  
	$st = file('./busData/stops.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
	//print_r($st[1]);
	
	$data = array();
	
	foreach($st as $stval) {
		if (mb_strpos($stval, $queryStr) !== false) {
				$el = explode(',', str_replace('"', '', $stval));
				$data[] = $el;
		}
	}

	print json_encode($data,JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);

?>
