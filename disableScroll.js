function toggleNavPanel(x) {
			var panel = document.getElementById(x); 
			var maxH ="350px";
			if (panel == document.getElementById("dropdown1")){
				var navarrow = document.getElementById("navarrow1");
			}
			if (panel == document.getElementById("dropdown2")){
				var navarrow = document.getElementById("navarrow2");
			}
			if (panel == document.getElementById("primary-nav")){
				var navarrow = document.getElementById("arrow1");
			}

			if(panel.style.height == maxH) {
				panel.style.height = "0px";
				navarrow.innerHTML = "&#9662;";
				navarrow.style.fontSize ="1.1em";
			} else {
				panel.style.height = maxH;
				navarrow.innerHTML = "&#9652";
				navarrow.style.fontSize ="1.1em";
			}
		}

function smoothScroll(target,duration){
	var target = document.querySelector(target);
	var targetPosition = target.getBoundingClientRect().top;
	var startPosition = window.pageYOffset;
	var distance = targetPosition - startPosition;
	var startTime = null;

	function animation(currentTime){
		if(startTime === null) startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var run = ease(timeElapsed,startPosition,distance,duration);
		window.scroll(0,run);
		if(timeElapsed < duration) requestAnimationFrame(animation);
	}

	function ease(t, b, c, d) {
		t /= d/2;
		if (t < 1) return c/2*t*t + b;
		t--;
		return -c/2 * (t*(t-2) - 1) + b;
	}
requestAnimationFrame(animation);
}

var section1 = document.querySelector(".section1");
var section2 = document.querySelector(".section2");

section1.addEventListener("click",function(){
	smoothScroll(".section2",1500);
});

section2.addEventListener("click",function(){
	smoothScroll(".wrapper",1500);
});
