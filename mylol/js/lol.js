/*
 * 通过类名找到标签
 */
var onav = document.querySelector(".nav");   //导航栏
var olayer = document.querySelector(".layer");   //分层
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

















