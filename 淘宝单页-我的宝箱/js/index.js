var wrap = document.querySelector(".wrap");
var lis = wrap.getElementsByTagName("li");
var btnR = document.querySelector(".btnR")
var pags = document.querySelectorAll(".paging li")
var imgs = document.querySelectorAll(".pic div img")

//轮播计数器
var index = 0;

// 动静图片地址
var arrPng = ["img/img_9.png","img/img_7.png","img/img_11.png","img/img_9.png","img/img_7.png","img/img_11.png","img/img_9.png","img/img_7.png","img/img_11.png"];
var arrGif = ["img/img_10.gif","img/img_8.gif","img/img_12.gif","img/img_10.gif","img/img_8.gif","img/img_12.gif","img/img_10.gif","img/img_8.gif","img/img_12.gif"];

function moveL() {
	//换页效果（非无缝）
	if (index >= lis.length-1) {
		index = 0;
	} else{
		index ++;
	}
	wrap.style.left =  - index * lis[0].offsetWidth + "px";

	//分页器效果
	for (var i = 0; i < pags.length; i++) {
		for (var i = 0; i < pags.length; i++) {
			pags[i].className = "";
		}
		pags[index].className = "paging-act";
	}
}

function stateChange () {
	 for (var i = 0; i < imgs.length; i++) {
	 	imgs[i].index = i;
	 	imgs[i].onclick = function  () {
		 	//鼠标移入将所有先变成静态
		 	for (var i = 0; i < imgs.length; i++) {
		 		imgs[i].src = arrPng[i]
		 	}
		 	//移入的那个变为动态
		 	this.src = arrGif[this.index];
	 	}
	 	// 鼠标移出触发动态的那个再变成静态
	 	imgs[i].onmouseleave = function () {
	 		this.src = arrPng[this.index]; 
	 	}	
	 }
}

//点击事件
btnR.onclick =  function  () {
	 moveL();
}

//宝箱动静状态转换
stateChange();










