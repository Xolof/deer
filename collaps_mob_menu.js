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
	console.log("open")
}

closeBtn.onclick = function(){
	document.body.style.overflowY="auto";
	console.log("closed")
}

overlay.onclick = function(){
	document.body.style.overflowY="auto";
		console.log("closed")

}