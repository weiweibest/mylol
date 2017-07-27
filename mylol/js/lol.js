//导航
//querySelector()通过类名或者标签名获取标签
//返回的是匹配指定的类名或者标签名第一个标签
var onav = document.querySelector(".nav");//导航栏
var olayer = document.querySelector(".layer");//分层
// 鼠标悬浮在 nav标签上，所触发的事件
//onmouseover 属性在鼠标指针移动到元素上时触发。
onav.onmouseover = function(){
	olayer.style.display ="block";
}
//当鼠标移除在导航栏的外面，将分层隐藏
onav.onmouseout = function(){
	olayer.style.display="none";
}
//当鼠标放在分层上时，设置显示
olayer.onmouseover =function(){
	olayer.style.display ="block";
}
olayer.onmouseout = function(){
	olayer.style.display="none";
}


//--------------------播放视频--------------------------
//找到播放视频的图标 标签
var altsp = document.querySelector(".alt-sp");
var altmp4 = document.getElementById("alt-MP4");
var altcl =document.getElementById("alt-close");
//点击播放按钮的时候，将视频显示出来
altsp.onclick = function(){
	altmp4.style.display = "block"
}
//点击关闭按钮，去隐藏视频
altcl.onclick = function(){
	altmp4.style.display = "none";
}

//-----------轮播图-----------
//找到轮播图的无序列表
var bannerlist = document.querySelector(".bannerimg");
//找到轮播图导航下的每一个列表项
var bannernav = document.getElementsByClassName("bannernav")[0].children;
//打印找到的导航的列表项
console.log(bannernav);
//声明一个变量 ,表示当前轮播图片的索引值
var i = 0;
//声明一个定时器
/*
 * 定时器：
 * 参数一：函数
 * 参数二：时间间隔(毫秒)
 */
var timer = setInterval(move, 3000);
function move(){
	i++;
	console.log(i);
	if(i==5){
		i=0;
	}
	//用js代码调整css位置,设置图片向左滚动
	bannerlist.style.marginLeft = -i*820+'px';
	//运行之后，可以去轮播了，但是没有过渡效果
	//for循环的作用，去掉 now类
	for(var x = 0; x<bannernav.length;x++){
		bannernav[x].children[0].className = "";
	}
	//将轮播图导航栏当前索引的li设置类名为 now
	bannernav[i].children[0].className="now";
}
//接下来处理轮播图导航，鼠标覆盖
for (var y =0;y<bannernav.length;y++) {
	//鼠标放在第几个导航上
	bannernav[y].index = y;
	//给对应的导航添加鼠标覆盖事件函数
	bannernav[y].onmousemove = function(){
		//清除定时器,里面传入定时器的变量
		clearInterval(timer);
		//获取点击的导航的位置
		i = this.index;
		//设置轮播图滚动
		bannerlist.style.marginLeft = -i*820+'px';
		//运行，图片可以滚动
		//设置导航跟着改变
		for(var z = 0; z<bannernav.length;z++){
			bannernav[z].children[0].className = "";
		}
		//将轮播图导航栏当前索引的li设置类名为 now
		this.children[0].className="now";
		//原来的自动轮播不轮播了
	}
	//当鼠标移出导航栏部分，将定时器添加上
	bannernav[y].onmouseout = function(){
		timer = setInterval(move,3000);
	}
}

//吸顶效果 
window.onscroll = function(){
	//滚动 距离页面顶部的值
	var scrolltop = document.body.scrollTop || document.documentElement.scrollTop;
	console.log(scrolltop);
	//大于440的时候，触发吸顶事件
	if(scrolltop>440){
		//相对于整个页面进行定位
		document.getElementById("section-nav").style.position = "fixed";
		document.getElementById("section-nav").style.top = "0";
		document.getElementById("section-nav").style.zIndex="99999";
	}else{
		document.getElementById("section-nav").style.position = "";
	}
}
//新闻列表
var newsarr=[
	[
		["7月14日免费英雄更换公告","07/12"],
		["峡谷之巅7月12日优化及延迟开放说明","07/12"],
		["7月10日铸星龙王技能在线调整公告","07/10"],
		["7月10日比赛服下载地址更新公告","07/10"],
		["网通大区网络波动公告","07/08"],
		["7月7日免费英雄更换公告","07/06"],
		["恕瑞玛大区网络波动公告","07/05"],
		["7月4日部分大区停机更新时间延长公告","07/04"],
		["7月4日凌晨6点版本停机更新公告","07/03"],
		["6月29日部分大区停机维护公告","06/29"]
	],
	[
		["符文角：流星抢先看","07/12"],
		["小虎对阵Rookie 中韩顶尖中单对决","07/12"],
		["新英雄凯隐揭秘站","07/10"],
		["秩序&混沌动画制作花絮","07/10"],
		["全球高校冠军杯将于7月13日开战！","07/08"],
		["7月14日免费英雄更换公告","07/06"],
		["峡谷之巅超级专区正式赛季开启","07/05"],
		["青春正当燃，全球高校冠军杯明日开战！","07/04"],
		["新英雄CG动画：凯隐 影之道","07/03"],
		["新英雄介绍视频：影流之镰 凯隐","06/29"]
	],
	[
		["LICC小组赛首日：海口经济学院豪取三连胜","07/12"],
		["Imp救主剑仙制霸 LGD险胜DAN","07/12"],
		["小虎对阵Rookie 中韩顶尖中单对决","07/10"],
		["LPL现场大搜罗 电竞美女真不少！","07/10"],
		["全球高校冠军杯今日开战！","07/08"],
		["时隔3年无状态与Ggoong宿命之战","07/06"],
		["EDG胡显昭迎来17岁生日 期待新将登场","07/05"],
		["回归夏季赛 EDG与OMG相爱相杀","07/04"],
		["王者集结香港，演绎史上最强回归赛","07/03"],
		["青春正当燃，全球高校冠军杯明日开战！","06/29"]
	],
	[
		["【话题】美测服：海量皮肤疯狂来袭","07/12"],
		["三年后的复仇，Ggoong能否圆梦？","07/12"],
		["空调游戏西瓜，带上妹纸开黑了","07/10"],
		["希维尔和沙皇，你的祖宗回来了！","07/10"],
		["【防坑大指南】7月14日周免攻略","07/08"],
		["夏季赛战火重燃，JDG与IM谁的第二场胜利？","07/06"],
		["先睹为快，欧米伽小队又添新成员","07/05"],
		["小智工作室简陋，王子文即将转行做职业选手","07/04"],
		["UZI微博晒帅照，无状态一个行走的表情包","07/03"],
		["普庆LPL亚洲称雄，时尚杂志惊现电竞名人","06/29"]
	]
]
var newlist = document.getElementsByClassName("news-listsection");
var newlistnav = document.getElementsByClassName("new-navList")[0].children;
var newtitle = document.getElementsByClassName("new-list-section-top");
var arr = ["新闻","公告","赛事","论坛"];
for (var num1 = 0;num1<newsarr.length;num1++) {
	for (var x = 0;x<newsarr[num1].length;x++) {
		var oli = document.createElement("li");
		var ob = document.createElement("b");
		var oa = document.createElement("a");
		var ospan = document.createElement("span");
		ob.innerHTML="新闻";
		oa.innerHTML=newsarr[num1][x][0];
		ospan.innerHTML=newsarr[num1][x][1];
		oli.appendChild(ob);
		oli.appendChild(oa);
		oli.appendChild(ospan);
		newlist[num1].appendChild(oli);
	}
}
for (var w =0;w<newlistnav.length;w++) {
	newlistnav[w].index = w;
	newlistnav[w].onmouseover=function() {
		for (var j=0;j<newlistnav.length;j++) {
			newlistnav[j].className="";
		}
		this.className="nownews";
		for (var x = 0;x<newsarr.length;x++) {
			newlist[x].style.display ="none";
			newtitle[x].style.display ="none";
			for (var num2 = 0;num2<newsarr[0].length;num2++) {
				newlist[this.index].children[num2].children[0].innerHTML = arr[this.index]
			}
		}
		newlist[this.index].style.display ="block";
		newtitle[this.index].style.display ="block";
	}
}


var herolistnav = document.getElementsByClassName("new-navList")[1].children;
console.log(herolistnav);

for (var i = 0; i < herolistnav.length; i++) {
//	console.log("i的取值范围"+i);
	herolistnav[i].onmouseover = function(){
		//先将所有的类都去掉
		for (var j = 0;j < herolistnav.length; j++) {
			herolistnav[j].className="";
		}
		this.className ="nownews";
	}
}

















