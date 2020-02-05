console.log("Connected")
window.onload = function(){
	var i = 1;
	setInterval(function(){
		document.querySelector("body").classList.add("translate");
		setTimeout(function(){
			document.querySelector("body").style.backgroundImage = "linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)),url(./image/ashu"+i+".jpg)"
			i++;
			document.querySelector("body").classList.remove("translate");
			if(i>5) i =1;
		}, 500);
	}, 2000);
}
function getValue(){
var getValues=document.getElementById("dropdown-menu").value;
console.log(getValues);
}