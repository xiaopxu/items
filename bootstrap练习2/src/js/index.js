var imgs = document.querySelectorAll(".wrap img")
var wrap = document.querySelector(".wrap")
var lis = document.querySelectorAll(".pagination ul li")
// console.log(lis.length)
var index = 0;

function change () {
    
	if (index>=imgs.length-1) {
		index = 0
	} else {
		index ++;
	}

    for (var i = 0; i < imgs.length; i++) {

    	for (var j = 0; j < imgs.length; j++) {
    		imgs[j].className = "";
    		lis[j].className = "";
    	}
    	imgs[index].className = "wrap-active";
    	lis[index].className = "pag-active";

    	
	}
	// console.log(index)
}

var timer = null;

function timerGo () {
	 timer = setInterval(function () {
	 	 change();
	 } , 1000)
}
timerGo();

function click () {
	for (var i = 0; i < lis.length; i++) {

		lis[i].onclick = function () {
			clearInterval(timer)
			lis[i].index = i;
			for (var j = 0; j < imgs.length; j++) {
				imgs[j].className = "";
				lis[j].className = "";
			}

			var index0 = this.index;

			img[index0].className = "wrap-active";
			lis[index0].className = "pag-active";

			index = index0;
			return index;
			timerGo();
		} 
	}
}
click();







