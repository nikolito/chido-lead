/****************************************************

	SYNCER 〜 知識、感動をみんなと同期(Sync)するブログ

	* 配布場所
	https://syncer.jp/how-to-use-geolocation-api

	* 最終更新日時
	2015/08/16 01:16

	* 作者
	あらゆ

	** 連絡先
	Twitter: https://twitter.com/arayutw
	Facebook: https://www.facebook.com/arayutw
	Google+: https://plus.google.com/114918692417332410369/
	E-mail: info@syncer.jp

	※ バグ、不具合の報告、提案、ご要望など、お待ちしております。
	※ 申し訳ありませんが、ご利用者様、個々の環境における問題はサポートしていません。

*************************************************/


// グローバル変数
var syncerWatchPosition = {
	count: 0 ,
	lastTime: 0 ,
  speedThreshold: 5,
	map: null ,
	marker: null ,
} ;

// 成功した時の関数
function successFunc(position)
{
  localStorage.setItem('currentPosition', position.coords.latitude + ',' + position.coords.longitude);

	outsideOfSaga();
		
	// 一定速度でページ遷移
  if (position.coords.speed > syncerWatchPosition.speedThreshold) {
	  //バスに乗ったら「ぬっ。」ページへ 
    location.href = "nu.html";
  }
  
  //速度計測
  if (position.coords.speed) {
	  if (Math.round(position.coords.speed * 10) / 10 == null) {
		  document.getElementById('velocity').innerHTML = '0';
	  } else {
  		document.getElementById('velocity').innerHTML = Math.round(position.coords.speed * 10) / 10;
	  }
  } else {
	  document.getElementById('velocity').innerHTML = '0';
  }
  
	/*document.getElementById( 'result' ).innerHTML = '<dt>緯度</dt><dd>' + position.coords.latitude + '</dd><dt>経度</dt><dd>' + position.coords.longitude + '</dd><dt>高度</dt><dd>' + position.coords.altitude + '</dd><dt>速度</dt><dd>' + position.coords.speed + '</dd><dt>実行回数</dt><dd>' + syncerWatchPosition.count + '回</dd>' ;*/
  //document.getElementById( 'velocity' ).innerHTML = '<p>速度<br>' + position.coords.speed + '(' + syncerWatchPosition.count + ')' + '</p>';
  //console.log(document.getElementById( 'result' ).innerHTML = '<dt>緯度</dt><dd>' + position.coords.latitude + '</dd><dt>経度</dt><dd>' + position.coords.longitude + '</dd><dt>高度</dt><dd>' + position.coords.altitude + '</dd><dt>速度</dt><dd>' + position.coords.speed + '</dd><dt>実行回数</dt><dd>' + syncerWatchPosition.count + '回</dd>');
}

// 失敗した時の関数
function errorFunc(e) {
	// エラーコードのメッセージを定義
	var errorMessage = {
		0: "原因不明のエラーが発生しました…。" ,
		1: "位置情報の取得が許可されませんでした…。" ,
		2: "電波状況などで位置情報が取得できませんでした…。" ,
		3: "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。" ,
	} ;

	// エラーコードに合わせたエラー内容を表示
	alert(errorMessage[e.code] + 'デモモードに入ります。');
  var lat  = 33.264007;//JR佐賀駅
  var lng = 130.296483;
  localStorage.setItem('currentPosition', lat + ',' + lng);
  localStorage.setItem('demoflag', 'true');
}

// オプション・オブジェクト
var optionObj = {
	"enableHighAccuracy": true ,
	"timeout": 120000 ,
	"maximumAge": 0 ,
} ;

// 現在位置を取得する
navigator.geolocation.watchPosition(successFunc, errorFunc, optionObj) ;
