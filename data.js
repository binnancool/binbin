var data = [];
var dataStr = '1、1<br>\
<br>\
域名：baike.ren<br>\
含义：人人百科<br>\
注册商：西部数码<br>\
<br>\
<br>\
1、2<br>\
<br>\
域名：baike.ren<br>\
含义：人人百科<br>\
注册商：西部数码<br>\
<br>\
<br>\
1、3<br>\
<br>\
域名：baike.ren<br>\
含义：人人百科<br>\
注册商：西部数码<br>\
<br>\
<br>\
1、4<br>\
<br>\
域名：baike.ren<br>\
含义：人人百科<br>\
注册商：西部数码<br>\
<br>\
<br>\
1、5<br>\
<br>\
域名：baike.ren<br>\
含义：人人百科<br>\
注册商：西部数码<br>\
<br>\
<br>\
1、6<br>\
<br>\
域名：baike.ren<br>\
含义：人人百科<br>\
注册商：西部数码<br>\
<br>\
<br>\
1、7<br>\
<br>\
域名：baike.ren<br>\
含义：人人百科<br>\
注册商：西部数码<br>\
<br>\
<br>\
1、8<br>\
<br>\
域名：baike.ren<br>\
含义：人人百科<br>\
注册商：西部数码<br>\
<br>\
<br>\
1、9<br>\
<br>\
域名：baike.ren<br>\
含义：人人百科<br>\
注册商：西部数码<br>\
<br>\
<br>\
1、a<br>\
<br>\
域名：baike.ren<br>\
含义：人人百科<br>\
注册商：西部数码<br>\
<br>\
<br>\
1、b<br>\
<br>\
域名：baike.ren<br>\
含义：人人百科<br>\
注册商：西部数码<br>\
<br>\
<br>\
1、c<br>\
<br>\
域名：baike.ren<br>\
含义：人人百科<br>\
注册商：西部数码<br>\
<br>\
<br>\
2、1<br>\
<br>\
域名：baike.ren<br>\
含义：人人百科<br>\
注册商：西部数码<br>\
<br>\
<br>\
2、2<br>\
<br>\
域名：baike.ren<br>\
含义：人人百科<br>\
注册商：西部数码<br>\
<br>\
<br>\
2、3<br>\
<br>\
域名：baike.ren<br>\
含义：人人百科<br>\
注册商：西部数码<br>\
<br>\
<br>\
2、4<br>\
<br>\
域名：baike.ren<br>\
含义：人人百科<br>\
注册商：西部数码<br>\
<br>\
<br>\
2、5<br>\
<br>\
域名：baike.ren<br>\
含义：人人百科<br>\
注册商：西部数码<br>\
<br>\
<br>\
2、6<br>\
<br>\
域名：baike.ren<br>\
含义：人人百科<br>\
注册商：西部数码<br>\
<br>\
<br>\
2、7<br>\
<br>\
域名：baike.ren<br>\
含义：人人百科<br>\
注册商：西部数码<br>\
<br>\
<br>\
2、8<br>\
<br>\
域名：baike.ren<br>\
含义：人人百科<br>\
注册商：西部数码<br>\
';
var d = dataStr.split('<br><br><br>');
for (var i = 0; i < d.length; i++) {
	var c = d[i].split('<br><br>');
	data.push({
		img: c[0].replace('、', '') + '.JPG',
		caption: c[0].split('、')[1],
		desc: c[1]
	});
	//console.log(c[0].replace('、', ' ') + '.jpg');
};
