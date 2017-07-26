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
















