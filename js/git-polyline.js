//github.com/mapbox/polyline
//OTP中のpointsのシェイプデータをデコードする

var polyline = require('@mapbox/polyline');
//console.log(polyline.decode('y{bjE_jbzWjIu@vFs@pBOtAUlF]pCUzCQxAIj@ERGJMBOi@cIMuBCsBOcCOuBBK`AQfAOdESdKs@~@It@IhCUnImAr@Mh@GtBU@mAGwEHyGDcGIaGPaDD_AbDYlB?v@KJEZIDEAS_@mAs@eMy@wIg@gFIkF[}GAk@U{GoBmNKaBKw@MsAa@qDOgB^Gj@Kp@KXCWeBCsChCg@vGe@bBnIH~@fCWbEi@nKkB|D_@hEk@~@GdBM|@@pC]r@OvCI`Js@xABt@GHh@Bl@HtAL|ANnADzBN`C\|FLxBRzBAfAF~@\zH~BU~@I~@KjBe@nCCvCShD[`BOn@Cb@CFb@J|A'));

var pe = localStorage.getItem('polylineEnc');
if (pe != null) {
  localStorage.setItem('polyline',JSON.stringify(polyline.decode(pe)));
}
