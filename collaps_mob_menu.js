window.onload = function(){
	menu.style.display="none";
}

var mobileBtn = document.querySelector(".mobile-btn");
var menu = document.querySelector(".mob-menu");
var closeBtn = document.querySelector(".close");
var overlay = document.querySelector(".overlay");

mobileBtn.addEventListener("click", function(){
	menu.className += " open";
	overlay.className += " open";
})

closeBtn.addEventListener("click", function(){
	menu.className = "mob-menu";
	overlay.className = "overlay";
	})

window.addEventListener("click", function(event){
	if(event.target === overlay){
	menu.className = "mob-menu";
	overlay.className = "overlay";
	}
})

mobileBtn.onclick = function(){
	document.body.style.overflowY="hidden";
	document.getElementById("wrapper").style.position="fixed";
	menu.style.display="inline-block";
	console.log("menu open")
}

closeBtn.onclick = function(){
	document.body.style.overflowY="auto";
	document.getElementById("wrapper").style.position="static";
	menu.style.display="none";
	console.log("menu closed")
}

overlay.onclick = function(){
	document.body.style.overflowY="auto";
	document.getElementById("wrapper").style.position="static";
	menu.style.display="none";
		console.log("menu closed")
}